
from django.views.decorators.csrf import csrf_exempt, csrf_protect

from imageUploader.models import Post 
from django.template import RequestContext, loader
from django.http import HttpResponse, HttpResponseRedirect

import hashlib
import time, os

from PIL import Image

UPLOAD_DIR = './static/upload/'

def index(request):
    t = loader.get_template('imageUploader/index.html')
    c = RequestContext(request, {})

    return HttpResponse(t.render(c))

def upload(request):
    _filename = saveImage(request.FILES['originFile'], request.POST['title'])
    _key = _filename.split('.')[0]
    _title = request.POST['title']
    _phone = request.POST['phone']

    Post.objects.create(
        _id = _key,
        title = _title,
        filename = _filename,
        phone = _phone 
    )

    t = loader.get_template('imageUploader/upload.html')
    c = RequestContext(request, {'filename':'114_'+_filename, 'title':_title, 'id':_key})

    return HttpResponse(t.render(c))
    
def uploadSuccess(request):
    t = loader.get_template('imageUploader/uploadSuccess.html')
    c = RequestContext(request, {'thumbUrl':'asdf'})

    return HttpResponse(t.render(c))


def saveImage(file, title):
    filename = uniqueName(file, title)
    fd = open(UPLOAD_DIR + filename, 'wb')
    for chunk in file.chunks():
        fd.write(chunk)

    fd.close()

    resizeAndCut(filename)
    os.remove(UPLOAD_DIR + filename)

    return filename

def resizeAndCut(imageFile):
    im = Image.open(UPLOAD_DIR + imageFile)
    width, height = im.size

    if width == height:
        left, upper, right, lower = 0, 0, width, height
    elif width > height:
        diff = (width - height) / 2
        left, upper, right, lower = diff, 0, width-diff, height
    else:
        diff = (height-width) / 2
        left, upper, right, lower = 0, diff, width, height-diff


    box = left, upper, right, lower

    for size in ((114, 114),(80, 80)):
        newim = im.crop(box)
        newim.thumbnail(size, Image.ANTIALIAS)
        newim.save(UPLOAD_DIR + str(size[0]) + '_' + imageFile, "PNG")

def uniqueName(file, title):
    filename = file._get_name()
    name, ext = os.path.splitext(filename)[0], '.png'
    h = hashlib.new('sha1')
    h.update(filename.encode('utf8'))
    h.update(str(time.time()))

    return h.hexdigest()[0:6] + ext.lower()
    
