import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View , Image} from 'react-native';
import React from 'react';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
const category = [
    {
     img: require('./assets/tshirt.jpg'),
     text: 'Long Sleeve T-shirt',
     press:'Shirts',
     id:1
    },
     {
      img: require('./assets/slipper.jpg'),
      text: 'Slippers',
      press:'Slippers',
      id:2
     },
     {
      img: require('./assets/heels.jpg'),
      text: 'Heels',
      press:'Heels',
      id:3
     },
     {
      img: require('./assets/tops.jpg'),
      text: 'Women Tops',
      press:'Tops',
      id:4
     },
     {
      img: require('./assets/accessories.jpg'),
      text: 'Accessories',
      press:'Accessories',
      id:5
     },
     {
      img: require('./assets/bottom.jpg'),
      text: 'Women Bottom Wear',
      press:'Women Bottom',
      id:6
     },
  ]
  const Categories2 = (props)=>{
    return(
    <ScrollView>
     <View style={styles.container}>
        {
         category.map((item)=><View style={{flex:1,flexDirection:'row',marginBottom:20,justifyContent:'space-around'}} key={item.id}>
            <Image
            style={{height:70,width:70}} source={item.img}> 
            </Image>
            <Text style={{fontSize:20 ,textAlignVertical:'center',flexWrap:'wrap',width:120}}>{item.text}</Text>
            <TouchableOpacity onPress={()=>props.navigation.navigate(item.press)}>
            <Image style={{height:70,width:70}} source={require('./assets/arrow.jpg')}></Image>
            </TouchableOpacity>

            </View>)
        }
     </View>
     </ScrollView>
    );
   }
   const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection:'column',
      marginTop:40
    },
  });
export default Categories2;  