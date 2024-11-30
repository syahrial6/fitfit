// login page scripts
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  validateForm();
});

function validateForm() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  //validasi username dan password, username dan password bisa diganti sesuai keinginan
  if (username !== "" && password !== "") {
    Swal.fire({
      icon: "success",
      title: "Login berhasil!",
      text: "Selamat datang",
      showConfirmButton: false,
      timer: 1500,
    }).then(function () {
      window.location.href = "birthday.html";
    });
  } else {
    Swal.fire({
      icon: "error",
      title: "Login gagal!",
      text: "Ada Data Yang Belum Terisi",
      confirmButtonText: "Coba lagi",
      confirmButtonColor: "#ff7675",
    });
  }
}