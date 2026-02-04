import { Text, View } from "react-native";
import Slider from "../components/Slider";
import Intrest from "../components/Intrest";
import { intrestData } from "../data/intrestData";

function HomeScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#151517",
      }}
    >
      {/* <Avatar name={"Maria"} /> */}
      <Slider />
      <Intrest
        title="Explore By Intreset"
        intrestData={intrestData}
        onPress={(item) => {
          navigation.navigate("IntrestedTrip", { category: item.title });
        }}
      />
    </View>
  );
}

export default HomeScreen;
