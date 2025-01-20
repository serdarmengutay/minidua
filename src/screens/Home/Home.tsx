import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useAppTheme} from '../../hooks/useAppTheme/useAppTheme';
import {Theme} from '../../utils/colors';
import Card from '../../components/Card/Card';

const Home = () => {
  const {styles, colors} = useAppTheme(useStyle);
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <Card
          title="Günün Ayeti"
          content={
            <View style={styles.ayahContainer}>
              <Text style={styles.ayah}>
                "Ey iman edenler! oruç sizden önce gelip geçmiş ümmetlere farz
                kılındığı gibi size de farz kılındı. Umulur ki korunursunuz.”
              </Text>
              <Text style={styles.ayahVerse}>Bakara Sûresi 183. Ayet</Text>
            </View>
          }
        />
        <Card
          title="Günün Hadisi"
          content={
            <View style={styles.ayahContainer}>
              <Text style={styles.ayah}>
                “Sizden bana en yakın olan kimse, bana çokça salevât
                getirendir.”
              </Text>
              <Text style={styles.ayahVerse}> (Câmi’u’s-sağîr)</Text>
            </View>
          }
        />
      </View>
    </View>
  );
};

export default Home;

const useStyle = (colors: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      justifyContent: 'center',
      alignItems: 'center',
      width: '92%',
      alignSelf: 'center',
    },
    ayahContainer: {
      gap: 8,
      justifyContent: 'center',
      marginTop: 8,
    },
    ayah: {
      fontSize: 14,
      color: colors.text,
      fontFamily: 'Poppins-Regular',
    },
    ayahVerse: {
      fontSize: 12,
      color: colors.subText,
      fontFamily: 'Poppins-Regular',
    },
    cardContainer: {
      width: '100%',
      gap: 14,
    },
  });
