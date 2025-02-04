const cleanText = (text) => {
    return text
        .replace(/\*\*/g, "") // Remove **
        .replace(/[\*\-\•]/g, "") // Remove *, -, and •
        .replace(/\\"/g, '"') // Replace \" with "
        .replace(/\n/g, " ") // Replace newlines with spaces
        .replace(/\s+/g, " ") // Replace multiple spaces with a single space
        .trim(); // Remove leading/trailing spaces
};

export const extractAdAnalysisData = (rawText) => {
    try {
        const summaryMatch = rawText.match(/Performance Summary:\s*([\s\S]*?)\n\s*\*\*/i);
        const performanceSummary = summaryMatch ? cleanText(summaryMatch[1]) : "No summary found.";

        const highPerformersMatch = rawText.match(/High-Performing Keywords:\s*([\s\S]*?)\n\s*\*\*/i);
        const highPerformers = highPerformersMatch
            ? highPerformersMatch[1]
                .split("\n")
                .map((line) => cleanText(line.replace(/^\s*[\*\-\•]\s*/, ""))) // Remove bullet points
                .filter((line) => line)
            : [];

        const lowPerformersMatch = rawText.match(/Low-Performing Keywords:\s*([\s\S]*?)\n\s*\*\*/i);
        const lowPerformers = lowPerformersMatch
            ? lowPerformersMatch[1]
                .split("\n")
                .map((line) => cleanText(line.replace(/^\s*[\*\-\•]\s*/, ""))) // Remove bullet points
                .filter((line) => line)
            : [];

        const suggestionsMatch = rawText.match(/Suggestions:\s*([\s\S]*)/i);
        const suggestions = suggestionsMatch
            ? suggestionsMatch[1]
                .split("\n")
                .map((line) => cleanText(line.replace(/^\s*[\*\-\•]\s*/, ""))) // Remove bullet points
                .filter((line) => line)
            : [];

        return {
            performance_summary: performanceSummary,
            keyword_analysis: {
                high_performers: highPerformers,
                low_performers: lowPerformers,
            },
            suggestions: suggestions,
        };
    } catch (error) {
        console.error("Error extracting ad analysis data:", error);
        return { error: "Failed to extract structured ad performance data.", raw: rawText };
    }
};
