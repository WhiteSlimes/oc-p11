const initialState = {
    token: '', //Valeur de départ du token d'authentification
}
const authentificationReducer = (state = initialState, action) => {
    switch(action.type){
        case 'LOGIN': // Action de connexion
            return{
                ...state,
                token: action.payload.token, // Met à jour la valeur du token
            };
        case 'LOGOUT': // Action de déconnexion
            return initialState; // Réinitialise à la valeur initial
        default:
            return state;
    }
}

export default authentificationReducer