import { Avatar, Button, Card, Chip, Text } from 'react-native-paper';
import {View} from 'react-native'
import { StatusBar } from 'expo-status-bar'
import {BottomTabs} from '../components/BottomTab'

export default function HomeScreen({navigation}) {
    return (
   
        <View style={{
            marginTop: StatusBar.currentHeight || 0, padding: 40, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-start'
        }}>
            <Text style={{ fontSize: 30 }}>Hello Cindy👋</Text>
            <Card style={{ marginTop: 20, backgroundColor: '#2f766b', }} mode="contained">
                <Card.Content>
                    <Text style={{ fontSize: 18, lineHeight: 25, color: '#fff' }}>Today I live each day, day by day, and I call it fulfillment</Text>
                    <Text style={{ fontSize: 18, lineHeight: 25, color: '#fff' }}>Charlie Chaplin</Text>
                </Card.Content>
            </Card>
            <Button onPress={()=>navigation.navigate("Meds")}>to Meds</Button>
            {/* <BottomTabs/> */}
        </View>
    );
}