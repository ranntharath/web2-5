const email = document.getElementById("email");
const password = document.getElementById("password");
const cf = document.getElementById("confirm-password");
const submitBtn = document.getElementById("sumitBtn");
const tableBody = document.getElementById("table-body")


submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const emailValue = email.value;
  const passwordValue = password.value;
  const cfValue = cf.value;

  tableBody.innerHTML = `
  <tr>
                <td>${emailValue}</td>
                <td>${passwordValue}</td>
                <td>${cfValue}</td>
            </tr>
  `
});
