const reset_button = document.querySelector("#reset_button")
reset_button.addEventListener("click", function() {
})
let goal = 0;
let shots = 1;
const teamone_numshots = document.querySelector("#teamone_numshots");
const teamone_numgoals = document.querySelector("#teamone_numgoals");
const teamone_shoot_button = document.querySelector("#teamone_shoot_button");
teamone_shoot_button.addEventListener("click", function() {
    let shoot = Math.random();
    teamone_numshots.innerText = shots;
    shots = shots + 1
    console.log(shoot);
    if (shoot > 0.5) {
      console.log("success");
      goal = goal + 1
      teamone_numgoals.innerText = goal;
    }
    else {
      console.log("fail");
    }
})
let shots1 = 1;
let goal1 = 0;
const teamtwo_numshots = document.querySelector("#teamtwo_numshots");
const teamtwo_numgoals = document.querySelector("#teamtwo_numgoals");
const teamtwo_shoot_button = document.querySelector("#teamtwo_shoot_button");
teamtwo_shoot_button.addEventListener("click", function() {
    let shoot1= Math.random();
    teamtwo_numshots.innerText = shots1;
    shots1 = shots1 + 1
    console.log(shoot1);
    if (shoot1 > 0.5) {
        console.log("success");
        goal1 = goal1 + 1
        teamtwo_numgoals.innerText = goal1;
    }
    else {
      console.log("fail");
    }
})