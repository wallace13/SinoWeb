
(function($) {
	
	$(function(){
        let singela = $("<audio />");
        let dobrada = $("<audio />");
        let horario;
        function singelaSound() {			
            singela.attr({
                "src": "sound/singela.wav", 
                "type": "audio/mp3"
            })
            
            singela[0].play(); // reproduz o áudio
            singela[0].addEventListener('ended', function() {
                singela[0].currentTime = 0; // reinicia o tempo de reprodução
                singela[0].pause(); // pausa o áudio
            }, false);

        }
        function dobradaSound() {			
            dobrada.attr({
                "src": "sound/dobrada.wav", 
                "type": "audio/mp3"
            })
            dobrada[0].play(); // reproduz o áudio
            dobrada[0].addEventListener('ended', function() {
                dobrada[0].currentTime = 0; // reinicia o tempo de reprodução
                dobrada[0].pause(); // pausa o áudio
            }, false);
        }
        function corrigirHora(numero) {
            if (numero < 10) {
                numero = "0" + numero;
            }
            return numero;
        }
        function exibeSino(){
            $(".hora").fadeOut(); //Faz a div do horario desaparecer
            setTimeout(function() {
                $(".sino").show(); //Mostra a div do sino
            }, 1000);
        }
        function exibeHora(){
            setTimeout(function() {
                $(".sino").fadeOut(); //Faz a div do sino desaparecer
            }, 3000);
            setTimeout(function() {
                $(".hora").show(); //Mostra a div do horario
            }, 4000);
        }
        function atualizarHora() {
            let agora = new Date();
            let hora = agora.getHours();
            let minutos = agora.getMinutes();
            let segundos = agora.getSeconds();

            horario = document.querySelector(".hora");        
            horario.textContent = corrigirHora(hora)+":"+corrigirHora(minutos)+":"+corrigirHora(segundos);
                           
            let horaAtual = corrigirHora(hora)+":"+corrigirHora(minutos)+":"+corrigirHora(segundos);
            switch(horaAtual) {
                case "08:30:00":
                case "12:30:00":
                case "16:30:00":
                    exibeSino();
                    singelaSound();
                    exibeHora();
                break;
                case "09:00:00":
                case "13:00:00":
                case "17:00:00":
                    exibeSino();
                    dobradaSound(); 
                    exibeHora();  
                break;
                case "09:30:00":
                case "13:30:00":
                case "17:30:00":
                    exibeSino();
                    for (let i = 0; i < 2; i++) {
                        setTimeout(function() {
                            if (i < 1) {
                                dobradaSound();
                            }else if (i === 1) {
                                singelaSound();
                            }
                            
                        }, i * 2000); // aguarda 2 segundos antes de cada nova reprodução
                    } 
                    exibeHora();
                break;

                case "10:00:00":
                case "14:00:00":
                case "18:00:00":
                    exibeSino();
                    for (let i = 0; i < 2; i++) {
                        setTimeout(function() {
                            dobradaSound();
                        }, i * 2000); // aguarda 2 segundos antes de cada nova reprodução
                    }
                    exibeHora();
                break;
                case "10:30:00":
                case "14:30:00":
                case "18:30:00":
                    exibeSino();
                    for (let i = 0; i < 3; i++) {
                        setTimeout(function() {
                            if (i < 2) {
                                dobradaSound();
                            }else if (i === 2) {
                                singelaSound();
                            }
                        }, i * 2000); // aguarda 2 segundos antes de cada nova reprodução
                    }
                    exibeHora();
                break;
                case "11:00:00":
                case "15:00:00":
                case "19:00:00":
                    exibeSino();
                    for (let i = 0; i < 3; i++) {
                        setTimeout(function() {
                            dobradaSound();
                        }, i * 2000); // aguarda 2 segundos antes de cada nova reprodução
                    }
                    exibeHora();
                break;
                case "11:30:00":
                case "15:30:00":
                case "19:30:00":
                    exibeSino();
                    for (let i = 0; i < 4; i++) {
                        setTimeout(function() {
                            if (i < 3) {
                                dobradaSound();
                            }else if (i === 3) {
                                singelaSound();
                            }
                        }, i * 2000); // aguarda 2 segundos antes de cada nova reprodução
                    }
                    exibeHora();
                break;          
                case "12:00:00":
                case "16:00:00":
                case "20:00:00":
                    exibeSino();
                    for (let i = 0; i < 4; i++) {
                        setTimeout(function() {
                            dobradaSound();
                        }, i * 2000); // aguarda 2 segundos antes de cada nova reprodução
                    }
                    exibeHora();
                break;
            }             
        }  
        atualizarHora();
        setInterval(atualizarHora, 1000);
    })	
	
})(jQuery)

