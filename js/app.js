const defaultDiv = document.getElementById('default-div');
const movedDiv = document.getElementById('moved-div');
const divElements = document.querySelectorAll('.elements');

for (let i = 0; i < divElements.length; i++) {
    divElements[i].addEventListener('click', ()=>{
        if (defaultDiv.children === divElements[i]) {
            movedDiv.appendChild(divElements[i]);
        }
        else{
            defaultDiv.appendChild(divElements[i])
        }
       
    })

}