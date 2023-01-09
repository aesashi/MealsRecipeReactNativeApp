import { Text, View, Image, StyleSheet, Pressable } from "react-native"
import { useNavigation } from "@react-navigation/native"

export default function MealItem({id, title, imageUrl, affordability, duration, complexity}) {
  const navigation = useNavigation();
  function pressedEventHandler(){
    navigation.navigate('Detail', {
      mealId: id,
    })
  }
  return (
    <Pressable
        style={(({ pressed }) => (pressed ? styles.buttonPressed : null))}
        onPress={pressedEventHandler}
      >
      <View style={styles.container}>
        <Image source={{uri: imageUrl}} style={styles.image} />
        <View style={styles.infoContainer}>
          <Text style={styles.titleText}>{ title }</Text>
          <View style={styles.textContainer}>
            <Text style={styles.text}>{ duration }m</Text>
            <Text style={styles.text}>{ complexity }</Text>
            <Text style={styles.text}>{ affordability }</Text>
          </View>
        </View>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
    marginHorizontal: 24,
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: 24,
    shadowColor: 'black',
    shadowOffse: {height: 0, width: 0},
    shadowOpacity: 0.65,
    shadowRadius: 8,
  },
  image: {
    width: '100%',
    height: 250,
    borderTopStartRadius: 24,
    borderTopEndRadius: 24,
  },
  infoContainer: {
    paddingVertical: 8,
  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  textContainer: {
    flexDirection: 'row',
  },
  text: {
    paddingHorizontal: 6,
  },
  buttonPressed:{
    opacity: 0.45,
  },
})
