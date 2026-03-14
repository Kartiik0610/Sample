const form = document.getElementById("deleteForm");

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  const formData = new FormData(form);

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const result = await response.json();

    if (result.success) {
      alert("Your account deletion request has been submitted successfully.");
      window.location.href = "index.html"; // redirect to main page
    } else {
      alert("Submission failed. Please try again.");
    }
  } catch (error) {
    alert("Something went wrong. Please try later.");
  }
});

function goBack() {
  window.history.back();
}
