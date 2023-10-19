import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
      width: "100%",      
      padding: 10,
      backgroundColor: '#127935',      
      alignContent:"center"      
    },
    textContainer:{
      marginHorizontal:"auto",
      flexDirection: 'row',
      maxWidth: 380
    },
    textInput: {
      flex: 1,
      height: 40,
      padding: 5,
      fontSize: 16,
      backgroundColor: 'white',
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#ccc',
    },
    button: {
      padding: 10,
      marginLeft: 10,
      backgroundColor: '#126635',
      borderRadius: 5,
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
    }
  })