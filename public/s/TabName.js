  window.onload = function() {
    var savedTabName = localStorage.getItem('tabName');
    var savedTabImage = localStorage.getItem('tabImage');
    if (savedTabName) {
      document.title = savedTabName;
    }
    if (savedTabImage) {
      var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
      link.type = 'image/x-icon';
      link.rel = 'shortcut icon';
      link.href = savedTabImage;
      document.getElementsByTagName('head')[0].appendChild(link);
    }
  }