import React from 'react';

import { View, Button, StyleSheet } from 'react-native';


  
const Home = ({ navigation }) => {
  return (
    <View style={styles.titleContainer}>
      <View style={styles.onepbutton}>
        <Button title="1 Player" onPress={() => navigation.navigate('OnePlayer')} />
      </View>
      
      <View style={styles.twopbutton}>
        <Button title="2 Player" onPress={() => navigation.navigate('TwoPlayer')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent:'center',
    flex:1,
    width:'100%'
  },
  onepbutton:{
    width:170,
    marginBottom:30,
  },
  twopbutton:{
    width:170,
    
  }
});
export default Home;