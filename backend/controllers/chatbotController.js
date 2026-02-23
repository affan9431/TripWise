const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

exports.chatbotResponse = async (req, res) => {
  try {
    const { message, history } = req.body;

    const systemPrompt = `
You are TripWise AI, a smart travel planning assistant.

Your job:
- Understand user intent.
- Extract budget, trip style, group size, and dates if mentioned.
- Ask smart follow-up questions if information is missing.
- Suggest travel plans in a clean and structured way.
- Keep responses clear and not too long.
`;

    const formattedHistory = history.map((msg) => ({
      role: msg.sender === "bot" ? "model" : "user",
      parts: [{ text: msg.text }],
    }));

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      systemInstruction: systemPrompt,
      contents: [
        ...formattedHistory,
        {
          role: "user",
          parts: [{ text: message }],
        },
      ],
    });

    console.log(response.text);
    res.json({ reply: response.text });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "TripWise AI failed." });
  }
};
