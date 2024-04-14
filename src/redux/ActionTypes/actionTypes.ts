import { SearchedNewsData } from '../../models/search-data.model';

export enum ActionType {
  GET_REQUEST = 'GET_REQUEST',
  GET_SUCCESS = 'GET_SUCCESS',
  GET_FAILURE = 'GET_FAILURE',
}

interface actionPending {
  type: ActionType.GET_REQUEST;
}

interface actionSuccess {
  type: ActionType.GET_SUCCESS;
  payload: SearchedNewsData[];
}

interface actionFail {
  type: ActionType.GET_FAILURE;
  payload: string;
}

export type Action = actionPending | actionSuccess | actionFail;
