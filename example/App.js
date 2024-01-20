import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { createSteps } from 'react-navigation-steps';

const Steps = createSteps();

const AppView = ({children}) => {
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.container, {paddingTop: insets.top}]}>
      {children}
    </View>)
}

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AppView>
          <Steps.Navigator contentStyle={styles.navigatorContent}>
            {['red', 'green', 'blue', 'orange', 'yellow', 'black'].map((color, index) => {
              const name = `Step ${index + 1}`;
              const contentText = color[0].toUpperCase() + color.substring(1);
              return <Steps.Screen key={`step-${index}`} name={name}>
                {props => {
                  return <View style={[styles.step, { backgroundColor: color }]}>
                    <Text style={[styles.text, {color: color === 'black' ? 'white' : 'black'}]}>{contentText}</Text>
                  </View>
                }}
              </Steps.Screen>
            })}
          </Steps.Navigator>
          <StatusBar style="auto" />
        </AppView>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  navigatorContent: {
    flex: 1
  },
  step: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24
  }
});
