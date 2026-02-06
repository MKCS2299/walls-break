document.addEventListener("DOMContentLoaded", () => {
  const carMoment = document.getElementById("carMoment");
  const receivedBubble = carMoment.querySelector(".received");
  const divider = document.querySelector(".divider");
  const hint = carMoment.querySelector(".hint");

  let revealed = false;

  carMoment.addEventListener("click", () => {
    if (revealed) return;
    revealed = true;

    receivedBubble.classList.add("show");
    divider.classList.add("open");
    hint.style.display = "none";
  });
});
