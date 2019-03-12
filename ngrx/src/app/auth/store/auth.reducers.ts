import * as AuthActions from './auth.actions'

export interface AuthState {
  token: string;
  authenticated: boolean;
}

const initialState: AuthState = {
  token: null,
  authenticated: false
};

export function authenticationReducer(state = initialState,
                                      action: AuthActions.AuthActions) {
  switch (action.type) {
    case AuthActions.LOGOUT:
      return {
        ...state,
        token: null,
        authenticated: false
      };
    case AuthActions.SIGNUP:
    case AuthActions.LOGIN:
      return {
        ...state,
        authenticated: true
      };
    case AuthActions.SET_TOKEN:
      return {
        ...state,
        token: action.payload
      }
  }

  return state;
}

