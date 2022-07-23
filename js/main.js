const horas = document.querySelector('.horas');
const minutos = document.querySelector('.minutos');
const segundos = document.querySelector('.segundos');

const relogio = setInterval(function time() {
    let dateToday = new Date();

    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let seg = dateToday.getSeconds();

    periodoDoDia(hr);

    if(hr < 10) hr = '0'+hr;
    if(min < 10) min = '0'+min;
    if(seg < 10) seg = '0'+seg;

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = seg;

    
});

function periodoDoDia(hora) {
    if(hora >= 6 && hora < 12){
        document.querySelector('.background-image').style.backgroundImage = "url('js/img/morning.gif')";
        document.querySelector('.body').style.background = "linear-gradient(120deg, #304878, #c0d8d8)";
    } else if(hora >= 12 && hora < 16) {
        document.querySelector('.background-image').style.backgroundImage = "url('js/img/day.gif')";
        document.querySelector('.body').style.background = "linear-gradient(120deg, #ffffff, #E8AA42)";
    } else if(hora >= 16 && hora <= 17){
        document.querySelector('.background-image').style.backgroundImage = "url('js/img/sunset.gif')";
        document.querySelector('.body').style.background = "linear-gradient(120deg, #ffe53bd8, #ff2525da)";
    } else {
        document.querySelector('.background-image').style.backgroundImage = "url('js/img/night.gif')";
        document.querySelector('.body').style.background = "linear-gradient(120deg, #000000, #304878)";

    } 
}

//https://gifer.com/en/fxyo - morning image
//https://tenor.com/view/trees-windy-cat-relax-nature-gif-15821326 - day image
//https://br.pinterest.com/pin/74802043802214365/ - sunset image
//https://br.pinterest.com/pin/633459503841300051/ - night image
