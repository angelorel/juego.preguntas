let noButtonClickCount = 0; // Contador para el botÃ³n "No"
let noButtonState = 0; // Estado actual del botÃ³n "No"

// Mostrar el gif inicial
document.getElementById('gifContainer').style.display = 'block';

document.getElementById('siBtn').addEventListener('click', function() {
    // Ocultar el gif triste y mostrar el gif feliz
    document.getElementById('sadGifContainer').style.display = 'none';
    document.getElementById('sadGifContainer1').style.display = 'none';
    document.getElementById('sadGifContainer2').style.display = 'none';
    document.getElementById('gifContainer').style.display = 'none';
    document.getElementById('happyGifContainer').style.display = 'block';

    // Ocultar los botones "Pregunta SÃ­" y "No "
    document.getElementById('question').style.display = 'none';
    document.getElementById('siBtn').style.display = 'none';
    document.body.classList.add('bg-green');
    document.getElementById('noBtn').style.display = 'none';

    // Mostrar el mensaje especÃ­fico
    document.getElementById('messageContainer').style.display = 'block';
    document.getElementById('messageContainer').innerHTML = '¡Oh Siii! jajaja';

    // Mostrar otro gif despuÃ©s de 3 segundos
    setTimeout(function() {
        document.getElementById('happyGifContainer').style.display = 'none';
        document.getElementById('happyGifContainer2').style.display = 'block';
    }, 1000);

    setTimeout(function() {
        document.getElementById('happyGifContainer2').style.display = 'none';
        document.getElementById('happyGifContainer3').style.display = 'block';
    }, 2000);
    setTimeout(function() {
        document.getElementById('happyGifContainer3').style.display = 'none';
        document.getElementById('happyGifContainer4').style.display = 'block';
    }, 3000);
  // Redireccionar después de 5 segundos
setTimeout(function() {
    window.location.href = 'https://wa.me/+50363077486/?text=dije%20que%20si%20jajajajaja'; // Reemplaza con la URL deseada
}, 3000);
});


