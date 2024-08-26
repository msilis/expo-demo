import { Text, Pressable, View, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function Button({ label, theme }) {
  const handlePress = () => {
    alert("You pressed a button");
  };
  if (theme === "primary") {
    return (
      <View
        style={[
          styles.buttonContainer,
          { borderWidth: 4, borderColor: "#ffd33d", borderRadius: 10 },
        ]}
      >
        <Pressable
          style={[styles.button, { backgroundColor: "#fff" }]}
          onPress={() => handlePress}
        >
          <FontAwesome
            name="picture-o"
            size={18}
            color={"#25292e"}
            style={stylebuttonIcon}
          >
            <Text style={[styles.buttonLabel, { color: "#25292e" }]}>
              {label}
            </Text>
          </FontAwesome>
        </Pressable>
      </View>
    );
  }
  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={() => handlePress}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderColor: "white",
    borderWidth: 1,
    borderStyle: "solid",
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: "#fff",
    fontSize: 16,
  },
});
