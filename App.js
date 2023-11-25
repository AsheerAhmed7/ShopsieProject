import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { DrawerItem, createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import Categories from './Categories';
import Shirts from './Shirts';
import Heels from './Heels';
import Slipper from './Slipper';
import Tops from './Tops';
import Accessories from './Accessories';
import Bottom from './Bottom';
import Comp from './Comp';
import Categories2 from './Categories2';
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
      options={{
        headerShown:false
      }}
      name='Drawer' component={DrawerNavigation}>
      </Stack.Screen>
      <Stack.Screen
        options={{
          title:'Shopsie',
          headerTitleStyle:{
            marginLeft:100,
            color:'blue'
          }
        }}
      name='Comp' component={Comp}>
      </Stack.Screen>
      <Stack.Screen
      options={({ navigation }) => ({
        title:'All Categories',
        headerTitleStyle:{
          marginLeft: 70,
          marginTop: 10
        },
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate('All Categories')}>
            <Image style={{ height: 30, width: 30 }} source={require('./assets/categories.png')} />
          </TouchableOpacity>
           ),
      })}
      name='SecondPage' component={Categories2}>
      </Stack.Screen>
      </Stack.Navigator>

    </NavigationContainer>
    )
}

const DrawerNavigation = ()=>{
  return(
    <Drawer.Navigator
    drawerContent={(props) => {
      return (
        <DrawerContentScrollView {...props}>
          <StatusBar hidden={true}></StatusBar>
          <SafeAreaView>
            <View style={{ height: 200, width: '100%', justifyContent: 'space-around', alignItems: 'center', flexDirection: 'row' }}>
              <Image
                source={require('./assets/dp.jpg')} style={{ height: 60, width: 60, borderRadius: 30 }}   ></Image>
              <View >
                <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Claudia Alves</Text>
                <Text>hello@reallygreatsite.com</Text>
              </View>
            </View>
            <Text style={{ fontSize: 28, fontWeight: 'bold', marginLeft: 10 }}>Information</Text>
            <View style={{ marginTop: 20, marginLeft: 10 }}>
              <View style={{ flexDirection: 'row', marginBottom: 10, marginLeft: 5 }}>
                <Image
                  source={require('./assets/dpicon.jpg')}
                  style={{ height: 40, width: 40, marginRight: 15 }}></Image>
                <Text style={{ fontWeight: '500', fontSize: 18, textAlignVertical: 'center',}}>Edit Profile</Text>
              </View>
              <View style={{ flexDirection: 'row', marginBottom: 10, height: 50, width: 150, justifyContent: 'center', alignItems: 'center' }}>
                <Image
                  source={require('./assets/user.jpg')}
                  style={{ height: 30, width: 30, marginRight: 25 }}></Image>
                <Text style={{ fontWeight: '500', fontSize: 18, textAlignVertical: 'center' }}>Username</Text>
              </View>
              <View style={{ flexDirection: 'row', marginBottom: 10, marginLeft: 5 }}>
                <Image
                  source={require('./assets/email.jpg')}
                  style={{ height: 35, width: 35, marginRight: 22 }}></Image>
                <Text style={{ fontWeight: '500', fontSize: 18, textAlignVertical: 'center' }}>E-mail</Text>
              </View>
              <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                <Image
                  source={require('./assets/pass.jpg')}
                  style={{ height: 40, width: 40, marginRight: 15 }}></Image>
                <Text style={{ fontWeight: '500', fontSize: 18, textAlignVertical: 'center' }}>Password</Text>
              </View>
            </View>
            <Text style={{ fontSize: 28, fontWeight: 'bold', margin: 20 }}>Categories</Text>

            <DrawerItemList {...props} />
          </SafeAreaView>
        </DrawerContentScrollView>
      )
    }}>
    <Drawer.Screen
      options={({ navigation }) => ({
        title:'All Categories',
        headerTitleStyle:{
          marginLeft: 70,
          marginTop: 10
        },
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate('SecondPage')}>
            <Image style={{ height: 60, width: 60 }} source={require('./assets/caticon.jpg')} />
          </TouchableOpacity>
           ),
           drawerIcon: () => (
            <Image source={require('./assets/categories.png')}
              style={{ height: 30, width: 30 }}></Image>
          )
      })}
      name='All Categories' component={Categories}
    ></Drawer.Screen>
    <Drawer.Screen
      options={{
        headerTitleStyle: {
          marginLeft: 100,
          marginTop: 10
        },
        drawerIcon: () => (
          <Image source={require('./assets/shirticon.jpg')}
            style={{ height: 30, width: 30 }}></Image>
        )
      }}
      name='Shirts' component={Shirts}
    ></Drawer.Screen>
    <Drawer.Screen
      options={{
        headerTitleStyle: {
          marginLeft: 100,
          marginTop: 10
        },
        drawerIcon: () => (
          <Image source={require('./assets/slipicon.jpg')}
            style={{ height: 30, width: 30 }}></Image>
        )
      }}
      name='Slippers' component={Slipper}
    ></Drawer.Screen>
    <Drawer.Screen
      options={{
        headerTitleStyle: {
          marginLeft: 100,
          marginTop: 10
        },
        drawerIcon: () => (
          <Image source={require('./assets/heelicon.jpg')}
            style={{ height: 30, width: 30 }}></Image>
        )
      }}
      name='Heels' component={Heels}
    ></Drawer.Screen>
    <Drawer.Screen
      options={{
        headerTitleStyle: {
          marginLeft: 100,
          marginTop: 10
        },
        drawerIcon: () => (
          <Image source={require('./assets/top.jpg')}
            style={{ height: 30, width: 30 }}></Image>
        )
      }}
      name='Tops' component={Tops}
    ></Drawer.Screen>
    <Drawer.Screen
      options={{
        headerTitleStyle: {
          marginLeft: 80,
          marginTop: 10
        },
        drawerIcon: () => (
          <Image source={require('./assets/aicon.jpg')}
            style={{ height: 30, width: 30 }}></Image>
        )
      }}
      name='Accessories' component={Accessories}
    ></Drawer.Screen>
    <Drawer.Screen
      options={{
        headerTitleStyle: {
          marginLeft: 75,
          marginTop: 10
        },
        drawerIcon: () => (
          <Image source={require('./assets/trouser.jpg')}
            style={{ height: 30, width: 30 }}></Image>
        )
      }}
      name='Women Bottom' component={Bottom}
    ></Drawer.Screen>
  </Drawer.Navigator>

  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 40
  },
});
