# Create your views here.

from imageUploader.models import Post 

from django.template import RequestContext, loader
from django.http import HttpResponse, HttpResponseRedirect
import time, os

def index(request, pk):
    
    post = Post.objects.get(_id=pk)

    t = loader.get_template('mobilepage/index.html')
    c = RequestContext(request, {'post':post, 'count':"1sh"})


    return HttpResponse(t.render(c))
