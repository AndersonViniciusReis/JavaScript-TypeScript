const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backGorudColorBody =estilosBody.backgroundColor;
console.log(backGorudColorBody);

for(let p of ps) {
    p.style.backgroundColor = backGorudColorBody;
    p.style.color = '#ffffff';
};