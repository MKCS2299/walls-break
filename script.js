document.addEventListener("DOMContentLoaded", () => {
  const carMoment = document.getElementById("carMoment");
  const receivedBubble = carMoment.querySelector(".received");
  const divider = document.querySelector(".divider");
  const hint = carMoment.querySelector(".hint");

  let revealed = false;

  carMoment.addEventListener("click", () => {
    if (revealed) return;
    revealed = true;

    // lock the moment open
    carMoment.classList.add("unlocked");

    // show the bubble permanently
    receivedBubble.classList.add("show");

    // soften/remove the divider
    divider.classList.add("open");

    // remove the hint gracefully
    if (hint) hint.remove();
  });
});
