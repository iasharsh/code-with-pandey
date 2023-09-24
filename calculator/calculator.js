field = document.getElementById('input-field');

string = "()CD789/456*123-0.=+";
for (let i of string){
    btn = document.getElementById(i);

    btn.addEventListener('click', function(){
        console.log(i)
                
        if ('()789/456*123-0.+'.includes(i) == true){
            if ((["0" ,"ERROR"].includes(field.innerText) == true)){
                field.innerText = i
             }
            else{
                field.innerText += i
            }
        }

      
        if (i === '='){
            try {
              const result = eval(field.innerText);
              field.innerText = result;
            } 
            catch (error) {
              field.innerText = 'ERROR';
            }
          }

        if (i == 'C'){
            field.innerText = 0;
        }

        if (i == 'D'){
            field.innerText = (field.innerText).slice(0,(field.innerText).length-1); 
        }
        if (field.innerText.length == 0){
            field.innerText = 0;
        }        
    })
}