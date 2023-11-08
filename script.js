// addition from wk3 assignment
//alert('This is week 3 assignement.');

//var visitor = prompt('What is your name?');

//alert('Hi ' + visitor + ', javascript is used in the header to populate date/time and language. Enjoy!');

//console.log(visitor);

// return a date string for display  m/d/yyyy h:m:s am/pm
function getFormattedDate() {
  var d = new Date();
  return d.toLocaleDateString() + ' ' + d.toLocaleTimeString();
}

// return the browser's default language 
function getLang() {
  return navigator.language;
}

function GetParameterValues(param) {
  var url = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
  for (var i = 0; i < url.length; i++) {
    var urlparam = url[i].split('=');
    if (urlparam[0] == param) {
      return urlparam[1];
    }
  }
}