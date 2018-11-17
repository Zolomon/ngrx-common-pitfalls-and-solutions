import { initialState } from './demo.state';
import { DemoActions, ActionTypes } from './demo.action';

export function reducer(state = initialState, action: DemoActions) {
  switch (action.type) {
    case ActionTypes.UPDATE_STATE: {
      return { ...state, person: state.person.age + action.payload.age };
    }

    default:
      return state;
  }
}