document.getElementById('noBtn').addEventListener('click', function() {
    switch (noButtonState) {
        case 0:
            // Primera vez haciendo clic en "No"
            document.getElementById('happyGifContainer').style.display = 'none';
            document.getElementById('gifContainer').style.display = 'none';
            document.getElementById('sadGifContainer').style.display = 'block';

            // Modificar el botÃ³n "No"
            document.getElementById('noBtn').innerHTML = 'y porque?';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';
          
            
            document.getElementById('siBtn').style.fontSize = '40px';
            document.getElementById('siBtn').style.padding = '20px 40px';
       
            
           

        
            noButtonClickCount++;
            noButtonState++;
            break;

        case 1:
            // Segunda vez haciendo clic en "No"

            document.getElementById('noBtn').innerHTML ='diga que si';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';
            document.getElementById('sadGifContainer').style.display = 'none';
            document.getElementById('sadGifContainer2').style.display = 'block';

            // Hacer que el botÃ³n "SÃ­" crezca
            document.getElementById('siBtn').style.fontSize = '50px';
            document.getElementById('siBtn').style.padding = '30px 50px';
        
            noButtonState++;
            break;

        case 2:
           
            document.getElementById('noBtn').innerHTML = 'apues me pondre triste  ';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';
            document.getElementById('sadGifContainer').style.display = 'none';
            document.getElementById('sadGifContainer2').style.display = 'none';
            document.getElementById('sadGifContainer1').style.display = 'block';

            // Hacer que el botÃ³n "SÃ­" crezca
            document.getElementById('siBtn').style.fontSize = '60px';
            document.getElementById('siBtn').style.padding = '40px 60px';
        
            noButtonState++;
            break;
        
        case 3:
           
            document.getElementById('noBtn').innerHTML = '¿andele si?';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';

            // Hacer que el botÃ³n "SÃ­" crezca
            document.getElementById('siBtn').style.fontSize = '70px';
            document.getElementById('siBtn').style.padding = '50px 70px';
        
            noButtonState++;
            break;
        case 4:
           
            document.getElementById('noBtn').innerHTML = 'Di que si por favor?';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';

            // Hacer que el botÃ³n "SÃ­" crezca
            document.getElementById('siBtn').style.fontSize = '80px';
            document.getElementById('siBtn').style.padding = '60px 80px';
         
            noButtonState++;
            break;
        case 5:
           
            document.getElementById('noBtn').innerHTML = 'porque no precionas que si';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';

            // Hacer que el botÃ³n "SÃ­" crezca
            document.getElementById('siBtn').style.fontSize = '90px';
            document.getElementById('siBtn').style.padding = '70px 90px';

            noButtonState++;
            break;
        case 6:
           
            document.getElementById('noBtn').innerHTML = 'Si, dices que no estare muy triste';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';

            // Hacer que el botÃ³n "SÃ­" crezca
            document.getElementById('siBtn').style.fontSize = '100px';
            document.getElementById('siBtn').style.padding = '80px 100px';
            
            noButtonState++;
            break;
        case 7:
           
            document.getElementById('noBtn').innerHTML = 'Estare muy triste';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';

            // Hacer que el botÃ³n "SÃ­" crezca
            document.getElementById('siBtn').style.fontSize = '120px';
            document.getElementById('siBtn').style.padding = '90px 120px';
  
            noButtonState++;
            break;
        case 8:
           
            document.getElementById('noBtn').innerHTML = 'Estare muy muy muy triste';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';

            document.getElementById('siBtn').style.fontSize = '140px';
            document.getElementById('siBtn').style.padding = '100px 140px';
       
            noButtonState++;
            break;

        case 9:
           
            document.getElementById('noBtn').innerHTML = 'Estare muy muy muy muy triste.';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';

            // Hacer que el botÃ³n "SÃ­" crezca
            document.getElementById('siBtn').style.fontSize = '160px';
            document.getElementById('siBtn').style.padding = '110px 160px';
          
            noButtonState++;
            break;

        case 10:
           
            document.getElementById('noBtn').innerHTML = 'ok, ya dejare de preguntar...';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';

         
            document.getElementById('siBtn').style.fontSize = '180px';
            document.getElementById('siBtn').style.padding = '120px 180px';
    
            noButtonState++;
            break;
        case 11:
           
            document.getElementById('noBtn').innerHTML = 'Es broma, POR FAVOR DI SI';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';

            document.getElementById('siBtn').style.fontSize = '200px';
            document.getElementById('siBtn').style.padding = '130px 200px';
            
            noButtonState++;
            break;
        
        case 12:
           
            document.getElementById('noBtn').innerHTML = 'Estare muy muy muy muy muy triste.';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';

            // Hacer que el botÃ³n "SÃ­" crezca
            document.getElementById('siBtn').style.fontSize = '220px';
            document.getElementById('siBtn').style.padding = '140px 220px';
    
            noButtonState++;
            break;
        
        case 13:
           
            document.getElementById('noBtn').innerHTML = ' apues no me hable:(';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';

            document.getElementById('siBtn').style.fontSize = '240px';
            document.getElementById('siBtn').style.padding = '150px 240px';
         
            noButtonState++;
            break;
        
        case 14:
           
            document.getElementById('noBtn').innerHTML = 'NO... ya di que si KAREN';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';

            // Hacer que el botÃ³n "SÃ­" crezca
            document.getElementById('siBtn').style.fontSize = '260px';
            document.getElementById('siBtn').style.padding = '160px 260px';
            
            noButtonState++;
            break;
        
        case 15:
           
            document.getElementById('noBtn').innerHTML = 'Anda Siiiiiiiiiiiiiiiiiiiiiiiiiii';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';

            // Hacer que el botÃ³n "SÃ­" crezca
            document.getElementById('siBtn').style.fontSize = '280px';
            document.getElementById('siBtn').style.padding = '170px 280px';
          
            noButtonState++;
            break;
        
     
        case 16:
                document.getElementById('noBtn').innerHTML = 'por favooooooor';
                document.getElementById('noBtn').style.backgroundColor = '#F1330A';
              
                document.getElementById('sadGifContainer').style.display = 'none';
                document.getElementById('sadGifContainer1').style.display = 'none';
                document.getElementById('sadGifContainer2').style.display = 'none';
                document.getElementById('gifContainer').style.display = 'block';
                document.getElementById('happyGifContainer').style.display = 'none';
                // Vuelve al estado 0
                noButtonState = 0;
                break;
        

        default:
            // Por si acaso, maneja cualquier otro caso aquÃ­
            break;
    }
});

  
