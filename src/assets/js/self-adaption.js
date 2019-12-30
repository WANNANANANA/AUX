function setFontSize() {
    document.documentElement.style.fontSize = document.documentElement.clientWidth / 7.5 + 'px';
}
window.addEventListener('resize', function () {
    setFontSize();
}, false)
setFontSize()