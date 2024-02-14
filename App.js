
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import Categorias from './src/screens/Categorias';
import {useFonts} from 'expo-font'
import ProductosPorCategoria from './src/screens/ProductosPorCategoria';

export default function App() {

  const [font] = useFonts({
    'Inter-Bold' : require('./assets/fonts/Inter-Bold.ttf'),
    'Inter-regular' : require('./assets/fonts/Inter-Regular.ttf')
  })
  if (!font) return <ActivityIndicator/>

  return (
    
      <ProductosPorCategoria/>
    
  );
}

const styles = StyleSheet.create({
  container : {
    flex:1,
    
  }
});
