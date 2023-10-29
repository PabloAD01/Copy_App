import React, {useContext, useEffect, useState} from 'react';
import {
  Modal,
  Alert,
  View,
  Easing,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import LoginScreen from '../../screens/LoginScreen';
import {
  NavigationContainer,
  RouteProp,
  useIsFocused,
} from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {AuthContext} from '../../providers/AuthProvider';
import RegisterScreen from '../../screens/RegisterScreen';
import Animated, {
  useSharedValue,
  withSpring,
  useAnimatedProps,
  withTiming,
} from 'react-native-reanimated';
import {Dimensions} from 'react-native';
import {Keyboard} from 'react-native';

useIsFocused;

type Props = {
  modalVisible: boolean;
  setModalVisible: (modalVisible: boolean) => void;
};

type RootStackParamList = {
  Login: undefined;
  Register: undefined;
};

export type LoginScreenNavigationProp = NativeStackScreenProps<
  RootStackParamList,
  'Login'
>;

export type RegisterScreenNavigationProp = NativeStackScreenProps<
  RootStackParamList,
  'Register'
>;

export type LoginScreenRouteProp = RouteProp<RootStackParamList, 'Register'>;
export type RegisterScreenRouteProp = RouteProp<RootStackParamList, 'Login'>;

const Stack = createNativeStackNavigator<RootStackParamList>();

const heightDim = Dimensions.get('window').height;
const widthDim = Dimensions.get('window').width;

const AuthModal = ({modalVisible, setModalVisible}: Props) => {
  const {LoginWithEmailAndPassword, loggedIn, loginHeight} =
    useContext(AuthContext);

  const [isLoginScreen, setIsLoginScreen] = useState(true);

  const yPos = useSharedValue(heightDim);
  const animatedVertical = useAnimatedProps(() => {
    return {
      translateY: yPos.value,
    };
  });

  const toggleScreen = () => {
    setIsLoginScreen(!isLoginScreen);
  };

  useEffect(() => {
    if (loggedIn) {
      setModalVisible(false);
      Keyboard.dismiss();
    }
  }, [loggedIn]);

  useEffect(() => {
    if (modalVisible) {
      yPos.value = withTiming(-heightDim, {
        duration: 300,
      });
    } else {
      yPos.value = withTiming(0, {
        duration: 300,
      });
    }
  }, [modalVisible]);

  return (
    <Animated.View
      style={[
        {
          width: widthDim,
          height: heightDim,
          position: 'absolute',
          left: 0,
          top: heightDim,
          zIndex: 999999,
        },
        animatedVertical,
      ]}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.centeredView}>
        <TouchableOpacity
          activeOpacity={1}
          style={styles.centeredView}
          onPress={() => setModalVisible(false)}>
          {/*   <TouchableHighlight style={styles.modalView}> */}
          <View
            style={[
              styles.modalView,
              {height: loginHeight, overflow: 'hidden'},
            ]}>
            <NavigationContainer independent>
              <Stack.Navigator>
                <Stack.Screen
                  name="Login"
                  component={LoginScreen}
                  options={{headerShown: false}}
                />
                <Stack.Screen
                  name="Register"
                  component={RegisterScreen}
                  options={{headerShown: false}}
                />
              </Stack.Navigator>
            </NavigationContainer>
          </View>
          {/* </TouchableHighlight> */}
        </TouchableOpacity>
      </KeyboardAvoidingView>
      {/*         <LoginScreen
          setModalVisible={setModalVisible}
          onToggleScreen={toggleScreen}
        />

        <RegisterScreen
          setModalVisible={setModalVisible}
          onToggleScreen={toggleScreen}
        /> */}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 8,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,

    gap: 10,
  },
});

export default AuthModal;
