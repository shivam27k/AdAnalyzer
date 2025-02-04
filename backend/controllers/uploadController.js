export const handleFileUpload = (req, res) => {
    if (!req.file) return res.status(400).json({ error: "No file uploaded" });
    res.json({ message: "File uploaded successfully", filePath: req.file.path });
};
