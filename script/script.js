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
function toggleMenu(toHidden,toHidde2,toShow){
    toHidden.style.display = 'none';
    toHidde2.style.display = 'none';
    toShow.style.display = 'grid';
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



/*lita do store*/
function toggleGames(toShow,toHidden,toHidden2,toHidden3,toHidden4,toHidden5){
    toShow.style.display = 'flex';
    toHidden.style.display = 'none';
    toHidden2.style.display = 'none';
    toHidden3.style.display = 'none';
    toHidden4.style.display = 'none';
    toHidden5.style.display = 'none';
}

function clickTopGames(){
    toggleGames(topGames,topNews,topPromotion,topFree1,topFree2,pag1)
}

function clickTopNews(){
    toggleGames(topNews,topGames,topPromotion,topFree1,topFree2,pag1)
}

function clickTopPromotion(){
    toggleGames(topPromotion,topGames,topNews,topFree1,topFree2,pag1)
}


/* lista games free*/
function toggleGames2(toShow,toShow2,toHidden,toHidden2,toHidden3,toHidden4){
    toShow.style.display = 'flex';
    toShow2.style.display = 'flex';
    toHidden.style.display = 'none';
    toHidden2.style.display = 'none';
    toHidden3.style.display = 'none';
    toHidden4.style.display = 'none';
}

function clickTopFree(){
    toggleGames2(topFree1,pag1,topGames,topNews,topPromotion,topFree2)
}



/* pag*/
function toggleGames3(toShow,toHidden){
    toShow.style.display = 'flex';
    toHidden.style.display = 'none';  
}

function clicktopFree1(){
    toggleGames3(topFree1,topFree2)
}

function clicktopFree2(){
    toggleGames3(topFree2,topFree1)
}



