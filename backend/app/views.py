from django.shortcuts import render
from django.http import JsonResponse
from django.conf import settings # To access settings, including client ID

def login_page(request):
   
    google_client_id = settings.SOCIALACCOUNT_PROVIDERS['google']['APP']['client_id']

    context = {
        'google_client_id': google_client_id,
    }
    return JsonResponse(context)
