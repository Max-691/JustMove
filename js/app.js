const start = document.getElementById('default-div');
const end = document.getElementById('moved-div');
const divElements = document.querySelectorAll('.elements');

for (const div of divElements) {
    div.addEventListener('click', ()=>{
        if (div.parentNode == start) {
            end.appendChild(div);
        }
        else{
            start.appendChild(div)
        } 
    })
}