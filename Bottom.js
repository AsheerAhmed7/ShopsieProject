import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View , Image} from 'react-native';
import React from 'react';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
const listsBottom = [
    {img : require('./assets/bott1.jpg'),
    text: "Women's Bottom Wear",
    price:'$14.50',
    id:1,
    detail:'Revolutionize your daily routine with our cutting-edge product, seamlessly designed to enhance efficiency and elevate convenience. Experience unparalleled quality and innovation that caters to your unique needs. Unlock a new level of performance and satisfaction with our versatile solution. ',
   },
   {img : require('./assets/bott2.jpg'),
   text: "Women's Bottom Wear",
    price:'$16.99',
    id:2,
    detail:'Revolutionize your daily routine with our cutting-edge product, seamlessly designed to enhance efficiency and elevate convenience. Experience unparalleled quality and innovation that caters to your unique needs. Unlock a new level of performance and satisfaction with our versatile solution. ',
   },
   {img : require('./assets/bott3.jpg'),
   text: "Women's Bottom Wear",
    price:'$18.50',
    id:3,
    detail:'Revolutionize your daily routine with our cutting-edge product, seamlessly designed to enhance efficiency and elevate convenience. Experience unparalleled quality and innovation that caters to your unique needs. Unlock a new level of performance and satisfaction with our versatile solution. ',
   },
   {img : require('./assets/bott4.jpg'),
   text: "Women's Bottom Wear",
    price:'$20.99',
    id:4,
    detail:'Revolutionize your daily routine with our cutting-edge product, seamlessly designed to enhance efficiency and elevate convenience. Experience unparalleled quality and innovation that caters to your unique needs. Unlock a new level of performance and satisfaction with our versatile solution. ',
   },
   {img : require('./assets/bott5.jpg'),
   text: "Women's Bottom Wear",
    price:'$55.50',
    id:5,
    detail:'Revolutionize your daily routine with our cutting-edge product, seamlessly designed to enhance efficiency and elevate convenience. Experience unparalleled quality and innovation that caters to your unique needs. Unlock a new level of performance and satisfaction with our versatile solution. ',   
   },
   {img : require('./assets/bott6.jpg'),
   text: "Women's Bottom Wear",
    price:'$33.99',
    id:6,
    detail:'Revolutionize your daily routine with our cutting-edge product, seamlessly designed to enhance efficiency and elevate convenience. Experience unparalleled quality and innovation that caters to your unique needs. Unlock a new level of performance and satisfaction with our versatile solution. ',
   },
   {img : require('./assets/bott7.jpg'),
   text: "Women's Bottom Wear",
    price:'$24.50',
    id:7,
    detail:'Revolutionize your daily routine with our cutting-edge product, seamlessly designed to enhance efficiency and elevate convenience. Experience unparalleled quality and innovation that caters to your unique needs. Unlock a new level of performance and satisfaction with our versatile solution. ',
   },
   {img : require('./assets/bott8.jpg'),
   text: "Women's Bottom Wear",
    price:'$53.99',
    id:8,
    detail:'Revolutionize your daily routine with our cutting-edge product, seamlessly designed to enhance efficiency and elevate convenience. Experience unparalleled quality and innovation that caters to your unique needs. Unlock a new level of performance and satisfaction with our versatile solution. ',
   }
   ]
   const Bottom = (props)=>{
    return (
     <ScrollView>
      <View style={styles.container}>
        {
          listsBottom.map((item)=><View style={{margin:10 ,width:180}} key={item.id}>
          <TouchableOpacity onPress={()=>{props.navigation.navigate('Comp',{item})}}>
          <Image
          style={{height:180,width:180,borderRadius:4}}
          source={item.img}>
          </Image></TouchableOpacity>
          <Text style={{fontSize:18,fontWeight:'700',marginTop:7}}>{item.text}</Text>
          <Text style={{fontSize:15,fontWeight:'500',marginTop:12,color:'blue'}}>{item.price}</Text>
          </View>)
        }  
       </View>
       </ScrollView>
    )
     }
     const styles = StyleSheet.create({
        container: {
          flex: 1,
          flexDirection:'row',
          flexWrap:'wrap',
          marginTop:40
        },
      });
     export default Bottom;