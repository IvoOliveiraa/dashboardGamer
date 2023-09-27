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
    if(element.style.display === 'grid'){
        element.style.display = 'none'
    }else{
        element.style.display ='grid'
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
