import { NextResponse } from "next/server";

export async function GET() {
  try {
    const username = "mukeshlilawat1";
    const res = await fetch(`https://api.github.com/users/${'mukeshlilawat1'}`, {
      headers: {
        "User-Agent": "next-app",
      },
      cache: "no-store",
    });

    const user = await res.json();

    // Optional: fetch repos to count stars
    const reposRes = await fetch(user.repos_url);
    const repos = await reposRes.json();
    const stars = repos.reduce(
      (acc: number, repo: any) => acc + repo.stargazers_count,
      0
    );

    return NextResponse.json({
      publicRepos: user.public_repos,
      followers: user.followers,
      following: user.following,
      stars,
    });
  } catch (error) {
    console.error("GitHub API Error:", error);
    return NextResponse.json({ error: "Failed to fetch GitHub stats" }, { status: 500 });
  }
}
