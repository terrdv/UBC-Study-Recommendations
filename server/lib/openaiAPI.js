const OpenAI = require('openai')
const dotenv = require('dotenv')
dotenv.config()

const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});


async function getStudyMethod(answers) {
    try {
        const response = await client.responses.create({
            model: "gpt-4o-mini",
            input: `Given the following responses to questions about study habits, recommend suitable study methods: 
                    Questions: 
                      0. ${answers}`,
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




