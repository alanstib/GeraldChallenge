import { Text, View } from "react-native"
import Button from "../../components/Button"

export const Screen1 = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: '#fff', flex: 1, alignItems: "center", justifyContent: "center", padding: 32 }}>
      <Text style={{paddingBottom: 16, fontSize: 32}}>Screen 1</Text>
      <Button text="Go to Screen 2" onPress={() => navigation.navigate('Screen2')} />
    </View>
  )
}