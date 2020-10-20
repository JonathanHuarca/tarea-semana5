
let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

function mes(fecha) {


   if(fecha>0 && fecha<13){
    for (i = 0; i < meses.length; i++){

        
        if(fecha==i+1){

            var date = new Date(2020,i,4);
            var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
            var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
            console.log("Primer día "+firstDay+", Ultimo día "+lastDay+" del mes de " + meses[i])

        }
    }
       
    } else{
        console.log("Ingrese un valor valido para la fecha ejemplo: 1,2,3...12")
    }

}
mes(12) ;

