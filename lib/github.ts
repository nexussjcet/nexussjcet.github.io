export async function getGithubAvatar(username: string): Promise<string> {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`, {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
        },
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch GitHub user data');
      }
  
      const data = await response.json();
      return data.avatar_url;
    } catch (error) {
      console.error('Error fetching GitHub avatar:', error);
      return `/placeholder.svg?height=40&width=40&text=${username[0]?.toUpperCase()}`;
    }
  }
  
  