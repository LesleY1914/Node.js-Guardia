let edad = prompt("¿Cual es tu edad?");

let edadminima = new Promise((resolve, reject)=>{
        
if (edad >= 18){
  resolve("Bienvenido al bar!, puedes pasar");
}
else if (edad < 18){
  reject("No puedes pasar, eres menor de edad");
  }
else{
  reject("No puedes pasar, edad invalida")
  }
});

edadminima.then((valor)=>{
  console.log(valor);
}).catch((err)=>{
  console.error(err);
})