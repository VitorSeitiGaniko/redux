//CONSTANTES
const INCREMENTAR_TEMPO = 'student/INCREMENTAR_TEMPO'
const REDUZIR_TEMPO = 'student/REDUZIR_TEMPO'
const MODIFICAR_EMAIL = 'student/MODIFICAR_EMAIL'

//ESTADO INICIAL
const initialState = {
    nome: 'André Rafael',
    email: 'andre@origamid.com',
    diasRestantes: 120,
};

//ACTIONS CREATORS
export function incrementarTempo() {
    return {
        type: INCREMENTAR_TEMPO,
    }
}

export function reduzirTempo() {
    return {
        type: REDUZIR_TEMPO,
    }
}

export function modificarEmail(email) {
    return {
        type: MODIFICAR_EMAIL,
        payload: email,
    }
}

//REDUCER
const reducerStudent = immer.produce((state, action) => {
    if (action.type === INCREMENTAR_TEMPO) {
        state.diasRestantes += 1;
    }

    if (action.type === REDUZIR_TEMPO) {
        state.diasRestantes -= 1;
    }

    if (action.type === MODIFICAR_EMAIL) {
        state.email = action.payload;
    }
}, initialState)

export default reducerStudent;