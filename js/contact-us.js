  document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".contact-form");
    if (!form) return;

    form.addEventListener("submit", async (e) => {
      e.preventDefault(); // Stop page reload
      const btn = form.querySelector(".btn-send");
      const originalText = btn.innerHTML;

      // Loading State
      btn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Sending...';
      btn.disabled = true;

      const formData = new FormData(form);
      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);

      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: json,
        });

        const result = await response.json();

        if (result.success) {
          // Success State
          btn.classList.add("success");
          btn.innerHTML = '<i class="bi bi-check-lg tick me-2"></i> Message Sent';
          form.reset(); // Clear form
        } else {
          // Error State
          btn.innerHTML = "Error! Try Again";
          btn.disabled = false;
        }
      } catch (error) {
        console.error(error);
        btn.innerHTML = "Error! Try Again";
        btn.disabled = false;
      }
    });
  });

