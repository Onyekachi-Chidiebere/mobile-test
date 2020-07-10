import React from 'react';
import {ScrollView,Image,Dimensions,View,Text,ImageBackground} from 'react-native';
import {Button} from 'react-native-material-ui';
const Background = require('../icons/background.png')
const Logo = require('../icons/tog.png')
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
const LandingScreen =()=>{
  return (
    <ScrollView style={{width:width(100)}}>
      <ImageBackground style={{width:width(100),alignSelf:'center',height:height(135),alignItems:'center'}} source={Background}>
          <Image style={{width:width(30),height:height(10),marginTop:height(10)}} source={Logo}/>
          <View style={{marginTop:height(18)}}>
            <Button upperCase={false} style={ {container:{backgroundColor:'white', shadowColor:'#000',shadowOffset:{width:0,height:height(10)},shadowRadius:25, shadowOpacity:0.5,elevation:15,width:width(60),height:50, marginTop:height(5), borderRadius:25},text:{color:'black',fontWeight:'bold'}}} text='User'/>
            <Button upperCase={false} style={ {container:{backgroundColor:'white', shadowColor:'#000',shadowOffset:{width:0,height:height(10)},shadowRadius:25, shadowOpacity:0.5,elevation:15,width:width(60),height:50, marginTop:height(5), borderRadius:25},text:{color:'black',fontWeight:'bold'}}} text='Service Provider'/>
            <Button upperCase={false} style={ {container:{backgroundColor:'white', shadowColor:'#000',shadowOffset:{width:0,height:height(10)},shadowRadius:25, shadowOpacity:0.5,elevation:15,width:width(60),height:50, marginTop:height(5), borderRadius:25},text:{color:'black',fontWeight:'bold'}}} text='Both'/>
          </View>  
      </ImageBackground>
    </ScrollView>
  )
} 

export default LandingScreen