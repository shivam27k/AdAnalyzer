import axios from "axios";

const API_BASE_URL = "https://adanalyzer.onrender.com";

export const uploadFile = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    return axios.post(`${API_BASE_URL}/upload`, formData);
};

export const analyzeFile = async (filePath) => {
    return axios.post(`${API_BASE_URL}/analyze`, { filePath });
};
