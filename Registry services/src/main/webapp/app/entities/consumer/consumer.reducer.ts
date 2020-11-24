import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';

import { IConsumer, defaultValue } from 'app/shared/model/consumer.model';

export const ACTION_TYPES = {
  FETCH_CONSUMER_LIST: 'consumer/FETCH_CONSUMER_LIST',
  FETCH_CONSUMER: 'consumer/FETCH_CONSUMER',
  CREATE_CONSUMER: 'consumer/CREATE_CONSUMER',
  UPDATE_CONSUMER: 'consumer/UPDATE_CONSUMER',
  DELETE_CONSUMER: 'consumer/DELETE_CONSUMER',
  RESET: 'consumer/RESET',
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<IConsumer>,
  entity: defaultValue,
  updating: false,
  updateSuccess: false,
};

export type ConsumerState = Readonly<typeof initialState>;

// Reducer

export default (state: ConsumerState = initialState, action): ConsumerState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_CONSUMER_LIST):
    case REQUEST(ACTION_TYPES.FETCH_CONSUMER):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true,
      };
    case REQUEST(ACTION_TYPES.CREATE_CONSUMER):
    case REQUEST(ACTION_TYPES.UPDATE_CONSUMER):
    case REQUEST(ACTION_TYPES.DELETE_CONSUMER):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true,
      };
    case FAILURE(ACTION_TYPES.FETCH_CONSUMER_LIST):
    case FAILURE(ACTION_TYPES.FETCH_CONSUMER):
    case FAILURE(ACTION_TYPES.CREATE_CONSUMER):
    case FAILURE(ACTION_TYPES.UPDATE_CONSUMER):
    case FAILURE(ACTION_TYPES.DELETE_CONSUMER):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload,
      };
    case SUCCESS(ACTION_TYPES.FETCH_CONSUMER_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.FETCH_CONSUMER):
      return {
        ...state,
        loading: false,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.CREATE_CONSUMER):
    case SUCCESS(ACTION_TYPES.UPDATE_CONSUMER):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.DELETE_CONSUMER):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: {},
      };
    case ACTION_TYPES.RESET:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

const apiUrl = 'api/consumers';

// Actions

export const getEntities: ICrudGetAllAction<IConsumer> = (page, size, sort) => ({
  type: ACTION_TYPES.FETCH_CONSUMER_LIST,
  payload: axios.get<IConsumer>(`${apiUrl}?cacheBuster=${new Date().getTime()}`),
});

export const getEntity: ICrudGetAction<IConsumer> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_CONSUMER,
    payload: axios.get<IConsumer>(requestUrl),
  };
};

export const createEntity: ICrudPutAction<IConsumer> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_CONSUMER,
    payload: axios.post(apiUrl, cleanEntity(entity)),
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<IConsumer> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_CONSUMER,
    payload: axios.put(apiUrl, cleanEntity(entity)),
  });
  return result;
};

export const deleteEntity: ICrudDeleteAction<IConsumer> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_CONSUMER,
    payload: axios.delete(requestUrl),
  });
  dispatch(getEntities());
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET,
});
