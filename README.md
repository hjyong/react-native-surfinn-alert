# React Native Surfinn Alert

This is a custom component of React Native, a fully customizable popup, compatible with iOS and Android.

## Install

with npm

```sh
npm install react-native-surfinn-alert
```

with yarn

```sh
yarn add react-native-surfinn-alert
```

## Usage

Add AlertProvider to top of your app

```ts
import {AlertProvider} from 'react-native-surfinn-alert';

<AlertProvider>
  <AppNavigatior></AppNavigatior>
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

    <Alert ref={alertRef}>
      <View>
        <Text>Alert Title</Text>
        <Text>Alert Messages</Text>
        <Button onPress={close} title="Close Alert" />
      </View>
    </Alert>
  </View>
);
```

See more https://github.com/hjyong/react-native-surfinn-alert.git
