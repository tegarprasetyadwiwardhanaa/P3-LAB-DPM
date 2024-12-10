import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const TaskHeader = ({ taskCount }) => {
  useEffect(() => {
    console.log('TaskHeader mounted');
    return () => {
      console.log('TaskHeader will unmount');
    };
  }, []);

  useEffect(() => {
    console.log('Task count updated:', taskCount);
  }, [taskCount]);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Ionicons name="checkbox-outline" size={24} color="#333" />
        <Text style={styles.title}>Daftar Kegiatan</Text>
      </View>
      <Text style={styles.subtitle}>Tugas yang sedang berjalan: {taskCount}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
});

export default TaskHeader;