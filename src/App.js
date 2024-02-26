
import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'
import Posts from './components/Posts';
import Enterpost from './components/Enterpost';
function App() {
  const [post,setPost]=useState([]);

  useEffect(()=>{
  fetchdataa()
       },[])

  const fetchdataa=async()=>{
    try {
      const resp=await axios.get('https://jsonplaceholder.typicode.com/posts')
      setPost(resp.data)
      
      console.log('post is : ', post)
      
    } catch (error) {
      console.log(error)
    }
       }


       const deletepost=async(id)=>{
        try {
            const respo=await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
            if(respo.status===200){
                setPost(
                   post.filter((p)=>p.id !== id)
                )
                console.log('deleted')
            }
        } catch (error) {
          console.log(error)
            
        }

       
      }

      const editpostFunction=async(id)=>{
        try {
          const titles=window.prompt('enter a title');
          const bodydata=window.prompt('enter a body');
           const updateddata={title:titles,body:bodydata};
           console.log('updateddata' , updateddata)
           const resp= await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`,updateddata)
           console.log('response.data',resp.data)
           
           if(resp.status === 200){
            console.log('successfull')
            setPost(prevPosts => {
              console.log(prevPosts)
              // Map over the previous posts and update the post with the given id
              return prevPosts.map(post => {
                if (post.id === id) {
                  // Return the updated post if its id matches the edited post id
                  return { ...post, ...updateddata };
                }
                // Return the original post for other posts
                return post;
              });
            });
           }
        } catch (error) {
          console.log(error)
        }
      }
const addnewPost=async(po)=>{
  try {
    

    const respo=await axios.post('https://jsonplaceholder.typicode.com/posts',po);
    // console.log(respo.status)
    if(respo.status === 201){
      console.log('respo',respo.data)
        setPost((prev)=>[respo.data,...prev])
    }

   
  } catch (error) {
    console.log(error)
  }
}
  return (
    <div >
      <h1 className='text-center '>Working with restful api's :</h1>
    <Enterpost addNewpost={addnewPost} />
         <Posts  posts={post}  deletePost={deletepost}  editPost={editpostFunction} />
    </div>
  );
}

export default App;
