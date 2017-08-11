import React from 'react';
import { connect } from 'react-redux';
import CircularProgress from 'material-ui/CircularProgress';
import { fetchSession } from '../actions/session';
import { Navigation } from '../bootstrap';

const styles = {
  container: {
    marginLeft: '300px'
  }
}

class App extends React.Component {

  componentDidMount () {
    this.props.dispatch(fetchSession());
  }

  renderLoading () {
    return (
      <div style={{
        position: 'fixed',
        height: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <CircularProgress
          size={ 120 }
          thickness={ 10 }
          style={{
            flex: 0,
            marginTop: '-128px'
          }}
        />
      </div>
    );
  }

  render () {
    
    if (this.props.session.sessionIsFetching) {
      return this.renderLoading();  
    }

    if (this.props.session.didSessionInvalidate) {
      return this.props.children;
    }
    
    return (
      <div style={ styles.container }>
        <Navigation />
        { this.props.children }
      </div>
    );
  
  }

}

export default connect(globalState => (
  {
    session: globalState.session
  }
))(App);