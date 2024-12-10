import React, { useEffect } from 'react';
import { View, FlatList, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, globalStyles } from '../../styles/globalStyles';

const TaskList = ({ tasks, onToggleTask, onDeleteTask }) => {
  useEffect(() => {
    console.log('TaskList mounted');
    return () => {
      console.log('TaskList will unmount');
    };
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.taskContainer}>
      <TouchableOpacity
        style={[styles.taskButton, item.completed && styles.completedTask]}
        onPress={() => onToggleTask(item.id)}
      >
        <View style={styles.taskInfo}>
          <Text style={[styles.taskButtonText, item.completed && styles.completedTaskText]}>
            {item.title}
          </Text>
          <Text style={styles.categoryText}>{item.category}</Text>
        </View>
        <Ionicons
          name={item.completed ? "checkmark-circle" : "ellipse-outline"}
          size={24}
          color={item.completed ? colors.success : colors.textLight}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.deleteButton} onPress={() => onDeleteTask(item.id)}>
        <Ionicons name="trash-outline" size={24} color={colors.danger} />
      </TouchableOpacity>
    </View>
  );

  return (
    <FlatList
      data={tasks}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
      contentContainerStyle={styles.listContent}
    />
  );
};

const styles = StyleSheet.create({
  listContent: {
    padding: 20,
  },
  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  taskButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.secondary,
    borderRadius: 8,
    padding: 15,
  },
  taskInfo: {
    flex: 1,
  },
  taskButtonText: {
    color: colors.text,
    fontSize: 16,
    fontWeight: '600',
  },
  categoryText: {
    color: colors.textLight,
    fontSize: 12,
    marginTop: 5,
  },
  completedTask: {
    backgroundColor: '#e8f5e9',
  },
  completedTaskText: {
    color: colors.success,
    textDecorationLine: 'line-through',
  },
  deleteButton: {
    marginLeft: 10,
  },
});

export default TaskList;

