const initialState = {
    token: '', //Valeur de départ du token d'authentification
}

export const loginSuccess = (token) => ({
    type: 'LOGIN_SUCCESS',
    payload: { token },
  });

const authReducer = (state = initialState, action) => {
    switch(action.type){
        case 'LOGIN_SUCCESS': // Action de connexion
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

export default authReducer