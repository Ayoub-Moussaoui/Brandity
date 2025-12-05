

button1 = document.getElementById("H1");

button2 = document.getElementById("H2");

button3 = document.getElementById("H3");


effect1 = document.getElementById("R1");



button9 = document.getElementById("B4");

input = document.getElementById("D1");






button1.addEventListener("mousemove", function(){

    button1.style.color = "red"
    button1.style.opacity = "35%"
    effect1.style.display = "visible"



})


button1.addEventListener("mouseout", function(){

    button1.style.borderColor = "#092767"
    button1.style.opacity = "100%"
    effect1.style.display = "none"


})




button2.addEventListener("mousemove", function(){

    button2.style.borderColor = "white"
    button2.style.opacity = "35%"


})


button2.addEventListener("mouseout", function(){

    button2.style.borderColor = "#092767"
    button2.style.opacity = "100%"


})



button3.addEventListener("mousemove", function(){

    button3.style.borderColor = "white"
    button3.style.opacity = "35%"


})


button3.addEventListener("mouseout", function(){

    button3.style.borderColor = "#092767"
    button3.style.opacity = "100%"

})







sizebox1 = document.getElementById("a1");

const Texe1 = document.getElementById("T1");


sizebox2 = document.getElementById("a2");

const Texe2 = document.getElementById("T2");


sizebox3 = document.getElementById("a3");

const Texe3 = document.getElementById("T3");


sizebox4 = document.getElementById("a4");

const Texe4 = document.getElementById("T4");


sizebox5 = document.getElementById("a5");

const Texe5 = document.getElementById("T5");




sizebox1.addEventListener("click", function(){


sizebox1.style.height = "100px";


Texe1.textContent = "Nous proposons des services de création d'une identité digital"

Texe1.style.fontSize = "15px"

Texe1.style.color = "white"

Texe1.style.opacity = "70%"





});


sizebox1.addEventListener("mouseout", function(){

sizebox1.style.height = "50px";

Texe1.textContent = ""



});


sizebox2.addEventListener("click", function(){


sizebox2.style.height = "100px";


Texe2.textContent = "La période de création elle varie selon vos besoins et aussi selon le plan choisi"

Texe2.style.fontSize = "15px"

Texe2.style.color = "white"

Texe2.style.opacity = "70%"




});


sizebox2.addEventListener("mouseout", function(){

sizebox2.style.height = "50px";

Texe2.textContent = ""



});


sizebox3.addEventListener("click", function(){


sizebox3.style.height = "100px";


Texe3.textContent = "Oui, vérifiez la page des tarifs pour plus des détails"

Texe3.style.fontSize = "15px"

Texe3.style.color = "white"

Texe3.style.opacity = "70%"




});


sizebox3.addEventListener("mouseout", function(){

sizebox3.style.height = "50px";

Texe3.textContent = ""



});


sizebox4.addEventListener("click", function(){


sizebox4.style.height = "100px";


Texe4.textContent = "Oui, notre mission, c'est de créer une identité digitale professionnelle pour votre entreprisee"

Texe4.style.fontSize = "15px"

Texe4.style.color = "white"

Texe4.style.opacity = "70%"




});


sizebox4.addEventListener("mouseout", function(){

sizebox4.style.height = "50px";

Texe4.textContent = ""



});




sizebox5.addEventListener("click", function(){


sizebox5.style.height = "100px";


Texe5.textContent = "Nous avons deux plans chacun avec ses spécifications"

Texe5.style.fontSize = "15px"

Texe5.style.color = "white"

Texe5.style.opacity = "70%"




});


sizebox5.addEventListener("mouseout", function(){

sizebox5.style.height = "50px";

Texe5.textContent = ""



});



