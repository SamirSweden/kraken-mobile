import React from 'react';
import { Text, View } from 'react-native';

import { EditScreenInfo } from './EditScreenInfo';

interface ScreenContentProps {
  title: string;
  path: string;
  children?: React.ReactNode;
}

export const ScreenContent: React.FC<ScreenContentProps> = ({ title, path, children }) => {
  return (
    <View className={styles.container}>
      <Text className={styles.title}>{title}</Text>
      <View className={styles.separator} />
      <EditScreenInfo />
      {children}
    </View>
  );
};

const styles = {
  container: `items-center flex-1 justify-center bg-black`,
  separator: `h-[1px] my-7 w-4/5 bg-gray-500`,
  title: `text-4xl font-bold text-white`,
};
