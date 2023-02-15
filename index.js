let body = document.querySelector("body")
let valorHeigth = body.offsetHeight
let valorWidth = body.offsetWidth
let cantidadCircle = (Math.trunc(valorHeigth / 150) * Math.trunc(valorWidth / 150))


const main = document.querySelector(".main")
function add(){
    let i = 0;
    while (i < cantidadCircle) {
      let boxCarita = document.createElement("label")
      let carita = document.createElement("div")
      carita.classList.add("normal")
        main.appendChild(boxCarita);
        boxCarita.appendChild(carita);
        i++
    }
    let caritas = document.querySelectorAll(".normal")
    caritas.forEach(element =>{
      element.addEventListener("click", ()=>{ 
        element.classList.toggle("colorido"); 
        element.classList.toggle("alegre")
      })
    })       
}
add();
let cantidadCaritas = document.querySelector(".main").childElementCount
let numeberRandom = Math.floor(Math.random()*cantidadCaritas)
let caritas = document.querySelectorAll(".normal")


setInterval( ()=> {
    // if(typeof(caritas) == `object`) {
      caritas[numeberRandom].classList.toggle("alegre"); 
      caritas[numeberRandom].classList.toggle("colorido"); 
      // console.log(numeberRandom)
      const potito2 = numeberRandom
      // console.log(potito2)
  
      setTimeout(()=>{
        caritas[potito2].classList.toggle("alegre"); 
        caritas[potito2].classList.toggle("colorido"); 
      },700)
      setTimeout(()=>{
          numeberRandom = Math.floor(Math.random()*cantidadCaritas);
      },800)
  
},1000);





window.addEventListener("resize", () => {
  main.innerHTML = ""
  body = document.querySelector("body")
  valorHeigth = body.offsetHeight
  valorWidth = body.offsetWidth
  cantidadCircle = (Math.trunc(valorHeigth / 150) * Math.trunc(valorWidth / 150))
  add();
  cantidadCaritas = cantidadCircle
  caritas = document.querySelectorAll(".normal")
});

// ------------------------------------------------------------------------------------------------------------------------------
const music = document.getElementById("music")
const played = document.getElementById("buttonPlay")
const volume = document.getElementById("buttonVolumen")
const playIcon = document.getElementById("iconPlay")
const volumenIcon = document.getElementById("iconVolumen")
const pauseIcon = document.getElementById("iconPause")
const muteIcon = document.getElementById("iconMute")

played.addEventListener(`click`, (e)=>{
  if(music.paused){
    music.play();
    playIcon.style.display = "none"
    pauseIcon.style.display = "flex"
  }else {
    music.pause()
    playIcon.style.display = "flex"
    pauseIcon.style.display = "none"
  }
})
volume.addEventListener(`click`, (e)=>{
  if(music.volume==1){
    music.volume = 0
    volumenIcon.style.display = "none"
    muteIcon.style.display = "flex"
  }else {
    music.volume = 1
    volumenIcon.style.display = "flex"
    muteIcon.style.display = "none"

  }
})
//  -------------------------------------------------------------------------------------
const ButtonPresentacion = document.getElementById("buttonPresentacion")
const boxPresentacion = document.getElementById("boxPresentacion")
const music32 = document.querySelector(".container_box-music")
ButtonPresentacion.addEventListener("click", ()=> {
  setTimeout(()=>{boxPresentacion.style.transform = "translateX(200%)"} , 1700) 
  setTimeout(()=>{ body.removeChild(boxPresentacion)} , 3000)
  let x = "60%"
  let c = "calc(100% + 1px)"
  let v = "-2px"
  let b = "5px 0px 0 var(--clr1) , 5px 0px 0 var(--clr1)"
  let y = "-5px 0px 0 var(--clr1) , -5px 0px 0 var(--clr1)"
  let n = "0s,0.25s,0.5s,0.5s,0.5s" 
  let e = "-1px"
  // music32.style.flexDirection = "column"
  
  setTimeout(()=> {
    ButtonPresentacion.style.boxShadow = "0 0 10px var(--clr1), 0 0 20px var(--clr1), 0 0 30px var(--clr1), 0 0 40px var(--clr1)"
    ButtonPresentacion.style.color = "#222"
  },750)

  document.styleSheets[0].addRule("#buttonPresentacion::before", "transition-delay: " + n + ";");
  document.styleSheets[0].addRule("#buttonPresentacion::before", "width: " + x + ";");
  document.styleSheets[0].addRule("#buttonPresentacion::before", "height: " + c + ";");
  document.styleSheets[0].addRule("#buttonPresentacion::before", "left: " + v + ";");
  document.styleSheets[0].addRule("#buttonPresentacion::before", "box-shadow: " + b + ";");
  
  document.styleSheets[0].addRule("#buttonPresentacion::after", "transition-delay: " + n + ";");
  document.styleSheets[0].addRule("#buttonPresentacion::after", "width: " + x + ";");
  document.styleSheets[0].addRule("#buttonPresentacion::after", "height: " + c + ";");
  document.styleSheets[0].addRule("#buttonPresentacion::after", "right: " + e + ";");
  document.styleSheets[0].addRule("#buttonPresentacion::after", "box-shadow: " + y + ";");

})

