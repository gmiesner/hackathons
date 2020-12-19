const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
var userID = '9237WS'//token and userid are casey's personal (limited data). need to dynamically get it from the user's browser after they get sent to the redirect url.
var token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMkJZSkoiLCJzdWIiOiI5MjM3V1MiLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJyc29jIHJzZXQgcmFjdCBybG9jIHJ3ZWkgcmhyIHJudXQgcnBybyByc2xlIiwiZXhwIjoxNjA4OTQ1OTM1LCJpYXQiOjE2MDgzNDQ4MjB9.A0QHEmPeyyG5ppdHj5UYu-147VJ_NSUxdmFgPTAQ37Y';
const url = `https://api.fitbit.com/1/user/${userID}/profile.json`;
var startdate = '2020-12-11';
var enddate = '2020-12-18';
const sleepUrl = `https://api.fitbit.com/1.2/user/${userID}/sleep/date/${startdate}/${enddate}.json`;
const heartUrl = `https://api.fitbit.com/1/user/${userID}/activities/heart/date/${startdate}/${enddate}.json`;
//TODO: learn async so I can store sleepdata and heartdata etc as a variable to create User obj

const auth = `Bearer ${token}`;

//async GET req, healthUrl is URL to specific api call (sleep data json, heart data json, etc.)
function doCall(healthUrl){
  var response, xhr;
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function (){
    if(xhr.readyState === 4 && xhr.status === 200){
      console.log(xhr.responseText);
      //TODO: save xhr.responseText as var
    }
  }
  xhr.open("GET", healthUrl);
  xhr.setRequestHeader("Authorization", auth);
  xhr.send();
}
doCall(sleepUrl);
doCall(heartUrl);
//TODO: maybe export doCall