var arr = [
    { dp: 'harsh.jpg', story: 'harsh1.jpg' },
    { dp: 'divya.PNG', story: 'divya1.jpg' },
    { dp: 'adi.jpg', story: 'adi.jpg' },
    { dp: 'dev.PNG', story: 'dev2.PNG' },
    { dp: 'may.PNG', story: 'may.PNG' }
]

var storiyan = document.querySelector('#storiyan');
var clutter = '';
arr.forEach(function (elem, index) {
    clutter += `<div class="story">
    <img id="${index}" src="${elem.dp}" alt="">
</div>`
})

storiyan.innerHTML = clutter;
var fullscreen = document.querySelector('#full-screen');
var h1 = document.querySelector('#h1');

storiyan.addEventListener('click', function (dets) {
    fullscreen.style.display = 'block';
    fullscreen.style.backgroundImage = `url(${arr[dets.target.id].story})`;
    h1.style.display = 'none';

    setTimeout(function () {
        fullscreen.style.display = 'none';
        h1.style.display = 'block';
    }, 3000)
})

fullscreen.addEventListener('click', function () {
    fullscreen.style.display = 'none';
    h1.style.display = 'block';
})
