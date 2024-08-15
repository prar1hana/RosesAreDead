// import axios from "axios";
// import React, { useEffect, useState } from "react";

// const Menu = ({cat}) => {
//   const [post, setPosts] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await axios.get(`/posts/?cat=${cat}`);
//         setPosts(res.data);
//       } catch (err) {
//         console.log(err);
//       }
//     };
//     fetchData();
//   }, [cat]);
//   const posts = [
//     {
//       id: 1,
//       title: " elit",
//       desc: "s numquam ab vel perspiciatis corporis!",
//       img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//     },
//     {
//       id: 2,
//       title: " elit",
//       desc: "s numquam ab vel perspiciatis corporis!",
//       img: "https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//     },
//     {
//       id: 3,
//       title: " elit",
//       desc: "s numquam ab vel perspiciatis corporis!",
//       img: "https://images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//     },
//     {
//       id: 4,
//       title: " elit",
//       desc: "s numquam ab vel perspiciatis corporis!",img: "https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      
//     },
//   ];
//   return (
//     <div className="menu">
//       <h1>Other posts you may like</h1>
//       {posts.map((post) => (
//         <div className="post" key={post.id}>
//           <img src="post.img" alt="" />
//           <h2>{post.title}</h2>
//           <button>Read More</button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Menu;

import React, { useEffect, useState } from "react";
import axios from "axios";

const Menu = ({ cat }) => {
  const [posts, setPosts] = useState([]);
  const post = [
    {
      id: 1,
      title: "Donec et sapien",
      img: "https://fastly.picsum.photos/id/19/2500/1667.jpg?hmac=7epGozH4QjToGaBf_xb2HbFTXoV5o8n_cYzB7I4lt6g",
    },
    {
      id: 2,
      title: "Morbi nisi libero",
      img: "https://fastly.picsum.photos/id/24/4855/1803.jpg?hmac=ICVhP1pUXDLXaTkgwDJinSUS59UWalMxf4SOIWb9Ui4",
    },
    {
      id: 3,
      title: "Mauris elementum",
      img: "https://fastly.picsum.photos/id/21/3008/2008.jpg?hmac=T8DSVNvP-QldCew7WD4jj_S3mWwxZPqdF0CNPksSko4",
    },
  ];

  return (
    <div className="menu">
      <h1>Check out more</h1>
      {post.map((p) => (
        <div className="post" key={p.id}>
          <img src={p.img} alt={p.title} />
          <h2>{p.title}</h2>
          <p>{p.desc}</p>
          <button>Read More</button>
        </div>
      ))}
    </div>
  );
};

export default Menu;
