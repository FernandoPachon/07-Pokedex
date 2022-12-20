import React from 'react'
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';


export const Loading = () => {
  return (
    <View style={styles.activityContainer}>
    <ActivityIndicator
      size={50}
      color="grey"
    />
    <Text>Cargando...</Text>
  </View>
 )
};


const styles = StyleSheet.create({
    container: {
    flex: 1,
    },
    activityContainer: {
      flex:1,
      justifyContent:'center',
      alignItems: 'center'
    },
});
export default Loading;
