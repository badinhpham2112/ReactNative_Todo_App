import { View, Text, StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    // flexDirection: 'row',
    justifyContent: 'center',
    alignItems: "center",
    flex: 1
  },

  item1: {
    backgroundColor: "green",
    padding: 20,
  },
  item2: {
    backgroundColor: "orange",
    padding: 20
  },
  item3: {
     backgroundColor: "pink",
     padding: 20
  },
  item4: {
    backgroundColor: "cyan",
    padding: 20
  },
  item5: {
    backgroundColor: "salmon",
    padding: 20

  }

})

const FlexBox = () => {
  return(
    <View style={styles.container}>
       <View style={styles.item1}>
          <Text>item1</Text>
       </View>

       <View style={styles.item2}>
          <Text>item2</Text>
       </View>

       <View style={styles.item3}>
          <Text>item3</Text>
       </View>

       <View style={styles.item4}>
          <Text>item4</Text>
       </View>

       <View style={styles.item5}>
          <Text>item5</Text>
       </View>
    </View>
  )
}

export default FlexBox;