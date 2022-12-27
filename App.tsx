/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect, type PropsWithChildren} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {Alert, AlertReturnType} from './src/Alert';
import {AlertProvider} from './src/Alert.context';

const Section: React.FC<
  PropsWithChildren<{
    title: string;
  }>
> = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const alertRef1 = React.useRef<AlertReturnType>();
  const alertRef2 = React.useRef<AlertReturnType>();
  const alertRef3 = React.useRef<AlertReturnType>();

  useEffect(() => {
    setTimeout(() => {
      alertRef1.current?.open();
    }, 1000);
    setTimeout(() => {
      alertRef2.current?.open();
    }, 2000);
    setTimeout(() => {
      alertRef3.current?.open();
    }, 3000);
  }, [alertRef1, alertRef2, alertRef3]);

  return (
    <AlertProvider>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={backgroundStyle}>
          <Header />
          <View
            style={{
              backgroundColor: isDarkMode ? Colors.black : Colors.white,
            }}>
            <Section title="Step One">
              Edit <Text style={styles.highlight}>App.tsx</Text> to change this
              screen and then come back to see your edits.
            </Section>
            <Section title="See Your Changes">
              <ReloadInstructions />
            </Section>
            <Section title="Debug">
              <DebugInstructions />
            </Section>
            <Section title="Learn More">
              Read the docs to discover what to do next:
            </Section>
            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView>

      <Alert ref={alertRef1}>
        <View style={styles.alert}>
          <Text>Alert 1</Text>
          <Button title="Close 1" onPress={() => alertRef1.current?.close()} />
        </View>
      </Alert>

      <Alert ref={alertRef2} backdrop>
        <View style={styles.alert}>
          <Text>Alert 2</Text>
          <Button title="Close 2" onPress={() => alertRef2.current?.close()} />
        </View>
      </Alert>

      <Alert ref={alertRef3} backdrop backdropOpacity={1}>
        <View style={styles.alert}>
          <Text>Alert 3</Text>
          <Button title="Close 3" onPress={() => alertRef3.current?.close()} />
        </View>
      </Alert>
    </AlertProvider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  // ALERT STYLES
  alert: {
    shadowOffset: {width: 0, height: 5},
    shadowColor: '#000',
    shadowOpacity: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: '90%',
    height: 200,
    borderRadius: 8,
    elevation: 10,
  },
});

export default App;
