function updateParagraph(newParagraph) {
  let paragraph = document.querySelector(".info");
  paragraph.innerHTML = newParagraph;
}

function getInfo() {
  let question = prompt(
    "Do you want to get more Info about our courses? Tipe Yes or No"
  );
  question = question.toLowerCase();
  question = question.trim();

  if (question === "yes") {
    let email = prompt("Write down your email");
    updateParagraph(`We will send you more info with our offer an ${email}`);
  } else {
    if (question === "no") {
      updateParagraph("Sorry to hear that");
    }
  }
}
let contactButton = document.querySelector("button");
contactButton.addEventListener("click", getInfo);
