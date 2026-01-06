function approve(btn) {
  const row = btn.closest("tr");

  row.querySelector(".status").innerText = "Approved";
  row.querySelector(".status").className = "status approved";

  const now = new Date().toLocaleTimeString();
  row.querySelector(".accept-time").innerText = now;
}

function reject(btn) {
  const row = btn.closest("tr");

  row.querySelector(".status").innerText = "Rejected";
  row.querySelector(".status").className = "status rejected";

  const now = new Date().toLocaleTimeString();
  row.querySelector(".close-time").innerText = now;
}
function login(e) {
  e.preventDefault();

  const email = document.querySelector('input[type="email"]').value;
  const password = document.querySelector('input[type="password"]').value;

  if(email === "admin@IJJANA.com" && password === "admin123") {
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid login credentials");
  }
}