import DevicePusher from './DevicePusher';

export const fireNotification = (
  title: string,
  message: string,
  id: number = 1,
) => {
  DevicePusher.fireNotification(title, message, id);
};

export const requestPermission = () => DevicePusher.requestPermission();
