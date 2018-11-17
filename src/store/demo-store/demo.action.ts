import { Action } from '@ngrx/store';


export enum ActionTypes {
  UPDATE_STATE = '[DemoState] Update person'
}

export class UpdatePersonAction implements Action {
  readonly type = ActionTypes.UPDATE_STATE;

  constructor(public payload: {age: number}) { }
}

export type DemoActions = UpdatePersonAction;
