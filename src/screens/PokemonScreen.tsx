import React from 'react'
import { View,Text,StyleSheet } from 'react-native'


export const PokemonScreen = () => {
  return (
<View style={styles.container}>
     <Text>PokemonScreen </Text>
</View>
 )
};


const styles = StyleSheet.create({
    container: {
    flex: 1,
    },
});
export default PokemonScreen;
