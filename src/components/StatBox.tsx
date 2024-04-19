import { StyleSheet, Text, View } from 'react-native';

interface StatBoxProps {
    /** The text to display inside the button */
    name: string;
    /** Whether the button can be interacted with */
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
    fontSize: 28,
  },

  stat_modifier: {
    fontSize: 16,
  },

  stat_name: {
    fontSize: 12,
  },

  stat_box: {
    flexDirection: 'column',
    backgroundColor: '#D3D3D3',
    alignItems: 'center',
    borderRadius: 8,
    margin: 4,
    width: 60,
  },

  
});