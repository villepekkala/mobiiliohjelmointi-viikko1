import {  View, Text, TextInput, StyleSheet, Keyboard, TouchableWithoutFeedback } from "react-native";
import { useState } from "react";


export default function Index() {
  const [age, setAge] = useState<string>("");

  const NumAge = Number(age);
  const isValidAge = !isNaN(NumAge) && NumAge > 0;

  const Lower = isValidAge ? (220-NumAge) * 0.65 : 0;
  const Upper = isValidAge ? (220-NumAge) * 0.85 : 0;



  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}> 
    <View style={styles.container}>

      <Text style ={styles.title}>Heart rate limits Calculator</Text>

            <Text style={styles.label}>Enter your age:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={age}
        onChangeText={setAge}
      />
      <Text style={styles.result}>
        Lower limit: {Lower.toFixed(2)} bpm
      </Text>
      <Text style={styles.result}>
        Upper limit: {Upper.toFixed(2)} bpm
      </Text>
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 24,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    marginVertical: 12,
    fontSize: 16,
  },
  result: {
    fontSize: 16,
    marginTop: 8,
  },
});
