//иницализация
emailjs.init("a5uj2CONPR1wgemgT");

const formMain = document.querySelector("#appointment-form")
const modalSuccessRequest = document.querySelector("#successModal")
const modalErrorRequst = document.querySelector("#errorModal")
const closeModalWindow = document.querySelectorAll(".modalClose")

formMain.addEventListener("submit",submitForm)

function submitForm(e) {
  e.preventDefault()

  const from_name = document.getElementById("nameForm").value;
  const email = document.getElementById("emailForm").value;
  const phone = document.getElementById("phoneForm").value;
  const message = document.getElementById("messageForm").value;

  console.log(modalErrorRequst,modalSuccessRequest)

  const emailParams = {
    from_name: from_name,
    email: email,
    phone:phone,
    message: message
  };

  // Отправка запроса на отправку электронной почты
  emailjs.send("service_v46gm0b", "template_z3y1xr8", emailParams)
    .then(response => {
      console.log('Email sent successfully:', response);
      formMain.reset()
      modalSuccessRequest.style.display = "block"
    })
    .catch(error => {
      console.error('Error sending email:', error);
      modalErrorRequst.style.display = "block"
    });
}

//closing modal function
console.log(closeModalWindow)

closeModalWindow.forEach((closeItem) =>{
  closeItem.addEventListener("click",() =>{
    modalSuccessRequest.style.display = "none"
    modalErrorRequst.style.display = "none"
  })
})



