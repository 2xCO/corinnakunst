// window.addEventListener('scroll', () => {
//   const scroll = window.pageYOffset / (document.body.offsetHeight - window.innerHeight);
//   // Snap auf 0, 0.5 oder 1
//   const snapped = scroll < 0.25 ? 0 : scroll < 0.75 ? 0.5 : 1;
//   document.body.style.setProperty('--scroll', snapped);
// }, false);
// window.addEventListener('scroll', () => {
//   document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
// }, false);

let isMeeting = false; // merkt, ob "meet" aktiv ist


  // JavaScript, um Scrollfortschritt zu erfassen
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const scrollMax = document.body.scrollHeight - window.innerHeight;
    const progress = scrollY / scrollMax;

    // CSS-Variable für Bewegung setzen
    document.body.style.setProperty('--scroll', progress);

    // Wenn sie sich "treffen" (z. B. in der Mitte des Scrolls)
    // if (progress > 0.1 && progress < 0.2) {
    //   document.getElementById("ich").add('meet');
    // } else {
    //   document.getElementById("ich").remove('meet');
    // } false;

    // if (progress > 0.1 && progress < 0.2) {
    //   document.getElementById("ich").add('go');
    // } else {
    //   document.getElementById("ich").remove('go');
    // } true;

  const el = document.getElementById("ich");

  const inMeetZone = progress > 0.5 && progress < 1;

    if (inMeetZone && !isMeeting) {
  // const el = document.getElementById("ich");
  el.classList.add('meet');
  el.classList.remove ('go');
  isMeeting = true;
} else if (!inMeetZone && isMeeting) {
  // const el = document.getElementById("ich");
  el.classList.add('go');
  el.classList.remove ( 'meet');
  isMeeting = false;
}
  });

  