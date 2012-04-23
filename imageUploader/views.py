
from django.views.decorators.csrf import csrf_exempt, csrf_protect

from imageUploader.models import Post 
from django.template import RequestContext, loader
from django.http import HttpResponse, HttpResponseRedirect

import hashlib
import time, os

from PIL import Image

UPLOAD_DIR = './static/upload/'

def index(request):
    imageList = Post.objects.all()
    t = loader.get_template('imageUploader/index.html')
    c = RequestContext(request, {'imageList':imageList})

    return HttpResponse(t.render(c))

def upload(request):
    thumbPath = saveImage(request.FILES['originFile'], request.POST['title'])
    title = request.POST['title']

    t = loader.get_template('imageUploader/upload.html')
    c = RequestContext(request, {'thumbPath':thumbPath, 'title':title})

    return HttpResponse(t.render(c))
    
def uploadSuccess(request):
    t = loader.get_template('imageUploader/uploadSuccess.html')
    c = RequestContext(request, {'thumbPath':'asdf'})

    return HttpResponse(t.render(c))


def saveImage(file, title):
    filename = uniqueName(file, title)
    fd = open(UPLOAD_DIR + filename, 'wb')
    for chunk in file.chunks():
        fd.write(chunk)

    fd.close()

    resizeAndCut(filename)
    os.remove(UPLOAD_DIR + filename)

    return 'c_' + filename

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

    size = 114, 114
    newim = im.crop(box)
    newim.thumbnail(size, Image.ANTIALIAS)
    newim.save(UPLOAD_DIR + 'c_' + imageFile, "PNG")


def uniqueName(file, title):
    filename = file._get_name()
    name, ext = os.path.splitext(filename)
    h = hashlib.new('sha1')
    h.update(filename.encode('utf8'))
    h.update(str(time.time()))

    return h.hexdigest()[0:6] + ext.lower()
    
