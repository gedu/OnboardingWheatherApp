import { NativeModules } from 'react-native';

const { DevicePusher } = NativeModules;

type DevicePusherContract = {
  fireNotification(title: string, message: string, id?: number): void;
  requestPermission(): Promise<boolean>;
};

export default DevicePusher as DevicePusherContract;
