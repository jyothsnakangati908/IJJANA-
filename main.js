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