import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";

const screen = Dimensions.get("window");

export default function ResultsView({ route, navigation }) {
  const { score } = route.params;
  const { totalQuestion } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.over}>GAME OVER!</Text>
      <Text style={styles.score}>
        Your score is {score}/{totalQuestion}.
      </Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.StartAgainText}>Start Again</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },

  over: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: 50,
    color: "white",
  },
  score: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 50,
    marginTop: 30,
    color: "white",
  },
  StartAgainText: {
    backgroundColor: "white",
    borderColor: "lightgreen",
    borderWidth: 2,
    borderRadius: 6,
    padding: 10,
    marginTop: 10,
    fontWeight: "bold",
    fontSize: 14,
  },
});
