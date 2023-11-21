function joinFandom() {
  let name = prompt("What is your name?");
  let email = prompt("What is your email?");

  alert(`Hi ${name}! Welcome to the Brooklyn Nine-Nine Fandom!`);
}

let joinFandomButton = document.querySelector("#join-fandom");
joinFandomButton.addEventListener("click", joinFandom);
