# serializers convert complex data to native datatypes

from rest_framework import serializers
from .models import *

class ReactSerializer(serializers.ModelSerializer):
    class Meta:
        # model = React
        fields = '__all__'