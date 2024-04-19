import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StatBox from './src/components/StatBox';

export default function App() {
  return (
    <View style={styles.main_character_container}>
      <Text>Dallas Bonner</Text>
      <StatusBar style="auto" />
      <View style={styles.stat_container}>
        <StatBox name='STR' number={12}></StatBox>
        <StatBox name='DEX' number={8}></StatBox>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main_character_container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  stat_container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
