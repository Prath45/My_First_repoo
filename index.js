let homeScoreh = document.getElementById("home-el");
let count =0;
function plus1h(){
    console.log(homeScoreh);
    count += 1;
    homeScoreh.textContent = count;
    
}
function plus2h(){
    console.log(homeScoreh);
    count += 2;
    homeScoreh.textContent = count;
    
}
function plus3h(){
    console.log(homeScoreh);
    count += 3;
    homeScoreh.textContent = count;
    
}
function reseth(){
    count = 0;
    homeScoreh.textContent = count;
}
// for GUEST score board
let homeScoreg = document.getElementById("guest-el");
let countg = 0;
function plus1g(){
    console.log(homeScoreg);
    countg += 1;
    homeScoreg.textContent = countg;
    
}
function plus2g(){
    console.log(homeScoreg);
    countg += 2;
    homeScoreg.textContent = countg;
    
}
function plus3g(){
    console.log(homeScoreg);
    countg += 3;
    homeScoreg.textContent = countg;
    
}
function resetg(){
    countg = 0;
    homeScoreg.textContent = countg;
}