import { View, FlatList, Pressable, Text, ActivityIndicator } from 'react-native';
import LojaCard from '../../components/LojaCard';
import { useLojas } from '../../hooks/useLojas';
import styles from './StyleHome';

import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { RootStackParamList } from '../../@types/loja';

type NavigationProps = StackNavigationProp<RootStackParamList>;

export default function HomeScreen() {
  const { lojas, loading } = useLojas();

  const navigation = useNavigation<NavigationProps>();

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