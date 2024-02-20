import { StyleSheet, Text, View } from "react-native";
import { FAB } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Appbar } from 'react-native-paper';

export default function MedicationScreen({ navigation }) {
    return (
        <>
            <Appbar.Header>
                <Appbar.Content title="Medications" />
            </Appbar.Header>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontFamily: 'Metropolis-Regular', fontSize: 20 }}>You have no medications</Text>
            </View>
            <FAB
                icon="plus"
                style={styles.fab}
                mode="flat"
                label="Add"
            onPress={() =>
                navigation.navigate('MedAdd')
            }
            />
        </>
    );
}

const styles = StyleSheet.create({
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    },
})