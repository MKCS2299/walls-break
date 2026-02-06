document.addEventListener("DOMContentLoaded", () => {
  const carMoment = document.getElementById("carMoment");
  const receivedBubble = carMoment.querySelector(".received");
  const divider = document.querySelector(".divider");

  let revealed = false;

  carMoment.addEventListener("click", () => {
    if (revealed) return;
    revealed = true;

    // Show her response
    receivedBubble.classList.add("show");

    // Dissolve the divider
    divider.classList.add("open");
  });
});
