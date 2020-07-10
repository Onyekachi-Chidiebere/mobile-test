import React,{useState} from 'react';
import {TextInput,Image,Dimensions,View,Text,TouchableOpacity} from 'react-native';
import {Checkbox} from 'react-native-material-ui';
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
const input = {
  marginTop:height(3),
  width:width(90),
  backgroundColor:'#dcdcdc',
  borderRadius:15,
  fontSize:20,
  fontWeight:'bold',
  textAlign:'left',
  padding:15
}
const choice ={
  textAlign:'center',
  padding:13,
  height:height(7),
  width:width(45),
  fontWeight:'bold',
  fontSize:15
}
const SignupScreen =()=>{
  const [mail,setMail]=useState('#ffa500')
  const [num,setNum]=useState('white')
  const [mColor,setMColor]=useState('white')
  const [nColor,setNColor]=useState('black')
  const [check,setCheck]=useState(false)
  const [id,setId]=useState('Email-Id')
  const handleMail=()=>{
    setMail('#ffa500');
    setNColor('black')
    setMColor('white')
    setNum('white');
    setId('Email-Id')
  }
  const handleNumber=()=>{
    setMail('white');
    setNColor('white')
    setMColor('black')
    setNum('#ffa500');
    setId('Mobile Number')
  }
  return (
    <View style={{width:width(100),alignItems:'center'}}>
          <Image style={{width:width(30),height:height(10),marginTop:height(3)}} source={Logo}/>
          <Text style={{marginTop:height(1), color:'#a9a9a9',fontSize:30,fontWeight:'bold'}}>Create Account</Text>
          <View style={{flexDirection:'row',width:width(90),borderBottomColor:'#ffa500',borderBottomWidth:3}}>
            <TouchableOpacity style={{backgroundColor:mail,borderRadius:15}} onPress={handleMail}><Text style={{...choice,color:mColor}} >Using E-mail</Text></TouchableOpacity>
            <TouchableOpacity style={{backgroundColor:num,borderRadius:15}} onPress={handleNumber}><Text style={{...choice,color:nColor}} >Using Mobile Number</Text></TouchableOpacity>
          </View>
          <TextInput style={input} placeholder='User Name'/>
          <TextInput style={input} placeholder={id}/>
          <TextInput style={input} placeholder='Password'/>
          <TextInput style={input} placeholder='Confirm Password'/>
          <View style={{flexDirection:'row',alignItems:'center',width:width(90),marginTop:height(1)}}>
            <Checkbox onCheck={()=>{setCheck(!check)}} checked={check}/>
            <Text style={{}}>
              I Agree to the <Text style={{color:'#ffa500',textDecorationLine:'underline'}}>Terms and Conditions</Text> of Together
            </Text>
          </View>
          <TouchableOpacity style={{backgroundColor:'orange',width:width(90),height:50,justifyContent:'center', marginTop:height(3), borderRadius:20}}>
            <Text style={{color:'white',fontSize:20,fontWeight:'bold',alignSelf:'center'}}>Register</Text>
          </TouchableOpacity>
    </View>
  )
} 

export default SignupScreen