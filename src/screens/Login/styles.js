import {StyleSheet} from 'react-native';
import {colors} from '../../styles/base';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: colors.primary,
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '50%',
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.secondary,
    padding: 20,
    borderRadius: 15,
    width: 300,
  },
  buttonContent: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    marginLeft: 15,
    color: colors.primary,
    marginBottom: 0,
  },
});
