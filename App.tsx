import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import StatBox from './src/components/StatBox';
import { useState } from 'react';
import HpBar from './src/components/HpBar';

export default function App() {

    const [stat, setStat] = useState(12)
    const [maxHp, setMaxHp] = useState(51)

    const onPressHandler = () => {
        setStat(17)
    }


    return (
        <View style={styles.main_character_container}>
        <HpBar maxHp={maxHp}></HpBar>
        <View style={styles.stat_container}>
            <StatBox name='STR' number={stat}></StatBox>
            <StatBox name='DEX' number={8}></StatBox>
            <StatBox name='CON' number={16}></StatBox>
        </View>
        <View style={styles.stat_container}>
            <StatBox name='INT' number={20}></StatBox>
            <StatBox name='WIS' number={12}></StatBox>
            <StatBox name='CHA' number={10}></StatBox>
        </View>
        <Button title='Change state' onPress={onPressHandler} color={'gray'}></Button>
        </View>
    );
}

const styles = StyleSheet.create({
    main_character_container: {
        flex: 1,
        backgroundColor: '#1e1e1e',
        alignItems: 'center',
        justifyContent: 'center',
    },

    stat_container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});
