import { StyleSheet } from 'react-native';

export default StyleSheet.create({

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-between",
    alignSelf:"center",
    alignContent:"center",
    backgroundColor:"#528635",
    padding:20, 
    width: '100%',
    
  },  
  user: {
    alignItems: 'center',
    justifyContent: "center",
    flexDirection: 'row',
  },
  logo:{
    width: 35,
    height:35,  
    borderRadius: 50,  
  },
  nav: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "center",
    alignSelf:"center",
    alignContent:"center"  
  },
  btn:{
    backgroundColor: '#65945F',
    padding:5,
    margin:5,
    borderRadius:30,
    width:35,
    height:35,
    alignItems: 'center',
    justifyContent: "center",
    alignSelf:"center",
    alignContent:"center"
  },
  btnPlus:{
    backgroundColor: '#d1efc6',
    padding:5,
    margin:5,
    borderRadius:30,
    width:45,
    height:45,
    alignItems: 'center',
    justifyContent: "center",
    alignSelf:"center",
    alignContent:"center"
  },
  headerName: {
    fontSize: 15,     
    fontWeight: 'bold',
    padding:10
  },
  headerNameBtn: {    
    alignSelf:"center",
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});