//  -------------------------------------------------------------------------------------
const buttonBlog1 = document.getElementById("buttonBlog1")
const buttonBlog2 = document.getElementById("buttonBlog2")
const buttonBlog3 = document.getElementById("buttonBlog3")

buttonBlog1.addEventListener("click", ()=>{
  if(body.children.blog2){
  }else{
    const blog = document.createElement("section")
    body.appendChild(blog)
    blog.outerHTML = `<section class="container_blog" id="blog1">
                          <div  class="blog">
                            <figure class="blog-box_img" >
                                <img class="blog-img" src="./img/092ab8552a44213003e9938cc59375ec.jpg" alt="">
                            </figure>
                            <h3 class="blog-tittle">Cap1: <span>Pensares</span></h3>
                            <h2 class="blog-subtittle"><span>Temores &</span> Tristesa</h2>
                            <p class="blog-paragraph">
                                Desde mi temprana edad comprendí mi propósito, como así mismo mi final, la muerte. Pero ¿cómo es que llegue a tal entendimiento?, pues desde que tengo razón mis padres son cristianos, la religión cristiana, donde Dios creo: el mundo, a nosotros mismo, a los animales, etc … Pero eso no era el caso, fue entonces cuando cumplí la edad de 5 años, donde solo era un niño, mi padre se sentó conmigo y me contó sobre Dios, el infierno , de que cuando muramos nosotros nos iremos al cielo o al infierno, eso me aterraba no quería ir al infierno , las personas pecadores van ahí, así que por eso yo intente ser un buen chico, me porte bien con mis padres y hermanos intentando ser el mejor hijo posible, pero poco a poco algo siguió de mí. Cuando cumplí 8 años faltando poco para mi cumpleaños me sentí en duda, en el cual me pregunte que si ¿Dios existe?, y si Dios no existió puede que al final cuando morimos simplemente desaparecemos, yo por mi mismo empezó a buscar la verdad; leyendo, viendo videos por internet , etc. Pero solo encontraba puras teorías estúpidas, como que el hombre de los peces que viene siendo parte de  la teoría de la evolución, pero si es asi porque no seguimos evolucionando. Si el mundo se creó del bigbang, entonces cual fue esa fuerza que impulso para que chocaran dos átomos y se formara el universo, solo eran teorías no comprobadas, pero bueno, eso solo trajo sentimientos de tristeza, amargura, frustración  , etc, sentimiento que los guarde dentro de mi. Cuando cumplí la edad de los 13 años mi padre me llevo a lo que se le llama campaña, había mucha gente ahí , yo solo me limite a observar como el predicador enseñaba , así paso , y fue entonces que comenzaron las oraciones ,presencie milagros que no tenían explicación para la ciencia, pero yo sabía que esos milagros eran causados por Dios, pero no quería aceptarlo solo creció odio dentro de mi, y pues eso no fue la unica ves, mi padre me llevaba a sus visitas en casa de personas enfermas y veía como el mediaba para que Dios les sanase, ellos fueron sanados. Empecé a dejarme llevar por el mundo y olvidar estos pensamientos.
                            </p>
                            <div class="blog-box_button">
                                <label for="leidoBlog1">
                                    <input type="checkbox" name="" id="leidoBlog1">
                                    <div><ion-icon name="checkmark-sharp"></ion-icon></div>
                                    <span>Marcar Leido</span>
                                </label>
                                <button class="blog-button" id="blog1ButtonReady">All ready</button>
                            </div>
                          </div>
                      </section>`
  }
  blog1 = document.getElementById("blog1")
  leidoBlog1 = document.getElementById("leidoBlog1");
  setTimeout(()=>{
    const blog1exe = document.getElementById("blog1") 
    blog1ButtonReady = document.getElementById("blog1ButtonReady")

    blog1exe.style.animationName = "translateOpen"
    blog1exe.style.animationDuration = "2s"
    blog1exe.style.animationTimingFunction = "ease-in-out"
    blog1exe.style.transform = "translateY(0)"

    blog1ButtonReady.addEventListener("click" , ()=> {
      blog1exe.style.animationName = "translateClose"
      blog1exe.style.animationDuration = "1s"
      blog1exe.style.animationTimingFunction = "ease-in-out"
      blog1exe.style.transform = "translateY(-120%)"
      subidaBlog();
    })

  }, 100)
})
buttonBlog2.addEventListener("click", ()=>{
  if(body.children.blog2){
  }else{
    const blog = document.createElement("section")
    body.appendChild(blog)
  
    blog.outerHTML = `<section class="container_blog" id="blog2">
                          <div  class="blog">
                              <figure class="blog-box_img" >
                                  <img class="blog-img" src="./img/a0a732483d2a62f53e1e67a695a1924a.jpg" alt="">
                              </figure>
                              <h3 class="blog-tittle">Cap1: <span>Pensares</span></h3>
                              <h2 class="blog-subtittle"><span>Temores &</span> Tristesa</h2>
                              <p class="blog-paragraph">
                              Todo esto trajo consigo a un chico que fingía ser feliz, a un chico que había madurado en cierto aspecto que las personas normales no se darían cuenta. Comprendí que la gente en el cual estaba rodeado eran personas ignorantes de la vida, personas que se dejaban llevar por cosas vanas y al final ellos terminaban mal, pero algo curioso de ellos es que seguían caminando y olvidaban lo que le había pasado, fue entonces que empece a desear ser como ellos, una persona ignorante, quería olvidar que existía Dios, solo quería vivir sin preocupaciones, como lo dijo el filósofo Diogenes de Sinope, "que para alcanzar la felicidad tenemos que vivir como animales", seres que no se preocupaban por el mañana y solo vivía el presente. Sabes , yo pude fingir ser algo que no soy, pero ese saber seguía atormentándome, es algo muy difícil de comprender, algo que para la gente común le tomaría años comprender, pues eso tal vez me hubiese pasado, pero se aplicó en mí esto:"ver para creer", con los milagros vistos, personas sanándose de enfermedades mortales, personas paralíticas que comenzaban a caminar, hasta personas alcohólicas que dejaban el alcohol por seguir a Dios, fue que comprendí la existencia de Dios. Me puse un propósito, que era solo vivir la vida como un ser impulsivo, empezó a tomar acciones impulsivas solo para liberar este estrés dentro de mí, pero estas acciones solo hizo que se malograra mi ser, dentro de mí se estaba destruyendo algo y eso era ni propósito, empece a desear morir, y pues lo intente muchas veces, pero el miedo me retenía, sabía que si me suicidase iría al infierno, todavía había temor dentro de mí, llegue a la conclusión que solo era una falla que cometió Dios, sabiendo que no era así.

                              </p>
                              <div class="blog-box_button">
                                  <label for="leidoBlog2">
                                      <input type="checkbox" name="" id="leidoBlog2">
                                      <div><ion-icon name="checkmark-sharp"></ion-icon></div>
                                      <span>Marcar Leido</span>
                                  </label>
                                  <button class="blog-button" id="blog2ButtonReady">All ready</button>
                              </div>
                          </div>
                      </section>`
  }
  blog2 = document.getElementById("blog2")
  leidoBlog2 = document.getElementById("leidoBlog2");
  setTimeout(()=>{
    const blog2exe = document.getElementById("blog2") 
    blog2ButtonReady = document.getElementById("blog2ButtonReady")

    blog2exe.style.animationName = "translateOpen"
    blog2exe.style.animationDuration = "2s"
    blog2exe.style.animationTimingFunction = "ease-in-out"
    blog2exe.style.transform = "translateY(0)"

    blog2ButtonReady.addEventListener("click" , ()=> {
      blog2exe.style.animationName = "translateClose"
      blog2exe.style.animationDuration = "1s"
      blog2exe.style.animationTimingFunction = "ease-in-out"
      blog2exe.style.transform = "translateY(-120%)"
      subidaBlog()
    })

  }, 100)
})
buttonBlog3.addEventListener("click", ()=>{
  
  if(body.children.blog3){
  }else{
    const blog = document.createElement("section")
    body.appendChild(blog)
    blog.outerHTML = `<section class="container_blog" id="blog3">
                          <div  class="blog">
                              <figure class="blog-box_img" >
                                  <img class="blog-img" src="./img/6d00015ad4dbe16cf96759a180221c3a.jpg" alt="">
                              </figure>
                              <h3 class="blog-tittle">Cap3: <span>Amor</span></h3>
                              <h2 class="blog-subtittle"><span>Temores &</span> Tristesa</h2>
                              <p class="blog-paragraph">
                              Creciendo más, empecé a desear a alguien, no solo porque querer tener un romance, solo deseaba tener a alguien porque quería que me diera un abrazo, quería que golpease mi cabeza diciéndome"todo está bien, no te preocupes que yo estoy aquí, hiciste lo mejor que pudiste", solo desea esas palabras de cualquier persona, no importaba que sea hombre o mujer, solo deseaba eso "compadecimiento y empatía". Mis padres nunca lo hicieron , tampoco hable esto con ellos, pensaba que como son mi padre, algún día se iban a dar cuenta, pero no lo hicieron, caí muy bajo, pero algo surgió dentro de mí, empece a pensar que tal vez mi propósito es hacer feliz a la gente y vivir por su felicidad, lo implemente y lo hice muchas veces con varias personas, pero los sabía muy, aunque me trajese alegría a mi vida, eso solo era temporal, nuevamente empecé a destrozarme poco a poco, yo estaba decidido a quitarme la vida en unos meses o tal vez semanas, pero fue algo como cuando te das cuenta de que te vale madres tu propia vida, antes de suicidarme quería experimentar lo que era tomar y fumar, quería probar un poco de todo, eso solo malogro mi vida. Pero cuando me decidí y me aleje de todos, quise buscar la felicidad por los juegos como última cosa por hacer, así fue como te conocí. Yo por alguna razón (aunque ya se la razón ahora) me interese por ti, te escuche y pues surgió algo que nunca pude sentir, no sabía que era, pero era feliz junto a ti, no quería perderte a ti, porque si lo hiciese, sabía que nunca podría encontrar este hermoso sentimiento, poco después me di cuenta de que te amaba, un sentimiento de amor, no falso, era verdadero, no te veía como era tu rostro ni cuerpo, solo veía te a ti me gustaba todo de ti, sabes no me importaba si eras gordita o de poco atractiva, nada de eso pasó por mi mente, yo solo te quería por tu propia existencia, solo conocerte trajo a mí la mayor felicidad. Sabía que tener una relación a distancia era riesgosa, pero sabía si esas dos personas se aman de verdad, entonces si podían superar ese muro y como un escritor dijo: " La distancia no es un problema, el problema somos los humanos que no sabemos amar sin tocar, sin ver o sin escuchar, el amor se siente con el corazón y no con el cuerpo". Me enamoré completamente de ti.
                              </p>
                              <div class="blog-box_button">
                                  <label for="leidoBlog3">
                                      <input type="checkbox" name="" id="leidoBlog3">
                                      <div><ion-icon name="checkmark-sharp"></ion-icon></div>
                                      <span>Marcar Leido</span>
                                  </label>
                                  <button class="blog-button" id="blog3ButtonReady">All ready</button>
                              </div>
                          </div>
                      </section>>`
  }
  blog3 = document.getElementById("blog3")
  leidoBlog3 = document.getElementById("leidoBlog3");
  setTimeout(()=>{
    const blog3exe = document.getElementById("blog3") 
    blog3ButtonReady = document.getElementById("blog3ButtonReady")

    blog3exe.style.animationName = "translateOpen"
    blog3exe.style.animationDuration = "2s"
    blog3exe.style.animationTimingFunction = "ease-in-out"
    blog3exe.style.transform = "translateY(0)"

    blog3ButtonReady.addEventListener("click" , ()=> {
      blog3exe.style.animationName = "translateClose"
      blog3exe.style.animationDuration = "1s"
      blog3exe.style.animationTimingFunction = "ease-in-out"
      blog3exe.style.transform = "translateY(-120%)"
      subidaBlog()
    })

  }, 100)
})
//  -------------------------------------------------------------------------------------
let leidoBlog1 
let leidoBlog2 
let leidoBlog3 
let blog1 
let blog2 
let blog3 
let booleanButtonDeclaration = false

