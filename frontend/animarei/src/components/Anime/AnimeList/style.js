import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
   backgroundColor: "#65945F",
  },
  itemContainer: {
    width: '90%',
    backgroundColor: "#126635",
    flexDirection: 'row',
    margin: 5,
    padding: 8,
    alignItems: "center",
    alignContent: "center",
    alignSelf: "center",
    justifyContent: "space-evenly",
    borderRadius: 25,    
  },
  imageContainer: {
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 25,
  },
  textContainer: {
    backgroundColor: "#127935",
    width: 180,
    height:100,    
    justifyContent: 'center',
    borderRadius: 25,
    padding:10
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',  
  },
  synopsisText: {
    fontSize: 10,       
  }, 
  episodeText: {
    fontSize: 14,    
  },
  starContainer: {
   position: "absolute",
   bottom: 8,   
   right: 15
  },
  starIcon: {
    fontSize: 14,
    opacity:0.5
  },
});

export default styles;
