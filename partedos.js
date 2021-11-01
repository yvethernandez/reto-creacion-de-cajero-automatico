
function consulta_de_saldo(){

    var opcion = 0;
    var saldoa = 200;
    var retiro = 0;

    opcion = parseInt(prompt("Si dijiste consulta saldo actual, ingresa 1: "));
                 
   if(opcion == 1){
    document.write("Tu saldo actual es: " + saldoa);
   }
   if(opcion == 2){    
  
    while (retiro>saldoa || retiro==0 || (retiro%50) != 0 ) {
     retiro=parseInt(prompt("Cuanto vas a retirar"));
       }
          
    document.write("Tu saldo actual es: " + saldoa);
      }
}
 
 function retiro_de_saldo(){

    var opcion = 0;
    var saldoa = 200;
    var retiro = 0;

    opcion = parseInt(prompt("Si dijiste retiro de saldo, ingresa 2: "));
                 
   if(opcion == 2){    
    retiro = parseInt(prompt("Ingresa saldo que desea retirar: "));
     saldoa = saldoa - retiro;
       document.write("Tu saldo actual es: " + saldoa);
       if(saldoa > 990){
        alert("Tu cuenta no puede tener mas de $990");
    }
    if(saldoa < 10){
        alert("Tu cuenta no puede tener menos de $10");
    }
     }
    }
    
    function deposito(){

        var opcion = 0;
        var saldoa = 200;
        var deposito = 0;

        opcion = parseInt(prompt("Si dijiste deposito de  saldo, ingresa 3: "));

        if(opcion == 3){
            deposito = parseInt(prompt("Cuanto depositas: "));
            saldoa = saldoa + deposito;
            document.write("Tu saldo actual es: " + saldoa);
        if(saldoa > 990){
            alert("Tu cuenta no puede tener mas de $990");
        }
        if(saldoa < 10){
            alert("Tu cuenta no puede tener menos de $10");
        }
 }
     }