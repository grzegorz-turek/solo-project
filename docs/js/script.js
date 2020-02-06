var btnContainer = document.getElementById('menuLinkPrmanentHover');
var btns = btnContainer.getElementsByClassName('menu--link--textdecoration-none');
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', function() {
    var current = document.getElementsByClassName('active');
    current[0].className = current[0].className.replace(' active', '');
    this.className += ' active';
  });
}