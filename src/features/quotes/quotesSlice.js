// Action Creators
export const addQuote = (quote) => ({ type: "quotes/add", payload: quote });
export const removeQuote = (id) => ({ type: "quotes/remove", payload: id });
export const upvoteQuote = (id) => ({ type: "quotes/upvote", payload: id });
export const downvoteQuote = (id) => ({ type: "quotes/downvote", payload: id });

// Reducer
const initialState = [];

export default function quotesReducer(state = initialState, action) {
  switch (action.type) {
    case "quotes/add":
      return [...state, action.payload];
    case "quotes/remove":
      return state.filter((quote) => quote.id !== action.payload);
    case "quotes/upvote":
      return state.map((quote) => (quote.id === action.payload ? { ...quote, votes: quote.votes + 1 } : quote));
    case "quotes/downvote":
      return state.map((quote) => (quote.id === action.payload ? { ...quote, votes: quote.votes > 0 ? quote.votes - 1 : 0 } : quote));

    default:
      return state;
  }
}
