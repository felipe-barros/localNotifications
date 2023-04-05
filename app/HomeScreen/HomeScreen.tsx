import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './HomeScreen.styles';
import notifee from '@notifee/react-native';

function HomeScreen(): JSX.Element {
  async function onCreateCategories() {
    await notifee.setNotificationCategories([
      {
        id: 'potion',
        actions: [
          {
            id: 'apply-potion',
            title: 'Apply Potion',
          },
          {
            id: 'remove-potion',
            title: 'Another option',
          },
        ],
      },
      {
        id: 'attacking',
        actions: [
          {
            id: 'check-battle',
            title: 'Check battle',
            foreground: true,
          },
          {
            id: 'apply-potion',
            title: 'Apply potion',
          },
        ],
      },
    ]);
  }

  async function onDisplayNotification1() {
    // Request permissions (required for iOS)
    await notifee.requestPermission();

    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });

    // Display a notification
    await notifee.displayNotification({
      title: 'You have no life!',
      body: "Use your potions or you won't be able to fight in your next battle",
      ios: {
        categoryId: 'potion',
      },
      android: {
        channelId,
        // pressAction is needed if you want the notification to open the app when pressed
        pressAction: {
          id: 'default',
        },
        actions: [
          {
            title: 'Apply Potion',
            pressAction: {
              id: 'apply-potion',
            },
          },
        ],
      },
    });
  }

  async function onDisplayNotification2() {
    // Request permissions (required for iOS)
    await notifee.requestPermission();

    // Create a channel (required for Android)
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });

    // Display a notification
    await notifee.displayNotification({
      title: 'Watch out!',
      body: 'A wild coyotee is attacking your totem. Prepare for the battle!',
      ios: {
        categoryId: 'attacking',
        attachments: [
          {
            url: 'https://cdn.britannica.com/45/125545-050-B705597E/Coyote.jpg',
          },
        ],
      },
      android: {
        channelId,
        // pressAction is needed if you want the notification to open the app when pressed
        pressAction: {
          id: 'default',
        },
        actions: [
          {
            title: 'Check battle',
            pressAction: {
              id: 'default',
            },
          },
        ],
      },
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Local Notifications</Text>
      </View>
      <View style={styles.content}>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={onCreateCategories}
          activeOpacity={0.6}>
          <Text style={styles.buttonTitle}>Create Categories</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={onDisplayNotification1}
          activeOpacity={0.6}>
          <Text style={styles.buttonTitle}>Send notification with actions</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={onDisplayNotification2}
          activeOpacity={0.6}>
          <Text style={styles.buttonTitle}>
            Send notification with custom image
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default HomeScreen;
