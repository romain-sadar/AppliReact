const initialState = [];

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_POST":
      return [...state, action.payload];
    case "DELETE_POST":
      console.log(action.payload);
      return state.filter((post) => post.id !== action.payload);
    default:
      return state;
  }
};

export const addPost = (post) => ({
  type: "ADD_POST",
  payload: post,
});

export const deletePost = (id) => ({
  type: "DELETE_POST",
  payload: id,
});

export default postReducer;
