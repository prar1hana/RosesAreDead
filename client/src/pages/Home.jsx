import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [post, setPosts] = useState([]);

  const cat = useLocation().search

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts${cat}`);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);
  const posts = [
    {
      id: 1,
      title: "Water-Lily",
      desc: "Clouds on the Water-Lily Pond by Claude Monet. Water Lilies, series of some 250 oil paintings that were created by French Impressionist artist Claude Monet from the late 1890s to his death in 1926 and were focused on the water lily pond in his garden. Monet's Water Lilies series comprises approximately 250 oil paintings created during the last three decades of his life. The paintings are celebrated for their vibrant colors, innovative brushwork, and exploration of light and reflection. They are considered masterpieces of Impressionism and have had a profound influence on the art world",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Bridge_Over_a_Pond_of_Water_Lilies%2C_Claude_Monet_1899.jpg/440px-Bridge_Over_a_Pond_of_Water_Lilies%2C_Claude_Monet_1899.jpg",
    },
    {
      id: 2,
      title: "Chris Killip",
      desc: "Teeside, England, Great Britain, 1976, Lifetime gelatin silver print, signed on verso, 16 x 20 in / 40 x 50 cm (paper), This piece is a fine example of Killip’s groundbreaking work on the devastating impact of deindustrialization in England during the 1970s and 1980s and the resilience of the British people.",
      img: "https://store.magnumphotos.com/cdn/shop/files/MG1133443.jpg?v=1712924071&width=1100",
    },
    {
      id: 3,
      title: "Speak Your Mind, Even If Your Voice Shakes",
      desc: "In a world where voices can be drowned out by the noise of conformity and fear, speaking your mind becomes an act of courage. It is an assertion of your individuality, your thoughts, and your beliefs. Even if your voice trembles, remember that your words carry power. They hold the potential to inspire, to challenge, and to ignite change",
      img: "https://i.pinimg.com/564x/7b/6d/e9/7b6de90c87f4a24c589672452c813e88.jpg",
    },
    {
      id: 4,
      title: "France On Film",
      desc: "Long awaited and finally here, Elle and I have been working on our third set of ten presets, five from her and five from myself! The idea was to create what so many have been asking us to do, replicate the style of film we shoot! Inspired by both early large format and the textures of 1960’s our two styles are represented here in a pack of ten presets! 8 colored, and two black and white styles. The reason we preorder products, especially digital, is that it allows us to make sales before they ar",
      img: "https://i.pinimg.com/564x/b3/55/24/b355246e97f4805d6266defb4086eb7e.jpg",
    },
  ];

  const getText = (html) =>{
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent
  }


  return (
    <div className="home">
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
             <img src={post.img} alt="" />
             {/*<img src={`../upload/${post?.img}`} alt="" /> */}              
            </div>
            <div className="content">
              <Link className="link" to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{getText(post.desc)}</p>
              <button>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
