var istatus = document.querySelector('h5');
var btn = document.querySelector('#add');
var profile = document.querySelector('#profile')
var check = 0;

btn.addEventListener('click',function(){
    if(check == 0){
        istatus.innerHTML = 'Friends';
        istatus.style.color = 'darkgreen';
        btn.innerHTML = 'Remove Friend';
        profile.style.display = 'block';
        check = 1;
    }
    else{
        istatus.innerHTML = 'Stranger';
        istatus.style.color = 'red';
        btn.innerHTML = 'Add Friend';
        profile.style.display = 'none'
        check = 0;
    }
})

