import React from "react";
import { useCadastroLoja } from "../../hooks/useCadastroLoja";
import { KeyboardAvoidingView, Platform } from "react-native";
import styles from "../Details/StyleDetalhes";
import { Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default function CadastroLoja(){
    const{formData, updateField, handleSalvar} = useCadastroLoja();

    return(
        <KeyboardAvoidingView
        style={styles.coontainer}
        behavior={Platform.OS === "ios" ? "padding": "height"}
        >
            <ScrollView contentContainerStyles={styles.scrollContent}>
                <Text style={styles.title}>Cadastrar Local</Text>

                <Text style={styles.label}>Nome do local *</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Ex: Cafe central"
                    value={formData.nome}
                    onChangeText={(v)=> updateField("nome", v)}
                />
                <Text style={styles.label}>Categoria *</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Ex: Padarias"
                    value={formData.nome}
                    onChangeText={(v)=> updateField("nome", v)}
                />
            
    )
}