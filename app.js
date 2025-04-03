const btn = document.getElementById('btn');
const loader = document.getElementById('loader');
const num = document.getElementById('num');
let value = num.value;

btn.addEventListener('click', function(){
    let value = num.value;
    if(value === ''){
        alert('Enter a number');
    }else{
        loader.classList.add('loader-full');
        setTimeout(() => {
            alert(`You are thinking of number ${value}`);
        }, 10000);
    }
});
