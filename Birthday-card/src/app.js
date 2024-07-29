function showBirthdayWishes() {
  let heading = document.querySelector("#birthday-heading");
  heading.innerHTML = "HAPPY BIRTHDAY!!";
  let content = document.querySelector("#birthday-wishes");
  content.innerHTML =
    "Wishing You all the best! Have a great day and a lot of fun:) You are older today than yesterday but younger than tomorrow 😎";
  let footer = document.querySelector("#name");
  footer.innerHTML = "Joanna";
}

let button = document.querySelector("#click-me");
button.addEventListener("click", showBirthdayWishes);
