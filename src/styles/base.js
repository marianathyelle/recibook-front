import {Dimensions} from 'react-native'

export const dimensions = {
  fullHeight: Dimensions.get('window').height,
  fullWidth: Dimensions.get('window').width
}
  
export const colors = {
  primary: '#d97d43',
  secondary: '#f6d5b0',
  tertiary: '#f5f5f5',
};

export const padding = {
  sm: 10,
  md: 20,
  lg: 30,
  xl: 40
}

export const fonts = {
  sm: 12,
  md: 18,
  lg: 28,
  primary: 'PlayfairDisplay-Regular',
  secondary: 'DMSans-Bold'
}