import {Text, View, StyleSheet, Pressable} from 'react-native';

export default function CategoryGridTile({id, title, color, onPress}) {

  return (
    <Pressable
      android_ripple={{color: '#ccc'}}
      style={({pressed}) =>
      [styles.container, {backgroundColor: color}, pressed ? styles.buttonPressed : null]
     }
     onPress={onPress}
      >
      <View>
        <Text style={styles.text}>{title}</Text>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 20,
    marginHorizontal: 10,
    marginVertical: 20,
    paddingVertical: 70,
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: {height: 0, width: 2},
    shadowOpacity: 0.85,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonPressed:{
    opacity: 0.45,
  }
})
