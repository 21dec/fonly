from django.conf.urls.defaults import patterns, include, url

# Uncomment the next two lines to enable the admin:
# from django.contrib import admin
# admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'pholy.views.home', name='home'),

    # Uncomment the admin/doc line below to enable admin documentation:
    # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    # url(r'^admin/', include(admin.site.urls)),
    url(r'^imageUploader/index$', 'imageUploader.views.index'),
    url(r'^r', 'imageUploader.views.index'),
    url(r'^imageUploader/upload$', 'imageUploader.views.upload'),
    url(r'^p/(?P<pk>[a-zA-Z0-9]{6})/+$', 'mobilepage.views.index'),
)
