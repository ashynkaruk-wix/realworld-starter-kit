import {Button, StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {GlobalFeed} from "./pages/GlobalFeed";
import {Article} from "./pages/Article";
import {ArticleItem} from "./pages/ArticleItem";
import {ArticlesList} from "./pages/ArticlesList";

export const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen}/>
                <Stack.Screen name="Global Feed" component={GlobalFeed}/>
                <Stack.Screen name="Article" component={Article}/>
                <Stack.Screen name="ArticleItem" component={ArticleItem}/>
                <Stack.Screen name="ArticlesList" component={ArticlesList}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
            <Button
                title="Go to Global Feed"
                onPress={() => navigation.navigate('Global Feed')}
            />
        </View>
    );
}

const Stack = createNativeStackNavigator();

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});
