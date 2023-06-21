type TCompareBlogPosts = {
  data: {
    date: string;
    title: string;
    description: string;
    imgUrl: string;
    hashtag: string[];
    fullText: string;
    related?: any[];
  };
  slug: string;
};

export default function compareBlogPosts(query: TCompareBlogPosts, blogPosts: any[]) {
  const queryWords = query.data.fullText.toLowerCase().split(/\W+/);

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

    // increase score by 5 if hashtag matched
    if (hashtags && query.data.hashtag) {
      const matchingHashtags = hashtags.filter((hashtag: string) =>
        query.data.hashtag.includes(hashtag),
      );
      score += matchingHashtags.length * 5;
    }

    return score;
  });

  const sortedPosts = blogPosts.slice().sort((a, b) => {
    const scoreA = relevanceScores[blogPosts.indexOf(a)];
    const scoreB = relevanceScores[blogPosts.indexOf(b)];
    return scoreB - scoreA;
  });

  const withoutRelatedSortedPosts = sortedPosts.map((post) => {
    const { data, ...rest } = post;
    const { related, ...cleanedData } = data;
    return { ...rest, data: cleanedData };
  });

  if (withoutRelatedSortedPosts.length > 0) return withoutRelatedSortedPosts.slice(0, 3);

  return [];
}
