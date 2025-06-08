window.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("contact-form") as HTMLFormElement;
  var button = document.getElementById("contact-form-button");
  const successEl = document.getElementById("contect-form-status-success");
  const errorEl = document.getElementById("contect-form-status-error");

  function success() {
    successEl.style.display = "block";
    errorEl.style.display = "none";
    form.reset();
    button.style = "display: none ";
  }

  function error() {
    successEl.style.display = "none";
    errorEl.style.display = "block";
  }

  // handle the form submission event
  if (form != null) {
    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      var data = new FormData(form);
      Send(form.method, form.action, data, success, error);
    });
  }
});

async function Send(method: string, url: string, data: FormData, success: (response: Response) => void, error: (response: Response | null) => void) {
  console.log("Sending form to", url, "with data", data);
  try {
    const response = await fetch(
      url,
      {
        method: method,
        headers: {
          "Accept": "application/json",
        },
        body: data
      }
    )

    if (response.ok) {
      success(response);
    } else {
      error(response);
    }
  }
  catch (err) {
    console.error("Error sending form:", err);
    error(null);
  }
}
