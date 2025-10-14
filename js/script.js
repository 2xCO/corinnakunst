// window.addEventListener('scroll', () => {
//   const scroll = window.pageYOffset / (document.body.offsetHeight - window.innerHeight);
//   // Snap auf 0, 0.5 oder 1
//   const snapped = scroll < 0.25 ? 0 : scroll < 0.75 ? 0.5 : 1;
//   document.body.style.setProperty('--scroll', snapped);
// }, false);
window.addEventListener('scroll', () => {
  document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);