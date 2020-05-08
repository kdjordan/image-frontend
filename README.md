## Front End for Udacity Image Filter Project

Simple HTML Interface that allows users to paste an image URL or upload a file from their desktop to be run through the Image filter.

#### How it works

Paste URL Function
 - Vanilla JS grabs the value of the input box upon enter being clicked
  - Creates a url string with the Image Filter EB endpoint 
  - calls window.open to fire the request 
  
Upload Function
http://image-filter-front.s3-website.us-east-2.amazonaws.com/