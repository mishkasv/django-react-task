from rest_framework.viewsets import ModelViewSet
from groupsusers.serializers import SimpleUserSerializer,GroupSerializer,SimpleUserGETSerializer
from groupsusers.models import SimpleUser,Group


class SimpleUserViewSet(ModelViewSet):
    queryset = SimpleUser.objects.all()
    serializer_class = SimpleUserSerializer

    # def update(self, request, *args, **kwargs):
    #     print(request.data)
    #     partial = kwargs.pop('partial', False)
    #     instance = self.get_object()
    #     serializer = self.get_serializer(instance, data=request.data, partial=partial)
    #     serializer.is_valid(raise_exception=True)
    #     self.perform_update(serializer)
    #
    #     if getattr(instance, '_prefetched_objects_cache', None):
    #         # If 'prefetch_related' has been applied to a queryset, we need to
    #         # forcibly invalidate the prefetch cache on the instance.
    #         instance._prefetched_objects_cache = {}
    #
    #     return Response(serializer.data)

    def get_serializer(self, *args, **kwargs):
        """
        Return the serializer instance that should be used for validating and
        deserializing input, and for serializing output.
        """
        if self.action == 'list' or self.action == 'retrieve':
            serializer_class = SimpleUserGETSerializer
        else:
            serializer_class = self.get_serializer_class()
        kwargs.setdefault('context', self.get_serializer_context())
        return serializer_class(*args, **kwargs)



class GroupViewSet(ModelViewSet):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
