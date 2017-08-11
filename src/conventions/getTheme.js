import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { fade } from 'material-ui/utils/colorManipulator';
import { colors } from '../conventions';

export default function () {
  
  return getMuiTheme({
    fontFamily: 'Roboto, sans-serif',
    palette: {
      primary1Color: colors.primary,
      primary2Color: colors.accent,
      primary3Color: colors.secondary,
      accent1Color: colors.accent,
      accent2Color: colors.secondary,
      accent3Color: colors.primary,
      textColor: colors.text,
      alternateTextColor: colors.secondaryText,
      canvasColor: colors.layout,
      borderColor: fade(colors.primaryText, 0.1),
      disabledColor: fade(colors.primaryText, 0.5),
      pickerHeaderColor: colors.primary,
      clockCircleColor: fade(colors.primaryText, 0.07),
      shadowColor: colors.primaryText
    }
  })

}