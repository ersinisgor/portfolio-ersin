const buttons = document.querySelectorAll('.control');
buttons.forEach(button => {
  button.addEventListener('click', function () {
    makeActive(this);
  });
});

function makeActive(active) {
  buttons.forEach(button => {
    button.classList.remove('active-btn');
  });
  active.classList.add('active-btn');
}

//Select Theme
const themeBtn = document.querySelector('.theme');
themeBtn.addEventListener('click', () => {
  let element = document.body;
  const lightTheme = element.classList.toggle('light');
  const h1 = document.querySelectorAll('h1');
  const rows = document.querySelectorAll('.row');
  const githubImage = document.querySelector('.github-image');
  const footer = document.querySelector('footer');

  if (lightTheme) {
    themeBtn.innerHTML = `<i class='bx bx-moon'></i>`;
    githubImage.innerHTML = `<img src="/images/github-dark.png" alt="GitHub"></img>`;
  } else {
    themeBtn.innerHTML = `<i class='bx bx-sun'></i>`;
    githubImage.innerHTML = `<img src="/images/github.png" alt="GitHub"></img>`;
  }

  h1.forEach(light => light.classList.toggle('light'));

  rows.forEach(row => {
    row.classList.toggle('light');
  });

  footer.classList.toggle('light');
});

/*----------Submit Form------------*/
const scriptURL =
  'https://script.google.com/macros/s/AKfycbykLkDOejVw5lQ46mrBl-mfYiKupixnwzeVIp82EzNvyfy1N33wpra1Dxw8H1I6yWzgNg/exec';
const form = document.forms['submit-to-google-sheet'];
const message = document.getElementById('message');
const submitBtn = document.querySelector('.submit');

// Change Submit Button Text
const inputName = document.querySelector('input[type="text"]');
const inputMail = document.querySelector('input[type="email"]');
const textArea = document.querySelector('textarea');

submitBtn.onclick = () => {
  if (inputName.value && inputMail.value && textArea.value) {
    submitBtn.innerText = 'Thanks';
    setTimeout(() => {
      submitBtn.innerText = 'Send Message';
    }, 3000);
  }
};

//Post request and reset form
form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      message.innerHTML = 'Message sent successfully';
      setTimeout(function () {
        message.innerHTML = '';
      }, 3000);

      form.reset();
    })
    .catch(error => console.error('Error!', error.message));
});

//media query
// const mediaQuery = window.matchMedia(
//   '(min-device-width: 769px) and (max-device-width: 1024px)'
// );

// if (mediaQuery) {
//   console.log('sss');
//   alert('media query');
// }

// const contactCol_2 = document.querySelector('.contact-col-2');
// if (window.innerWidth < 769) {
//   contactCol_2.innerHTML = `<form name="submit-to-google-sheet">
//   <input type="text" name="Name" placeholder="Name" required>
//   <input type="email" name="Email" placeholder="Email" required>
//   <textarea name="Message" rows="6" placeholder="Message"></textarea>
//   <span id="message"></span>
//   <button type="submit" class="btn submit">Send Message</button>
// </form>`;
// } else {
//   contactCol_2.innerHTML = `<form name="submit-to-google-sheet">
//   <input type="text" name="Name" placeholder="Name" required>
//   <input type="email" name="Email" placeholder="Email" required>
//   <textarea name="Message" rows="6" placeholder="Message"></textarea>
//   <button type="submit" class="btn submit">Send Message</button>
// </form>
// <span id="message"></span>`;
// }

// if (window.width > 768 && window.width < 1025) {
//   console.log('sss');
// }

if (window.innerWidth > 768 && window.innerWidth < 1025) {
  alert(
    'Bu ekran ölçüsü aralığında project-buttons proje resminin altında olacak, project-buttons ve project-col-2 elementleri `project-col-2-container` divi içine alınacak '
  );
  console.log(
    'Bu ekran ölçüsü aralığında project-buttons proje resminin altında olacak, project-buttons ve project-col-2 elementleri `project-col-2-container` divi içine alınacak '
  );
}

// console.log(buttons);
// const sections = document.querySelectorAll('.section');
// const sectBtns = document.querySelectorAll('.controls');
// const sectBtn = document.querySelectorAll('.control');
// const allSections = document.querySelector('.main-content');

// function pageTransitions() {
//   //Button clicked active class
//   for (let i = 0; i < sectBtn.length; i++) {
//     sectBtn[i].addEventListener('click', function () {
//       let currentBtn = document.querySelectorAll('.active-btn');
//       currentBtn[0].className = currentBtn[0].className.replace(
//         'active-btn',
//         ''
//       );
//       this.className += ' active-btn';
//     });
//   }
//   console.log(sectBtn);

//   //Sections active
//   allSections.addEventListener('click', e => {
//     const id = e.target.dataset.id;
//     if (id) {
//       sections.forEach(section => {
//         section.classList.remove('active');
//       });

//       const element = document.getElementById(`${id}`);
//       element.classList.add('active');
//     }
//   });

//   //Select Theme
//   const themeBtn = document.querySelector('.theme');
//   themeBtn.addEventListener('click', () => {
//     let element = document.body;
//     element.classList.toggle('light');
//   });
// }

// pageTransitions();
