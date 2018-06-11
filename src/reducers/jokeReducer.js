import { FETCH_JOKE, FETCH_TENJOKES } from '../actions/types'

const initialState = {
    lineBreak: '-----------',
    jokeSetup: [],
    jokePunchline: [],
    jokeStash: []
}
export default function(state = initialState, action) {
    switch (action.type) {
      case FETCH_JOKE:
      {console.log(action.payload.setup);
      let a = action.payload.setup.slice();
      let b = action.payload.setup.slice();
      a = [];
      b = [];
      a[0] = action.payload.setup;
      b[0] = action.payload.punchline;

          return {
            ...state,
            jokeSetup: a,
            jokePunchline: b,
            jokeStash: []
          }}
      case FETCH_TENJOKES:
      {
      console.log(action.payload);
          return {
            ...state,
            jokeStash: action.payload,
            jokeSetup: [],
            jokePunchline: []

          }}
      default:
          return state
        }
      }
