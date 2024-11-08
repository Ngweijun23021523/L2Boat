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
                style={styles.image}
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
        backgroundColor:'darkgrey',
        borderWidth:5,
        paddingLeft:10

    },
    description: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        fontStyle: 'italic',
        backgroundColor:'skyblue',
        borderWidth:5,

    },

    image:{
        width:410,
        height:410,
        borderWidth:5,


    }




});

export default Boat;

