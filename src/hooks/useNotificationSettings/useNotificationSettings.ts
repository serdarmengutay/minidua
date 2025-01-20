import {useEffect, useState} from 'react';
import messaging from '@react-native-firebase/messaging';
import {Platform} from 'react-native';

export const useNotificationSettings = () => {
  const [token, setToken] = useState<string | null>(null);

  const requestUserPermission = async () => {
    try {
      const authStatus = await messaging().requestPermission();
      const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;

      if (enabled) {
        console.log('Bildirim izni verildi');
        getFCMToken();
      }
    } catch (error) {
      console.log('Bildirim izni hatası:', error);
    }
  };

  const getFCMToken = async () => {
    try {
      const fcmToken = await messaging().getToken();
      if (fcmToken) {
        setToken(fcmToken);
        console.log('FCM Token:', fcmToken);
      }
    } catch (error) {
      console.log('Token alma hatası:', error);
    }
  };

  const onNotificationReceived = async () => {
    messaging().onMessage(async remoteMessage => {
      console.log('Ön planda bildirim alındı:', remoteMessage);
    });

    messaging().setBackgroundMessageHandler(async remoteMessage => {
      console.log('Arka planda bildirim alındı:', remoteMessage);
    });
  };

  useEffect(() => {
    if (Platform.OS !== 'web') {
      requestUserPermission();
      onNotificationReceived();
    }
  }, []);

  return {
    token,
    requestUserPermission,
    getFCMToken,
  };
};