function subidaBlog(){
  setTimeout(()=>{
    if((blog1.style.transform == "translateY(-120%)") && (blog2.style.transform == "translateY(-120%)") && (blog3.style.transform == "translateY(-120%)") ){
      booleanButtonDeclaration = true
    }
  },1500)
  setTimeout(buttonFinalDeclarationAparecer,1600)
} 
function buttonFinalDeclarationAparecer(){
  if(leidoBlog1.checked && leidoBlog2.checked && leidoBlog3.checked) {
    buttonPresentacionFinalBoxexe.style.opacity = "1"
    buttonPresentacionFinalexe.style.opacity = "1"
    buttonPresentacionFinalBoxexe.style.pointerEvents = "auto"
  }else {
    buttonPresentacionFinalBoxexe.style.opacity = "0"
    buttonPresentacionFinalexe.style.opacity = "0"
    buttonPresentacionFinalBoxexe.style.pointerEvents = "none"
  }
}

//  -------------------------------------------------------------------------------------
const buttonPresentacionFinalexe = document.getElementById("buttonPresentacionFinalexe");
const buttonPresentacionFinalBoxexe = document.getElementById("buttonPresentacionFinalBoxexe");
const presentacionFinalexeET = document.createElement("section");
buttonPresentacionFinalexe.addEventListener("click", ()=> {
  body.removeChild(blog1)
  body.removeChild(blog2)
  body.removeChild(blog3)

  body.appendChild(presentacionFinalexeET)
  presentacionFinalexeET.outerHTML = `<section class="section_declaration"> 
                                      <div class="section_box-container_declaration">
                                          
                                          <div class="box_paragraph">
                                              <h3 class="blog-tittle" id="reparet">CapFinal: <span>Confesión</span></h3>
                                              <h2 class="blog-subtittle"><span>Sentimientos &</span> Finish</h2>       
                                              <!-- <ion-icon name="heart"></ion-icon> -->
                                              <p>"Te quiero desde que te conocí, desde que te metiste dentro de mi corazón, desde que te convertiste en mi ilusión." </p>
                                              <!-- <ion-icon name="heart"></ion-icon> -->
                                          </div>
                                      
                                          <div class="container_box_declaration-icon">
                                              <div class="box_declaration-icon">
                                                  <div class="declaration-icon">
                                                      <span style="--i:1;"></span>
                                                      <span style="--i:2;"></span>
                                                      <span style="--i:3;"></span>
                                                      <span style="--i:4;"></span>
                                                      <span style="--i:5;"></span>
                                                      <span style="--i:6;"></span>
                                                      <span style="--i:7;"></span>
                                                      <span style="--i:8;"></span>
                                                      <span style="--i:9;"></span>
                                                      <span style="--i:10;"></span>
                                                      <span style="--i:11;"></span>
                                                      <span style="--i:12;"></span>
                                                  </div>
                                                  <h3>I LOVE <b>YOU</b><br><i class="fa-solid fa-heart"></i></h3>
                                              </div>
                                          </div>
                                          <div class="container_box_declaration-continue">
                                              <label for="declarationCheck">
                                                  <input type="checkbox" name="" id="declarationCheck">
                                                  <div><i class="fa-solid fa-check"></i></div>
                                                  <span>Marcar Leido</span>
                                              </label>
                                              <button class="blog-button" id="declarationCheckContinue">Continue</button>
                                          </div> 
                                      </section>`
                                  
  let x = "60%"
  let c = "calc(100% + 1px)"
  let v = "-2px"
  let b = "5px 0px 0 var(--clr1) , 5px 0px 0 var(--clr1)"
  let y = "-5px 0px 0 var(--clr1) , -5px 0px 0 var(--clr1)"
  let n = "0s,0.25s,0.5s,0.5s,0.5s" 
  let e = "-1px"
  
  document.styleSheets[0].addRule("#buttonPresentacionFinalexe::before", "transition-delay: " + n + ";");
  document.styleSheets[0].addRule("#buttonPresentacionFinalexe::before", "width: " + x + ";");
  document.styleSheets[0].addRule("#buttonPresentacionFinalexe::before", "height: " + c + ";");
  document.styleSheets[0].addRule("#buttonPresentacionFinalexe::before", "left: " + v + ";");
  document.styleSheets[0].addRule("#buttonPresentacionFinalexe::before", "box-shadow: " + b + ";");
  
  document.styleSheets[0].addRule("#buttonPresentacionFinalexe::after", "transition-delay: " + n + ";");
  document.styleSheets[0].addRule("#buttonPresentacionFinalexe::after", "width: " + x + ";");
  document.styleSheets[0].addRule("#buttonPresentacionFinalexe::after", "height: " + c + ";");
  document.styleSheets[0].addRule("#buttonPresentacionFinalexe::after", "right: " + e + ";");
  document.styleSheets[0].addRule("#buttonPresentacionFinalexe::after", "box-shadow: " + y + ";");
  
  
  let declarationCheckContinue = document.getElementById("declarationCheckContinue");
  declarationCheckContinue.addEventListener("click", ()=>{
  const declarationCheck = document.getElementById("declarationCheck")
  if(declarationCheck.checked){
    // const svg = document.querySelector(".svg")  
    // svg.style.opacity = "0"

    // setTimeout(()=>{
      // const containerboxdeclarationAskAnswer = document.querySelector(".container_box_declaration-ask-answer");
      // containerboxdeclarationAskAnswer.removeChild(svg)
      // const declarationDF1 = document.querySelector(".container_button-declarationFN")  
      // const declarationDF2 = document.querySelector(".container_box_declaration-ask")  
      // const declarationDF3 = document.querySelector(".container_box_declaration-ask-answer figure")  
    
      // declarationDF1.style.opacity = "1" 
      // declarationDF2.style.opacity = "1" 
      // declarationDF3.style.opacity = "1" 
    // },800)
    body.style.transform = "scale(0)"
        setTimeout(()=>{
          body.innerHTML = ""
          const boxMyLove = document.createElement("section")
          body.appendChild(boxMyLove)
          boxMyLove.outerHTML = `   
          <div class="respuesta">
            <h2>
            Gracias, me aseguraré de esforzarme para darte una vida con mucho amor. Bueno, sé que como estamos va a ser difícil, pero como el dicho:"La distancia no es un problema. El problema somos los humanos que no sabemos amar sin tocar, sin ver o escuchar. Y el amor se siente con el corazón, no con el cuerpo."
            </h2>
             </div>`
          body.style.transform = "scale(1)"

        },1000)
  }  

  })
  setTimeout(()=> {
    buttonPresentacionFinalexe.style.boxShadow = "0 0 10px var(--clr1), 0 0 20px var(--clr1), 0 0 30px var(--clr1), 0 0 40px var(--clr1)"
    buttonPresentacionFinalexe.style.color = "#222"
  },750)

  setTimeout(()=>{
    const presentacionFinalexe = document.querySelector(".section_declaration")
    presentacionFinalexe.style.transform = "translateY(0)"
    setTimeout(()=>{
      body.removeChild(buttonPresentacionFinalBoxexe)
    },1000)
  },1000)
  // const buttonDecicionFinalOpcion1 = document.getElementById("buttonDecicionFinalOpcion1")
  // const buttonDecicionFinalOpcion2 = document.getElementById("buttonDecicionFinalOpcion2")
  // function decicionFinalOpcion1(){
  //   buttonDecicionFinalOpcion1.addEventListener("click", ()=>{
  //     body.style.transform = "scale(0)"
  //     body.style.opacity = "0"
  //     setTimeout(()=>{
  //       body.style.transform = "scale(1)"
  //       body.style.opacity = "1"

  //       body.innerHTML = ""
  //       const boxMyLove = document.createElement("section")
  //       boxMyLove.style.opacity = "0"
  //       boxMyLove.style.transition = "0.5s"
  //       body.appendChild(boxMyLove)
  //       boxMyLove.outerHTML = `   
  //       <div class="respuesta">
  //         <h2>
  //             Gracias, me asegurare de esforme para derte una vidad con mucho amor.Bueno se que como estamos va ser dificil pero como el dicho:"La distancia no es un problema.El problemas somos los humanos que no sabemos amar sin tocar, sin ver o escuchar. Y el amor se siente con el corazón, no con el cuerpo."
  //         </h2>
  //       </div>`
  //       setTimeout(()=>{
  //       boxMyLove.style.opacity = "1"

  //       },500)
  //     },1000)
  //   })
  // }
  // decicionFinalOpcion1();
})
//  -------------------------------------------------------------------------------------

