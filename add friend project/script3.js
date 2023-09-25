var main = document.querySelector('#main');
var crsr = document.querySelector('.cursor');

main.addEventListener('mousemove', function(dets){
    // console.log(dets); dets.x and dets.y shows details of mouse cursor coordinated when moved
    crsr.style.display = 'block';
    crsr.style.left = dets.x+'px';
    crsr.style.top = dets.y+'px';
})