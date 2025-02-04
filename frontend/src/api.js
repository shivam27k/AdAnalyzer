import axios from "axios";

const API_BASE_URL = "http://localhost:5000";

export const uploadFile = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    return axios.post(`${API_BASE_URL}/upload`, formData);
};

export const analyzeFile = async (filePath) => {
    return axios.post(`${API_BASE_URL}/analyze`, { filePath });
};
