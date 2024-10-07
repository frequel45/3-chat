const { Configuration, OpenAIApi } = require("openai");
const profitLossReport = require("../data/profitLossReport.json");
const balanceSheet = require("../data/balanceSheet.json");

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

exports.fetchAssistantResponse = async (userMessage, threadId) => {
    const response = await openai.createChatCompletion({
        model: "gpt-4",
        messages: [{ role: "user", content: userMessage }],
        threadId: threadId || undefined,
        stream: true, // Enable streaming
    });
    return response.data;
};

exports.processDataQuery = async (userMessage) => {
    if (userMessage.includes("revenue during March")) {
        return profitLossReport["March"].revenue;
    }
    if (userMessage.includes("expenses for the next month")) {
        return balanceSheet["Forecast"]["Expenses"];
    }
    return null;
};
