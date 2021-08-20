const ADD = "add";

const initialUsersState = {
  users: [],
};

export const usersReducer = (state = initialUsersState, action) => {
  switch (action.type) {
    case ADD:
      if (state.users.includes(action.payload)) {
        return state;
      } else {
        return { ...state, users: [...state.users, action.payload] };
      }
    default:
      return state;
  }
};
