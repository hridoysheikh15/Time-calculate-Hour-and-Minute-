function cal() {
  let out = document.getElementById('output');

  let startHour = document.getElementById('shour');
  let startMinute = document.getElementById('smin');
  let startSecond = document.getElementById('ssec');

  let endHour = document.getElementById('ehour');
  let endMinute = document.getElementById('emin');
  let endSecond = document.getElementById('esec');

  var secDif, minDif, hourDif;

  if (startSecond > endSecond) {
    secDif = (60 + endSecond) - startSecond;
    endMinute--;
  } else {
    secDif = endSecond - startSecond;
  } 

  if (startMinute > endMinute) {
    minDif = (60 + endMinute) - startMinute;
    endHour--;
  } else {
    minDif = endMinute - startMinute;
  } 

  if (startHour > endHour) {
    hourDif = (12 + endHour) - startHour;
  } else {
    hourDif = endHour - startHour;
  }

  out.innerHTML = `The time differantes is: ${hourDif}:${minDif}:${secDif}`;
}
