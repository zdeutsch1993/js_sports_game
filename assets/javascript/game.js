{
let shoot = Math.random();      
let shots = Math.floor(Math.random())+1;
const teamone_numshots = document.querySelector("#teamone_numshots");
const teamone_numgoals = document.querySelector("#teamone_numgoals");
const teamone_shoot_button = document.querySelector("#teamone_shoot_button");
teamone_shoot_button.addEventListener("click", function () {
    teamone_numshots.innerText = shots;
    shots = shots + 1
    console.log(shoot);
    if (shoot > 0.5) {
        alert("success");
    }
    else {
        alert("fail");
    }
})
}
{
let shoot1 = Math.random();      
let shots1 = Math.floor(Math.random())+1;
const teamtwo_numshots = document.querySelector("#teamtwo_numshots");
const teamtwo_numgoals = document.querySelector("#teamtwo_numgoals");
const teamtwo_shoot_button = document.querySelector("#teamtwo_shoot_button");
teamtwo_shoot_button.addEventListener("click", function () {
    console.log(shoot1);
   teamtwo_numshots.innerText = shots1;
    shots1 = shots1 + 1
    if (shoot1 > 0.5) {
        alert("success");
    }
    else {
        alert("fail");
    }
})
}