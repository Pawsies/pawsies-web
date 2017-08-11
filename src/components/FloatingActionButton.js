import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import FloatingActionButton from 'material-ui/FloatingActionButton';

const buttonStyle = {
  position: 'fixed',
  bottom: '24px',
  right: '24px',
  zIndex: 100
}

export default ({ icon, onTouchTap, disabled, style }) => (
  <FloatingActionButton
    secondary={ true }
    style={{ ...buttonStyle, ...style }}
    onTouchTap={ onTouchTap }
    disabled={ disabled }
  >
    <FontIcon className="material-icons">{ icon }</FontIcon>
  </FloatingActionButton>
)