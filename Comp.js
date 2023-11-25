import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View , Image} from 'react-native';
import React from 'react';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
const Comp = (props) => {
    const item = props.route.params.item;
    return (
      <View style={{ flex: 1, marginBottom: 10 }}>
        <View style={{ flex: 1 }}>
          <View style={{ flexDirection: 'row' }}>
            <ScrollView horizontal={true}>
              <Image
                style={{ height: 300, width: 450 }}
                source={item.img}></Image>
              <Image
                style={{ height: 300, width: 450 }}
                source={item.img}></Image>
            </ScrollView>
          </View>
          <Text style={{ fontSize: 25, fontWeight: '700', marginTop: 20, marginBottom: 7 }}>{item.text}</Text>
          <Text style={{ color: 'blue', fontSize: 20, fontWeight: '500' }}>{item.price}</Text>
          <Text style={{ fontWeight: '500', fontSize: 20, marginTop: 15, marginBottom: 5}}>Product Details</Text>
          <Text style={{ flexWrap: 'wrap',fontSize:15 }}>{item.detail}</Text>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity style={{ width: 350, height: 40, backgroundColor: 'blue', borderRadius: 5, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 15, color: 'white' }}>Add to cart</Text></TouchableOpacity>
        </View>
      </View>
    );
  }
  export default Comp;