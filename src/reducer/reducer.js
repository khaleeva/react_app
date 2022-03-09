export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const SET_USERS = "SET_USERS";
export const SET_USER = "SET_USER";
export const EDIT_USERS = "EDIT_USERS ";
export const DELETE_USERS = "DELETE_USERS ";
export const ADD_USERS = "ADD_USERS ";

export const setAllUsers = (users = []) =>({
    type: SET_USERS,
    data: users,
})


export const reducer = (state, action) => {

        switch (action.type) {
            case LOGIN:
                return {...state, auth: action.data};
            case LOGOUT:
                return {...state, auth: action.data};
            case SET_USERS:
                return {...state, users: action.data};
            case SET_USER:
                return {...state, users: action.data};
            default:
                throw new Error();
        }
}