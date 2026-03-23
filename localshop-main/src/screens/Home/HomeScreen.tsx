import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import LojaCard from '../../components/LojaCard';
import {useLojas} from '../../hooks/useLojas';

export default function HomeScreen() {
  const { lojas, loading} = useLojas();
  if(loading) return <ActivityIndicator size="large" color="#27ae60"/>;

  return (
    <View style={{flex:1}}>
      <FlatList
        data={lojas}
        renderItem={({ item }) => <LojaCard loja={item} />}
      />
    </View>
  );
}