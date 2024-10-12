let menu_button = document.querySelectorAll('.toggle-button');
console.log(menu_button);

menu_button.forEach(element => {
    console.log(element);
    element.addEventListener('click',()=>{
        document.querySelector('#menu').classList.toggle('hidden');
    })
});
