import { darken } from 'material-ui/utils/colorManipulator';

import {
  grey100,
  grey200,
  grey800,
  grey900
} from 'material-ui/styles/colors';

export default {

  primary: '#39C0EE',
  primaryLight: '#39C0EE',
  primaryDark: darken('#39C0EE', .1),
  
  secondary: grey100,
  
  accent: '#39C0EE',
  
  primaryText: grey900,
  secondaryText: '#FFF',
  headerText: '#FFF',
  
  background: grey200,
  layout: '#FFF',
}