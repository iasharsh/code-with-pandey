var con = document.querySelectorAll('.cont');
var love = document.querySelectorAll('.dummy');
console.log(con);


for (let i in con){
    x = con[i];
    console.log(x);
    x.addEventListener('dblclick',function(){
        love[i].style.transform = 'translate(-50% , -50%) scale(1)';
        love[i].style.opacity =  0.8;
    
        setTimeout(function(){
            love[i].style.opacity = 0;
        },1000)
    
        setTimeout(function(){
            love[i].style.transform = 'translate(-50% , -50%) scale(0)';
        },2000)
    })
}
 











