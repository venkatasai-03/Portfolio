async function fetchLeetCodeStats() {
  try {
    const response = await fetch("https://leetcode-api-faisalshohag.vercel.app/M_V_SAI");
    const data = await response.json();

    // Solved stats
    document.getElementById("lc-total").innerText = `${data.totalSolved} / ${data.totalQuestions}`;
    document.getElementById("lc-easy").innerText = `${data.easySolved}`;
    document.getElementById("lc-medium").innerText = `${data.mediumSolved}`;
    document.getElementById("lc-hard").innerText = `${data.hardSolved}`;

    // Extra stats
    document.getElementById("lc-rank").innerText = `#${data.ranking}`;
    document.getElementById("lc-points").innerText = `${data.contributionPoint}`;


  } catch (error) {
    console.error("LeetCode API fetch failed:", error);
    document.getElementById("leetcode-live").innerHTML =
      "<p style='color:red;'>Failed to load LeetCode stats.</p>";
  }
}

fetchLeetCodeStats();
