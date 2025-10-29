import { NextResponse } from "next/server";

interface Repo {
  stargazers_count: number;
}

interface GitHubUser {
  public_repos: number;
  followers: number;
  following: number;
  repos_url: string;
}

export async function GET() {
  try {
    const username = "mukeshlilawat1";
    const res = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        "User-Agent": "next-app",
      },
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch GitHub user");
    }

    const user: GitHubUser = await res.json();

    const reposRes = await fetch(user.repos_url, { cache: "no-store" });
    if (!reposRes.ok) {
      throw new Error("Failed to fetch GitHub repos");
    }

    const repos: Repo[] = await reposRes.json();

    const stars = repos.reduce(
      (acc, repo) => acc + (repo.stargazers_count || 0),
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
    const message =
      error instanceof Error ? error.message : "Failed to fetch GitHub stats";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
