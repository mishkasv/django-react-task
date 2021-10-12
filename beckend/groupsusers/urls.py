from rest_framework import routers
from groupsusers.api_views import SimpleUserViewSet,GroupViewSet
from django.urls import path,include

router=routers.SimpleRouter()
router.register(r'users',SimpleUserViewSet)
router.register(r'groups',GroupViewSet)

urlpatterns = router.urls