const { extractTextFromImage } = require("../utils/ocr");
const { buildRiskProfile } = require("../services/riskService");

exports.createProfile = async (req, res) => {
  try {
    let answers = {};

    // If file uploaded → OCR mode
    if (req.file) {
      const text = await extractTextFromImage(req.file.path);

      // crude parsing from OCR text
      answers = {
        age: parseInt(text.match(/Age:\s*(\d+)/i)?.[1]),
        smoker: /smoker:\s*yes/i.test(text),
        exercise: text.match(/Exercise:\s*(\w+)/i)?.[1],
        diet: text.match(/Diet:\s*(.+)/i)?.[1]
      };
    } 
    // If no file → assume JSON body input
    else {
      answers = req.body;
    }

    const result = buildRiskProfile(answers);
    res.json(result);

  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
};
