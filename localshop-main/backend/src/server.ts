import express from "express";
import admin from "firebase-admin";
import {readFileSync} from "fs";


const app = express();
const PORT = 3000;

app.use (express.json());

// Carrega as credenciais do arquivos json de forma segura
 const serviceAccount = JSON.parse(
    readFileSync(new URL ("../firebase-key.json", import.meta.url), "utf-8")
 );

 //Inicializa o firebase admin json
 admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
 });

 // Atalho para a instancia do banco de dados firebase
 const db = admin.firestore();

app.post("/lojas", async (request, response) => {
    try{
        const {nome, categoria, imagem, distancia, descricao} = request.body;
        if(!nome || !categoria || !imagem || !distancia){
                return response.status(400).json({error: "Campos obrigatorios ausentes"});
        }
        const novaLoja={
            nome,
            categoria,
            imagem: imagem || "https://marketing4ecommerce.cl/wp-content/uploads/2019/09/imagen-vectorial-compressor.jpg",
            distancia,
            descricao: descricao || "",
            
        };
        //Salva no firestore dentro da coleção "lojas"
        const docRef = await db.collection("lojas").add(novaLoja);
        //Retorna o objeto criado junto com o ID gerado
        return response.status(201).json({
            id: docRef.id,
            ...novaLoja,
        });
        }catch(error){
            return response.status(500).json({
                error:"Erro ao salvar a loja no banco."
            });
        }
});

app.listen(PORT, ()=>{
    console.log(`Servidor rodando na porta ${PORT}`);
})