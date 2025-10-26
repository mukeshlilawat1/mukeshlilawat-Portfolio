// app/api/leetcode/route.js
export async function GET() {
    const query = `
    query userProfile($username: String!) {
      matchedUser(username: $username) {
        username
        submitStatsGlobal {
          acSubmissionNum {
            difficulty
            count
          }
        }
      }
      userContestRanking(username: $username) {
        rating
        attendedContestsCount
      }
    }
  `;

    try {
        const response = await fetch("https://leetcode.com/graphql", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                query,
                variables: { username: "mukeshlilawat" },
            }),
            cache: "no-store",
        });

        const data = await response.json();
        return Response.json(data);
    } catch (error) {
        console.error("LeetCode API error:", error);
        return Response.json({ error: "Failed to fetch data" }, { status: 500 });
    }
}
