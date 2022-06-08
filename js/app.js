const start = document.getElementById('default-div');
const end = document.getElementById('moved-div');
const divElements = document.querySelectorAll('.elements');

for (const div of divElements) {
    div.addEventListener('click', ()=>{
        div.classList.add('translate')

        if (div.parentNode == start) {
            
            end.appendChild(div);
        }
        else{
            start.appendChild(div)
        } 
    })
}

const extern = document.querySelector('.extern');
extern.addEventListener('click', ()=>{
    if (extern.style.backgroundColor="red") {
        extern.style.backgroundColor="blue";
    }
    else if(extern.style.backgroundColor="blue"){
        extern.style.backgroundColor="red";
    }
}