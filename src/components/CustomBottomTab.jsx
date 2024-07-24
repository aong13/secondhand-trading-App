import React from 'react';
import { TouchableOpacity, View, Image, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const homeOff = require('../assets/icons/bottomTab/home-outline.png');
const homeOn = require('../assets/icons/bottomTab/home-fill.png');
const searchOff = require('../assets/icons/bottomTab/search-outline.png');
const searchOn = require('../assets/icons/bottomTab/search-fill.png');
const dmOff = require('../assets/icons/bottomTab/chat-outline.png');
const dmOn = require('../assets/icons/bottomTab/chat-fill.png');
const mypageOff = require('../assets/icons/bottomTab/person-outline.png');
const mypageOn = require('../assets/icons/bottomTab/person-fill.png');

const CustomBottomTab = ({state, navigation, descriptors}) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.bottomTabBarWrapper, { paddingBottom: insets.bottom+10 }]}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = route.name;
        const isFocused = state.index === index;

        const iconFlag = (bool) => {
          switch (label) {
            case 'Home':
              return bool ? homeOn : homeOff;
            case 'SelectAdress':
              return bool ? searchOn : searchOff;
            case 'Chat':
              return bool ? dmOn : dmOff;
            case 'Add':
              return bool ? addOff : addOff; // 아이콘이 없어서 임시
            default:
              return bool ? mypageOn : mypageOff;
          }
        };

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={index}
            style={{ flex: 1, alignItems: 'center' }}
            onPress={onPress}
            activeOpacity={0.7}
          >
            <Image source={iconFlag(isFocused)} style={{ width: 30, height: 30 }} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  bottomTabBarWrapper: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    justifyContent: 'space-between',
    borderStyle: 'solid',
    borderTopWidth: 0.5,
    borderColor: '#EEE',
    backgroundColor: '#FFF',
    paddingTop: 10,
    paddingBottom: 10,
    zIndex: 10,
  },
});

export default CustomBottomTab;
