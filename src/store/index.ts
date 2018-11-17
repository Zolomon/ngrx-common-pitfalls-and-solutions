import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../environments/environment';
import { DemoStoreState, DemoStoreReducer } from './demo-store';

// tslint:disable-next-line:no-empty-interface
export interface State {
  demo: DemoStoreState.State;
}

export const reducers: ActionReducerMap<State> = {
  demo: DemoStoreReducer.reducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
