import { push } from 'react-router-redux';

export function doLogin(identifier, password) {

  return (dispatch, getState) => {

    dispatch({ type: 'LOGIN_FETCHING' });

    fetch(`${ window.env.RPC_GATEWAY_URL }/authenticate`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        identifier,
        password,
        scope: 'backoffice-web'
      })
    })

    .then(response => response.json())

    .then(response => {

      let { token } = response;

      if (!token) throw response;

      window.localStorage.setItem('session', token);

      dispatch({ type: 'LOGIN', token });

      dispatch(push('/'));

      dispatch(fetchSession());
    
    })

    .catch(err => {

      console.log(err);

      dispatch({ type: 'LOGIN_ERROR' });

    });

  }

}

export function fetchSession() {

  return (dispatch, getState) => {

    if (!getState().session.token) {

      if (!window.localStorage.getItem('session')) {

        dispatch({ type: 'SESSION_NOT_EXISTS' });

        dispatch(push('/login'));

        return;
      
      } else { 

        dispatch({ type: 'LOGIN', token: window.localStorage.getItem('session') });

      }

    }

    dispatch({ type: 'SESSION_FETCHING' });

    fetch(`${ window.env.RPC_GATEWAY_URL }/session`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${ getState().session.token }`
      }
    })

    .then(response => response.json())

    .then(response => {

      let { profileId } = response;

      if (!profileId) throw response;

      dispatch({ type: 'SESSION', profile: response });
    
    })

    .catch(err => {

      console.log(err);

      dispatch({ type: 'SESSION_ERROR' });

      dispatch(doLogout());

    });

  }

}

export function doLogout() {

  return (dispatch, getState) => {

    window.localStorage.removeItem('session');

    dispatch({ type: 'SESSION_CLOSE' });

    dispatch(push('/login'));

  }

}
