import { View, Text, Pressable, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

// --- Component ---
export default function AddActivityScreen() {
  const router = useRouter();

  // --- Handlers ---
  const handleGoBack = () => router.back();

  // --- JSX ---
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Activity Screen</Text>

      <Pressable style={styles.button} onPress={handleGoBack}>
        <Text style={styles.buttonText}>Go back</Text>
      </Pressable>
    </View>
  );
}

// --- Styles ---
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#f9f9f9",
    },
    title: {
      fontSize: 26,
      fontWeight: "500",
      marginBottom: 22,
      color: "#1a1a1a",
    },
    button: {
      backgroundColor: "#2bb673",
      paddingVertical: 12,
      paddingHorizontal: 24,
      borderRadius: 10,
    },
    buttonText: {
      color: "#ffffff",
      fontSize: 19,
      fontWeight: "500",
    },
  });