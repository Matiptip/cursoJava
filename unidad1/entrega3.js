//Protagonist

const protagonist = {
    name : "",
    health : 5,
    gold : 0,
    faithPoints : 0,
    myPets:[],
}

//animals

const cat ={
    name:"Gato",
    health:3,
    power: stealth,

}

const dog ={
    name:"Perro",
    health:4,
    power:protect,
}

const bird={
    name:"Pajaro",
    health:2,
    power:speack,
}
//Caracteristicas por programar para un futuro cercano

var stealth= ""
var protect=""
var speack=""

//Pets
const pets = [cat, dog, bird]

//Enemies

const enemies =[dog, bird]

//Health For Gold

function HxG(){
    protagonist.health -=1;
    protagonist.gold +=1 
    }
//Health for Fait
function HxF(){
protagonist.health-=1;
protagonist.faithPoints+=1;
}
//Warning Health

function ActualH(){
    alert('Salud total: '+ protagonist.health);
}

//purches
function buy(){
    protagonist.gold -=1;
}

// End of parch

function endParch(){
alert("Hasta aca llegamos, espere a la entrega del proximo parche")
}

//Grettings

alert("¡Bienvenidx a tu aventura! este es un juego con el fin de ser un proyecto final para el curso de JavaScript en coder house. Sera un juego de texto interactivo, tus decisiones te llevaran a diferentes finales")
 protagonist.name=prompt('¿Cual es tu nombre?')



//First event
alert('En camino a tu trabajo, un sacerdote te detiene y extendiendo sus manos dice"Dios pone a prueba tu fe de maneras que no comprendemos". En sus manos puedes observar un Flagrum y una bolsa de oro')
let d1 = prompt('Si decides perder 1 punto de salud para ganar 1 de oro por flagelarte, escribe "1". Si decides ignorar al sacerdote escribe "2"')

if (d1==1){
    HxG();
    ActualH();
    protagonist.faithPoints +=1;
let FaithAct = prompt('Tomas el latigo y te flagelas con intencidad, al fin y al cabo nadie quiere enojar a los dioses. Al terminar el cura te tira una moneda y sin titubear te dice "Sigue" 1 para seguir, 2 para tomar el oro e irte.')
if(FaithAct==2){
    alert('Decides que has tenido suficiente, Recojes el oro y le sonries tibiamente al monje mientras te retiras, esperando que este te deje en paz.');

}
while (FaithAct==1 && protagonist.health>0){
  HxF();
  ActualH();
    alert("Con cada flagelo, puedes sentir como tu cuerpo se siente mas distante, mas ligero. Ya no controlas tus manos, es como si una fuerza divina hubiera ganado control sobre tu cuerpo");
};

}
else if(d1==2){
   alert("Decides ignorar al cura, parece que dios lo ha abandonado y no esta en sus cabales.")
}

if(protagonist.health<=0){
    alert(protagonist.name +" "+'tu cuerpo ha llegado a tu limite. Colapsas en el suelo mientras observas como poco a poco el paisaje se vuelve difuso poco a poco, hasta que cierras los ojos para nunca volverlos a abrir. GAME OVER.')
}
//Second event

alert('Ya en el centro de la ciudad un comerciante llama tu atención, te está invitando a ver su mercancía.')

alert('Cuando te acercas puedes notar que es un vendedor de animales, teniendo criaturas de todo tipo. Aún no posees licencia para domesticar dragones, así que te acercas a los clásicos')

alert('Hay 3 jaulas, en la primera se encuentra un pequeño gato tricolor, cuyos ojos lloran por mimos, su precio es 1 de oro. Mientras tanto en otra jaula hay un perro adulto que te mira fijamente sentado, su jaula dice "Llevame gratis, soy adulto pero aun tengo mucho por vivir"')

alert('En la ultima jaula se encuentra un loro, que ni bien acercarte te insulta tanto a ti como a todos tus ancestros. El cartel solo dice "No se aceptan devoluciones de Gertudis"')
let petPurchess=prompt('Escribe 1 para comprar el gato, 2 para adoptar al perro o 3 para tener un dolor de cabeza constante con alas. Tambien puedes optar por 4 y pasar la vida solo/a')

//adopcion gato

if (petPurchess == 1 && protagonist.gold >= 1){
    alert(" No pasa ni 1 segundo al abrir la jaula y ya le tienes al pequeño mamífero ronroneando mientras se refriega contra tus botas. Sin duda tienes un compañero para toda la vida")
protagonist.myPets.push(cat);
pets.shift();
protagonist.myPets[0].name = prompt("¿Que nombre quieres ponerle al michi?");
alert(protagonist.myPets[0].name +" parece gustarle su nombre");
protagonist.gold -=1;
endParch();
}
else if(petPurchess==1 && protagonist.gold<=0){
    alert("Al revisar tu billetera no cuentas con el dinero suficiente. Te retiras rapidamente antes que nadie pueda notar tu pobreza")
    endParch();
}

//adopcion perro

if(petPurchess==2){
    protagonist.myPets.push(dog);
    pets.splice(1,1);
    alert('Le abren la jaula al perro y este lentamente sale, te mira con una expresión feliz y toma asiento a tu lado.')
    protagonist.myPets[0].name = prompt("¿Que nombre quieres ponerle al perro?");
    alert(protagonist.myPets[0].name +" parece gustarle su nombre, esta moviendo la cola al escucharte.")
    endParch();
}
//adopcion pajaro

if(petPurchess==3){
    protagonist.myPets.push(bird);
    pets.pop();
    protagonist.myPets[0].name = "Gertrudis";
    alert('"Gertrudis no reconocerá otro nombre que no sea el propio"te dice el mercader mientras a los empujones te echa de la tienda"NO DEVOLUCIONES"')
    alert('Gertudris se posa en tu hombro y no deja de buscar tu contacto visual, interponiéndose en tu campo visual. Esta será una relación curiosa')
    endParch()
}
if(petPurchess==4){
    alert("Decides no comprar o adoptar nada, suficiente tienes con tus sufrimientos como para tener que hacerse cargo de otro ser vivo.")
    endParch
}
//ThirdEvent

