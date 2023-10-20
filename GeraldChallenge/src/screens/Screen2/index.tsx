import { Text, View } from "react-native"
import Button from "../../components/Button"

export const Screen2 = ({navigation}) => {
  return (
    <View style={{ backgroundColor: '#fff', flex: 1, alignItems: "center", justifyContent: "center", padding: 32 }}>
      <Text style={{paddingBottom: 16, fontSize: 32}}>Screen 2</Text>
      <Button text="Go back" onPress={() => navigation.goBack()} />
    </View>
  )
}