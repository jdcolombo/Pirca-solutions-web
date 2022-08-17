/*** Team ***/

fetch("./team.json")
.then (response => response.json())
.then (data => {

  var teamContent = document.getElementById('team-content')

  for(item of data) {
    teamContent.innerHTML += `                
    <div class="team__card">
    <img src="assets/team/${item.id}.svg" loading="lazy">
      <div class="team__card-description">
        <h3>${item.name}</h3>
        <p>${item.position}</p>
        <span>& ${item.description}</span>
      </div>
    </div>`
  }
})

$('#job-1').click(function() {
  if(!$(this).hasClass('active')) {
    $(this).addClass("active");
    $('.job-details__1').addClass("active");
    $('#job-2').removeClass("active");
    $('#job-3').removeClass("active");
    $('#job-4').removeClass("active");
    $('.job-details__2').removeClass("active");
    $('.job-details__3').removeClass("active");
    $('.job-details__4').removeClass("active");
  }
});

$('#job-2').click(function() {
  if(!$(this).hasClass('active')) {
    $(this).addClass("active");
    $('.job-details__2').addClass("active");
    $('#job-1').removeClass("active");
    $('#job-3').removeClass("active");
    $('#job-4').removeClass("active");
    $('.job-details__1').removeClass("active");
    $('.job-details__3').removeClass("active");
    $('.job-details__4').removeClass("active");
  }
});

$('#job-3').click(function() {
  if(!$(this).hasClass('active')) {
    $(this).addClass("active");
    $('.job-details__3').addClass("active");
    $('#job-1').removeClass("active");
    $('#job-2').removeClass("active");
    $('#job-4').removeClass("active");
    $('.job-details__1').removeClass("active");
    $('.job-details__2').removeClass("active");
    $('.job-details__4').removeClass("active");
  }
});

$('#job-4').click(function() {
  if(!$(this).hasClass('active')) {
    $(this).addClass("active");
    $('.job-details__4').addClass("active");
    $('#job-1').removeClass("active");
    $('#job-2').removeClass("active");
    $('#job-3').removeClass("active");
    $('.job-details__1').removeClass("active");
    $('.job-details__2').removeClass("active");
    $('.job-details__3').removeClass("active");
  }
});

/***Proyectos***/

var projects = [ 
  {
    "id": 1,
    "title": "Undermoilen",
    "company": "Mobile App",
    "description": "Undermoilen es una comunidad privada por invitación entre sus usuarios, para conectar amigos y amigos de amigos mientras viajas por el mundo."
  },
  {
    "id": 2,
    "title": "Matchup",
    "company": "Smart e-market",
    "description": "El primer smart e-market global dedicado a vincular e involucrar a estudiantes e instituciones educativas."
  },
  {
    "id": 3,
    "title": "Fan Fest",
    "company": "Mobile App",
    "description": "Vive la experiencia de estar en la tribuna. Los jugadores no están solos. El fútbol no está solo."
  },
  {
    "id": 4,
    "title": "Insoft Radio",
    "company": "Sistema de automatización de radio",
    "description": "Insoft te permite manejar temas musicales, comerciales, efectos y mucho más, desde cualquier tipo de dispositivo y desde cualquier lugar. Con Insoft, la automatización de radio nunca volverá a ser la misma."
  },
  {
    "id": 5,
    "title": "Cámara de Senadores de la Nación Argentina",
    "company": "Consultoría",
    "description": "En este proyecto desafiante hemos implementado una gran cantidad de tecnologia, integración con sistemas de audio, lectura de huellas, replicación de información en tiempo real, sistemas de fault back."
  },
  {
    "id": 6,
    "title": "TEDx",
    "company": "Consultoría",
    "description": "Los congresos TEDx son actos sin ánimo de lucro basados en licencias TED donde se tratan temas principalmente sobre Tecnología, Entretenimiento, Diseño. Participamos en diferentes ediciones del TEDxRiodelaPlata brindando nuestro conocimiento en la dirección técnica del evento."
  }
]

var casesContent = document.getElementById('slider-cases-content');

for(item of projects){
  casesContent.innerHTML += `                
  <div class="cases-detail mySlides">
    <img src="assets/cases/${item.id}.jpg" loading="lazy">
    <div class="cases-text">
      <h3>${item.title}</h3>
      <h4>${item.company}</h4>
      <p>${item.description}</p>
    </div>
  </div>`
}

/***Drawer***/

const drawer = document.querySelector('.drawer');
const openDrawerElement = document.querySelector('.open-drawer');
const closeDrawerElement = document.querySelectorAll('.close-drawer');

const openDrawer = ()=>{
  openDrawerElement.addEventListener('click', ()=> {
    drawer.style.setProperty("display", "flex")
  })
}

const closeDrawer = ()=> {
  closeDrawerElement.forEach(element => {
    element.addEventListener('click', ()=> {
      drawer.style.setProperty("display", "none")
    })
  })
}

closeDrawer();
openDrawer();

/***Carrousel***/

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  
  
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("dot-active", "");
  }

  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " dot-active";
}

/***Nav Observer***/

const pircaSectionsBlue = document.querySelectorAll('.section__blue');
const pircaSectionsWhite = document.querySelectorAll('.section__white');
const pircaNavbar = document.querySelector('.navbar');

const observerPirca = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting && entry.target.className === 'section__blue') {
      pircaNavbar.classList.remove('navbar--white');
      pircaNavbar.classList.add('navbar--blue');
      /*console.log('intersecting-blue')*/
    }
    else if (entry.isIntersecting && entry.target.className === 'section__white') {
      pircaNavbar.classList.remove('navbar--blue');
      pircaNavbar.classList.add('navbar--white');
      /*console.log('intersecting-white')*/
    }
    else {
      console.log('not-intersecting');
    }
  });
}, {threshold: [0,1]});
  

pircaSectionsBlue.forEach(pircaSectionBlue=> {
  observerPirca.observe(pircaSectionBlue);
});

pircaSectionsWhite.forEach(pircaSectionWhite=> {
  observerPirca.observe(pircaSectionWhite);
});