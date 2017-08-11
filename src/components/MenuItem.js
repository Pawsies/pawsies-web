import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import FontIcon from 'material-ui/FontIcon';
import { fade } from 'material-ui/utils/colorManipulator';
import { colors } from '../conventions';

const itemStyle = {
  fontSize: '16px',
  padding: '5px 10px 5px 0',
  textDecoration: 'none'
}

const innerItemStyle = {
  paddingLeft: '58px',
  textDecoration: 'none'
}

const iconStyle = {
  color: fade(colors.primaryText, .7)
}

export default ({ label, icon, onTouchTap }) => (
  <MenuItem
    leftIcon={ <FontIcon style={ iconStyle } className="material-icons">{ icon }</FontIcon> }
    style={ itemStyle }
    innerDivStyle={ innerItemStyle }
    onTouchTap={ onTouchTap }
  >
    { label }
  </MenuItem>
)
