import { StyleSheet, Text, View } from "react-native";
import { FAB } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { TextInput } from 'react-native-paper';

export default function MedicationAddScreen() {
    const [text, setText] = React.useState("");
    return (
        <>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <TextInput
                    label="Name of Medication"
                    style={styles.input}
                    value={text}
                    onChangeText={text => setText(text)}
                />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    input: {
        width: "100%",
    },
})