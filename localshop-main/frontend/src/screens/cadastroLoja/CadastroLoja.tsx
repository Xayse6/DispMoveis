import React from "react";

import {
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Text,
  Alert,
} from "react-native";

import { useCadastroLoja } from "../../hooks/useCadastroLoja";
import styles from "./CadastroLojaStyles";
import { api } from "../../services/api";
import { useNavigation } from "@react-navigation/native";
import {Loja} from "../../@types/loja";

export default function CadastroLoja() {
  const { formData, updateField} =
    useCadastroLoja();

  const navigation=useNavigation();

  async function handleSalvar() {
    const {nome, categoria, distancia, imagem, descricao}=formData
    if(!nome || !categoria || !distancia){
    Alert.alert("Aviso", "Preencha os campos obrigatorios");
    return;
  }
  try {
    //Envia os dados do formulario no corpo do POST
    await api.post("/lojas",{
      nome,
      categoria,
      distancia,
      imagem,
      descricao,
    });

    Alert.alert("Sucesso", "Loja Cadastrada com secesso!");
    navigation.goBack(); //Volta para a HomeScreen

  } catch (error) {
    console.error(error);
    Alert.alert("Erro", "Não foi possivel salvar a loja");
    
  }
}
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={
        Platform.OS === "ios"
          ? "padding"
          : undefined
      }
    >
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={styles.title}>
          Cadastrar Local
        </Text>
        <Text style={styles.label}>
          Nome do local *
        </Text>
        <TextInput style={styles.input}
          placeholder="Ex: Café Central"
          value={formData.nome}
          onChangeText={(v) =>
            updateField("nome", v)
          }
        />
        <Text style={styles.label}>
          Categoria *
        </Text>
        <TextInput style={styles.input}
          placeholder="Ex: Restaurante"
          value={formData.categoria}
          onChangeText={(v) =>
            updateField("categoria", v)
          }
        />
        <Text style={styles.label}>
          Link da imagem *
        </Text>
        <TextInput style={styles.input}
          placeholder="https://..."
          keyboardType="url"
          autoCapitalize="none"
          value={formData.imagem}
          onChangeText={(v) =>
            updateField("imagem", v)
          }
        />
        <Text style={styles.label}>
          Distância *
        </Text>
        <TextInput style={styles.input}
          placeholder="200"
          keyboardType="numeric"
          value={formData.distancia}
          onChangeText={(v) =>
            updateField("distancia", v)
          }
        />
        <TouchableOpacity
          style={styles.button}
          onPress={handleSalvar}
        >
          <Text style={styles.buttonText}>
            Salvar Local
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}