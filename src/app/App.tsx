import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import Products from '../screens/products/Products';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductDetails from '../screens/product-details/ProductDetails';
import Icons from 'react-native-vector-icons/EvilIcons';
import { ThemeProvider } from 'react-native-elements';
import theme from './theme';

const Tab = createBottomTabNavigator();

const TabScreen = ({ cart, onAddItemToCart }) => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.primary
        }
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: (props) => (
            <Icons name="search" color={props.focused ? theme.colors.primary : theme.colors.secondary} size={40} />
          )
        }}
        name="Productos"
      >
        {(props) => <Products {...props} cart={cart} onAddItemToCart={onAddItemToCart} />}
      </Tab.Screen>
      {/* Aquí podríamos incluir más tabs a nuestra app */}
    </Tab.Navigator>
  );
};

const Stack = createNativeStackNavigator();

const App = () => {
  const [cart, setCart] = useState<any>([]);

  const addItemToCart = (item) => {
    setCart([...cart, item]);
  };

  console.log('my carrito', cart);

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer theme={{ ...DefaultTheme, colors: { ...DefaultTheme.colors, ...theme.colors } }}>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: theme.colors.primary
            }
          }}
        >
          <Stack.Screen options={{ headerShown: false }} name="MainTab">
            {(props) => <TabScreen {...props} cart={cart} onAddItemToCart={addItemToCart} />}
          </Stack.Screen>
          <Stack.Screen name="product-details" component={ProductDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
