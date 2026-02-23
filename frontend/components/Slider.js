import { useEffect, useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";

const { width } = Dimensions.get("window");

// CARD CONFIG - Increased size
const CARD_WIDTH = width * 0.85; // Increased from 0.7
const CARD_HEIGHT = 280; // Increased from 220

// Overlap and offsets adjusted proportionally
const HORIZONTAL_OVERLAP = 306; // Increased proportionally (253 * 1.21)
const VERTICAL_OFFSET = 18; // Increased proportionally (15 * 1.2)
const TOP_PADDING = 12; // Increased proportionally (10 * 1.2)

// Card width reduction for depth effect (adjusted proportionally)
const SECOND_CARD_REDUCTION = 24; // Increased from 20
const THIRD_CARD_REDUCTION = 36; // Increased from 30

// DATA
const sliderData = [
  {
    id: "1",
    image: require("../assets/images/japan1.jpg"),
    title: "Kyoto",
  },
  {
    id: "2",
    image: require("../assets/images/japan2.jpg"),
    title: "India",
  },
  {
    id: "3",
    image: require("../assets/images/japan3.jpg"),
    title: "Osaka",
  },
];

function Slider() {
  const [toggleHeart, setToggleHeart] = useState(false);
  const [sliderDataState, setSliderDataState] = useState(sliderData);

  useEffect(() => {
    const interval = setInterval(() => {
      setSliderDataState((prev) => {
        const updated = [...prev];
        const first = updated.shift();
        updated.push(first);
        return updated;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  function handleToggleHeart() {
    setToggleHeart((prev) => !prev);
  }

  return (
    <View style={{ marginBottom: 24, marginTop: 16 }}>
      <FlatList
        data={sliderDataState}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{
          paddingHorizontal: (width - CARD_WIDTH) / 2,
          paddingTop: TOP_PADDING,
          paddingBottom: 20, // Add bottom padding
        }}
        renderItem={({ item, index }) => {
          const depthIndex = sliderDataState.length - 1 - index;

          // Dynamic width per card
          const dynamicWidth =
            index === 0
              ? CARD_WIDTH
              : index === 1
                ? CARD_WIDTH - SECOND_CARD_REDUCTION
                : CARD_WIDTH - THIRD_CARD_REDUCTION;

          // Center alignment fix
          const horizontalShift = (CARD_WIDTH - dynamicWidth) / 2;

          return (
            <View
              style={[
                styles.card,
                {
                  width: dynamicWidth,
                  height: CARD_HEIGHT,
                  marginLeft:
                    index === 0 ? 0 : -HORIZONTAL_OVERLAP + horizontalShift,
                  marginTop: depthIndex * VERTICAL_OFFSET,
                  zIndex: sliderData.length - index,
                },
              ]}
            >
              {/* Image */}
              <Image source={item.image} style={styles.image} />

              {/* Title */}
              <View style={styles.textWrapper}>
                <Text style={styles.title}>{item.title}</Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
}

export default Slider;

const styles = StyleSheet.create({
  card: {
    borderRadius: 22,
    overflow: "hidden",
    backgroundColor: "#000",
    elevation: 8,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  textWrapper: {
    position: "absolute",
    bottom: 16,
    left: 16,
  },
  title: {
    color: "#fff",
    fontSize: 26,
    fontFamily: "PoppinBold",
  },
});
