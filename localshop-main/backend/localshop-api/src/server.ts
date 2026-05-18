import express from "express";

const app = express
const PORT = 3000;

app.use (express.json());

app.get ("/", (request, response)=>{
    return response.json({
        message:"API do local shop rodando com sucesso"

    });
});

app.listen(PORT, ()=>{
    console.log("")
})