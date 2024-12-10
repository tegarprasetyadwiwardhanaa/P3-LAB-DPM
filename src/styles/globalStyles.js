import { StyleSheet } from 'react-native';

export const colors = {
  primary: '#4a90e2',
  secondary: '#f0f0f0',
  text: '#333',
  textLight: '#666',
  success: '#4caf50',
  danger: '#f44336',
  white: '#ffffff',
};

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    backgroundColor: colors.primary,
    padding: 20,
  },
  headerText: {
    color: colors.white,
    fontSize: 24,
    fontWeight: 'bold',
  },
  subHeaderText: {
    color: colors.white,
    fontSize: 16,
  },
  button: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

