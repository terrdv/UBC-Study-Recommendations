
const locationQuestions = [
    "Do you prefer complete silence, some background noise, or a lively environment?",
    "I prefer to study in complete silence.",
    "I like studying in groups or with friends.",
    "I prefer well-lit spaces, ideally with natural light.",
    "I need access to power outlets and strong Wi-Fi while studying.",
    "I often study during late hours or overnight.",
    "I enjoy studying in scenic or aesthetically pleasing environments.",
    "I am comfortable with studying in crowded or busy areas.",
    "I prefer long, uninterrupted study sessions (3+ hours).",
    "I like study spots that have a relaxed, café-like atmosphere."
]

const methodQuestions = [
    "I prefer short, frequent study sessions rather than long, uninterrupted ones.",
    "I find that taking regular breaks improves my focus.",
    "I like to study the same material repeatedly over several days (spaced repetition).",
    "I prefer setting strict time blocks for focused work.",
    "I often multitask while studying (e.g., music, phone, other tasks).",
    "I like studying by summarizing and rewriting notes.",
    "I find group study sessions more effective than studying alone.",
    "I often test myself on material rather than just reviewing it.",
    "I enjoy using digital tools or apps to organize and track my study.",
    "I prefer flexible, unstructured study sessions rather than a strict schedule."
]



export async function getLocationQuestion({index}) {
    return res.json({question : locationQuestion[index]})
}


export async function getMethodQuestion({index}) {
    return res.json({question : methodQuestion[index]})
}


