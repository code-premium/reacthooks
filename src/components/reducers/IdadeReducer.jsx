function IdadeReducer(state, action) {
  switch (action.type) {
    case "somar":
      return state + 5;
    case "subtrair":
      return state - 2;
    default:
      return state;
  }
}
export default IdadeReducer;
