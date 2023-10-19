import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#65945F",
    height:"100%",
    alignItems: "center",
    alignContent: "center",
    alignSelf: "center",
    justifyContent: "space-evenly",
  },
  fundo:{
    height:"100%"
  },
  itemContainer: {
    
    flexDirection: 'row',    
    alignItems: "center",
    alignContent: "center",
    alignSelf: "center",
    justifyContent: "space-evenly",
    margin:10
    
  },
  animeContainer: {
    width: '90%',
    backgroundColor: "#65945F",    
    margin: 5,
    padding: 8,    
    alignItems: "center",
    alignContent: "center",
    alignSelf: "center",
    justifyContent: "space-evenly",
    borderRadius: 25,
  },
  btnContainer: {      
    //flexDirection: 'row',
    alignItems: "center",
    alignContent: "center",
    alignSelf: "center",
    justifyContent: "space-evenly",
  },
  btnBox:{
    alignItems: "center",
    alignContent: "center",
    alignSelf: "center",
    justifyContent: "space-around",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 25,
  }, 

  titleText: {
    fontSize: 18,
    fontWeight: 'bold',  
  },

  epbtnUp:{  
    marginHorizontal:5,
    paddingHorizontal:10,
    backgroundColor:"#126635",
    margin:3,
    borderTopStartRadius:8,
    borderTopEndRadius:8,
  },
  epbtnDown:{   
    marginHorizontal:5,
    paddingHorizontal:10,
    backgroundColor:"#126635",
    margin:3,
    borderBottomStartRadius:8,
    borderBottomEndRadius:8,
    
  },
  epBtnRemove:{    
    backgroundColor:"#126635",
    alignSelf:"center",
    width:20,    
    padding:5,       
    fontSize:18,
    color:"#900"
  },
  epBtnReset:{
    fontSize:18,
    marginHorizontal:5,
    paddingHorizontal:10,    
    margin:3,   
    borderRadius:8,
    color:"#900"
  },
  episodeText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  inputEp: {
    //backgroundColor: "#ccc",
    color: "#000", 
    fontSize: 20,
    padding: 8,
    width: 120,
    alignItems: "center",
    textAlign: "center",
  },
  box:{
    flexDirection:"row",
    alignItems: "center",
    alignContent: "center",
    alignSelf: "center",
    justifyContent: "space-around",
  }
});

export default styles;
