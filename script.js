// Interaction: toggle forms and panda reactions
document.addEventListener('DOMContentLoaded', function(){
  const showLoginBtn = document.getElementById('show-login');
  const showSignupBtn = document.getElementById('show-signup');
  const loginForm = document.getElementById('login-form');
  const signupForm = document.getElementById('signup-form');
  const toSignup = document.getElementById('to-signup');
  const toLogin = document.getElementById('to-login');

  const eyeballs = document.querySelectorAll('.eyeball');
  const leftHand = document.querySelector('.hand--left');
  const rightHand = document.querySelector('.hand--right');
  const panda = document.querySelector('.panda');

  function setTab(tab){
    if(tab === 'login'){
      showLoginBtn.classList.add('active');
      showSignupBtn.classList.remove('active');
      loginForm.classList.add('active');
      signupForm.classList.remove('active');
    } else {
      showSignupBtn.classList.add('active');
      showLoginBtn.classList.remove('active');
      signupForm.classList.add('active');
      loginForm.classList.remove('active');
    }
  }

  showLoginBtn.addEventListener('click', ()=> setTab('login'));
  showSignupBtn.addEventListener('click', ()=> setTab('signup'));
  toSignup.addEventListener('click', (e)=>{ e.preventDefault(); setTab('signup'); });
  toLogin.addEventListener('click', (e)=>{ e.preventDefault(); setTab('login'); });

  // Panda reactions to focus
  const usernameInputs = document.querySelectorAll('input[type="text"]');
  const passwordInputs = document.querySelectorAll('input[type="password"]');

  usernameInputs.forEach(inp => {
    inp.addEventListener('focus', () => {
      eyeballs.forEach(b => { b.style.transform = 'translateY(0px) translateX(-2px)'; });
      leftHand.style.transform = 'translateY(0) rotate(0deg)';
      rightHand.style.transform = 'translateY(0) rotate(0deg)';
      panda.style.transform = 'scale(1)';
    });
    inp.addEventListener('blur', () => {
      eyeballs.forEach(b => { b.style.transform = ''; });
    });
  });

  passwordInputs.forEach(inp => {
    inp.addEventListener('focus', () => {
      // cover eyes: bring hands up
      leftHand.style.transform = 'translateY(-120px) rotate(-30deg)';
      rightHand.style.transform = 'translateY(-120px) rotate(30deg)';
      eyeballs.forEach(b => { b.style.transform = 'translateY(8px)'; });
      panda.style.transform = 'scale(0.98)';
    });
    inp.addEventListener('blur', () => {
      leftHand.style.transform = '';
      rightHand.style.transform = '';
      eyeballs.forEach(b => { b.style.transform = ''; });
      panda.style.transform = '';
    });
  });

  // simple submit handlers (demo)
  loginForm.addEventListener('submit', function(e){
    e.preventDefault();
    alert('Login of submision (Demo) — ' + document.getElementById('login-username').value);
  });
  signupForm.addEventListener('submit', function(e){
    e.preventDefault();
    alert('Login of submision (Demo)s — ' + document.getElementById('signup-email').value);
  });
});
