import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import ResultsView from "./src/pages/ResultsView";

const screen = Dimensions.get("window");

const getRemaining = (time) => {
  const mins = Math.floor(time / 60);
  const secs = time - mins * 60;
  return { mins, secs };
};

const DATA = [
  {
    id: "1",
    title: "Architecture of the database can be viewed as",
    option1: "three levels",
    option2: "two levels",
    option3: "four levels",
    option4: "one levels",
  },
  {
    id: "2",
    title: "In a relational model, relations are termed as",
    option1: "Tables",
    option2: "Tuples",
    option3: "Attributes",
    option4: "Rows",
  },
  {
    id: "3",
    title: "The database schema is written in",
    option1: "DLL",
    option2: "HLL",
    option3: "DML",
    option4: "DCL",
  },
  {
    id: "4",
    title: "Related fields in a database are grouped to form",
    option1: "Data record",
    option2: "Data file",
    option3: "Menu",
    option4: "Bank",
  },
  {
    id: "5",
    title: "In Heirarchical model records are organised as",
    option1: "Tree",
    option2: "Graph",
    option3: "List",
    option4: "Links",
  },
  {
    id: "6",
    title: "Architecture of the database can be viewed as",
    option1: "three levels",
    option2: "two levels",
    option3: "four levels",
    option4: "one levels",
  },
  {
    id: "7",
    title: "In a relational model, relations are termed as",
    option1: "Tables",
    option2: "Tuples",
    option3: "Attributes",
    option4: "Rows",
  },
  {
    id: "8",
    title: "The database schema is written in",
    option1: "DLL",
    option2: "HLL",
    option3: "DML",
    option4: "DCL",
  },
  {
    id: "9",
    title: "Related fields in a database are grouped to form",
    option1: "Data record",
    option2: "Data file",
    option3: "Menu",
    option4: "Bank",
  },
  {
    id: "10",
    title: "In Heirarchical model records are organised as",
    option1: "Tree",
    option2: "Graph",
    option3: "List",
    option4: "Links",
  },
  {
    id: "11",
    title: "Architecture of the database can be viewed as",
    option1: "three levels",
    option2: "two levels",
    option3: "four levels",
    option4: "one levels",
  },
  {
    id: "12",
    title: "In a relational model, relations are termed as",
    option1: "Tables",
    option2: "Tuples",
    option3: "Attributes",
    option4: "Rows",
  },
  {
    id: "13",
    title: "The database schema is written in",
    option1: "DLL",
    option2: "HLL",
    option3: "DML",
    option4: "DCL",
  },
  {
    id: "14",
    title: "Related fields in a database are grouped to form",
    option1: "Data record",
    option2: "Data file",
    option3: "Menu",
    option4: "Bank",
  },
  {
    id: "15",
    title: "In Heirarchical model records are organised as",
    option1: "Tree",
    option2: "Graph",
    option3: "List",
    option4: "Links",
  },
  {
    id: "16",
    title: "Architecture of the database can be viewed as",
    option1: "three levels",
    option2: "two levels",
    option3: "four levels",
    option4: "one levels",
  },
  {
    id: "17",
    title: "In a relational model, relations are termed as",
    option1: "Tables",
    option2: "Tuples",
    option3: "Attributes",
    option4: "Rows",
  },
  {
    id: "18",
    title: "The database schema is written in",
    option1: "DLL",
    option2: "HLL",
    option3: "DML",
    option4: "DCL",
  },
  {
    id: "19",
    title: "Related fields in a database are grouped to form",
    option1: "Data record",
    option2: "Data file",
    option3: "Menu",
    option4: "Bank",
  },
  {
    id: "20",
    title: "In Heirarchical model records are organised as",
    option1: "Tree",
    option2: "Graph",
    option3: "List",
    option4: "Links",
  },
];

