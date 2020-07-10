import React from 'react';
import {ScrollView,Dimensions,View,Text,ImageBackground,TouchableOpacity} from 'react-native';
import {Button} from 'react-native-material-ui';
const Background = require('../icons/bac.png')
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
const WelomeScreen =()=>{
  return (
    <ScrollView style={{width:width(100),height:height(140)}}>
      <ImageBackground style={{width:width(100),alignSelf:'center',height:height(100),alignItems:'center'}} source={Background}>
          <View style={{width:width(100),alignItems:'center',marginTop:height(25)}}>
            <Text style={{fontSize:20,fontWeight:'bold'}}>Welcome,Acknowledge,Realize</Text>
            <Text style={{fontSize:20,fontWeight:'bold'}}>Volunteer & Help Others</Text>
          </View>
          <View style={{marginTop:height(50),marginBottom:height(20)}}>
            <TouchableOpacity style={{backgroundColor:'#ffa500',alignItems:'center',justifyContent:'center', shadowColor:'#000',shadowOffset:{width:0,height:height(10)},shadowRadius:25, shadowOpacity:0.5,elevation:15,width:width(60),height:50, marginTop:height(2), borderRadius:25,color:'black',fontWeight:'bold',fontSize:20}}>
              <Text style={{color:'white',fontWeight:'bold',fontSize:20}} >Enable Sharing</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{alignItems:'center',justifyContent:'center',backgroundColor:'white', shadowColor:'#000',shadowOffset:{width:0,height:height(10)},shadowRadius:25, shadowOpacity:0.5,elevation:15,width:width(60),height:50, marginTop:height(2), borderRadius:25,color:'black',fontWeight:'bold',fontSize:20}}>
              <Text style={{color:'black',fontWeight:'bold',fontSize:20}}>Get Started</Text>
            </TouchableOpacity>
          </View>  
      </ImageBackground>
    </ScrollView>
  )
} 

export default WelomeScreen