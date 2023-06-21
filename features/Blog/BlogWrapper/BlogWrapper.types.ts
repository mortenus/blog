type TAuthor = {
  fullname: string;
  position: string;
  description: string;
  avatarUrl: string;
  profileUrl: string;
};

type TBlogWrapper = {
  children: React.ReactNode;
  info: {
    title: string;
    headerImg: string;
    date: string;
    createdAt: string;
    modifiedAt: string;
    minToRead: number;
    slug: string;
    description: string;
    author: TAuthor;
  };
  nextToReadArr: {
    data: {
      date: string;
      title: string;
      description: string;
      imgUrl: string;
      hashtags?: string[];
    };
    slug: string;
    // date: string;
    // title: string;
    // description: string;
    // imgUrl: string;
    // slug: string;
  }[];
  summary?: string;
};

export default TBlogWrapper;
