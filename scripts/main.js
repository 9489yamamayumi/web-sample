const img = document.querySelector('.header-icon');

img.onclick = () => {
  const src = img.getAttribute('src');
  if (src === 'images/icon.jpg') {
    img.setAttribute('src','images/icon2.jpg');
  } else {
    img.setAttribute('src','images/icon.jpg');
  }
}

let btn = document.querySelector('button');
let dsc = document.querySelector('.description');

function setUserName() {
  const name = prompt('あなたの名前を入力してください。');
  if(!name){
    setUserName();
  }else{
    localStorage.setItem('name', name);
    dsc.textContent = `Mozilla はかっこいいよ、${name}`;
  }
}

if (!localStorage.getItem('name')) {
  setUserName();
} else {
  const storedName = localStorage.getItem('name');
  dsc.textContent = `Mozilla はかっこいいよ、${storedName}`;
}

btn.onclick = () => {
  setUserName();
}