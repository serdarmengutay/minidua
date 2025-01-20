import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../../screens/Home/Home';

const {Navigator, Screen} = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name="Home" component={Home} />
    </Navigator>
  );
};

export default HomeStack;
