# Create your views here.

from django.views.decorators.csrf import csrf_exempt, csrf_protect

from imageUploader.models import Post 
from django.template import RequestContext, loader
from django.http import HttpResponse, HttpResponseRedirect

import hashlib
import time


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
    fd = open('./static/%s' % (filename), 'wb')

    for chunk in file.chunks():
        fd.write(chunk)

    fd.close()

    return filename

def uniqueName(file, title):
    filename = file._get_name()
    h = hashlib.new('sha1')
    h.update(unicode(file._get_name()))
    h.update(str(time.time()))
    return h.hexdigest()[0:6]
    
