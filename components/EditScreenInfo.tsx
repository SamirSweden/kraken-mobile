import { 
  Text, 
  View , 
  Pressable,
} from 'react-native';



export const EditScreenInfo = ({navigation}: any) => {

  const title = 'use the best , use kraken';
  const description ='Kraken the best crypto app';
  const startBtn = 'start';


  return (
    <View>
      <View className={styles.getStartedContainer}>
        <Text className={styles.getStartedText}>{title}</Text>
        <Text className={styles.getStartedText}>{description}</Text>
        <View className={styles.apps__btn}>
          <Pressable
              onPress={() => navigation.navigate('Panel')}
              className={styles.apps__button}
           >
            <Text className={styles.apps__text}>{startBtn}</Text>
           </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = {
  codeHighlightContainer: `rounded-md px-1`,
  getStartedContainer: `items-center mx-12`,
  getStartedText: `text-lg leading-6 text-center mb-10 text-gray-200`,
  homeScreenFilename: `my-2`,
  apps__btn: ` w-full flex items-center justify-center`,
  apps__text: `font-mono font-bold text-lg text-center  capitalize `,
  apps__button: `w-full px-4 py-4 bg-white text-black  rounded-2xl  `,
};
