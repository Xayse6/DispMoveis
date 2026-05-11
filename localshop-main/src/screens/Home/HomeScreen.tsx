import { View, FlatList, ActivityIndicator, Button } from 'react-native';
import LojaCard from '../../components/LojaCard';
import { useLojas } from '../../hooks/useLojas';
import styles from './StyleHome';

export default function HomeScreen() {
  const { lojas, loading } = useLojas();

  if (loading) {
    return <ActivityIndicator size="large" color="#27ae60" />;
  }

  function handleCadastro() {
    console.log("Ir para tela de cadastro");
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.buttonCont}>
        <Button title="Cadastrar Loja" onPress={handleCadastro} />
      </View>

      <FlatList
        data={lojas}
        keyExtractor={(item) => item.id?.toString()}
        renderItem={({ item }) => <LojaCard loja={item} />}
      />
    </View>
  );
}