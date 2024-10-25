import React from 'react';
import { Text, ScrollView, Image, StyleSheet } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome6";

const Boat = ({ Name, description, icon_name, poster }) => {
    return (
        <ScrollView>
            <Text style={styles.name}>
                <Icon name={icon_name} size={24} color="#823823" /> {Name}
            </Text>

            <Text style={styles.description}>{description}</Text>

            <Image
                source={poster}
                style={{width:400, height:400}}
            />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        paddingVertical: 10,
        textAlign: 'left',
        fontStyle: 'italic',

    },
    description: {
        fontSize: 16,
        color: '#555',
        marginVertical: 8,

        textAlign: 'left',
    },

});

export default Boat;

