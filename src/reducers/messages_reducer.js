import { FETCH_MESSAGES } from '../actions';

export default function(state = null , action) {
  switch (action.type) {
    case FETCH_MESSAGES: {
      return action.payload.messages;
      console.log(action.payload.messages)
    }

    default:
      return state;
  }
}


// export default function(state, action) {
//   if (state = null) {
//     return [];
//   }
//   switch (action.type) {
//     default:
//       return state;
//   }
// }
