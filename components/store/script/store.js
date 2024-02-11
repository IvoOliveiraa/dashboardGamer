/*começo - lita do store*/
function toggleGames(toShow,toHidden,toHidden2,toHidden3,toHidden5,toHidden6,toHidden7,toHidden8,toHidden9){
    toShow.style.display = 'grid';
    toHidden.style.display = 'none';
    toHidden2.style.display = 'none';
    toHidden3.style.display = 'none';
    toHidden5.style.display = 'none';
    toHidden6.style.display = 'none';
    toHidden7.style.display = 'none';
    toHidden8.style.display = 'none';
    toHidden9.style.display = 'none';
}

function clickTopGames(){
    toggleGames(topGames,topNews,topPromotion,topFree1,topFree2,pagAll,pagAll2,topAll,topList)
}

function clickTopNews(){
    toggleGames(topNews,topGames,topPromotion,topFree1,topFree2,pagAll,pagAll2,topAll,topList)
}

function clickTopPromotion(){
    toggleGames(topPromotion,topGames,topNews,topFree1,topFree2,pagAll,pagAll2,topAll,topList)
}
/*fim - lita do store*/







/* começo - lista games free | pag-All*/
function toggleGames2(toShow,toShow2,toHidden,toHidden2,toHidden3,toHidden4,toHidden5,toHidden6,toHidden7,toHidden8){
    toShow.style.display = 'grid';
    toShow2.style.display = 'grid';
    toHidden.style.display = 'none';
    toHidden2.style.display = 'none';
    toHidden3.style.display = 'none';
    toHidden4.style.display = 'none';
    toHidden5.style.display = 'none';
    toHidden6.style.display = 'none';
    toHidden7.style.display = 'none';
    toHidden8.style.display = 'none';
}

function clickTopFree(){
    toggleGames2(topFree1,topFree2,topGames,topNews,topPromotion,pagAll,pagAll2,topAll,topList)
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
function toggleGamesAll(toShow,toShow2,toShow3,toShow4,toHidden,toHidden2,toHidden3,toHidden4,toHidden5){
    toShow.style.display = 'grid';
    toShow2.style.display = 'grid';
    toShow3.style.display = 'flex';
    toShow4.style.display = 'flex';
    toHidden.style.display = 'none';
    toHidden2.style.display = 'none';
    toHidden3.style.display = 'none';
    toHidden4.style.display = 'none';
    toHidden5.style.display = 'none';
}

function clickAllGames(){
    toggleGamesAll(topGames,topPromotion,pagAll,pagAll2,topNews,topFree1,topFree2,topAll,topList)
}
/* fim - lista games all*/