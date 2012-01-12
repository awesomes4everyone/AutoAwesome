var x = document.getElementById('autoawesome');
var y = x.parentNode
y.removeChild(x);
y.appendChild(document.createElement('script')).innerHTML = "turntable.removeEventListener('trackstart', awesomeHandler);";
//todo - add a line to delete the removeEventListener script