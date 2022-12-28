# React Native Surfinn Alert

This is a custom component of React Native, a fully customizable, pop-up compatible with iOS and Android.

It just provides a pop-up container with a background, so you can implement your own view.
## Install

Install reanimated v2 first.
see https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/installation/

npm

```sh
npm install react-native-surfinn-alert
```

yarn

```sh
yarn add react-native-surfinn-alert
```

## Usage

Add AlertProvider to top of your app

```ts
import {AlertProvider} from 'react-native-surfinn-alert';

<AlertProvider>
  
    ...
  
</AlertProvider>;
```

and add Alert to your screen or component

```ts
import {Alert} from 'react-native-surfinn-alert';

const alertRef = React.useRef(null);

const open = () => {
  alertRef.current?.open();
};

const close = () => {
  alertRef.current?.close();
};

return (
  <View>
    <Button onPress={open} title="Open Alert" />

    <Alert ref={alertRef} backdrop backdropOpacity={0.3}>
      <View style={styles.alert}>
        <Text>Alert Title</Text>
        <Text>Alert Messages</Text>
        <Button onPress={close} title="Close Alert" />
      </View>
    </Alert>
  </View>
);

const styles = StyleSheet.create({
  alert: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  }
})
```

See more https://github.com/hjyong/react-native-surfinn-alert.git
