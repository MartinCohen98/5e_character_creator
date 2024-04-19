import { Button, View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import * as Progress from 'react-native-progress';
import { useState } from 'react';

interface HpBarProps {
    maxHp: number;
}

export default function HpBar({ maxHp }: HpBarProps) {

    const [hp, setHp] = useState(maxHp)

    const progress = (hp / maxHp)

    const damageHandler = () => {
        let newHp = (hp - 10)
        if (newHp < 0) {
            newHp = 0
        }
        setHp(newHp)
    }

    const healHandler = () => {
        let newHp = (hp + 10)
        if (newHp > maxHp) {
            newHp = maxHp
        }
        setHp(newHp)
    }

    return (
        <View style={styles.hp_bar_container}>
            <View style={styles.hp_text_view}><Text style={styles.hp_text}>{hp}/</Text><Text style={styles.max_hp_text}>{maxHp}</Text></View>
            <Progress.Bar progress={progress} color='red'></Progress.Bar>
            <View style={styles.hp_buttons_container}>
                <TouchableOpacity style={styles.damage_button} onPress={damageHandler}>
                    <Text style={styles.button_text}>DAMAGE</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.heal_button} onPress={healHandler}>
                    <Text style={styles.button_text}>HEAL</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    hp_bar_container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 4,
    },

    hp_buttons_container: {
        flexDirection: 'column',
        alignItems: 'center',
        padding: 4,
    },

    damage_button: {
        padding: 6,
        margin: 2,
        borderRadius: 8,
        width: 80,
        alignItems: 'center',
        backgroundColor: 'red',
    },

    heal_button: {
        padding: 6,
        margin: 2,
        borderRadius: 8,
        width: 80,
        alignItems: 'center',
        backgroundColor: 'green',
    },

    button_text: {
        color: '#FFFFFF',
        fontWeight: 'bold'
    },

    hp_text_view: {
        flexDirection: 'row',
        alignItems: 'baseline',
        padding: 4,
    },

    hp_text: {
        color: 'red',
        fontSize: 38,
    },

    max_hp_text: {
        color: 'red',
        fontSize: 18,
    }
});