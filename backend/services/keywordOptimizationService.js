import { tool } from "@langchain/core/tools";
import { z } from "zod";

// ✅ Define a Tool for Keyword Optimization Based on Performance
export const keywordOptimizationTool = tool(
    async ({ keyword, clicks, acos }) => {
        if (clicks > 50 && acos > 30) {
            return `Keyword '${keyword}' should be removed due to high ACOS.`;
        }
        if (clicks > 50 && acos < 15) {
            return `Keyword '${keyword}' is performing well. Consider increasing budget.`;
        }
        return `No immediate action required for '${keyword}'.`;
    },
    {
        name: "keyword_optimizer",
        description: "Evaluates ad performance and determines if keywords should be boosted or removed.",
        schema: z.object({
            keyword: z.string(),
            clicks: z.number(),
            acos: z.number(),
        }),
    }
);
