let sign = document.getElementById('sign-flash');
let on = '0px 0px 10px 10px';
let off = '0px 0px 0px 0px';

let light_switch = function() {
  if (sign.style.boxShadow === on)
    sign.style.boxShadow = off;
  else
    sign.style.boxShadow = on;
}

setInterval(light_switch, 2000);
