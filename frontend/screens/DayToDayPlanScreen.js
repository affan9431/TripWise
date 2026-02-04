import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

function DayToDayPlanScreen({ navigation, route }) {
  const dayTabs = ["Day 1", "Day 2", "Day 3"];
  const [selectedDay, setSelectedDay] = React.useState(0);

  React.useEffect(() => {
    const { tour } = route.params;
    navigation.setOptions({
      title: `${dayTabs[selectedDay]} - ${tour.name}`,
    });
  }, [selectedDay]);

  const itineraryItems = [
    {
      time: "9:00",
      period: "AM",
      title: "Yasaka Inn → Check-out",
      duration: "30 min",
      walkTime: "5 min walk",
      icon: "bed-outline",
    },
    {
      time: "9:30",
      period: "AM",
      title: "Visit Fushimi Inari Shrine",
      duration: "1.5 hrs",
      travelTime: "12 min ride",
      cost: "Free",
      badge: "Must Visit",
      badgeColor: "#4CAF50",
      icon: "location-outline",
    },
    {
      time: "11:30",
      period: "AM",
      title: "Have lunch at Nishiki Market",
      costRange: "₹500~700",
      walkTime: "8 min walk",
      travelDetail: "8 min walk",
      icon: "restaurant-outline",
    },
    {
      time: "1:00",
      period: "PM",
      title: "Explore Gion District",
      duration: "2 hrs",
      walkTime: "10 min walk",
      cost: "Free",
      badge: "Optional",
      badgeColor: "#FF9800",
      icon: "walk-outline",
    },
  ];

  return (
    <View style={styles.container}>
      {/* Day Tabs */}
      <View style={styles.tabContainer}>
        {dayTabs.map((day, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.tab, selectedDay === index && styles.tabActive]}
            onPress={() => setSelectedDay(index)}
          >
            <Text
              style={[
                styles.tabText,
                selectedDay === index && styles.tabTextActive,
              ]}
            >
              {day}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Summary Cards */}
      <View style={styles.summaryContainer}>
        <View style={styles.summaryCard}>
          <Ionicons name="time-outline" size={16} color="#FFC107" />
          <Text style={styles.summaryText}>9 AM – 9 PM</Text>
        </View>
        <View style={styles.summaryCard}>
          <Text style={styles.summaryIcon}>₹</Text>
          <Text style={styles.summaryText}>₹2,300 approx</Text>
        </View>
        <View style={styles.summaryCard}>
          <Ionicons name="train-outline" size={16} color="#FFC107" />
          <Text style={styles.summaryText}>km</Text>
        </View>
      </View>

      <View style={styles.summaryContainer}>
        <View style={styles.summaryCard}>
          <Text style={styles.summaryIcon}>🍽️</Text>
          <Text style={styles.summaryText}>3 meals</Text>
        </View>
        <View style={styles.summaryCard}>
          <Ionicons name="walk-outline" size={16} color="#4CAF50" />
          <Text style={styles.summaryText}>6 km total</Text>
        </View>
        <View style={styles.summaryCard}>
          <Ionicons name="restaurant-outline" size={16} color="#FFF" />
          <Text style={styles.summaryText}>3 meals</Text>
        </View>
      </View>

      {/* Itinerary Timeline */}
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.timelineContainer}>
          {itineraryItems.map((item, index) => (
            <View key={index} style={styles.timelineItem}>
              {/* Time */}
              <View style={styles.timeContainer}>
                <Text style={styles.time}>{item.time}</Text>
                <Text style={styles.period}>{item.period}</Text>
                <View style={styles.timelineDot} />
                {index < itineraryItems.length - 1 && (
                  <View style={styles.timelineLine} />
                )}
              </View>

              {/* Content Card */}
              <View style={styles.contentCard}>
                <View style={styles.titleRow}>
                  <Text style={styles.itemTitle}>{item.title}</Text>
                  {item.badge && (
                    <View
                      style={[
                        styles.badge,
                        { backgroundColor: item.badgeColor },
                      ]}
                    >
                      <Text style={styles.badgeText}>{item.badge}</Text>
                    </View>
                  )}
                </View>

                {/* Details */}
                <View style={styles.detailsContainer}>
                  {item.duration && (
                    <View style={styles.detailRow}>
                      <Ionicons name="time-outline" size={14} color="#999" />
                      <Text style={styles.detailText}>{item.duration}</Text>
                      {item.travelTime && (
                        <>
                          <Text style={styles.separator}>•</Text>
                          <Ionicons name="car-outline" size={14} color="#999" />
                          <Text style={styles.detailText}>
                            {item.travelTime}
                          </Text>
                        </>
                      )}
                      {item.walkTime && !item.travelTime && (
                        <>
                          <Text style={styles.separator}>•</Text>
                          <Ionicons
                            name="walk-outline"
                            size={14}
                            color="#999"
                          />
                          <Text style={styles.detailText}>{item.walkTime}</Text>
                        </>
                      )}
                    </View>
                  )}

                  {item.costRange && (
                    <View style={styles.detailRow}>
                      <Text style={styles.costIcon}>🍜</Text>
                      <Text style={styles.detailText}>
                        Avg csx {item.costRange}
                      </Text>
                    </View>
                  )}

                  {item.travelDetail && !item.duration && (
                    <View style={styles.detailRow}>
                      <Ionicons
                        name="location-outline"
                        size={14}
                        color="#FFC107"
                      />
                      <Text style={styles.detailText}>{item.travelDetail}</Text>
                      <Text style={styles.separator}>•</Text>
                      <Ionicons name="walk-outline" size={14} color="#999" />
                      <Text style={styles.detailText}>{item.walkTime}</Text>
                    </View>
                  )}

                  {item.cost && (
                    <View style={styles.detailRow}>
                      <Ionicons
                        name="information-circle-outline"
                        size={14}
                        color="#FFC107"
                      />
                      <Text style={styles.detailText}>{item.cost}</Text>
                    </View>
                  )}
                </View>
              </View>
            </View>
          ))}

          {/* Empty timeline item for spacing */}
          <View style={styles.timelineItem}>
            <View style={styles.timeContainer}>
              <Text style={styles.time}>1:00</Text>
              <Text style={styles.period}>PM</Text>
              <View style={styles.timelineDot} />
            </View>
          </View>
        </View>
      </ScrollView>

      {/* View Map Button */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.mapButton}>
          <Ionicons name="location" size={24} color="#000" />
          <Text style={styles.mapButtonText}>View Map</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default DayToDayPlanScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#151517",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
    paddingTop: 50,
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#FFF",
  },
  editButton: {
    padding: 8,
  },
  tabContainer: {
    flexDirection: "row",
    paddingHorizontal: 16,
    marginTop: 16,
    gap: 12,
  },
  tab: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: "#2A2A2A",
  },
  tabActive: {
    backgroundColor: "#FFC107",
  },
  tabText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#999",
  },
  tabTextActive: {
    color: "#000",
  },
  summaryContainer: {
    flexDirection: "row",
    paddingHorizontal: 16,
    marginTop: 16,
    gap: 8,
  },
  summaryCard: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2A2A2A",
    borderRadius: 8,
    padding: 12,
    gap: 6,
  },
  summaryIcon: {
    fontSize: 14,
    color: "#FFC107",
  },
  summaryText: {
    fontSize: 12,
    color: "#FFF",
    flex: 1,
  },
  scrollView: {
    flex: 1,
    marginTop: 20,
  },
  timelineContainer: {
    paddingHorizontal: 16,
    paddingBottom: 200,
  },
  timelineItem: {
    flexDirection: "row",
    marginBottom: 20,
  },
  timeContainer: {
    width: 80,
    alignItems: "flex-start",
    position: "relative",
  },
  time: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FFF",
  },
  period: {
    fontSize: 12,
    color: "#999",
    marginTop: 2,
  },
  timelineDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#FFC107",
    position: "absolute",
    right: 0,
    top: 4,
  },
  timelineLine: {
    width: 2,
    backgroundColor: "#333",
    position: "absolute",
    right: 5,
    top: 20,
    bottom: -20,
  },
  contentCard: {
    flex: 1,
    backgroundColor: "#2A2A2A",
    borderRadius: 12,
    padding: 16,
    marginLeft: 16,
  },
  titleRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FFF",
    flex: 1,
  },
  badge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    marginLeft: 8,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#FFF",
  },
  detailsContainer: {
    gap: 8,
  },
  detailRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  detailText: {
    fontSize: 13,
    color: "#999",
  },
  separator: {
    fontSize: 13,
    color: "#555",
    marginHorizontal: 4,
  },
  costIcon: {
    fontSize: 14,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 100,
    left: 0,
    right: 0,
    padding: 16,
    backgroundColor: "#1A1A1A",
  },
  mapButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFC107",
    borderRadius: 25,
    paddingVertical: 16,
    gap: 8,
  },
  mapButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
  },
});
