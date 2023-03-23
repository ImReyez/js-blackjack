import _ from 'underscore';

import { crearDeck, pedirCarta , turnoComputadora, crearCarta, acumularPuntos } from './usecases';

const miModulo =(() => {
  'use stric'
  
  let deck = [];
  const tipos = ['C', 'D', 'H', 'S'],
        especiales = ['A', 'J', 'Q', 'K'];

  // let puntosJugador = 0,
  //     puntosComputadora = 0;

  let puntosJugadores = [];

  //Referencias
  const btnPedir = document.querySelector('#btnPedir'),
        btnDetener = document.querySelector('#btnDetener'),
        btnNuevo = document.querySelector('#btnNuevo'),
        puntosHTML = document.querySelectorAll('small'),
        divCartasJugadores = document.querySelectorAll('.divCartas');

  const inicializarJuego = ( numJugadores = 2 ) => {
     deck =  crearDeck(tipos, especiales);

     puntosJugadores = [];
     for(let i = 0; i < numJugadores; i++){
          puntosJugadores.push(0);
     }

     puntosHTML.forEach( elem => elem.innerText = 0 );
     divCartasJugadores.forEach( elem => elem.innerHTML = '' );

     btnPedir.disabled = false;
     btnDetener.disabled = false;

     console.clear();

  }
  
  //Eventos
  btnPedir.addEventListener('click', () => {

      const carta = pedirCarta(deck);
      const puntosJugador = acumularPuntos(carta, 0, puntosJugadores);
      
      crearCarta(carta, 0, divCartasJugadores);

      if(puntosJugador > 21){
          console.warn('Lo sient, perdiste');
          btnPedir.disabled = true;
          btnDetener.disabled = true;
          turnoComputadora(puntosJugador, deck, puntosJugadores, divCartasJugadores);
      }else if(puntosJugador === 21){
          console.warn('Ya ganaste!');
          btnPedir.disabled = true;
          btnDetener.disabled = true;
          turnoComputadora(puntosJugador, deck, puntosJugadores, divCartasJugadores);
      }
  });

  btnDetener.addEventListener('click', () => {

      btnPedir.disabled = true;
      btnDetener.disabled = true;
      turnoComputadora(puntosJugadores[0],  deck, puntosJugadores, divCartasJugadores);
  });

  btnNuevo.addEventListener('click', () => {

      inicializarJuego();
      
  })

  return {
      nuevoJuego: inicializarJuego
  };

})();



