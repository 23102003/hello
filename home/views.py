from django.http.response import HttpResponse
from django.shortcuts import render

# Create your views here.
def index(request):
    context ={
        'variable1':"this is sent",
        'variable2':"my name is gurpreet"
    }
    return render(request,'index.html')
def about(request):
    return render(request,'aboutus.html')
    #return HttpResponse("this is aboutpage")
def services(request):
    return render(request,'sellingarts.html')
    #return HttpResponse("this is servicepage")
def contact(request):
    return render(request,'contactus.html')
    #return HttpResponse("this is contactpage")   
 