// Инициализация EmailJS
emailjs.init("a5uj2CONPR1wgemgT");

const formMain = document.querySelector("#appointment-form")

formMain.addEventListener("submit",submitForm)

function submitForm(e) {
  e.preventDefault()

  const from_name = document.getElementById("nameForm").value;
  const email = document.getElementById("emailForm").value;
  const phone = document.getElementById("phoneForm").value;
  const message = document.getElementById("messageForm").value;

  // Определение параметров для отправки электронной почты через EmailJS
  const emailParams = {
    from_name: from_name,
    email: email,
    phone:phone,
    message: message
  };

  // Отправка запроса на отправку электронной почты через EmailJS
  emailjs.send("service_v46gm0b", "template_z3y1xr8", emailParams)
    .then(response => {
      console.log('Email sent successfully:', response);
      formMain.reset()
      alert('Email sent successfully!');
    })
    .catch(error => {
      console.error('Error sending email:', error);
      alert('Error sending email.');
    });
}
