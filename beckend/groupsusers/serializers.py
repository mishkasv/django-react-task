from rest_framework import serializers
from rest_framework.settings import settings

from groupsusers.models import SimpleUser,Group


class SimpleUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = SimpleUser
        fields = ['username','groups']

class SimpleUserGETSerializer(serializers.ModelSerializer):
    class Meta:
        model = SimpleUser
        fields = ['id','username','created','groups']
        depth=1
    created = serializers.DateTimeField(format=settings.DATE_FORMAT)

class GroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Group
        fields = ['id','name','description']
