import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View , Image} from 'react-native';
import React from 'react';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
const listshirt = [
    {img : require('./assets/shirt1.jpg'),
    text: 'Long Sleeve T shirt',
    price:'$14.50',
    id:1,
    detail:'Revolutionize your daily routine with our cutting-edge product, seamlessly designed to enhance efficiency and elevate convenience. Experience unparalleled quality and innovation that caters to your unique needs. Unlock a new level of performance and satisfaction with our versatile solution. ',
   },
   {img : require('./assets/shirt2.jpg'),
    text: 'Long Sleeve T shirt',
    price:'$16.99',
    id:2,
    detail:'Revolutionize your daily routine with our cutting-edge product, seamlessly designed to enhance efficiency and elevate convenience. Experience unparalleled quality and innovation that caters to your unique needs. Unlock a new level of performance and satisfaction with our versatile solution. ',
   },
   {img : require('./assets/shirt3.jpg'),
    text: 'Long Sleeve T shirt', 
    price:'$18.50',
    id:3,
    detail:'Revolutionize your daily routine with our cutting-edge product, seamlessly designed to enhance efficiency and elevate convenience. Experience unparalleled quality and innovation that caters to your unique needs. Unlock a new level of performance and satisfaction with our versatile solution. ',
   },
   {img : require('./assets/shirt4.jpg'),
    text: 'Long Sleeve T shirt',
    price:'$20.99',
    id:4,
    detail:'Revolutionize your daily routine with our cutting-edge product, seamlessly designed to enhance efficiency and elevate convenience. Experience unparalleled quality and innovation that caters to your unique needs. Unlock a new level of performance and satisfaction with our versatile solution. ',
   },
   {img : require('./assets/shirt5.jpg'),
    text: 'Long Sleeve T shirt',
    price:'$55.50',
    id:5,
    detail:'Revolutionize your daily routine with our cutting-edge product, seamlessly designed to enhance efficiency and elevate convenience. Experience unparalleled quality and innovation that caters to your unique needs. Unlock a new level of performance and satisfaction with our versatile solution. ',
   },
   {img : require('./assets/shirt6.jpg'),
    text: 'Long Sleeve T shirt',
    price:'$33.99',
    id:6,
    detail:'Revolutionize your daily routine with our cutting-edge product, seamlessly designed to enhance efficiency and elevate convenience. Experience unparalleled quality and innovation that caters to your unique needs. Unlock a new level of performance and satisfaction with our versatile solution. ',
   },
   {img : require('./assets/shirt7.jpg'),
    text: 'Long Sleeve T shirt',
    price:'$24.50',
    id:7,
    detail:'Revolutionize your daily routine with our cutting-edge product, seamlessly designed to enhance efficiency and elevate convenience. Experience unparalleled quality and innovation that caters to your unique needs. Unlock a new level of performance and satisfaction with our versatile solution. ',
   },
   {img : require('./assets/shirt8.jpg'),
    text: 'Long Sleeve T shirt',
    price:'$53.99',
    id:8,
    detail:'Revolutionize your daily routine with our cutting-edge product, seamlessly designed to enhance efficiency and elevate convenience. Experience unparalleled quality and innovation that caters to your unique needs. Unlock a new level of performance and satisfaction with our versatile solution. ',
   },
   {img : require('./assets/shirt9.jpg'),
    text: 'Long Sleeve T shirt',
    price:'$33.99',
    id:9,
    detail:'Revolutionize your daily routine with our cutting-edge product, seamlessly designed to enhance efficiency and elevate convenience. Experience unparalleled quality and innovation that caters to your unique needs. Unlock a new level of performance and satisfaction with our versatile solution. ',
   },
   {img : require('./assets/shirt10.jpg'),
    text: 'Long Sleeve T shirt',
    price:'$27.50',
    id:10,
    detail:'Revolutionize your daily routine with our cutting-edge product, seamlessly designed to enhance efficiency and elevate convenience. Experience unparalleled quality and innovation that caters to your unique needs. Unlock a new level of performance and satisfaction with our versatile solution. ',
   }
   ]
   const Shirts = (props)=>{
    return (
      <ScrollView>
      <View style={styles.container}>
        {
          listshirt.map((item)=><View style={{margin:10 ,width:180}} key={item.id}>
          <TouchableOpacity onPress={()=> props.navigation.navigate('Comp',{item})}>
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
     export default Shirts;