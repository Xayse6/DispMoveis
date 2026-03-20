import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from './Src/screens/Home/HomeScreen';
import LojaDetalhes from "./Src/screens/Details/LojaDetalhes";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerTintColor: "#000" }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "LocalShop" }}
        />
  
        <Stack.Screen
        
          name="Detalhes"
          component={LojaDetalhes}
          options={({ route }) => ({ title: route.params.loja.nome })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}