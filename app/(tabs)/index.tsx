import { View, Text, Pressable, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

// --- Component ---
export default function HomeScreen() {
  const router = useRouter();

  // --- Handlers ---
  const goToAddActivity = () => router.push("/add-activity");

  // --- JSX ---
  return (
    <View style={styles.pageContainer}>
      <Text style={styles.pageTitle}>Home Screen</Text>

      <Pressable style={styles.primaryButton} onPress={goToAddActivity}>
        <Text style={styles.primaryButtonText}>Add activity</Text>
      </Pressable>
    </View>
  );
}

// --- Styles ---
const styles = StyleSheet.create({
    pageContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#f0f8ff",
    },
    pageTitle: {
      fontSize: 25,
      fontWeight: "500",
      marginBottom: 20,
      color: "#202020",
    },
    primaryButton: {
      backgroundColor: "#1c86ee",
      paddingVertical: 11,
      paddingHorizontal: 23,
      borderRadius: 10,
    },
    primaryButtonText: {
      color: "#ffffff",
      fontSize: 18.5,
      fontWeight: "500",
    },
  });