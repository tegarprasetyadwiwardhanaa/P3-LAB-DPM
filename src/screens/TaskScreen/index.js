import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import TaskList from '../../components/TaskList';
import AddTaskModal from '../../components/AddTaskModal';
import { colors, globalStyles } from '../../styles/globalStyles';

const TaskScreen = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Complete React Native Tutorial', category: 'work', completed: false },
    { id: 2, title: 'Buy groceries', category: 'shopping', completed: false },
    { id: 3, title: 'Go for a run', category: 'personal', completed: false },
  ]);
  const [isAddModalVisible, setIsAddModalVisible] = useState(false);

  useEffect(() => {
    console.log('TaskScreen mounted');
    return () => {
      console.log('TaskScreen will unmount');
    };
  }, []);

  const handleToggleTask = (taskId) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const handleDeleteTask = (taskId) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
  };

  const handleAddTask = (newTask) => {
    setTasks(prevTasks => [
      ...prevTasks,
      { ...newTask, id: Date.now(), completed: false }
    ]);
  };

  const activeTasks = tasks.filter(task => !task.completed).length;

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.header}>
        <Text style={globalStyles.headerText}>Daftar Kegiatan</Text>
        <Text style={globalStyles.subHeaderText}>Tugas yang sedang berjalan: {activeTasks}</Text>
      </View>
      <TaskList
        tasks={tasks}
        onToggleTask={handleToggleTask}
        onDeleteTask={handleDeleteTask}
      />
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => setIsAddModalVisible(true)}
      >
        <Ionicons name="add" size={24} color={colors.white} />
      </TouchableOpacity>
      <AddTaskModal
        visible={isAddModalVisible}
        onClose={() => setIsAddModalVisible(false)}
        onAddTask={handleAddTask}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  addButton: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    backgroundColor: colors.primary,
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
});

export default TaskScreen;

