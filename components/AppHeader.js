import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

class AppHeader extends React.Component{
  render(){
    return(
      <View style= {styles.textContainer}>
        <Text style={styles.text}>βπ ππ‘ππππ πΈπ‘π‘</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textContainer:{
    backgroundColor: 'yellow',
  },
  text:{
    color: 'black',
    padding: 10,
    fontSize: 30,
    fontWeight:'bold',
 
    textAlign: 'center',
    
  }
});

export default AppHeader;