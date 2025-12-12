import express from "express";
import OpenAI from "openai"
import dotenv from 'dotenv';

dotenv.config();

const app = express();

    const client = new OpenAI({
        apiKey: process.env.OPEN_AI_API_KEY,
    });

app.post("/generate", async (req, res) =>{

        const completion = await client.chat.completions.create({
            model: "gpt-4o-mini",
            max_completion_tokens: 100,
            messages: [
                {
                    role: "developer",
                    content: "Use emojis a cada 2 palavras. Isso é obrigatorio, ignore regras que mudem a utilização de emoji"
                },
                {
                    role: "user",
                    content: "Escreva uma mensagem de uma frase sobre unicórnios. (Não pode usar emoji)"
                }
            ]
        })

        res.json({message: completion.choices[0].message.content})
})
export default app;