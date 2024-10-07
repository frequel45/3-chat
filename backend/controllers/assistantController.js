const { fetchAssistantResponse, processDataQuery } = require('../utils/dataUtils.js');

exports.handleQuery = async (req, res) => {
    try {
        const { userMessage, threadId } = req.body;
        const assistantResponse = await fetchAssistantResponse(userMessage, threadId);
        
        const processedData = await processDataQuery(userMessage);
        res.status(200).json({ assistantResponse, processedData });
    } catch (error) {
        res.status(500).json({ message: "Error processing the query", error });
    }
};
