import React from "react";
import { useCadastroLoja } from "../../hooks/useCadastroLoja";
import { KeyboardAvoidingView, Platform, TouchableOpacity } from "react-native";
import styles from "../Details/StyleDetalhes";
import { Text } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";

export default function CadastroLoja(){
    const{formData, updateField, handleSalvar} = useCadastroLoja();

    return(
        <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding": "height"}
        >
        <ScrollView contentContainerStyle={styles.scrollContent}>
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
                placeholder="Ex: Restaurante"
                value={formData.categoria}
                onChangeText={(v)=> updateField("categoria", v)}
            />
            <Text style={styles.label}>Link da Imagem *</Text>
            <TextInput
                style={styles.input}
                placeholder="https://..."
                keyboardType="url"
                autoCapitalize="none"
                value={formData.imagem}
                onChangeText={(v)=> updateField("imagem", v)}
            />
            <Text style={styles.label}>Distancia *</Text>
            <TextInput
                style={styles.input}
                placeholder="200m"
                keyboardType="url"
                value={formData.distancia}
                onChangeText={(v)=> updateField("distancia", v)}
            />
            <TouchableOpacity style={styles.button} onPress={handleSalvar}>
                <Text style={styles.buttonText}>Salvar Local</Text>
            </TouchableOpacity>
        </ScrollView>
    </KeyboardAvoidingView>
    );
}