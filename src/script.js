"use strict";

// TODO - write your code here.

const randomDamage = () => {
  return Math.floor(Math.random() * 10) + 1;
};

const chooseOption = (opt1, opt2) => {
  const randomNum = Math.round(Math.random());
  return randomNum === 0 ? opt1 : opt2;
};

// console.log(chooseOption("brownies", "cake"));
const attackPlayer = function (health) {
  const newHealth = health - randomDamage();
  return newHealth;
};

const logHealth = (player, health) => {
  console.log(`${player} health: ${health}`);
};

// logHealth("henry", 1000000);

const logDeath = (winner, loser) => {
  console.log(`${winner} defeated ${loser}`);
};
// logDeath("Henry", "Matt");

const isDead = (health) => health <= 0;

// console.log(isDead(0));

function fight(player1, player2, player1Health, player2Health) {
  while (true) {
    const attacker = chooseOption(player1, player2);
    if (attacker === player1) {
      player2Health = attackPlayer(player2Health);
      logHealth(player2, player2Health);
      if (isDead(player2Health) === true) {
        logDeath(player1, player2);
        break;
      }
    } else {
      player1Health = attackPlayer(player1Health);
      logHealth(player1, player1Health);
      if (isDead(player1Health) === true) {
        logDeath(player2, player1);
        break;
      }
    }
  }
}

fight("Henry", "Matt", 100, 100);
