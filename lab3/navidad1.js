      
     function navidad(){ 

      let Hoy=new Date()
      let fecha_final=new Date(Hoy.getFullYear(), 11, 25)
      let mseg_dia=1000*60*60*24
      let dias
      if (Hoy.getMonth()==11 && Hoy.getDate()>25)
          fecha_final.setFullYear(fecha_final.getFullYear()+1) 
          dias = Math.ceil((fecha_final.getTime()-Hoy.getTime())/(mseg_dia))
          console.log("Faltan "+dias+" días para que sea Navidad")
     }
     
     navidad();