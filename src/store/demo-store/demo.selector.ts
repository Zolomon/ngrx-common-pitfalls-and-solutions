import { MemoizedSelector, createSelector } from '@ngrx/store';
import { getPerson as getPersonQuery } from './demo.query';

export const getPerson = createSelector(
  getPersonQuery
);
