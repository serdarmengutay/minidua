import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useAppTheme} from '../../hooks/useAppTheme/useAppTheme';
import {Theme} from '../../utils/colors';

type CardProps = {
  title: string;
  content: React.ReactNode;
};

const Card = ({title, content}: CardProps) => {
  const {styles, colors} = useAppTheme(useStyle);
  return (
    <View style={styles.container}>
      <Text style={styles.cardTitle}>{title}</Text>
      <View>{content}</View>
    </View>
  );
};

export default Card;

const useStyle = (colors: Theme) =>
  StyleSheet.create({
    container: {
      backgroundColor: colors.card,
      paddingVertical: 12,
      paddingHorizontal: 14,
      borderRadius: 16,
      width: '100%',
    },
    cardTitle: {
      fontSize: 16,
      color: colors.text,
      fontFamily: 'Poppins-Bold',
    },
  });
