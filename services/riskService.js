exports.buildRiskProfile = (answers) => {
    const factors = [];
    let score = 0;
  
    // Rule-based scoring
    if (answers.smoker) { factors.push("smoking"); score += 30; }
    if (answers.diet?.includes("sugar")) { factors.push("poor diet"); score += 25; }
    if (answers.exercise === "rarely") { factors.push("low exercise"); score += 20; }
    if (answers.age > 40) { factors.push("age risk"); score += 10; }
  
    // Risk levels
    let riskLevel = "low";
    if (score > 70) riskLevel = "high";
    else if (score > 40) riskLevel = "medium";
  
    return {
      answers,
      factors,
      risk_level: riskLevel,
      score,
      recommendations: [
        answers.smoker ? "Quit smoking" : "Maintain non-smoking habit",
        answers.diet?.includes("sugar") ? "Reduce sugar intake" : "Maintain balanced diet",
        answers.exercise === "rarely" ? "Walk 30 mins daily" : "Keep active"
      ],
      status: "ok"
    };
  };
  