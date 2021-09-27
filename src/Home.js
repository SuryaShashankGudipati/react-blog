import { useState, useEffect } from "react";
import axios from "axios";

import BlogList from './BlogList';

const Home = () => {
  // const [blogs, setBlog] = useState([
  //   { title: "title 1", body: "something 1", author: "surya", id: 1 },
  //   { title: "title 2", body: "something 2", author: "shashank", id: 2 },
  //   { title: "title 3", body: "something 3", author: "unknown", id: 3 },
  // ]);

  const [blogs, setBlog] = useState(null);

  // const handleDelete = (id) => {
  //   const newBlogs = blogs.filter((blog) => blog.id !== id)
  //   setBlog(newBlogs);
  // }

  useEffect( () => {
    async function fetchAPI() {
      const getData = await axios.get('http://localhost:8000/blogs');
      setBlog(getData.data);
    }

    fetchAPI();
  }, []);


  return (
    <div className="home">
      {blogs && <BlogList blogs={blogs} title="All blogs!" /*handleDelete={handleDelete} *//>}
    </div>
  );
};

export default Home;
