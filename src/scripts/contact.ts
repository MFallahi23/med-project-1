const contactForm: HTMLFormElement | null =
  document.querySelector("#contact-form");

contactForm?.addEventListener("submit", async function (e) {
  e.preventDefault();
  const formObj = new FormData(contactForm);
  const patientSubmission = Object.fromEntries(formObj.entries());

  const response = await fetch(import.meta.env.PUBLIC_APP_WEB_URL, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(patientSubmission),
  });

  alert("Votre message a été envoyé!");
  this.reset();

  // const result: Result = await response.json();
  // if (result.status === "success") {
  //   alert("Worked");
  // }
});
