const initialState = {
    username: '', // Valeur initial username
    firstname: '', // Valur initial firstname
    lastname: '', // Valur initial lastname
}

const userReducer = (state = initialState, action) => {
    switch(action.type){
        case 'SET_USER': // Définit les infos de l'utilisateur
            return {
                ...state,
                username: action.payload.username, // Met à jour le username
                firstname: action.payload.firstname, // Met à jour le firstname
                lastname: action.payload.lastname, // Met à jour le lastname
            }
        case 'LOGOUT': // Déconnexion de l'utilisateur
            return initialState; // Retour à l'état initial
        default:
            return state;
    }
}

export default userReducer