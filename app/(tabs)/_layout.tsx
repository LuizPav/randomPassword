import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import Icon from '@expo/vector-icons/FontAwesome';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Gerar Senhas',
          tabBarIcon: ({ color }) => <Icon size={28} name="home" color={color} />,
          tabBarLabelStyle:{
            fontSize: 15
          },
        }}
      />
      <Tabs.Screen
        name="myPasswords"
        options={{
          title: 'Minhas Senhas',
          tabBarIcon: ({ color, focused }) => focused ? <Icon size={28} name="unlock" color={color} /> : <Icon size={28} name="lock" color={color} />,
          tabBarLabelStyle:{
            fontSize: 15
          },
        }}
      />
    </Tabs>
  );
}
