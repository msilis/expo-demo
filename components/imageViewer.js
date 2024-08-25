import { Image, StyleSheet } from "react-native";

export default function ImageViewer({ source }) {
  return <Image source={source} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    widtht: 320,
    height: 440,
    borderRadius: 18,
  },
});
