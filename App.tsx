import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  Alert,
  TouchableOpacity,
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

const App = () => {

  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Group Profile</Text>
      </View>
      
      <View style={styles.profileInfo}>
        <Image
          source={require('./assets/insta.jpg')}
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>OOTD Everyday</Text>
        <Text style={styles.profileBio}>Fit check! </Text>
        <Text style={styles.profileBio}>You know we’ll hype you up.</Text>
        <Text style={styles.MemberButton}><Button 
          title="Member"
          
        /></Text>
        
        <Image
          source={require('./assets/insta-post.jpg')}
          style={styles.Image}
        />
        <Text style={styles.alert}><Button 
          title="Alert"
          onPress={() => Alert.alert('Alert Button pressed')}
        /></Text>
      </View>  
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flex:0.1,
    padding:1,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    alignItems:"center",
  },
  headerIcons: {
    flexDirection: "row",
  },
  icon: {
    fontSize: 18,
    marginHorizontal: 10,
  },
  profileInfo: {
    alignItems: "center",
    padding: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  profileBio: {
    fontSize: 14,
    color: "#555",
    
  },
  MemberButton: {
    height:40,
    paddingHorizontal: 130,
    paddingVertical: 2,
    borderWidth: 1,
  },
  alertButton: {
    marginTop: 10,
    backgroundColor: "#ddd",
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 5,
  },
  alert: {
    width: '100%',
    
    backgroundColor: '#ddd',
    alignItems: 'center',

  },
  
  Image:{
   
    width: "100%",
    height: 450,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
  footerIcon: {
    fontSize: 18,
  },
});

export default App;