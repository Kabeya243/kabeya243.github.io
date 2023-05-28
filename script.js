// import works from './data/data.js';
const works = [
    {
        title:"Cafeo's love",
        img:"./img/cafeo.png",
        desc:`site web Brutal pure avec un design unique et captivant pour une entreprise de cafe made in africa!`,
        link:"https://cafeos.vercel.app/",
    },
    {
        title:"elixir wine",
        img:"./img/elixir.png",
        desc:`site web moderne & pure avec un design unique et captivant pour une entreprise des vins 100% africain!`,
        link:"https://elixirwine.vercel.app/",
    },
    {
        title:"Iterior design",
        img:"./img/interior.png",
        desc:`site web Minimaliste epuree avec un design propre & unique et captivant pour une entreprise de design interieur`,
        link:"https://interior.vercel.app/",
    },
    {
        title:"Personnal porfolio's",
        img:"./img/portfolio1.png",
        desc:`site web Personnel pro & pure avec un design unique et captivant pour presenter vos competences au monde et booster votre carriere !`,
        link:"https://kabeya243.github.io",
    },
]

let tgl = document.querySelector(".bx-sun");
let body = document.body;
let main = document.querySelector(".main");
let worksBox = document.querySelector(".works-gallery");

tgl.addEventListener('click',() =>{
    body.classList.toggle('theme');   
})
// script to push works data 
// alert(works)
works.forEach((work) => {
    let selfItem = document.createElement("a");
    selfItem.classList.add("work");
    selfItem.setAttribute("href",`${work.link}`)
    selfItem.innerHTML = `
        <img src=${work.img}  alt=${work.title}>
        <div class="work-desc">
             <h3>${work.title}</h3>
            <p>
                ${work.desc}
            </p>
        </div>
    `
    worksBox.append(selfItem)
})
// script to push works data 