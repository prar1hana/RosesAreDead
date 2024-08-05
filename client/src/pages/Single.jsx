import React, { useEffect, useState, useContext } from "react";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Menu from "../components/Menu";
import axios from "axios";
import moment from "moment";
import { AuthContext } from "../context/authContext";
import DOMPurify from "dompurify";

const Single = () => {
  const [post, setPost] = useState({});
  const location = useLocation();
  const navigate = useNavigate();
  const postId = location.pathname.split("/")[2];
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/${postId}`);
        setPost(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [postId]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${postId}`);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  // Check if post is available before rendering
  const hasPost = post && Object.keys(post).length > 0;

  return (
    <div className="single">
      {hasPost ? (
        <div className="content">
          {post.img && (
            <img src={`../upload/${post.img}`} alt="Post" />
          )}
          <div className="user">
            {post.userImg && <img src={post.userImg} alt="User" />}
            <div className="info">
              <span>{post.username}</span>
              <p>Posted {moment(post.date).fromNow()}</p>
            </div>
            {currentUser.username === post.username && (
              <div className="edit">
                <Link to={`/write?edit=2`} state={post}>
                  <img src={Edit} alt="Edit" />
                </Link>
                <img onClick={handleDelete} src={Delete} alt="Delete" />
              </div>
            )}
          </div>
          <h1>{post.title}</h1>
          <p
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(post.desc || ""),
            }}
          ></p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <Menu cat={post.cat} />
    </div>
  );
};

export default Single;
