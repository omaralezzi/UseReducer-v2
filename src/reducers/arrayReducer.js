export const arrayReducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD":
      // return [payload,...state] to reverse the array
      return [...state, payload];
    default:
      return state;
  }
};
