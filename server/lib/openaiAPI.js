const OpenAI = require('openai')
const dotenv = require('dotenv')
dotenv.config()

const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});


async function getStudyMethod(answers) {
    try {
        const response = await client.responses.create(
          {
            model: "gpt-4o-mini",
            input: ` IMPORTANT: RESPOND IN ONLY JSON IN THIS FORMAT {"name": "", "description": "", "explanation": ""}
                      where name is the name of the study method, description is a brief description of the method, and explanation is a detailed explanation of why this method is suitable based on the user's answers.
            
                    Given the following responses to questions about study habits, recommend suitable study methods: 
                    Questions: 
                      0. "I prefer short, frequent study sessions rather than long, uninterrupted ones.",
                      1. "I find that taking regular breaks improves my focus.",
                      2. "I like to study the same material repeatedly over several days (spaced repetition).",
                      3. "I prefer setting strict time blocks for focused work.",
                      4. "I often multitask while studying (e.g., music, phone, other tasks).",
                      5. "I like studying by summarizing and rewriting notes.",
                      6. "I find group study sessions more effective than studying alone.",
                      7. "I often test myself on material rather than just reviewing it.",
                      8. "I enjoy using digital tools or apps to organize and track my study.",
                      9. "I prefer flexible, unstructured study sessions rather than a strict schedule."  
                      
                      Answers:
                      
                      ${answers}`,
            
              }
            
        );
        return response
    
    } catch (err) {
        if (err.response) {
            console.error("API Error: ", err.response.status, err.response.data)
        } else if (err.request) {
            console.error("Request Error:", err.request)
        } else {
            console.error(err.message)
        }
    }
    
}
    
async function getStudyLocation(answers) {
    try {
        const response = await client.responses.create({
            model: "gpt-4o-mini",
            input: `Given the following responses to questions about study environment preferences, recommend suitable study locations at UBC Vancouver: ${answers}
            
                    0. ...`,
            response_format: {
              type: "json_schema",
              json_schema: {
                name: "study_location",
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
    
}

module.exports = { getStudyMethod, getStudyLocation }




