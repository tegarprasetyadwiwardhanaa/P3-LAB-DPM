import { StyleSheet } from 'react-native';

export const taskStyles = StyleSheet.create({
  taskButton: {
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    padding: 15,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  taskButtonText: {
    color: '#333',
    fontSize: 16,
    fontWeight: '600',
  },
  completedTask: {
    backgroundColor: '#e8f5e9',
    borderColor: '#c8e6c9',
  },
  completedTaskText: {
    color: '#2e7d32',
    textDecorationLine: 'line-through',
  }
});