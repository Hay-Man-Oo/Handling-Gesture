import { View, StyleSheet, Text } from 'react-native';
import { TapGestureHandler, State } from 'react-native-gesture-handler';

export default function SingleTapGesture() {

  const onSingleTapEvent = (event:any) => {
    if (event.nativeEvent.state === State.ACTIVE) {
      alert('Hey single tap!');
    }
  };

  return (
    <>
      <Text style={{ textAlign: 'center', marginVertical: 20 ,fontSize:20 }}>
          Single Tap Gesture Handler
        </Text>
      <TapGestureHandler
        onHandlerStateChange={onSingleTapEvent}
      >
        <View style={styles.square} />
      </TapGestureHandler>
    </>
  );
}
const styles = StyleSheet.create({
  square: {
    width: 150,
    height: 150,
    backgroundColor: 'violet',
    marginTop: 22,
    marginBottom: 22,
    marginLeft: 80,
  },
});