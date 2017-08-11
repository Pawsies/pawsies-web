import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { Page } from '../../components';
import styles from './styles';
import { doLogin } from '../../actions/session';
import { setPageTitle } from '../../actions/navigation';

class Login extends React.Component {

  state = {
    identifier: '',
    password: ''
  }

  componentDidMount () {
    this.props.dispatch(setPageTitle('Ingrese para continuar'));
    if (this.props.session.profile) {
      this.props.dispatch(push('/'));
    }
  }

  componentWillReceiveProps (props) {
    if (props.session.didLoginInvalidate && !this.props.session.didLoginInvalidate) {
      this.setState({ error: true });
    }
  }

  handleLogin (e) {
    e.preventDefault();
    let { identifier, password } = this.state;
    this.props.dispatch(doLogin(identifier, password));
  }

  render () {
    return (
      <div style={ styles.container }>
        <Page style={ styles.page }>
          <form onSubmit={ this.handleLogin.bind(this) }>
            <TextField
              name="email"
              hintText="Email"
              type="email"
              fullWidth={ true }
              required={ true }
              onChange={ (e, identifier) => this.setState({ identifier }) }
            />
            <TextField
              name="password"
              hintText="Contraseña"
              type="password"
              fullWidth={ true }
              required={ true }
              onChange={ (e, password) => this.setState({ password }) }
            />
            <RaisedButton
              label="Ingresar"
              primary={ true }
              fullWidth={ true }
              disabled={ this.props.session.loginIsFetching || this.props.session.sessionIsFetching }
              type="submit"
              style={{ marginTop: '24px' }}
            />
            { this.state.error ? (
              <p style={ styles.errorMessage }>
                Email o contraseña incorrectos
              </p>
            ) : null }
          </form>
        </Page>
      </div>
    );
  }

}

export default connect(globalState => (
  {
    session: globalState.session
  }
))(Login);