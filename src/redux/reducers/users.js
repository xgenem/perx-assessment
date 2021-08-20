const ADD = "add";
export const SELECT_USER = "SELECT_USER";

const initialUsersState = {
  users: [],
  selectedUser: null,
};

export const usersReducer = (state = initialUsersState, action) => {
  switch (action.type) {
    case ADD:
      if (state.users.includes(action.payload)) {
        return state;
      } else {
        return { ...state, users: [...state.users, action.payload] };
      }
    case SELECT_USER:
      console.group("state ", state);
      const obj = {
        selectedUser: action.payload,
      };
      return Object.assign({}, state, obj);

    default:
      return state;
  }
};
