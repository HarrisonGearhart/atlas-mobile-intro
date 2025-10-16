import { View, Text, Pressable, StyleSheet, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { useActivitiesContext } from "@/components/ActivitiesProvider";

export default function HomeScreen() {
  const router = useRouter();
  const { activities, deleteActivity } = useActivitiesContext();

  // --- Format timestamp to readable date/time ---
  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString() + " " + date.toLocaleTimeString();
  };

  // --- JSX ---
  return (
    <View style={styles.container}>
      <ScrollView style={styles.listContainer}>
        {activities && activities.length > 0 ? (
          activities.map((activity) => (
            <View key={activity.id} style={styles.activityItem}>
              <View style={styles.activityInfo}>
                <Text style={styles.dateText}>{formatDate(activity.date)}</Text>
                <Text style={styles.stepsText}>Steps: {activity.steps}</Text>
              </View>
              <Pressable
                style={styles.deleteButton}
                onPress={() => deleteActivity(activity.id)}
              >
                <Text style={styles.deleteButtonText}>Delete</Text>
              </Pressable>
            </View>
          ))
        ) : (
          <Text style={styles.emptyText}>
            No activities yet. Add one to get started!
          </Text>
        )}
      </ScrollView>

      <Pressable
        style={styles.button}
        onPress={() => router.push("/add-activity-screen")}
      >
        <Text style={styles.buttonText}>Add Activity</Text>
      </Pressable>

      <Pressable
        style={[styles.button, styles.deleteAllButton]}
        onPress={() => router.push("/add-activity-screen")}
      >
        <Text style={styles.buttonText}>Delete all activities</Text>
      </Pressable>
    </View>
  );
}

// --- Styles ---
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 22,
    backgroundColor: "#FEFAE8",
  },
  button: {
    backgroundColor: "#1AC3A5",
    paddingVertical: 13,
    paddingHorizontal: 26,
    borderRadius: 6,
    marginBottom: 4,
  },
  deleteAllButton: {
    backgroundColor: "#C00315",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
    fontWeight: "500",
  },
  listContainer: {
    flex: 1,
  },
  activityItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 14,
    backgroundColor: "#fdfdfd",
    borderRadius: 4,
    borderWidth: 1.8,
    borderColor: "#111",
    marginBottom: 12,
  },
  activityInfo: {
    flex: 1,
  },
  stepsText: {
    fontSize: 19,
    fontWeight: "600",
    marginBottom: 6,
  },
  dateText: {
    fontSize: 13,
    color: "#555",
  },
  deleteButton: {
    backgroundColor: "#dd3a48",
    paddingVertical: 11,
    paddingHorizontal: 6,
    borderRadius: 3,
  },
  deleteButtonText: {
    color: "#fff",
    fontSize: 15,
  },
  emptyText: {
    textAlign: "center",
    fontSize: 17,
    color: "#555",
    marginTop: 22,
  },
});
