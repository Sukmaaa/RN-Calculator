import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";

const Calc = () => {
  //Handle state
  const [inputData, setInputData] = useState("");
  const [history, setHistory] = useState("");

  //Handle button for value
  const handlePress = (value) => {
    if (value === "=") {
      const result = eval(inputData).toString();
      setHistory(inputData + " = ");
      setInputData(result);
    } else {
      setInputData(inputData + value);
    }
  };

  //Line horizontal
  const Separator = () => (
    <View style={styles.separator} />
  );


  //Screen and value
  return (
    <View style={styles.content}>
      <View style={styles.calculator}>
        <Text style={styles.title}>Kalkulator</Text>
        <Text style={styles.history}>{history}</Text>

        <Text style={styles.display}>{inputData}</Text>
        <Separator />
        <View style={styles.ButtonWrapper}>
          <Text
            style={styles.ButtonDelete}
            onPress={() => {
              setInputData("");
              setHistory("");
            }}
          >
            CLEAR
          </Text>
          <Text
            style={styles.ButtonDelete}
            onPress={() => setInputData(inputData.slice(0, -1))}
          >
            DELETE
          </Text>
        </View>
        <View style={styles.ButtonWrapper}>
          <ButtonCalculator value="7" handlePress={handlePress} />
          <ButtonCalculator value="8" handlePress={handlePress} />
          <ButtonCalculator value="9" handlePress={handlePress} />
          <ButtonCalculator value="*" handlePress={handlePress} operator />
        </View>

        <View style={styles.ButtonWrapper}>
          <ButtonCalculator value="4" handlePress={handlePress} />
          <ButtonCalculator value="5" handlePress={handlePress} />
          <ButtonCalculator value="6" handlePress={handlePress} />
          <ButtonCalculator value="-" handlePress={handlePress} operator />
        </View>

        <View style={styles.ButtonWrapper}>
          <ButtonCalculator value="7" handlePress={handlePress} />
          <ButtonCalculator value="8" handlePress={handlePress} />
          <ButtonCalculator value="9" handlePress={handlePress} />
          <ButtonCalculator value="+" handlePress={handlePress} operator />
        </View>

        <View style={styles.ButtonWrapper}>
          <ButtonCalculator value="%" handlePress={handlePress} operator />
          <ButtonCalculator value="0" handlePress={handlePress} />
          <ButtonCalculator value="=" handlePress={handlePress} operator />
          <ButtonCalculator value="/" handlePress={handlePress} operator />
        </View>
      </View>
    </View>
  );
};


const ButtonCalculator = ({ value, handlePress, operator }) => {

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => {
        handlePress(value);
      }}
    >
      < Text style={operator ? styles.ButtonOperator : styles.ButtonNumber}>
        {value}
      </Text>
    </TouchableOpacity >
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
    paddingTop: 30,
    paddingHorizontal: 16,
  },
  title: {
    fontWeight: "bold",
    color: "#000",
    fontSize: 24,
    marginTop: 18,
    marginBottom: 100,
  },

  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },

  history: {
    fontWeight: "bold",
    color: "#606060",
    fontSize: 24,
    marginBottom: 6,
    marginRight: 10,
    textAlign: "right",
  },
  display: {
    borderColor: "#000033",
    borderBottomColor: "#000",
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 10,
    fontSize: 40,
    fontWeight: "700",
    textAlign: "right",
    textAlignVertical: "center",
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  ButtonWrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  ButtonNumber: {
    width: 80,
    height: 75,
    textAlign: "center",
    textAlignVertical: "center",
    borderRadius: 10,
    fontSize: 40,
    color: "black",
    fontWeight: "700",
  },
  ButtonOperator: {
    width: 80,
    height: 60,
    textAlign: "center",
    textAlignVertical: "center",
    borderRadius: 10,
    fontSize: 40,
    color: "#0066CC",
    fontWeight: "700",
  },
  ButtonDelete: {
    width: 160,
    height: 50,
    textAlign: "center",
    textAlignVertical: "center",
    borderBottomColor: "#000",
    borderRadius: 50,
    backgroundColor: "#0066CC",
    marginTop: 15,
    fontSize: 30,
    color: "#fff",
    fontWeight: "700",
  },
});

export default Calc;
