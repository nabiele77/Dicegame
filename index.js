let playerOne = "allies";
let playerOneAttrition = 300;
let playerTwo = "axis";
let playerTwoAttrition = 300;
let rifleDie = 4;
let rifleAttackCount = 15;
let machineGunDie = 8;
let machineGunAttackCount = 10;
let heavyMachineGunDie = 12;
let heavyMachineGunAttackCount = 8;
let tankDie = 16;
let tankAttackCount = 6;
let artilleryDie = 20;
let artilleryAttackCount = 4
let bombingRunDie = 50;
let bombingRunAttackCount = 1
let currentDie;
let currentAttackCount;


function runDiceGame(){
  //setup
  //gameplay loop
  while (playerOneAttrition > 0 && playerTwoAttrition > 0){
    declareDie();
    playerTwoAttrition -= calculateDamage();
    if (playerTwoAttrition > 0){
      declareDie();
      playerOneAttrition -= calculateDamage();
    }
  }

  if (playerOneAttrition > 0){
    console.log ("Allies win");
  }else if(playerTwoAttrition > 0){
    console.log ("Axis win");
  }
  console.log(playerOneAttrition);
  console.log(playerTwoAttrition);
}

function declareDie(){
  let input = prompt("Select die")
  switch(input){
    case "1":
      currentDie = rifleDie;
      currentAttackCount = rifleAttackCount;
      break;
    case "2":
      currentDie = machineGunDie;
      currentAttackCount = machineGunAttackCount;
      break;
    case "3":
      currentDie = heavyMachineGunDie;
      currentAttackCount = heavyMachineGunAttackCount;
      break;
    case "4":
      currentDie = tankDie;
      currentAttackCount = tankAttackCount;
      break;
    case "5":
      currentDie = artilleryDie;
      currentAttackCount = artilleryAttackCount;
      break;
    case "6":
      currentDie = bombingRunDie;
      currentAttackCount = bombingRunAttackCount;
      break;
    default:
      declareDie();

  }
}

function calculateDamage(){
  let totalDamage = 0;
  while (currentAttackCount>0){
    totalDamage += rollDie(currentDie);
    currentAttackCount--;
  }
  return totalDamage
}

function rollDie(dieSides){
   return Math.floor(Math.random() * dieSides + 1);


}
runDiceGame();
