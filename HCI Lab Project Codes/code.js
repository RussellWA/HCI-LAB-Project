// Home (Brand Hover Function)

function show(num){
    let name = document.getElementById("hovName");
    let desc = document.getElementById("hovDesc");
    let div = document.getElementById("divide");
    name.style.display = "block";
    desc.style.display = "block";
    div.style.display = "none";
    if(num == 1){
        document.getElementById("hovName").innerHTML = "Brand A";
        document.getElementById("hovDesc").innerHTML = "This will be the description of brand A";
    }
    else if(num == 2){
        document.getElementById("hovName").innerHTML = "Brand B";
        document.getElementById("hovDesc").innerHTML = "This will be the description of brand B";
    }
    else if(num == 3){
        document.getElementById("hovName").innerHTML = "Brand C";
        document.getElementById("hovDesc").innerHTML = "This will be the description of brand c";
    }
    else if(num == 4){
        document.getElementById("hovName").innerHTML = "Brand D";
        document.getElementById("hovDesc").innerHTML = "This will be the description of brand D";
    }
}

function hide(){
    let name = document.getElementById("hovName");
    let desc = document.getElementById("hovDesc");
    let div = document.getElementById("divide");
    name.style.display = "none";
    desc.style.display = "none";
    div.style.display = "block";
}

// Gallery (Category Function)

const wood = document.getElementById('wood');
const elec = document.getElementById('elec'); 
const bass = document.getElementById('bass');
const woodSec = document.getElementById('woodGuitar');
const elecSec = document.getElementById('elecGuitar');
const bassSec = document.getElementById('bassGuitar');
const woodFlex = document.getElementById('woodFlex');
const elecFlex = document.getElementById('elecFlex');
const bassFlex = document.getElementById('bassFlex');

let woodCount = 0;
let elecCount = 0;
let bassCount = 0;

// Wood
function woods(flag){
    if(flag == 1){
        wood.style.backgroundColor = '#FF9900';
        wood.style.color = 'white';
        woodCount = 1;
    }
    else{
        wood.style.backgroundColor = 'white';
        wood.style.color = 'black';
        woodCount = 0;
    }
}

function woodDp(flag){
    if(flag == 1){
        woodSec.style.display = "flex";
        woodFlex.style.display = "flex";
    }
    else{
        woodSec.style.display = "none";
        woodFlex.style.display = "none";
    }
}

// Electric
function elecs(flag){
    if(flag == 1){
        elec.style.backgroundColor = '#FF9900';
        elec.style.color = 'white';
        elecCount = 1;
    }
    else{
        elec.style.backgroundColor = 'white';
        elec.style.color = 'black';
        elecCount = 0;      
    }
}

function elecDp(flag){
    if(flag == 1){
        elecSec.style.display = "flex";
        elecFlex.style.display = "flex";
    }
    else{
        elecSec.style.display = "none";
        elecFlex.style.display = "none";
    }
}

// Bass
function basss(flag){
    if(flag == 1){
        bass.style.backgroundColor = '#FF9900';
        bass.style.color = 'white';
        bassCount = 1;
    }
    else{
        bass.style.backgroundColor = 'white';
        bass.style.color = 'black';
        bassCount = 0;   
    }
}

function bassDp(flag){
    if(flag == 1){
        bassSec.style.display = "flex";
        bassFlex.style.display = "flex";
    }
    else{
        bassSec.style.display = "none";
        bassFlex.style.display = "none";
    }
}

wood.addEventListener('click', function onClick(){
    if(woodCount == 0){
        woods(1);
        elecs(0);
        basss(0);
        woodDp(1);
        elecDp(0);
        bassDp(0);
    }
    else{
        woods(0);
        if(elecCount == 0 && bassCount == 0){
            elecDp(1);
            bassDp(1);
        }
        else{
            woodDp(0);
        }
    }
})

elec.addEventListener('click', function onClick(){
    if(elecCount == 0){
        elecs(1);
        woods(0);
        basss(0);
        elecDp(1);
        woodDp(0);
        bassDp(0);
    }
    else{
        elecs(0);
        if(woodCount == 0 && bassCount == 0){
            woodDp(1);
            bassDp(1);
        }
        else{
            secDp(0);
        }
    }
})

bass.addEventListener('click', function onClick(){
    if(bassCount == 0){
        basss(1);
        woods(0);
        elecs(0);
        bassDp(1);
        woodDp(0);
        elecDp(0);
    }
    else{
        basss(0);
        if(woodCount == 0 && elecCount == 0){
            woodDp(1);
            elecDp(1);
        }
        else{
            bassDp(0);
        }
    }
})