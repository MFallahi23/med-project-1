const btns: NodeListOf<Element> = document.querySelectorAll(".btn");

btns.forEach((btn) => {
  btn?.addEventListener("click", () => {
    console.log("Clicked");
  });
});
