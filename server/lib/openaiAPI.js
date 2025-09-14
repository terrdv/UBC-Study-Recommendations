import OpenAI from "openai";
import dotenv from 'dotenv'
dotenv.config()

const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});


export async function getStudyMethod({answers}) {
    try {
        const response = await client.responses.create({
            model: "gpt-4o-mini",
            input: `Given the following responses, recommend suitable study methods: ${answers}`,
            response_format: {
              type: "json_schema",
              json_schema: {
                name: "study_method",
                schema: {
                  type: "object",
                  properties: {
                    name: { type: "string" },
                    description: { type: "string" },
                    explanation: { type: "string" }
                  },
                  required: ["name", "description", "explanation"]
                }
              }
            }
          });
        return response.output_parsed
    
    } catch (err) {
        if (err.response) {
            console.error("API Error: ", err.response.status, err.response.data)
        } else if (err.request) {
            console.error("Request Error:", err.request)
        } else {
            console.error(err.message)
        }
    }

    return response
    
}
    




// const response = await client.responses.create({
//     model: "gpt-5",
//     input: "Write a one-sentence bedtime story about a unicorn."
// });

console.log(response.output_text);




