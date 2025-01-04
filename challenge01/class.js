// aulas/COMPLETAR_AULA(id), completa a aula com base no ID passado
// aulas/COMPLETAR_CURSO, completa todas as aulas
// aulas/RESETAR_CURSO, reseta todas as aulas completas

//CONSTANTES
const COMPLETAR_AULA = 'class/COMPLETAR_AULA'
const COMPLETAR_CURSO = 'class/COMPLETAR_CURSO'
const RESETAR_CURSO = 'class/RESETAR_CURSO'

//ESTADO INICIAL
const initialState = [
    {
        id: 1,
        nome: 'Design',
        completa: true,
    },
    {
        id: 2,
        nome: 'HTML',
        completa: false,
    },
    {
        id: 3,
        nome: 'CSS',
        completa: false,
    },
    {
        id: 4,
        nome: 'JavaScript',
        completa: false,
    },
];

//ACTIONS CREATORS
export function completarAula(id) {
    return {
        type: COMPLETAR_AULA,
        payload: id,
    }
}

export function completarCurso() {
    return {
        type: COMPLETAR_CURSO,
    }
}

export function resetarCurso() {
    return {
        type: RESETAR_CURSO,
    }
}

//REDUCER
const reducerClass = immer.produce((state, action) => {
    if (action.type === COMPLETAR_AULA) {
        state.forEach((item) => {
            if (item.id === action.payload) {
                item.completa = true;
            }
        })
    }

    if (action.type === COMPLETAR_CURSO) {
        state.forEach((item) => {
            item.completa = true;
        })
    }

    if (action.type === RESETAR_CURSO) {
        state.forEach((item) => {
            if (item.completa) {
                item.completa = false;
            }
        })
    }
}, initialState)

export default reducerClass;