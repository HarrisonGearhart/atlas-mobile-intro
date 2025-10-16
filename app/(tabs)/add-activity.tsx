import { View, Text, Pressable, StyleSheet, TextInput, Alert } from "react-native";
import { useRouter } from "expo-router";
import { useActivitiesContext } from "@/components/ActivitiesProvider";
import { useState } from "react";

export default function AddActivityScreen() {
  const router = useRouter();
  const { insertActivity } = useActivitiesContext();
  const [steps, setSteps] = useState("");

  // --- Handle adding a new activity ---
  const handleAddActivity = () => {
    const stepsNumber = parseInt(steps);

    if (!steps || isNaN(stepsNumber) || stepsNumber <= 0) {
      Alert.alert("Invalid Input", "Please enter a valid number of steps");
      return;
    }

    insertActivity(stepsNumber, new Date());
    setSteps("");
    Alert.alert("Success", "Activity added successfully!", [
      { text: "OK", onPress: () => router.back() },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Activity</Text>

      <View style={styles.formContainer}>
        <Text style={styles.label}>Steps Count</Text>

        <TextInput
          style={styles.input}
          value={steps}
          onChangeText={setSteps}
          placeholder="Enter steps"
          keyboardType="numeric"
        />

        <Pressable style={styles.addButton} onPress={handleAddActivity}>
          <Text style={styles.buttonText}>Add Activity</Text>
        </Pressable>

        <Pressable style={styles.cancelButton} onPress={() => router.back()}>
          <Text style={styles.buttonText}>Go Back</Text>
        </Pressable>
      </View>
    </View>
  );
}

// --- Styles ---
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#fefefe",
  },
  title: {
    fontSize: 30,
    fontWeight: "600",
    marginBottom: 28,
    marginTop: 36,
    textAlign: "center",
    color: "#202020",
  },
  formContainer: {
    flex: 1,
  },
  label: {
    fontSize: 17,
    marginBottom: 12,
    fontWeight: "500",
  },
  input: {
    borderWidth: 1.5,
    borderColor: "#bfbfbf",
    borderRadius: 10,
    padding: 14,
    fontSize: 16,
    marginBottom: 18,
  },
  addButton: {
    backgroundColor: "#2dbb65",
    paddingVertical: 13,
    paddingHorizontal: 26,
    borderRadius: 10,
    marginBottom: 12,
  },
  cancelButton: {
    backgroundColor: "#5c6368",
    paddingVertical: 13,
    paddingHorizontal: 26,
    borderRadius: 10,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 18,
    textAlign: "center",
    fontWeight: "600",
  },
});
