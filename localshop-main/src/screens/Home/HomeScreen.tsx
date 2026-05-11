import { View, FlatList, ActivityIndicator, Button, Pressable, Text } from 'react-native';
import LojaCard from '../../components/LojaCard';
import { useLojas } from '../../hooks/useLojas';
import styles from './StyleHome'
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../@types/loja';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator<RootStackParamList>();
export default function HomeScreen() {
  const { lojas, loading } = useLojas();
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Pressable
            onPress={() => navigation.navigate("Cadastro")}
            style={styles.ButtonContainer}
        >
            <Text style={styles.Text}>Cadastrar</Text>
        </Pressable>


      <FlatList
        data={lojas}
        keyExtractor={(item) => item.id?.toString()}
        renderItem={({ item }) => <LojaCard loja={item} />}
      />
    </View>
  );
}