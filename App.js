import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { StyleSheet, Text, View, Switch, StatusBar } from "react-native";

export default function App() {
  const [selectedUser, setSelectedUser] = useState();
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
  };

  return (
    <View style={styles.container}>
      <StatusBar animated={true} backgroundColor="blue" hidden={!isEnabled} />
      <View style={styles.pkr}>
        <Text>Chọn một nhân viên:</Text>
        <Picker
          style={styles.pk}
          selectedValue={selectedUser}
          onValueChange={(itemValue, itemIndex) => setSelectedUser(itemValue)}
        >
          <Picker.Item label="Steve" value="steve" />
          <Picker.Item label="Ellen" value="ellen" />
          <Picker.Item label="Maria" value="maria" />
          <Picker.Item label="Alex" value="alex" />
        </Picker>
      </View>

      <View style={styles.swt}>
        <Switch
          trackColor={{ false: "#767577", true: "green" }}
          thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <View style={styles.txt}>
        <Text>Bạn đã chọn:</Text>
        {isEnabled && <Text>{selectedUser}</Text>}
      </View>

      <View style={styles.b4}>
        <Text style={styles.tx4}>
          <Text style={styles.capitalLetter}> L </Text>
          <Text> orem ipsum dolor sit amet, sed do eiusmod. </Text>
          <Text>
            Ut enim ad <Text style={styles.wordBold}> minim </Text> veniam, quis
            aliquip ex ea commodo consequat.
          </Text>
          <Text style={styles.italicText}>
            Duis aute irure dolor reprehenderit voluptate velit esse cillum.
          </Text>
          <Text style={styles.textShadow}>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            deserunt mollit anim id est laborum.
          </Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  pkr: {
    width: "100%",
    alignItems: "center",
  },
  swt: {},
  pk: {
    width: "80%",
    backgroundColor: "#ecf0f1",
    marginBottom: 7,
    padding: 7,
    alignSelf: "center",
    borderWidth: 1,
    borderColor: "#bdc3c7",
    borderRadius: 10,
  },
  txt: {
    flexDirection: "row",
  },
  b4: {
    alignContent: "center",
    marginTop: 20,
    padding: 20,
  },
  tx4: {
    color: "#41cdf4",
  },
  capitalLetter: {
    color: "red",
    fontSize: 20,
  },
  wordBold: {
    fontWeight: "bold",
    color: "black",
  },
  italicText: {
    color: "#37859b",
    fontStyle: "italic",
  },
  textShadow:{
    textShadowColor:'red',
    textShadowOffset:{width: 2,height: 2,},
    textShadowRadius:5,
  },
});
