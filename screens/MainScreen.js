import React from 'react';
import {Image,ScrollView,TouchableOpacity,View,Dimensions,Text,ImageBackground, TouchableOpacityBase} from 'react-native';
import {Button} from 'react-native-material-ui';
const Background = require('../icons/ba.png')
const Racket = require('../icons/racket.jpg')
const Boot = require('../icons/boots.jpg')
const Pc = require('../icons/pc.jpg')
const Share = require('../icons/1.png')
const Like = require('../icons/lik.png')
const Comment = require('../icons/iconn.png')
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
const text={
  alignSelf:'center',
  fontWeight:'bold',
  marginTop:height(3)
}
const MainScreen =()=>{
  return (
    <ScrollView style={{width:width(100)}}>
      <ImageBackground style={{width:width(100),alignSelf:'center',height:height(140),alignItems:'center'}} source={Background}>
         <View style={{flexDirection:'row',marginTop:height(21),width:width(100)}}>
         <View style={{width:width(60)}}>
            <Image style={{width:width(60)}}source={Racket} />
            <View style={{flexDirection:'row',width:width(60)}} >
            <TouchableOpacity style={{width:width(30),textAlign:'center',justifyContent:'center'}}>
                <Text style={{fontWeight:'bold',alignSelf:'center'}}>1101</Text>
                <Text style={{color:'#ffa500',alignSelf:'center', fontWeight:'bold'}}>Demand</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{backgroundColor:'#ffa500',width:width(30)}}>
                <Text style={{alignSelf:'center',fontWeight:'bold'}}>1111</Text>
                <Text style={{alignSelf:'center',fontWeight:'bold',color:'white'}}>Help Recieved</Text>
              </TouchableOpacity>
            </View>
         </View>
         <View style={{width:width(40)}}>
           <Text style={{...text}}>Contact Number</Text>
           <Text style={{...text,color:'#ffa500'}}>1234567890</Text>
           <Text style={{...text}}>Mail Id</Text>
           <Text style={{...text,color:'#ffa500'}}>zzz@gamil.com</Text>
           <Text style={{...text}}>Address</Text>
           <Text style={{...text,color:'#ffa500'}}>xxx yyy zzz</Text>
         </View>
         </View>
         <View style={{marginTop:height(3),height:height(4),flexDirection:'row',width:width(100)}}>
           <TouchableOpacity style={{borderRadius:70,justifyContent:'center',width:width(25),textAlign:'center',backgroundColor:'#ffa500',height:height(2)}}>
             <Text style={{alignSelf:'center',fontWeight:'bold',color:'white'}}>Interested</Text>
             <Text style={{alignSelf:'center',fontWeight:'bold',color:'white'}}>People</Text>
           </TouchableOpacity>
           <View style={{width:width(25),flexDirection:'row',alignItems:"center",textAlign:'center',height:height(10)}}>
             <Image style={{width:width(5),height:height(5)}} source={Share}/>
             <Text style={{fontWeight:'bold'}}>Share</Text>
           </View>
           <View style={{width:width(25),flexDirection:'row',alignItems:"center",textAlign:'center',height:height(10)}}>
             <Image style={{width:width(5),height:height(5)}} source={Comment}/>
             <Text style={{fontWeight:'bold'}}>Comment</Text>
           </View>
           <View style={{width:width(25),flexDirection:'row',alignItems:"center",textAlign:'center',height:height(10)}}>
             <Image style={{width:width(5),height:height(5)}} source={Like}/>
             <Text style={{fontWeight:'bold'}}>Like</Text>
           </View>
         </View>
         <Image style={{width:width(90)}} source={Boot} />

         <View style={{marginTop:height(3),height:height(4),flexDirection:'row',width:width(100)}}>
           <TouchableOpacity style={{borderRadius:70,justifyContent:'center',width:width(25),textAlign:'center',backgroundColor:'#ffa500',height:height(2)}}>
             <Text style={{alignSelf:'center',fontWeight:'bold',color:'white'}}>Interested</Text>
             <Text style={{alignSelf:'center',fontWeight:'bold',color:'white'}}>People</Text>
           </TouchableOpacity>
           <View style={{width:width(25),flexDirection:'row',alignItems:"center",textAlign:'center',height:height(10)}}>
             <Image style={{width:width(5),height:height(5)}} source={Share}/>
             <Text style={{fontWeight:'bold'}}>Share</Text>
           </View>
           <View style={{width:width(25),flexDirection:'row',alignItems:"center",textAlign:'center',height:height(10)}}>
             <Image style={{width:width(5),height:height(5)}} source={Comment}/>
             <Text style={{fontWeight:'bold'}}>Comment</Text>
           </View>
           <View style={{width:width(25),flexDirection:'row',alignItems:"center",textAlign:'center',height:height(10)}}>
             <Image style={{width:width(5),height:height(5)}} source={Like}/>
             <Text style={{fontWeight:'bold'}}>Like</Text>
           </View>
         </View>
         
         <Image source={Pc} />
         
          <View style={{marginTop:height(70)}}>
            <Button upperCase={false} style={ {container:{backgroundColor:'white', shadowColor:'#000',shadowOffset:{width:0,height:height(10)},shadowRadius:25, shadowOpacity:0.5,elevation:15,width:width(60),height:50, marginTop:height(2), borderRadius:25},text:{color:'black',fontWeight:'bold',fontSize:20}}} text='Register'/>
            <Button upperCase={false} style={ {container:{backgroundColor:'white', shadowColor:'#000',shadowOffset:{width:0,height:height(10)},shadowRadius:25, shadowOpacity:0.5,elevation:15,width:width(60),height:50, marginTop:height(2), borderRadius:25},text:{color:'black',fontWeight:'bold',fontSize:20}}} text='Login'/>
          </View>  
      </ImageBackground>
    </ScrollView>
  )
} 

export default MainScreen