export default function footer() {
  const form = document.querySelector('form');

  form.addEventListener('submit', fromSend);

  const fromSend = async (e) => {
    e.preventDefault();

    let formData = new FormData(form);

    let response = await fetch('sendmail.php', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      console.log('Зашибись');
    } else {
      console.log('Не зашибись');
    }
  };

  //   const formValidate = (form) => {
  //     let error = null;
  //     let fromReq = document.querySelectorAll('._req');
  //   };
}
