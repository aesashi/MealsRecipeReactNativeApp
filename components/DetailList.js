import {Text, View, StyleSheet} from 'react-native';

export default function DetailList({data, dataPoint}) {
  return (
    data.map((dataPoint) => (
      <View style={styles.container}>
        <Text>{dataPoint}</Text>
      </View>
    ))
  )
}

const styles = StyleSheet.create({
  container: {
    width: 250,
    backgroundColor: '#e2b497',
    borderRadius: 8,
    marginVertical: 8,
    paddingVertical: 4,
    paddingHorizontal: 14,
  },
})
