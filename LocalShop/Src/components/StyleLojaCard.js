import { StyleSheet } from "react-native";

export default StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 10,
    marginVertical: 8,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 10
  },
  info: {
    flex: 1
  },
  nome: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 2
  },
  categoria: {
    fontSize: 14,
    color: "#555",
    marginBottom: 2
  },
  distancia: {
    fontSize: 12,
    color: "#999"
  }
});