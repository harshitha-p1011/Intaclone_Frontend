import React , {useState} from "react";
import Axios from "axios";
import { useNavigate } from 'react-router-dom';
import "./upload.css";


const Upload = () => {

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");
    const [PostImage, setPostImage] = useState("");
    let img;

    const handleSubmit = async () => {
        const newPost = new FormData();
        newPost.append("file", image);
        newPost.append("upload_preset", "instaClone");
        // newPost.append("cloud_name", "dvsyjjryn");
        newPost.append("name", name);
        newPost.append("location", location);
        newPost.append("description", description);

        await Axios.post("https://api.cloudinary.com/v1_1/datz6hlra/image/upload", newPost)
        .then(res=>{
            console.log(res);
            console.log(res.data.secure_url);
            setPostImage(res.data.secure_url);
            img=res.data.secure_url;
        });
        newPost.append("PostImage", PostImage);


        // try{
        //     await Axios.post("http://localhost:8000/upload",newPost);
        //     console.log(newPost);
        //  }catch{
        //      console.log("not posted");
        // }

        await Axios("http://localhost:8000/upload", {
            method : "post",
            headers: {
                "Content-Type":"application/json"
            },
            data:{
                name,
                location,
                description,
                PostImage: img
            }
        }).then(res=>{
          console.log(res);
            console.log({
              name,
              location,
              description,
              PostImage: img
          });
        }).catch(e=>{
            console.log(e.message);
        })

        navigate('/postview');


        // await fetch("https://api.cloudinary.com/v1_1/dvsyjjryn/image/upload", {
        //     method:"POST",
        //     mode: "no-cors",
        //     body: newPost
        // })
        // .then(res=>res.json())
        // .then(newPost=>{
        //     console.log(newPost);
        // })
        // .catch((error)=>{
        //     console.log(error.message);
        // })

        // console.log(newPost);


    }
  return (
    <div className="upload">
      <div className= "content">
        <div className="btn">
          <input type="file" name="Browse" id="image" onChange={(e)=>{setImage(e.target.files[0])}}/>
        </div>
        <div id="mid">
        <input type="text" placeholder="name" value = {name} onChange={(e)=>{setName(e.target.value)}} />
        <input type="text" placeholder="location" value = {location} onChange={(e)=>{setLocation(e.target.value)}} />
        </div>
        
        <input type="text" id="discrip" placeholder="description" value = {description} onChange={(e)=>{setDescription(e.target.value)}} />


        <button type="submit" className="submit"
        onClick={()=>handleSubmit()}
        >Create Post</button>
      </div>
    </div>
  );
}

export default Upload;