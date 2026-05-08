window.onload = function () {

  const container = document.getElementById("container");

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
  const form = document.getElementById("loginForm");
  const error = document.getElementById("error");

  form.addEventListener("submit", function(e){

    e.preventDefault();

    const username =
      document.getElementById("username").value;

    const password =
      document.getElementById("password").value;

    // ADMIN
    if(
      username === "admin" &&
      password === "admin123"
    ){

      localStorage.setItem("role", "admin");
      localStorage.setItem("username", "ADMIN 👑");

      window.location.href = "home.html";

    }

    // USER
    else if(
      username === "user" &&
      password === "user123"
    ){

      localStorage.setItem("role", "user");
      localStorage.setItem("username", "USER");

      window.location.href = "home.html";

    }

    else{

      error.innerHTML =
      "Username atau password salah!";

    }

  });

};
