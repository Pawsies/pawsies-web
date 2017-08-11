import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { getTheme, colors } from '../conventions';

const styles = {
  header: {
    position: 'fixed',
    left: 0,
    top: 0,
    zIndex: 1300,
    width: '300px',
    boxShadow: 'none'
  },
  topNavigation: {
    position: 'fixed',
    left: 0,
    top: 0,
    paddingLeft: '324px'
  },
  container: {
    padding: '64px 24px 24px'
  }
};

class Wrapper extends React.Component {

  render () {
    return (
      <div>
        <Helmet
          title="Pawsies"
          link={[
            { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
          ]}
          style={[
            { type: 'text/css', cssText: `body { font-family: Roboto !important; } html { background: ${ colors.background }; }` }
          ]}
        />
        <MuiThemeProvider muiTheme={ getTheme() }>
          <div style={ styles.container }>
            <AppBar
              title="Pawsies"
              showMenuIconButton={ false }
              titleStyle={{ color: colors.headerText }}
              style={ styles.header }
            />
            <AppBar
              title={ this.props.navigation.title }
              showMenuIconButton={ false }
              titleStyle={{ fontWeight: '300', color: colors.headerText }}
              style={ styles.topNavigation }
            />
            { this.props.children }
          </div>
        </MuiThemeProvider>
      </div>
    )
  }

}

export default connect(globalState => (
  {
    navigation: globalState.navigation
  }
))(Wrapper);