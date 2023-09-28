//parte da fetch (API)
document.addEventListener('click', async (e) => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if (tag === 'a') {
        e.preventDefault();
        await carregaPagina(el);
    }
});

async function carregaPagina(el) {
    try {
        const href = el.getAttribute('href');
        const response = await fetch(href);

        if (response.status !== 200) {
            throw new Error('Erro na requisição: ' + response.status);
        }

        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('text/html')) {
            throw new Error('A resposta não é uma página HTML válida.');
        }

        const html = await response.text();
        carregaResultado(html);
    } catch (e) {
        console.error('Erro ao carregar a página:', e);
    }
}

function carregaResultado(response) {
    const resultado = document.querySelector('body');
    resultado.innerHTML = response;
}



/*slide principal*/

let list = document.querySelector('.list');
let items = document.querySelectorAll('.item');
let dots = document.querySelectorAll('.dots li');
let prev = document.getElementById('prev');
let next = document.getElementById('next');

let active = 0;
let lengthItems = items.length - 1;

next.onclick = function(){
    if(active + 1 > lengthItems){
        active = 0;
    }else{
        active = active + 1;
    }
    reloadSlider();
}

prev.onclick = function(){
    if(active - 1 < 0){
        active = lengthItems;
    }else{
        active = active - 1;
    }
    reloadSlider();
}

let refreshSlider = setInterval(()=> {next.click()}, 5000);

function reloadSlider(){
    let checkLeft = items[active].offsetLeft;
    list.style.left = -checkLeft + 'px';

    let lastActiveDot = document.querySelector('.slider .dots li.active');
    lastActiveDot.classList.remove('active');
    dots[active].classList.add('active');
    clearInterval(refreshSlider);
    refreshSlider = setInterval(()=> {next.click()}, 5000);
}
dots.forEach((li, key) =>{
    li.addEventListener('click', function(){
        active = key;
        reloadSlider();
    })
})   



//lista de games
function toggleMenu(toShow,toShow2,toHidden){
    toShow.style.display = 'none';
    toShow2.style.display = 'none';
    toHidden.style.display = 'grid';
}

function clickPlay1(){
    toggleMenu(play2,play3,play1)
}   

function clickPlay2(){
    toggleMenu(play1,play3,play2)
}

function clickPlay3(){
    toggleMenu(play1,play2,play3)
}




//Social
function clickMenu(element){
    if(element.style.display === 'none'){
        element.style.display = 'grid'
    }else{
        element.style.display ='none'
    }  
}

function clickOnline(){
    clickMenu(online)
}

function clickOffiline(){
    clickMenu(offline)
}

function clickGroup(){
    clickMenu(group)
}





//exemplo
/*function clickSocial(){
    if(social.style.height >= "57%" || social.style.height == "100%"){
        social.style.height = "18%";
    }else{
        social.style.height = "57%"
    }
}*/