//  -------------------------------------------------------------------------------------
// const buttonDecicionFinalOpcion1 = document.getElementById("buttonDecicionFinalOpcion1")
// const buttonDecicionFinalOpcion2 = document.getElementById("buttonDecicionFinalOpcion2")

// function decicionFinalOpcion1(){
//   buttonDecicionFinalOpcion1.addEventListener("click", ()=>{
//     body.style.transform = "scale(0)"
//     setTimeout(()=>{
//       body.innerHTML = ""
//       const boxMyLove = document.createElement("section").classList.add("despedida")
//       body.appendChild(boxMyLove)
//       boxMyLove.outerHTML = `   
//       <div class="respuesta">
//         <h2>
//             Gracias, me asegurare de esforme para derte una vidad con mucho amor.Bueno se que como estamos va ser dificil pero como el dicho:"La distancia no es un problema.El problemas somos los humanos que no sabemos amar sin tocar, sin ver o escuchar. Y el amor se siente con el corazón, no con el cuerpo."
//         </h2>
//       </div>`
//     },1000)
//   })
// }

//  -------------------------------------------------------------------------------------
{/* <div class="container_box_declaration-ask-answer">
                                              <div class="svg">
                                                  <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" id="blobSvg">
                                                      <defs>
                                                        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                                          <stop offset="0%" style="stop-color: rgb(253, 42, 123);"></stop>
                                                          <stop offset="100%" style="stop-color: rgb(252, 34, 34);"></stop>
                                                        </linearGradient>
                                                      </defs>
                                                      <path class="blob" fill="url(#gradient)">
                                                        <animate attributeName="d" dur="5000ms" repeatCount="indefinite" values="M411,299.5Q387,349,353,405.5Q319,462,257.5,439Q196,416,129.5,401Q63,386,66.5,318Q70,250,75,188Q80,126,138,104.5Q196,83,252,77Q308,71,346,111.5Q384,152,409.5,201Q435,250,411,299.5Z;
                                                          
                                                          M430,301.5Q392,353,350.5,392Q309,431,248.5,435.5Q188,440,119.5,417.5Q51,395,70.5,322.5Q90,250,80.5,185Q71,120,129,88.5Q187,57,247.5,63.5Q308,70,345,112Q382,154,425,202Q468,250,430,301.5Z;
                                                          
                                                          M421,304Q399,358,360.5,414.5Q322,471,259,443.5Q196,416,136.5,396Q77,376,76,313Q75,250,96,201.5Q117,153,156,117.5Q195,82,251,79Q307,76,376,92Q445,108,444,179Q443,250,421,304Z;
                                                          
                                                          M417,295Q374,340,341,383.5Q308,427,247.5,434.5Q187,442,138.5,404Q90,366,72,308Q54,250,72.5,192.5Q91,135,134,80Q177,25,244,44Q311,63,341.5,112Q372,161,416,205.5Q460,250,417,295Z;
                                                          
                                                          M411.5,312Q421,374,372,424.5Q323,475,253,466Q183,457,136,412Q89,367,45,308.5Q1,250,39,187Q77,124,133,92.5Q189,61,243.5,82.5Q298,104,370.5,107Q443,110,422.5,180Q402,250,411.5,312Z;
                                                          
                                                          M446,317Q434,384,377,425Q320,466,252,459Q184,452,119.5,421.5Q55,391,40.5,320.5Q26,250,59.5,193Q93,136,145,111Q197,86,247.5,95Q298,104,369,108Q440,112,449,181Q458,250,446,317Z;
                                                          
                                                          M411,299.5Q387,349,353,405.5Q319,462,257.5,439Q196,416,129.5,401Q63,386,66.5,318Q70,250,75,188Q80,126,138,104.5Q196,83,252,77Q308,71,346,111.5Q384,152,409.5,201Q435,250,411,299.5Z">
                                                        </animate>
                                                      </path>
                                                  </svg>
                                                  <h3>
                                                  <span style="--time:1;">E</span>
                                                  <span style="--time:2;">x</span>
                                                  <span style="--time:3;">p</span>
                                                  <span style="--time:4;">e</span>
                                                  <span style="--time:5;">c</span>
                                                  <span style="--time:6;">t</span>
                                                  <span style="--time:7;">i</span>
                                                  <span style="--time:8;">n</span>
                                                  <span style="--time:9;">g</span>
                                                  <span style="--time:10;">.</span>
                                                  <span style="--time:11;">.</span>
                                                  <span style="--time:12;">.</span>

                                              
                                    
                                                  </h3>
                                              </div>
                                              <div class="container_box_declaration-ask">
                                                  <h2 class="blog-subtittle"><span>Do you want to be </span>my girlfriend?</h2>  
                                              </div>
                                              <figure>
                                                  <img src="./img/gato (2).png" alt="">
                                                  <img src="./img/cuidado-de-mascotas.png" alt="">
                                                  <img src="./img/gato (3).png" alt="">
                                              </figure>
                                              <!-- <i class="fa-solid fa-people"></i> -->
                                              <div class="container_button-declarationFN">
                                                  <a href="#" id="buttonDecicionFinalOpcion1">
                                                      <span></span>
                                                      <span></span>
                                                      <span></span>
                                                      <span></span>
                                                      Aceptar
                                                  </a>
                                                  <a href="#" id="buttonDecicionFinalOpcion2">
                                                      <span></span>
                                                      <span></span>
                                                      <span></span>
                                                      <span></span>
                                                      No :c :c
                                                  </a>
                                              </div>
                                          </div>
                                      </div> */}