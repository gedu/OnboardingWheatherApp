import { NativeModules } from 'react-native';

const { DevicePusherModule } = NativeModules;
console.log(DevicePusherModule);
type DevicePusherContract = {
  fireNotification(title: string, message: string, id?: number): void;
  requestPermission(): Promise<boolean>;
};

export default DevicePusherModule as DevicePusherContract;
