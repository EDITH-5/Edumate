from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader

def login(request):
  template = loader.get_template('login.html')
  return HttpResponse(template.render())

def index(request):
  template = loader.get_template('index.html')
  return HttpResponse(template.render())

def attendence(request):
  template = loader.get_template('attendancereport.html')
  return HttpResponse(template.render())

def assignment(request):
  template = loader.get_template('assignment.html')
  return HttpResponse(template.render())

def chat(request):
  template = loader.get_template('chat.html')
  return HttpResponse(template.render())

def studentprofiles(request):
  template = loader.get_template('studentprofile.html')
  return HttpResponse(template.render())
