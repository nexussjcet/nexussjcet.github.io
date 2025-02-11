export async function getGithubAvatar(username: string): Promise<string> {
	try {
		const response = await fetch(`https://api.github.com/users/${username}`, {
			headers: {
				Accept: "application/vnd.github.v3+json",
			},
		});

		if (!response.ok) {
			throw new Error("Failed to fetch GitHub user data");
		}

		const data = await response.json();
		return data.avatar_url;
	} catch (error) {
		console.error("Error fetching GitHub avatar:", error);
		return `/placeholder.svg?height=40&width=40&text=${username[0]?.toUpperCase()}`;
	}
}

export async function getGithubData(
	username: string,
): Promise<{ username: string; name: string; avatar_url: string }> {
	const response = await fetch(`https://api.github.com/users/${username}`, {
		headers: {
			Accept: "application/vnd.github.v3+json",
		},
	});

	if (!response.ok) {
		throw new Error("Failed to fetch GitHub user data");
	}

	const data = await response.json();
	return { username: data.login, name: data.name, avatar_url: data.avatar_url };
}
