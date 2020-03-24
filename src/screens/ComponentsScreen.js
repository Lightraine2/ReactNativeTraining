import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    const name = 'Laurence';
    
    return ( <View>
        <Text style={styles.greetStyle}>Getting started with React Native!</Text>
        <Text style ={styles.nameStyle}>My name is {name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    greetStyle: {
        fontSize: 45
    },
    nameStyle: {
        fontSize: 20
    }
});

export default ComponentsScreen;