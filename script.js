document.querySelectorAll(".btn.green, .full").forEach((btn) => {
  btn.addEventListener("click", () => {
    window.open(
      "https://wa.me/966502282002?text=I want to book a taxi",
      "_blank",
    );
  });
});
