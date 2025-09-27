const BASE_URL = import.meta.env.VITE_BACKEND_URL;


export const fetchLocationQuestions = async () => {
    try{
        const response = await fetch(`${BASE_URL}/questions/locations`);
        return response.json();
    } catch (error) {
        console.error("Error fetching location questions:", error);
        throw error;
    };
};

export const fetchMethodQuestions = async () => {
    try{
        const response = await fetch(`${BASE_URL}/questions/methods`); 
        return response.json();
    } catch (error) {
        console.error("Error fetching method questions:", error);
        throw error;
    };
};