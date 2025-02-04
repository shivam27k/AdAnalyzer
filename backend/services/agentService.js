import { createReactAgent } from "@langchain/langgraph/prebuilt";
import { model } from "./googleAiService.js";
import { keywordOptimizationTool } from "./keywordOptimizationService.js";

const tools = [keywordOptimizationTool];

// ✅ Create a LangGraph React Agent for stateful execution
export const agent = createReactAgent({
    llm: model,
    tools,
});
