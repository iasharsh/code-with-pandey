let con = document.getElementsByClassName('cont');

for (let i of con){
    i.addEventListener('dblclick',function(){
        let love = i.getElementsByClassName('dummy')[0];

        love.style.transform = 'translate(-50% , -50%) scale(1)';
        love.style.opacity =  0.8;
    
        setTimeout(function(){
            love.style.opacity = 0;
        },1000)

        setTimeout(function(){
            love.style.transform = 'translate(-50% , -50%) scale(0)';
        },2000)
    })
}



