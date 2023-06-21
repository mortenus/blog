export default function compareBlogPosts(query: string, blogPosts: any[]) {
  const queryWords = query.toLowerCase().split(/\W+/);

  const relevanceScores = blogPosts.map((post) => {
    const { title, description, fullText, hashtags } = post.data;
    let score = 0;

    const postWords = (
      title +
      ' ' +
      description +
      ' ' +
      fullText +
      ' ' +
      (hashtags || []).join(' ')
    )
      .toLowerCase()
      .split(/\W+/);
    queryWords.forEach((word) => {
      if (postWords.includes(word)) {
        score += postWords.filter((postWord) => postWord === word).length;
        if (title.toLowerCase().includes(word)) {
          score += 2;
        }
      }
    });

    return score;
  });

  const sortedPosts = blogPosts.slice().sort((a, b) => {
    const scoreA = relevanceScores[blogPosts.indexOf(a)];
    const scoreB = relevanceScores[blogPosts.indexOf(b)];
    return scoreB - scoreA;
  });

  if (sortedPosts.length > 0) return sortedPosts.slice(0, 3);

  return [];
}
