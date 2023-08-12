const button = document.getElementById('colorButton');
const heading = document.getElementById('myHeading');
const hideBtn =document.getElementById('hide-test');

hideBtn.addEventListener('click',() =>{
    heading.style.display ='none'
})

button.addEventListener('click', () => {
    heading.style.color = 'red';
});