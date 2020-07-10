import React from 'react';
import {View,Dimensions,Text,ImageBackground} from 'react-native';
import {Button} from 'react-native-material-ui';
const Background = require('../icons/home.png')
const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;
const width = (val) =>{
    let result = (screenWidth*val)/100
   return result
}
const height = (val) =>{
  let result = (screenHeight*val)/100
 return result
}
const HomeScreen =()=>{
  return (
    <View style={{width:width(100)}}>
      <ImageBackground style={{width:width(100),alignSelf:'center',height:height(100),alignItems:'center'}} source={Background}>
          <View style={{marginTop:height(70)}}>
            <Button upperCase={false} style={ {container:{backgroundColor:'white', shadowColor:'#000',shadowOffset:{width:0,height:height(10)},shadowRadius:25, shadowOpacity:0.5,elevation:15,width:width(60),height:50, marginTop:height(2), borderRadius:25},text:{color:'black',fontWeight:'bold',fontSize:20}}} text='Register'/>
            <Button upperCase={false} style={ {container:{backgroundColor:'white', shadowColor:'#000',shadowOffset:{width:0,height:height(10)},shadowRadius:25, shadowOpacity:0.5,elevation:15,width:width(60),height:50, marginTop:height(2), borderRadius:25},text:{color:'black',fontWeight:'bold',fontSize:20}}} text='Login'/>
          </View>  
      </ImageBackground>
    </View>
  )
} 

export default HomeScreen