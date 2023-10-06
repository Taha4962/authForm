const container = document.getElementById('container');
const overlayCon = document.getElementById('overlayCon');
const overlayBtn = document.getElementById('overlayBtn');
const userName = document.getElementById('userName');
const userEmail = document.getElementById('userEmail');
const userPass = document.getElementById('userPass');
const getEmail = document.getElementById('getEmail');
const getPass = document.getElementById('getPass');
const signIn = document.getElementById('signIn');
const signUp = document.getElementById('signUp')


overlayBtn.addEventListener('click', () => {
    container.classList.toggle('right-panel-active');

    overlayBtn.classList.remove('btnScaled');
    this.requestAnimationFrame(()=> {
        overlayBtn.classList.add('btnScaled');
    })
})

signUp.addEventListener('click', () => {
    if (userName.value && userPass.value && userEmail.value) {
        localStorage.setItem('username', userName);
        localStorage.setItem('password', userPass);
        localStorage.setItem('Email',userEmail)
        alert('Sign-up successful!');
      } else {
        alert('Please enter both new username and password.');
      }
})
signIn.addEventListener('click', () => {
    if(getEmail.value && getPass.value) {
        localStorage.setItem('email',getEmail)
        localStorage.setItem('password',getPass)
        alert('Login in successfull')
    }
    else{
        alert('Please enter both email and password!')
    }
})