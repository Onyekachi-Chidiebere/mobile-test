import React,{useState} from 'react';
import {TextInput,ScrollView,Alert,View,Dimensions,TouchableOpacity,Text,ImageBackground,Modal, TouchableWithoutFeedback} from 'react-native';
import {Button} from 'react-native-material-ui';
const Background = require('../icons/bl.png')
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
const alert = {
  marginTop:height(35),
  backgroundColor:'white',
  alignSelf:'center',
  width:width(80),
  height:height(24),
  shadowColor:'#000',
  shadowOffset:{
    width:0,
    height:height(10)
  },
  shadowRadius:25,
  shadowOpacity:0.5,
  elevation:15
}

const LocationScreen =()=>{
  const [cModal,setCModal]=useState(false)
  const [sModal,setSModal]=useState(false)
  const [dModal,setDModal]=useState(false)
  const [country,setCountry]=useState('USA')
  const [district,setDistrict]=useState('District')
  const [state,setState]=useState('Punjab')
  return (
    <ScrollView style={{width:width(100),height:height(120)}}>
      <ImageBackground style={{width:width(100),alignSelf:'center',height:height(120)}} source={Background}>
          <Text style={{color:'white',fontWeight:'bold',fontSize:30,marginLeft:width(10),marginTop:height(5)}}>Location</Text>
          <View style={{marginTop:height(10),width:width(100),alignItems:'center'}}>
            <TouchableOpacity onPress={()=>{setCModal(true)}}>
                <Text style={input}>{country}</Text>
            </TouchableOpacity>
            <Modal transparent={true} visible={cModal}>
              <TouchableOpacity onPress={()=>{setCModal(false);}} style={{width:width(100),height:height(100)}}>
                <View style={alert}>
                  <TouchableOpacity style={{margin:10}}  onPress={()=>{setCModal(false);setCountry('Country');console.log('hello pressed')}}>
                    <Text>country</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{margin:10}}  onPress={()=>{setCModal(false);setCountry('India');console.log('hello pressed')}}>
                    <Text>India</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{margin:10}}  onPress={()=>{setCModal(false);setCountry('USA');console.log('hello pressed')}}>
                    <Text>USA</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{margin:10}}  onPress={()=>{setCModal(false);setCountry('Canada');console.log('hello pressed')}}>
                    <Text>Canada</Text>
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            </Modal>

            <TouchableOpacity onPress={()=>{setSModal(true)}}>
                <Text style={input}>{state}</Text>
            </TouchableOpacity>
            <Modal transparent={true} visible={sModal}>
              <TouchableOpacity onPress={()=>{setSModal(false);}} style={{width:width(100),height:height(100)}}>
                <View style={alert}>
                  <TouchableOpacity style={{margin:10}}  onPress={()=>{setSModal(false);setState('State');console.log('hello pressed')}}>
                    <Text>State</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{margin:10}}  onPress={()=>{setSModal(false);setState('Haryana');console.log('hello pressed')}}>
                    <Text>Haryana</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{margin:10}}  onPress={()=>{setSModal(false);setState('Gujarat');console.log('hello pressed')}}>
                    <Text>Gujarat</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{margin:10}}  onPress={()=>{setSModal(false);setState('Punjab');console.log('hello pressed')}}>
                    <Text>Punjab</Text>
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            </Modal>
            
            <TouchableOpacity onPress={()=>{setDModal(true)}}>
                <Text style={input}>{district}</Text>
            </TouchableOpacity>
            <Modal transparent={true} visible={dModal}>
              <TouchableOpacity onPress={()=>{setDModal(false);}} style={{width:width(100),height:height(100)}}>
                <View style={alert}>
                  <TouchableOpacity style={{margin:10}}  onPress={()=>{setDModal(false);setDistrict('District');console.log('hello pressed')}}>
                    <Text>District</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{margin:10}}  onPress={()=>{setDModal(false);setDistrict('Panipat');console.log('hello pressed')}}>
                    <Text>Panipat</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{margin:10}}  onPress={()=>{setDModal(false);setDistrict('Sonipat');console.log('hello pressed')}}>
                    <Text>Sonipat</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{margin:10}}  onPress={()=>{setDModal(false);setDistrict('Kamal');console.log('hello pressed')}}>
                    <Text>Kamal</Text>
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            </Modal>
            <TextInput style={{...input,height:height(20)}} placeholder='Current Location'/>
            <TouchableOpacity style={{width:width(45),height:height(10),alignItems:'center',justifyContent:'center',marginTop:height(5),borderRadius:25,backgroundColor:'#ffa500'}}>
              <Text style={{fontWeight:'bold',color:'white',fontSize:20}}>Done</Text>
            </TouchableOpacity>
          </View>  
      </ImageBackground>
    </ScrollView>
  )
} 

export default LocationScreen