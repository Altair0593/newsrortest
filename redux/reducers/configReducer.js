import actionTypes from '../actionsType/actionTypes';
import configData from 'constants/config';

const { defaultLocale } = configData;

export const initialState = {
  configData,
  locale: defaultLocale,
};

export const configReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PUT_TRANSLATE_LANGUAGE:
      return {
        ...state,
        locale: action.payload,
      };
    default:
      return state;
  }
};
