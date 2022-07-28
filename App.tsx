import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
import 'react-native-gesture-handler';
import Pan from './GestureHandler/PanGestureHandler';
import Home from './GestureHandler/home';
import TapGesture from './GestureHandler/TapGestureHandler';
import SingleTapGesture from './GestureHandler/SingleTapGesture';
import DoubleTapGesture from './GestureHandler/DoubleTapGesture';
import SwipeGesture from './GestureHandler/SwipeableGesture';
import LongPressGesture from './GestureHandler/longPressGesture';
import PinchToZoom from './GestureHandler/Pinch-to-zoom';
import PullToRefresh from './GestureHandler/Pull-to-refresh';

export default function App() {
  return (
    <ScrollView>
      <View>
      <GestureHandlerRootView style={{flex:1}}>
        {/*<Pan />
        <Home />*/}
        {/*<TapGesture />
        <SingleTapGesture />
        <DoubleTapGesture />
        <SwipeGesture />
        <LongPressGesture />
        <PinchToZoom />*/}
        <PullToRefresh />
      </GestureHandlerRootView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
