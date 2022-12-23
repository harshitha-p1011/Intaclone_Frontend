import React from "react";
import { useEffect, useState } from "react";
import "./postview.css";
import Card from "../Card/Card";
import Header from "../header/header";

// import reportWebVitals from './reportWebVitals';

export default function Postview() {
  const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   fetch("https://ap-south-1.aws.data.mongodb-api.com/app/application-0-lcwyg/endpoint/insta" , {method:"GET"})
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setPosts(data);
  //     })
  //     .catch((err) => {
  //       if (err) {
  //         console.log(err);
  //       }
  //     });
  // }, []);

  useEffect(() => {
    fetch("http://localhost:8000" , {method:"GET"})
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      })
      .catch((err) => {
        if (err) {
          console.log(err);
        }
      });
  }, [posts]);

  return (
    <div className="post-container">

        <Header/>


      {posts.map((post, i) => {
        return <Card key={i} post={post} />;
      })}
    </div>
  );
}
