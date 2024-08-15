// import React, { useEffect, useState, useContext } from "react";
// import Edit from "../img/edit.png";
// import Delete from "../img/delete.png";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import Menu from "../components/Menu";
// import axios from "axios";
// import moment from "moment";
// import { AuthContext } from "../context/authContext";
// import DOMPurify from "dompurify";

// const Single = () => {
//   const [post, setPost] = useState({});
//   const location = useLocation();
//   const navigate = useNavigate();
//   const postId = location.pathname.split("/")[2];
//   const { currentUser } = useContext(AuthContext);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await axios.get(`/posts/${postId}`);
//         setPost(res.data);
//       } catch (err) {
//         console.log(err);
//       }
//     };
//     fetchData();
//   }, [postId]);

//   const handleDelete = async () => {
//     try {
//       await axios.delete(`/posts/${postId}`);
//       navigate("/");
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   // Check if post is available before rendering
//   const hasPost = post && Object.keys(post).length > 0;

//   return (
//     <div className="single">
//       {hasPost ? (
//         <div className="content">
//           {post.img && (
//             <img src={`../upload/${post.img}`} alt="Post" />
//           )}
//           <div className="user">
//             {post.userImg && <img src={post.userImg} alt="User" />}
//             <div className="info">
//               <span>{post.username}</span>
//               <p>Posted {moment(post.date).fromNow()}</p>
//             </div>
//             {currentUser.username === post.username && (
//               <div className="edit">
//                 <Link to={`/write?edit=2`} state={post}>
//                   <img src={Edit} alt="Edit" />
//                 </Link>
//                 <img onClick={handleDelete} src={Delete} alt="Delete" />
//               </div>
//             )}
//           </div>
//           <h1>{post.title}</h1>
//           <p
//             dangerouslySetInnerHTML={{
//               __html: DOMPurify.sanitize(post.desc || ""),
//             }}
//           ></p>
//         </div>
//       ) : (
//         <p>Loading...</p>
//       )}
//       <Menu cat={post.cat} />
//     </div>
//   );
// };

// export default Single;



import Menu from "../components/Menu";
import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68"
          alt=""
        />
        <div className="user">
          <img
            src="https://fastly.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4"
            alt=""
          />
          <div className="info">
            <span>John</span>
            <p>posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to="/write?edit=2">
              <img src={Edit} alt="Edit" />
            </Link>
            <img src={Delete} alt="Delete" />
          </div>
        </div>
        <h1>Lorem Ipsum</h1>
        <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div>
      <Menu />
    </div>
  );
};

export default Single;

