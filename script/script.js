//começo - parte da fetch (API)
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
//começo - parte da fetch (API)



/*começo - slide principal*/
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
/*fim - slide principal*/  



/*começo - lista games*/
function toggleMenu(toHidden,toHidde2,toHidde3,toShow){
    toHidden.style.display = 'none';
    toHidde2.style.display = 'none';
    toHidde3.style.display = 'none';
    toShow.style.display = 'grid';
}

function clickPlay1(){
    toggleMenu(play2,play3,play4,play1)
}   

function clickPlay2(){
    toggleMenu(play1,play3,play4,play2)
}

function clickPlay3(){
    toggleMenu(play1,play2,play4,play3)
}

function clickPlay4(){
    toggleMenu(play1,play2,play3,play4)
}
/*fim - lista games*/




/*começo - social*/
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
/*fim - social*/



/*começo - lita do store*/
function toggleGames(toShow,toHidden,toHidden2,toHidden3,toHidden5,toHidden6,toHidden7,toHidden8){
    toShow.style.display = 'flex';
    toHidden.style.display = 'none';
    toHidden2.style.display = 'none';
    toHidden3.style.display = 'none';
    toHidden5.style.display = 'none';
    toHidden6.style.display = 'none';
    toHidden7.style.display = 'none';
    toHidden8.style.display = 'none';
}

function clickTopGames(){
    toggleGames(topGames,topNews,topPromotion,topFree1,topFree2,pagAll,topAll,topList)
}

function clickTopNews(){
    toggleGames(topNews,topGames,topPromotion,topFree1,topFree2,pagAll,topAll,topList)
}

function clickTopPromotion(){
    toggleGames(topPromotion,topGames,topNews,topFree1,topFree2,pagAll,topAll,topList)
}
/*fim - lita do store*/






/* começo - lista games free | pag-All*/
function toggleGames2(toShow,toShow2,toHidden,toHidden2,toHidden3,toHidden4,toHidden5,toHidden6,toHidden7){
    toShow.style.display = 'flex';
    toShow2.style.display = 'flex';
    toHidden.style.display = 'none';
    toHidden2.style.display = 'none';
    toHidden3.style.display = 'none';
    toHidden4.style.display = 'none';
    toHidden5.style.display = 'none';
    toHidden6.style.display = 'none';
    toHidden7.style.display = 'none';
}

function clickTopFree(){
    toggleGames2(topFree1,topFree2,topGames,topNews,topPromotion,pagAll,topAll,topList)
}

//pag-All-1
function clickAll(){
    toggleGames2(topGames,topPromotion,topNews,topFree1,topFree2,topAll,topList)
}

//pag-All-2
function clickAll2(){
    toggleGames2(topNews,topFree2,topFree1,topAll,topList,topGames,topPromotion)
}

//pag-All-3
function clickAll3(){
    toggleGames2(topFree1,topAll,topList,topGames,topNews,topPromotion,topFree2)
}

//pag-All-4
function toggleGamesAll3(toShow,toHidden,toHidden2,toHidden3,toHidden4,toHidden5,toHidden6){
    toShow.style.display = 'grid';
    toHidden.style.display = 'none';
    toHidden2.style.display = 'none';
    toHidden3.style.display = 'none';
    toHidden4.style.display = 'none';
    toHidden5.style.display = 'none';
    toHidden6.style.display = 'none';
}

function clickAll4(){
    toggleGamesAll3(topList,topAll,topFree2,topGames,topNews,topPromotion,topFree1)
}
/* fim - lista games free | pag-All*/





/* começo - lista games all*/
function toggleGamesAll(toShow,toShow2,toShow3,toHidden,toHidden2,toHidden3,toHidden4,toHidden5){
    toShow.style.display = 'flex';
    toShow2.style.display = 'flex';
    toShow3.style.display = 'flex';
    toHidden.style.display = 'none';
    toHidden2.style.display = 'none';
    toHidden3.style.display = 'none';
    toHidden4.style.display = 'none';
    toHidden5.style.display = 'none';
}

function clickAllGames(){
    toggleGamesAll(topGames,topPromotion,pagAll,topNews,topFree1,topFree2,topAll,topList)
}
