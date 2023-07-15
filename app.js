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
  // const themeButton = document.querySelector('.theme');
  // const themeButton = document.querySelector('.theme');
  // const headerPhoto = document.querySelector('.right-header');

  const h1 = document.querySelectorAll('h1');
  // const fullName = document.querySelector('.full-name');
  const headerContent = document.querySelector('.header-content');
  h1.forEach(light => light.classList.toggle('light'));
  // h1.classList.toggle('light');
  // fullName.classList.toggle('light');
  headerContent.classList.toggle('light');

  if (lightTheme) {
    themeBtn.innerHTML = `<i class='bx bx-moon'></i>`;
    // headerPhoto.innerHTML = `<img src="images/white-profile-photo.png" alt="Profile Photo">`;
  } else {
    themeBtn.innerHTML = `<i class='bx bx-sun'></i>`;
    // headerPhoto.innerHTML = `<img src="images/black-profile-photo.png" alt="Profile Photo">`;
  }
});

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
