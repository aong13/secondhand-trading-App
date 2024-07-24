import React, { useEffect } from 'react';
import { View, Text, Platform, PermissionsAndroid } from 'react-native';
import { useDispatch } from 'react-redux';
import Geolocation from 'react-native-geolocation-service';
import { setCurrentLocation } from '../redux/actions/locationAction';

const Splash = ({ navigation }) => {
  const dispatch = useDispatch();

  const getMyLocation = () => {
    console.log('get My Location =====>');
    Geolocation.getCurrentPosition(
      (position) => {
        console.log('😀 position =====> ', position);
        // Redux를 사용
        dispatch(setCurrentLocation(position.coords));
      },
      (error) => {
        console.log('error가 있습니다.', error);
        if (toast.current) {
            if (error.code === 1) {
                toast.current.show('설정에서 위치를 허용해주세요.', DURATION.LENGTH_SHORT);
            } else if (error.code === 5) {
                toast.current.show('다시 시도하여 확인을 눌러주세요.', DURATION.LENGTH_SHORT);
            } else {
                toast.current.show('다시 시도하여 확인을 눌러주세요.', DURATION.LENGTH_SHORT);
            }
        }
    },
    { enableHighAccuracy: false, timeout: 2000 },
    );
  };

  const getCurrentLocation = async () => {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        getMyLocation();
      }
    } else {
      const ios_granted = await Geolocation.requestAuthorization('always');
      if (ios_granted === 'granted') {
        getMyLocation();
      }
    }
  };

  useEffect(() => {
    setTimeout(() => {
      // checkLoginStatus();
      getCurrentLocation();
      navigation.replace('MainTab');
    }, 2000);
  }, [navigation]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>오운완</Text>
    </View>
  );
};

export default Splash;
