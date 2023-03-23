import { pedirCarta } from "./pedir-carta";
import { acumularPuntos } from "./acmular-puntos";
import { crearCarta } from "./crear-carta";
/**
 * 
 * @param {Number} puntosMinimos 
 * @param {Array<string>} deck 
 * @param {Number} puntosJugadores 
 * @param {HTMLElement} divCartasJugadores 
 */
export const turnoComputadora = (puntosMinimos, deck, puntosJugadores, divCartasJugadores) => {

    if(!puntosMinimos) throw new Error('puntosMinimos es obligatorio');
    if(!puntosJugadores) throw new Error('puntosJugadores es obligatorio');
    if(deck.length === 0) throw new Error('deck es obligatorio');

    let puntosComputadora = 0;
    do {
        const carta = pedirCarta(deck);
        puntosComputadora = acumularPuntos(carta, puntosJugadores.length - 1, puntosJugadores);
        crearCarta(carta, puntosJugadores.length - 1, divCartasJugadores);

    } while ( (puntosComputadora < puntosMinimos) && (puntosMinimos <= 21) );
    
    determinarGanador(puntosJugadores);
}

const determinarGanador = (puntosJugadores) => {
    const [puntosMinimos, puntosComputadora] = puntosJugadores;
    setTimeout(() =>{
        const alertGanador = (puntosComputadora === puntosMinimos) ?'empate!'
        :(puntosComputadora > 21) ? 'Ganaste!'
        :(puntosComputadora > puntosMinimos) ? 'Lo siento, gano la computadora' 
        :(puntosMinimos > 21) ? 'Lo siento, gano la computadora!'
        :(puntosMinimos > puntosComputadora) ? 'Ganaste' : 'Lo siento, gano la computadora!'

        alert(alertGanador);
}, 10)

}