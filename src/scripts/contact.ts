const contactForm: HTMLFormElement | null =
  document.querySelector("#contact-form");

contactForm?.addEventListener("submit", async function (e) {
  e.preventDefault();
  const formObj = new FormData(contactForm);
  const patientSubmission = Object.fromEntries(formObj.entries());

  const response = await fetch(
    "https://script.google.com/macros/s/AKfycbwi2mz3Rw_PYpggeM9VkNZiSUjIY5ZnmRm0HaKZmH2YK54GY8deoUmYr8RuVF9IH6d0/exec",
    {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(patientSubmission),
    }
  );

  alert("Votre message a été envoyé!");
  this.reset();

  // const result: Result = await response.json();
  // if (result.status === "success") {
  //   alert("Worked");
  // }
});
