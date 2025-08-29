import axios from "axios";
import Problem from "../models/problem.model.js";
import { User } from "../models/user.model.js";

export const generateHint = async (req, res) => {
  const problemId = req.params.id;
  const userId = req.user.id;
  const { userCode, hintStep = 1 } = req.body;

  if (hintStep > 5 || hintStep < 1) {
    return res.status(400).json({ error: "Hint step must be between 1 and 5." });
  }

  try {
    const problem = await Problem.findById(problemId);
    if (!problem) return res.status(404).json({ error: "Problem not found." });

    const user = await User.findById(userId);
    const maxHints = user?.isPro ? 5 : 3;

    if (hintStep > maxHints) {
      return res.status(403).json({
        error: `You're allowed up to ${maxHints} hint${maxHints > 1 ? "s" : ""}.`,
      });
    }

    //code not available cus demo


    //code not available cus demo

    const aiResponse = await axios.post(geminiEndpoint, {
      contents: [{ parts: [{ text: prompt }] }],
    });

    const aiHint = aiResponse.data.candidates?.[0]?.content?.parts?.[0]?.text?.trim();

    if (!aiHint) {
      return res.status(500).json({ error: "Failed to generate a valid hint." });
    }

    return res.status(200).json({ hint: aiHint });
  } catch (err) {
    console.error("Gemini Hint Generation Error:", err?.response?.data || err.message);
    return res.status(500).json({ error: "Internal error generating hint." });
  }
};
