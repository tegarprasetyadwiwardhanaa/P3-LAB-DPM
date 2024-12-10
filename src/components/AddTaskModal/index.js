import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { colors, globalStyles } from '../../styles/globalStyles';

const AddTaskModal = ({ visible, onClose, onAddTask }) => {
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('work');

    const handleAddTask = () => {
        if (title.trim()) {
        onAddTask({ title, category });
        setTitle('');
        setCategory('work');
        onClose();
        }
    };

    return (
        <Modal visible={visible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>tambah kegiatan baru</Text>
            <TextInput
                style={styles.input}
                placeholder="kegiatan"
                value={title}
                onChangeText={setTitle}
            />
            <Picker
                selectedValue={category}
                onValueChange={(itemValue) => setCategory(itemValue)}
                style={styles.picker}
            >
                <Picker.Item label="kerja" value="kerja" />
                <Picker.Item label="main" value="main" />
                <Picker.Item label="belajar" value="belajar" />
            </Picker>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={[globalStyles.button, styles.cancelButton]} onPress={onClose}>
                <Text style={globalStyles.buttonText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={globalStyles.button} onPress={handleAddTask}>
                <Text style={globalStyles.buttonText}>tambah kegiatan</Text>
                </TouchableOpacity>
            </View>
            </View>
        </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: colors.white,
        padding: 20,
        borderRadius: 10,
        width: '80%',
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 15,
        color: colors.text,
    },
    input: {
        borderWidth: 1,
        borderColor: colors.secondary,
        borderRadius: 5,
        padding: 10,
        marginBottom: 15,
    },
    picker: {
        borderWidth: 1,
        borderColor: colors.secondary,
        borderRadius: 5,
        marginBottom: 15,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    cancelButton: {
        backgroundColor: colors.danger,
    },
});

export default AddTaskModal;

