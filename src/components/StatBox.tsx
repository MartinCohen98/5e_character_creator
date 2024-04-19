import { StyleSheet, Text, View } from 'react-native';

interface StatBoxProps {
    name: string;
    number: number;
}

export default function StatBox({ name, number }: StatBoxProps) {
    return (
        <View style={styles.stat_box}>
            <Text style={styles.stat_name}>{name}</Text>
            <Text style={styles.stat_number}>{number}</Text>
            <Text style={styles.stat_modifier}>{Math.floor((number - 10) / 2)}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    stat_number: {
        fontSize: 36,
        color: '#b0e0e6',
    },

    stat_modifier: {
        fontSize: 22,
        color: '#b0e0e6',
    },

    stat_name: {
        fontSize: 12,
        color: '#b0e0e6',
    },

    stat_box: {
        flexDirection: 'column',
        backgroundColor: '#3e3e42',
        alignItems: 'center',
        borderRadius: 8,
        margin: 4,
        width: 80,
    },

  
});