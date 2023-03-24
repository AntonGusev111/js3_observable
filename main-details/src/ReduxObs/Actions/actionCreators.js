import {
    GET_SERVICES_REQUEST,
    GET_SERVICES_FAILURE,
    GET_SERVICES_SUCCESS,
    GET_SINGLE_REQUEST,
    GET_SINGLE_FAILURE,
    GET_SINGLE_SUCCESS
} from './actionTypes';

export const getServicesRequest = services => ({
    type: GET_SERVICES_REQUEST,
    payload: {services},
  });

export const getServicesFailure = error  => ({
    type: GET_SERVICES_FAILURE,
    payload: {error },
  });

export const getServicesSuccess = items   => ({
    type: GET_SERVICES_SUCCESS,
    payload: {items  },
  });

export const getSinglesRequest = id => ({
    type: GET_SINGLE_REQUEST,
    payload: {id},
  });

export const getSinglesFailure = error  => ({
    type: GET_SINGLE_FAILURE,
    payload: {error },
  });

export const getSinglesSuccess = items   => ({
    type: GET_SINGLE_SUCCESS,
    payload: {items  },
  });
