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