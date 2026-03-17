import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 20
  },
  image: {
    width: "100%",
    height: 250
  },
  nome: {
    fontSize: 26,
    fontWeight: "bold"
  },
  categoria: {
    fontSize: 18,
    color: "#666",
    marginBottom: 15
  },
  descricao: {
    fontSize: 16,
    lineHeight: 24,
    marginVertical: 20,
    color: "#444"
  }
});