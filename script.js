var sliderl = document.getElementById("myRange").oninput = function slidbrigth() {

  var value = (this.value - this.min) / (this.max - this.min) * 100

  this.style.background = 'linear-gradient(to right, #BF085A 0%' + value + '%, #fff ' + value + '%,#fff 100%)'
}
var sliders = document.getElementById("barrasound").oninput = function slidsound() {
  var value = (this.value - this.min) / (this.max - this.min) * 100

  this.style.background = 'linear-gradient(to right, #BF085A 0%' + value + '%, #fff ' + value + '%,#fff 100%)'
}

//Função dos Sons
function getSoundAndFadeAudio () {

    var sound = document.getElementById("somR");

    // Set the point in playback that fadeout begins. This is for a 2 second fade out.
    var fadePoint = sound.duration - 2; 

    var fadeAudio = setInterval(function () {

        // Only fade if past the fade out point or not at zero already
        if ((sound.currentTime >= fadePoint) && (sound.volume != 0.0)) {
            sound.volume -= 0.1;
        }
        // When volume at zero stop all the intervalling
        if (sound.volume === 0.0) {
            clearInterval(fadeAudio);
        }
    }, 200);

}
function Stop(){
  sndr.pause()

}  
function soundR() {
   // var sndr = new Audio("Musica/C3.mp3");//wav is also supported
   // sndr.play()//plays the sound
    MusicaNOME.textContent = 'Komorebi';
    const foto = document.querySelector(".fotomusica");
    const color = "red";
    foto.style.cssText = `
      background: ${color};
    `;
  }

  function soundG() {
   // var sndg = new Audio("Musica/D3.mp3")//wav is also supported
   // sndg.play()//plays the sound
    MusicaNOME.textContent = 'Opaque';
    const foto = document.querySelector(".fotomusica");
    const color = "green";
    foto.style.cssText = `
      background: ${color};
    `;
  }

  function soundB() {
    //var sndb = new Audio("Musica/E3.mp3")//wav is also supported
   // sndb.play()//plays the sound
    MusicaNOME.textContent = 'Unagi';
    const foto = document.querySelector(".fotomusica");
    const color = "blue";
    foto.style.cssText = `
      background: ${color};
    `;
  }

  function soundP() {
   // var sndp = new Audio("Musica/F3.mp3")//wav is also supported
   // sndp.play()//plays the sound
    MusicaNOME.textContent = 'Perseverance';
    const foto = document.querySelector(".fotomusica");
    const color = "purple";
    foto.style.cssText = `
      background: ${color};
    `;
  }

  function soundY() {
   // var sndy = new Audio("Musica/G3.mp3")//wav is also supported
   // sndy.play()//plays the sound
    MusicaNOME.textContent = 'Environments';
    const foto = document.querySelector(".fotomusica");
    const color = "yellow";
    foto.style.cssText = `
      background: ${color};
    `;
  }
  function soundW() {
  //  var sndw = new Audio("Musica/C4.mp3")//wav is also supported
  // sndw.play()//plays the sound
    MusicaNOME.textContent = 'GrisPt2';
    const foto = document.querySelector(".fotomusica");
    const color = "white";
    foto.style.cssText = `
      background: ${color};
    `;
  }

  function soundBlack() {
  //  var sndw = new Audio("Musica/C4.mp3")//wav is also supported
  // sndw.play()//plays the sound
    MusicaNOME.textContent = 'Nome da Música';
    const foto = document.querySelector(".fotomusica");
    const color = "white";
    foto.style.cssText = `
      background: ${color};
    `;
  }

// Função Sair
function PopSair() {
  document.querySelector(".modalSair").style.display = "grid";
  document.querySelector(".modalSair-mask").style.display = "grid";
};



// Função do Popup dos Termos de uso
function Popup() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}

//Função do Popup do QR Code
function PopQR() {
  var popupQR = document.getElementById("Qrcode");
  popupQR.classList.toggle("show");
}

//Função de coleta e "armazenamento" do nome
function Nome() {
  const Nomeuser = document.getElementById("inNome").value
  console.log(Nomeuser)
  localStorage.setItem("textvalue", Nomeuser);
  return false;
}

//Função do botão de retorno
function retorno() {

}

