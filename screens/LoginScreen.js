import React from 'react';
import {TextInput,Image,Dimensions,View,Text,TouchableOpacity} from 'react-native';
import {Button} from 'react-native-material-ui';
const Logo = require('../icons/tog.png')
const Fb = require('../icons/fb.png')
const G = require('../icons/g+.png')
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
const image={
  height:height(5),
  width:width(10),
  margin:5
}
const button={
  flexDirection:'row',
  alignItems:'center',
  backgroundColor:'white',
  shadowColor:'#000',
  shadowOffset:{
    width:0,
    height:height(10)
  },
  shadowRadius:25,
  shadowOpacity:0.5,
  elevation:15,
  width:width(35),
  height:50,
  marginTop:height(2),
  borderRadius:10,
  color:'black',
  fontWeight:'bold'
}
const LoginScreen =()=>{
  return (
    <View style={{width:width(100),alignItems:'center'}}>
          <Image style={{width:width(30),height:height(10),marginTop:height(5)}} source={Logo}/>
          <Text style={{marginTop:height(5), color:'#a9a9a9',fontSize:30,fontWeight:'bold'}}>Welcome Back!</Text>
          <TextInput style={{marginTop:height(5),width:width(80),backgroundColor:'#dcdcdc',borderRadius:15,fontSize:20,fontWeight:'bold',textAlign:'center'}} placeholder='User Name'/>
          <Button upperCase={false} style={ {container:{backgroundColor:'orange',width:width(80),height:50, marginTop:height(5), borderRadius:20},text:{color:'white',fontSize:20,fontWeight:'bold'}}} text='Login'/>
          <Text style={{color:'#ffa500',fontSize:15,textDecorationLine:'underline',marginTop:height(3)}}>Forgot password?</Text>
          <View style={{flexDirection:'row',width:width(80),justifyContent:'space-between'}}>
            <TouchableOpacity style={button}>
              <Image style={image} source={Fb}/>
              <Text style={{fontWeight:'bold',fontSize:20,color:'blue'}}>
                Sign in
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={button}>
              <Image style={image} source={G}/>
              <Text style={{fontWeight:'bold',fontSize:20,color:'red'}}>
                Sign in
              </Text>
            </TouchableOpacity>
          </View>  
          <Text style={{margin:25,fontSize:15}}>Don't have an account? <Text style={{color:'#ffa500'}}>Sign Up</Text></Text>
    </View>
  )
} 

export default LoginScreen