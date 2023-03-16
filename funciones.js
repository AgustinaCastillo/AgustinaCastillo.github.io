//Cargando la API "randomuser"
fetch("https://randomuser.me/api/")
.then(response => response.json())
.then(data => {
  const user = data.results[0];
  
  document.getElementById("avatar").src = user.picture.large;
  document.getElementById("name").innerHTML = user.name.first + " " + user.name.last;
  document.getElementById("date").innerHTML = user.dob.date.slice(0, 10);
  document.getElementById("email").innerHTML = user.email;
  document.getElementById("phone").innerHTML = user.phone;
  document.getElementById("edad").innerHTML= user.dob.age;
  document.getElementById("location").innerHTML = user.location.street.name + " " + user.location.street.number + ", " + user.location.state  + ", " +  user.location.country;
});

//Mostrar ocultar texto "Sobre Mi" 
function showInfo(id) {
  var info = document.getElementById(id);
  info.classList.remove('hidden');
}

function hideInfo(id) {
  var info = document.getElementById(id);
  info.classList.add('hidden');
}

const sobreMi = document.querySelector('.sobre-mi');

sobreMi.addEventListener('mouseover', () => {
  sobreMi.classList.add('mostrar');
});

sobreMi.addEventListener('mouseout', () => {
  sobreMi.classList.remove('mostrar');
});

// formulario de contacto

const abrirPopupBtn = document.getElementById('abrir-popup');
const popup = document.querySelector('.popup');

abrirPopupBtn.addEventListener('click', () => {
  popup.classList.add('visible');
});

document.addEventListener('click', (event) => {
  if (!popup.contains(event.target) && event.target !== abrirPopupBtn) {
    popup.classList.remove('visible');
  }
});
