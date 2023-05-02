let menu_btn = document.querySelector('.navigation #btns_nav');
let navigation = document.querySelector('.navigation')

menu_btn.onclick = () => {
    navigation.classList.toggle('active');
    menu_btn.classList.toggle('fa-times');
}

let lists = document.querySelectorAll('.navigation ul li')

function listactive(){
    lists.forEach(list => {
        navigation.classList.remove('active');
        menu_btn.classList.remove('fa-times');
        list.classList.remove('active');
        this.classList.add('active');
    })
}

lists.forEach(list => {
    list.addEventListener('click', listactive);
})

// theme toggle
let btn_open = document.querySelector('.parametres .fa-cog');
let theme_container =  document.querySelector('.parametres');

btn_open.onclick = () => {
    theme_container.classList.toggle('active');
}

let theme_btn = document.querySelector('.parametres .theme_toggle .theme');

theme_btn.onclick = () => {
    theme_btn.classList.toggle('active');
    document.querySelector(':root').classList.toggle('active');
}

let theme_clair = document.querySelector('.parametres .theme_toggle .clair');
let theme_sombre = document.querySelector('.parametres .theme_toggle .sombre');

theme_clair.onclick = () => {
    theme_btn.classList.remove('active');
    document.querySelector(':root').classList.remove('active');
}
theme_sombre.onclick = () => {
    theme_btn.classList.add('active');
    document.querySelector(':root').classList.add('active');
}


let clr_pric_btns = document.querySelectorAll('.parametres .couleurs .clr');
let image_princ = document.querySelector('.banniere_p .image img');

clr_pric_btns.forEach(clr_pinc => {
    let bgnd_btn = clr_pinc.style.background;
    let data_name = clr_pinc.getAttribute('data-name');

    clr_pinc.onclick = () => {
        document.querySelector(':root').style.setProperty('--couleur-principale', bgnd_btn);
        
        image_princ.src = `images/${data_name}.png`;
    }
})


// faire fonctionner le logo
let montre_cont =  document.querySelector('.montre_logo'),
heure = montre_cont.querySelector('.heure'),
minute = montre_cont.querySelector('.minutes'),
seconde = montre_cont.querySelector('.seconde'),
salut = document.querySelector('.banniere_p .containt h2')


function montre(){
    let date = new Date(),
    hours = date.getHours(),
    minutes = date.getMinutes(),
    secondes = date.getSeconds()

    if(hours >= 1 && hours <= 18){
        salut.innerText = 'Bonjour,'
    }
    else{
        salut.innerText = 'Bonsoir,'
    }
    heure.innerText = `${hours} :`
    minute.innerText = `${minutes} :`
    seconde.innerText = `${secondes}`

    if(parseInt(seconde.innerText) < 10){
        seconde.innerText = `0${secondes}`
    }
    if(parseInt(minute.innerText) < 10){
        minute.innerText = `0${minutes}`
    }
    if(parseInt(heure.innerText) < 10){
        heure.innerText = `0${hours}`
    }
}
setInterval(() => {
    montre()
}, 1000)

// survol de ma photo
let my_image = document.querySelector('.a_propos .container_app .center'),
image_app = document.querySelector('.image_hover')

my_image.onmouseenter = () => {
    image_app.classList.add('active')
}
my_image.onmouseout = () => {
    image_app.classList.remove('active')
}

window.onmousemove = (e) => {
    image_app.style.left = `${e.clientX}px`
    image_app.style.top = `${e.clientY}px`
}


let experience = document.querySelector('.a_propos .experience')

window.onscroll = () => {
    if(experience.offsetTop - window.scrollY <= 509){
        experience.classList.add('active')
    }
    else{
        experience.classList.remove('active')
    }
    menu_btn.classList.remove('fa-times');
    navigation.classList.remove('active')
    theme_container.classList.remove('active')
}

// formulaire de contact
let inputs = document.querySelectorAll('.contact .container .formulaire form .cont_inp .input')


inputs.forEach(input => {
    input.oninput = (e) => {
        
        if(e.target.value.trim() != ''){
            e.target.parentNode.classList.add('active');
        }
        else if(e.target.value == ''){
            e.target.parentNode.classList.remove('active');
        }
    }
})

