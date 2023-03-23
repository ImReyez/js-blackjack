/**
 * 
 * @param {string} carta 
 * @param {Number} turno 
 * @param {Array} divCartasJugadores 
 */
export const crearCarta = (carta, turno, divCartasJugadores) =>{
    if( !carta ) throw new Error('carta es obligatorio');
    //if( !turno ) throw new Error('turno es obligatorio');

    const imgCarta = document.createElement('img');
    imgCarta.src=`assets/cartas/${carta}.png`;
    imgCarta.classList.add('cartas');
    divCartasJugadores[turno].append(imgCarta);
}