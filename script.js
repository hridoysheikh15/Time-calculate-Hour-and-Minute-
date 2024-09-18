function cal() {
  let out = document.getElementById('output');

  let startHour = document.getElementById('shour').value;
  let startMinute = document.getElementById('smin').value;
  let startSecond = document.getElementById('ssec').value;

  let endHour = document.getElementById('ehour').value;
  let endMinute = document.getElementById('emin').value;
  let endSecond = document.getElementById('esec').value;

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
