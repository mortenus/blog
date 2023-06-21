import { axios } from 'core';
import { BlogItem } from 'features/Blog';
import { useRouter } from 'next/router';
import React from 'react';

const BlogSearch = () => {
  const [items, setItems] = React.useState([]);
  const router = useRouter();
  const { q } = router.query;

  React.useEffect(() => {
    if (q) {
      axios
        .get(`http://localhost:3001/blog/search?q=${q}`)
        .then((response) => {
          setItems(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.error('Error fetching search results:', error);
        });
    }
  }, [q]);
  return (
    <div className="global-wrapper--small" style={{ padding: '100px 0' }}>
      {items &&
        items.map((item: any) => (
          <BlogItem
            key={item.slug}
            itemCount={1}
            slug={item.slug && item.slug}
            onClick={undefined}
            // customRef={!item.slug && toNotCloseRef}
            type={item.type && item.type}
            {...item.data}
          />
        ))}
    </div>
  );
};

export default BlogSearch;
