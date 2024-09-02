import OnePlayer from '../components/OnePlayer';
import TwoPlayer from '../components/TwoPlayer';
import Home from '../components/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const HomeScreen = () => {
  return (
    <NavigationContainer independent={true}>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="OnePlayer" component={OnePlayer} />
          <Stack.Screen name="TwoPlayer" component={TwoPlayer} />
        </Stack.Navigator>
      </NavigationContainer>
  )
}
export default HomeScreen



