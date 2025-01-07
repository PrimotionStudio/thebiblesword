import Colors from '@/misc/Colors';
import MainScreen from '@/screens/MainScreen';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, Platform, StatusBar as SB } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <MainScreen />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'android' ? SB.currentHeight : 0,
    backgroundColor: Colors.primary,
    flex: 1,
  },
});
