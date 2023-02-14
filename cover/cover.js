import Video from "react-native-video";
import {StyleSheet,Dimensions, View,Image, Text} from "react-native";
const { height } = Dimensions.get("window");
import logo from '../assets/logo.png';
import simple_logo from '../assets/simple_logo.png';
import symbol from '../assets/Symbol.png';
const Cover = () => {
    return (
      <View>
  <Video
source={require("../assets/bg_video.mp4")}
style={styles.backgroundVideo}
muted={true}
repeat={true}
resizeMode={"cover"}
rate={1.0}
ignoreSilentSwitch={"obey"}
/>
<View style={styles.container}>
<Image source={symbol} style={styles.image1}/>
<Image source={logo} style={styles.logo1}/>
<Text style={styles.text}>Mobile App</Text>
</View>
</View>)
};


const styles = StyleSheet.create({
backgroundVideo: {
height: height,
position: "absolute",
top: 0,
left: 0,
alignItems: "stretch",
bottom: 0,
right: 0
},
container: {
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  width:'100%'
},
logo1:{
    width: 450,
    height: 100,
    //resizeMode: 'contain'
},
image1:{
    width: 60,
    height: 90,
   resizeMode: 'contain',
   top:20
},
text:{
  color:'white'
}
});
export default Cover;