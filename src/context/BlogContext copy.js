import React, {useState} from 'react';

const BlogContext = React.createContext();
//const BlogPost = [{ title: "Post # 1"}, { title: "Post # 2"}, { title: "Post # 3"}]

export const BlogProvider = ({ children }) => {
    const [ blogPosts, setBlogPosts ] = useState([]);

    const addBlogPost = () => {
    setBlogPosts([
        ...blogPosts, 
        { title: `Blog Post #${blogPosts.length + 1}`}
    ]);
};
    return( 
        <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>
            {children}
        </BlogContext.Provider>
        );
};

export default BlogContext;