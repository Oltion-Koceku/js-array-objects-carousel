
const imgs = [
{
  nome: "Spiderman",
  img: "assets/img/01.webp",
  descrizione: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, nemo."
},
{
  nome: "ratchet and clank",
  img: "assets/img/02.webp",
  descrizione: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, nemo."
},
{
  nome: "Fortnite",
  img: "assets/img/03.webp",
  descrizione: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, nemo."
},
{
  nome: "Stray",
  img: "assets/img/04.webp",
  descrizione: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, nemo."
},
{
  nome: "Avengers",
  img: "assets/img/05.webp",
  descrizione: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, nemo."
}
];

let contatore = 2;
const colonna1 = document.querySelector(".colonna-1");
const colonna2 = document.querySelector(".colonna-2");
const buttonSu = document.querySelector(".button-su");
const buttonGiu = document.querySelector(".button-giu");
const colonna0 = document.querySelector(".colonna-0")
// const descrizione = document.querySelector(".descrizione")

imgs.forEach((imgUrl) => {
  colonna1.innerHTML += `
  <img src="${imgUrl.img}" alt="" class="img-ol d-none">
  <div class="descrizione d-none">
    <h2>${imgUrl.nome}</h2> <p>${imgUrl.descrizione}</p>
  </div>
  `;


})

const imgAll = document.getElementsByClassName("img-ol");
const imgSmall = document.getElementsByClassName("img-small");
const descrizioneTutto = document.getElementsByClassName("descrizione")

imgAll[contatore].classList.remove("d-none");
imgSmall[contatore].classList.add("bordo-bianco");
imgSmall[contatore].classList.remove("trasparente");
descrizioneTutto[contatore].classList.remove("d-none")

buttonSu.addEventListener("click", function(){
  imgAll[contatore].classList.add("d-none");
  descrizioneTutto[contatore].classList.add("d-none")
  imgSmall[contatore].classList.remove("bordo-bianco");
  imgSmall[contatore].classList.add("trasparente");
  
  contatore--;
  if(contatore < 0){
    contatore = 4
  }
  descrizioneTutto[contatore].classList.remove("d-none")
  imgSmall[contatore].classList.remove("trasparente");
  imgSmall[contatore].classList.add("bordo-bianco");
  imgAll[contatore].classList.remove("d-none");
  
  
});

buttonGiu.addEventListener("click", function(){
  imgAll[contatore].classList.add("d-none");
  descrizioneTutto[contatore].classList.add("d-none")  
  imgSmall[contatore].classList.remove("bordo-bianco");
  imgSmall[contatore].classList.add("trasparente")
  contatore++;
  if(contatore > 4){
    contatore = 0
  }
  descrizioneTutto[contatore].classList.remove("d-none")
  imgSmall[contatore].classList.remove("trasparente")
  imgAll[contatore].classList.remove("d-none")
  imgSmall[contatore].classList.add("bordo-bianco")
  
  
});

timeSec = setInterval(scroll, 3000);

colonna0.addEventListener("mouseover", function(){
  clearInterval(timeSec);
})

colonna0.addEventListener("mouseleave", function(){
   timeSec = setInterval(scroll, 3000);
})
// Function

function scroll(){
  descrizioneTutto[contatore].classList.add("d-none")
  imgAll[contatore].classList.add("d-none");
  imgSmall[contatore].classList.remove("bordo-bianco");
  imgSmall[contatore].classList.add("trasparente");
  contatore++;
  if(contatore >= imgs.length){
  contatore = 0;
  } 
  descrizioneTutto[contatore].classList.remove("d-none")
  imgSmall[contatore].classList.remove("trasparente");
  imgSmall[contatore].classList.add("bordo-bianco");
  imgAll[contatore].classList.remove("d-none");
  
  console.log(contatore);
}



