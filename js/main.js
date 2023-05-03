(function($) {
	$(function(){
        let singela = $("<audio />");
        let dobrada = $("<audio />");
        let horario;
        let tempo = 0;
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
        function removeHorario(){
            setTimeout(function() {
                $(".hora").fadeOut();
            }, 500);
        }
        function exibeSino(){
            setTimeout(function() {
                $(".sino").show();
            }, 1000);
        }
        function removeSino(tempo){
            setTimeout(function() {
                $(".sino").fadeOut();
            }, tempo); 
        }
        function exibeHora(tempo){
            setTimeout(function() {
                $(".hora").show(); 
            }, tempo); 
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
                case "20:30:00":
                case "00:30:00":
                case "04:30:00":
                    removeHorario();
                    exibeSino();
                    setTimeout(function() {
                        singelaSound();
                        removeSino(1000);
                        exibeHora(2000);
                    },550);
                break;
                case "09:00:00":
                case "13:00:00":
                case "17:00:00":
                case "21:00:00":
                case "01:00:00":
                case "05:00:00":
                    removeHorario();
                    exibeSino();
                    setTimeout(function() {
                        dobradaSound(); 
                        removeSino(1000);
                        exibeHora(2000);
                    },550);
                break;
                case "09:30:00":
                case "13:30:00":
                case "17:30:00":
                case "21:30:00":
                case "01:30:00":
                case "05:30:00":
                    removeHorario();
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
                    tempo = 2000 * 2;      
                    removeSino(tempo);
                    exibeHora(tempo + 1000);
                break;

                case "10:00:00":
                case "14:00:00":
                case "18:00:00":
                case "22:00:00":
                case "02:00:00":
                case "06:00:00":
                    removeHorario();
                    exibeSino();
                    for (let i = 0; i < 2; i++) {
                        setTimeout(function() {
                            dobradaSound();
                        }, i * 2000); // aguarda 2 segundos antes de cada nova reprodução
                    }
                    tempo = 2000 * 2;      
                    removeSino(tempo);
                    exibeHora(tempo + 1000);
                break;
                case "10:30:00":
                case "14:30:00":
                case "18:30:00":
                case "22:30:00":
                case "02:30:00":
                case "06:30:00":
                    removeHorario();
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
                    tempo = 2000 * 3;      
                    removeSino(tempo);
                    exibeHora(tempo + 1000);
                break;
                case "11:00:00":
                case "15:00:00":
                case "19:00:00":
                case "23:00:00":
                case "03:00:00":
                case "07:00:00":
                    removeHorario();
                    exibeSino();
                    for (let i = 0; i < 3; i++) {
                        setTimeout(function() {
                            dobradaSound();
                        }, i * 2000); // aguarda 2 segundos antes de cada nova reprodução
                    }
                    tempo = 2000 * 3;      
                    removeSino(tempo);
                    exibeHora(tempo + 1000);
                break;
                case "11:30:00":
                case "15:30:00":
                case "19:30:00":
                case "23:30:00":
                case "03:30:00":
                case "07:30:00":
                    removeHorario();
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
                    tempo = 2000 * 4;      
                    removeSino(tempo);
                    exibeHora(tempo + 1000);
                break;       
                case "12:00:00":
                case "16:00:00":
                case "20:00:00":
                case "00:00:00":
                case "04:00:00":
                case "08:00:00":
                    removeHorario();
                    exibeSino();
                    for (let i = 0; i < 4; i++) {
                        setTimeout(function() {
                            dobradaSound();
                        }, i * 2000); // aguarda 2 segundos antes de cada nova reprodução
                    }
                    tempo = 2000 * 4;      
                    removeSino(tempo);
                    exibeHora(tempo + 1000);
                break;
            }             
        }  
        atualizarHora();
        setInterval(atualizarHora, 1000);
    })	
	
})(jQuery)

