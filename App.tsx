import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import StatBox from './src/components/StatBox';
import { useState } from 'react';

export default function App() {

  const [stat, setStat] = useState(12)

  const onPressHandler = () => {
    setStat(17)
  }


  return (
    <View style={styles.main_character_container}>
      <Text>Dallas Bonner</Text>
      <StatusBar style="auto" />
      <View style={styles.stat_container}>
        <StatBox name='STR' number={stat}></StatBox>
        <StatBox name='DEX' number={8}></StatBox>
      </View>
      <Button title='Change state' onPress={onPressHandler}></Button>
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
