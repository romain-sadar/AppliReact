import { createStore } from "redux";

const initialState = {
  users: [],
  loggedUser: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "REGISTER_USER":
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    default:
      return state;
  }
};

export default createStore(reducer);
