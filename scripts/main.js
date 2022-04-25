// Start dark mode if it's after 9:59:59pm
if (new Date().getHours() > 21) {
  //alert(new Date().getHours());
  const html = document.querySelector('html');
  html.style.backgroundColor = 'black';
  html.style.color = 'white';
}
if (new Date().getHours() > 21) {
  const body = document.getElementsByClassName('body');
  body[0].style.backgroundColor = 'black';
  body[0].style.color = 'white';
}
if (new Date().getHours() > 21) {
  const header = document.getElementsByClassName('header');
  header[0].style.backgroundColor = 'black';
  header[0].style.color = 'white';
}
if (new Date().getHours() > 21) {
  const nav = document.getElementsByClassName('nav');
  nav[0].style.backgroundColor = 'black';
  nav[0].style.color = 'white';
}
if (new Date().getHours() > 21) {
  const wrapperBody = document.getElementsByClassName('wrapper');
  wrapperaBody[0].style.backgroundColor = 'black';
  wrapperBody[0].style.color = 'white';
}
if (new Date().getHours() > 21) {
  const footer = document.getElementsByClassName('footer');
  footer[0].style.backgroundColor = 'black';
  footer[0].style.color = 'white';
}