function QuestionsView({ navigation }) {
  const dataLength = DATA.length;
  const duration = 30;
  const [qCounter, setQCounter] = React.useState(0);
  const [qData, setQData] = React.useState(DATA[qCounter]);
  const [remainingSecs, setRemainingSecs] = React.useState(duration);
  const [isActive, setIsActive] = React.useState(false);
  const [totalPoints, setTotalPoints] = React.useState(0);

  const { mins, secs } = getRemaining(remainingSecs);

  toggle = () => {
    setIsActive(!isActive);
  };

  navigateToResult = () => {
    setQCounter(0);
    setQData(DATA[0]);
    setRemainingSecs(duration);
    navigation.navigate("ResultsView", {
      score: totalPoints,
      totalQuestion: dataLength * 20,
    });
    setTotalPoints(0);
    toggle();
  };

  React.useEffect(() => {
    toggle();
  }, []);
  React.useEffect(() => {
    let interval = null;
    if (isActive) {
      if (remainingSecs <= 0) {
        toggle();
        if (qCounter < dataLength) {
          setQCounter(qCounter + 1);
          setRemainingSecs(duration);
          clearInterval(interval);
          setQData(DATA[qCounter]);
        } else {
          navigateToResult();
        }
      } else {
        interval = setInterval(() => {
          setRemainingSecs((remainingSecs) => remainingSecs - 1);
        }, 1000);
      }
    } else if (!isActive && remainingSecs !== 0) {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive, remainingSecs, qCounter]);

  const onSkip = React.useCallback(async () => {
    setTotalPoints(totalPoints - 5);
    if (qCounter < dataLength) {
      setQCounter(qCounter + 1);
      setRemainingSecs(duration);
      setQData(DATA[qCounter]);
      toggle();
    } else {
      navigateToResult();
    }
  }, [qCounter, DATA]);

  const onPress = () => {
    if (qCounter < dataLength) {
      setQCounter(qCounter + 1);
      setRemainingSecs(duration);
      setQData(DATA[qCounter]);
      toggle();
    } else {
      navigateToResult();
    }
  };

  const onPressOpt1 = () => {
    setTotalPoints(totalPoints + 20);
    onPress();
  };

  const onPressOpt2 = () => {
    setTotalPoints(totalPoints - 10);
    onPress();
  };

  const onPressOpt3 = () => {
    setTotalPoints(totalPoints - 10);
    onPress();
  };

  const onPressOpt4 = () => {
    setTotalPoints(totalPoints - 10);
    onPress();
  };
  const opt1 = "A. ".concat(" ", qData.option1);
  const opt2 = "B. ".concat(" ", qData.option2);
  const opt3 = "C. ".concat(" ", qData.option3);
  const opt4 = "D. ".concat(" ", qData.option4);
  return (
    <View style={styles.container}>
      <Text style={styles.QueNo}>{qData.id}</Text>
      <Text style={styles.QueHeading}>{qData.title}</Text>
      <View>
        <View style={styles.OptionView}>
          <TouchableOpacity onPress={onPressOpt1}>
            <Text style={styles.OptionText}>{opt1}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onPressOpt2}>
            <Text style={styles.OptionText}>{opt2}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.OptionView}>
          <TouchableOpacity onPress={onPressOpt3}>
            <Text style={styles.OptionText}>{opt3}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onPressOpt4}>
            <Text style={styles.OptionText}>{opt4}</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.QueNo}>Timer {secs}</Text>
      <TouchableOpacity onPress={onSkip}>
        <Text style={styles.SkipText}>Skip</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="QuestionsView"
          component={QuestionsView}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="ResultsView"
          component={ResultsView}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  QueNo: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 50,
    marginTop: 50,
    color: "white",
  },
  QueHeading: {
    backgroundColor: "green",
    width: screen.width * 0.8,
    borderColor: "lightgreen",
    borderWidth: 2,
    borderRadius: 6,
    padding: 10,
    textAlign: "center",
    color: "white",
    fontSize: 16,
    marginBottom: 10,
  },
  OptionView: {
    flexDirection: "row",
    width: screen.width * 0.8,
  },
  OptionText: {
    backgroundColor: "green",
    width: screen.width * 0.4,
    borderColor: "lightgreen",
    borderWidth: 2,
    borderRadius: 6,
    padding: 10,
    marginTop: 10,
    textAlign: "left",
    color: "white",
    fontSize: 14,
  },
  SkipText: {
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
