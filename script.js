  window.onload = function () {

  const container = document.getElementById("container");
  const form = document.getElementById("loginForm");
  const error = document.getElementById("error");

  // ===== SCROLL AUTO KE LOGIN =====
  let sudahScroll = false;

  container.addEventListener("scroll", () => {
    if (!sudahScroll && container.scrollTop > 50) {
      sudahScroll = true;

      container.scrollTo({
        top: window.innerHeight,
        behavior: "smooth"
      });
    }
  });

  // ===== LOGIN =====
  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    console.log(username, password); // debug

    if (username === "admin" && password === "1234") {
      alert("Login berhasil!");

      window.location.href = "home.html";

    } else {
      error.textContent = "DASAR ANAK TOLOL!";
    }
  });

};
