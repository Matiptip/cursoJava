const name = prompt("introduce tu nombre aqui")
let health = 5
let gold = 0
let faithPoints = 0

//Health For Gold

function HxG(){
        health -=1;
        gold +=1 
    }
//Health for Fait
function HxF(){
health-=1;
faithPoints+=1;
}
//Aviso Salud

function ActualH(){
    alert(`Salud total: ${health}`);
}

//Hasta aca llegamos

function endParch(){
alert("Hasta aca llegamos, espere a la entrega del proximo parche")
}

//First event
alert('En camino a tu trabajo, un sacerdote te detiene y extendiendo sus manos dice"Dios pone a prueba tu fe de maneras que no comprendemos". En sus manos puedes observar un Flagrum y una bolsa de oro')
let d1 = prompt('Si decides perder 1 punto de salud para ganar 1 de oro por flagelarte, escribe "1". Si decides ignorar al sacerdote escribe "2"')

if (d1==1){
    HxG();
    ActualH();
    faithPoints +=1;
let FaithAct = prompt('Tomas el latigo y te flagelas con intencidad, al fin y al cabo nadie quiere enojar a los dioses. Al terminar el cura te tira una moneda y sin titubear te dice "Sigue" 1 para seguir, 2 para tomar el oro e irte.')
if(FaithAct==2){
    alert('Decides que has tenido suficiente, Recojes el oro y le sonries tibiamente al monje mientras te retiras, esperando que este te deje en paz.');
    endParch();

}
while (FaithAct==1 && health>0){
  HxF();
  ActualH();
    alert("Con cada flagelo, puedes sentir como tu cuerpo se siente mas distante, mas ligero. Ya no controlas tus manos, es como si una fuerza divina hubiera ganado control sobre tu cuerpo");
};

}
else if(d1==2){
   endParch;
}

if(health<=0){
    alert(`${name} tu cuerpo ha llegado a tu limite. Colapsas en el suelo mientras observas como poco a poco el paisaje se vuelve difuso poco a poco, hasta que cierras los ojos para nunca volverlos a abrir. GAME OVER.`)
}

//Second event
