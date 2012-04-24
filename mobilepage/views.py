# Create your views here.

from imageUploader.models import Post 

from django.template import RequestContext, loader
from django.http import HttpResponse, HttpResponseRedirect
import time, os

def index(request, pk):
    
    post = Post.objects.get(_id=pk)
    
    #REFERER로 체크하면 안된다.
    #phonecall = 'false' if request.META.has_key('HTTP_REFERER') else 'true'

    phonecall = 'false'

    t = loader.get_template('mobilepage/index.html')
    c = RequestContext(request, {'post':post, 'phonecall':phonecall})


    return HttpResponse(t.render(c))
