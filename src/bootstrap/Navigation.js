import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import Avatar from 'material-ui/Avatar';
import ListItem from 'material-ui/List/ListItem';

import { colors } from '../conventions';

import {
  MenuItem,
  MenuSeparator
} from '../components';

import { doLogout } from '../actions/session';

const styles = {
  container: {
    position: 'fixed',
    width: '300px',
    height: '100vh',
    top: 0,
    left: 0,
    zIndex: 1200,
    paddingTop: '64px',
    boxShadow: 'rgba(33, 33, 33, 0.12) 0px 1px 6px, rgba(33, 33, 33, 0.12) 0px 1px 4px',
    backgroundColor: colors.layout
  }
}

class Navigation extends React.Component {

  renderProfile () {
    // return (
    //   <div style={{ backgroundColor: '#EEE', padding: '4px 0' }}>
    //     <ListItem
    //       disabled={ true }
    //       leftAvatar={ <Avatar backgroundColor={ colors.accent } color={ colors.secondaryText }>A</Avatar> }
    //       primaryText="Administrator"
    //     />
    //   </div>
    // );
    return null;
  }

  renderMenu () {
    let { dispatch } = this.props;
    return (
      <div>
        <MenuItem
          icon="home" label="Home"
          onTouchTap={ () => dispatch(push("/")) }
        />
        <MenuSeparator />
        <MenuItem
          icon="arrow_back" label="Log out"
          onTouchTap={ () => dispatch(doLogout()) }
        />
      </div>
    );
  }

  render () {
    return (
      <div style={ styles.container }>
        { this.renderProfile() }
        { this.renderMenu() }
      </div>
    );
  }

}

export default connect(globalState => (
  {
    session: globalState.session
  }
))(Navigation);