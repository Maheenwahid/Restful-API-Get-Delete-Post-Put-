import React from 'react'
import axios from 'axios'
const Posts = (props) => {
    // console.log('this is props',props.posts[0].title)
    const {posts,deletePost,editPost}=props
    // console.log('this is posts',posts)
 
  return (
    <div>
      <h2 className='container text-center '>Postssss :</h2>
      <div className="container">
      <table className="table table-striped table-bordered  table-hover ">
        <thead>
            <th>ID</th>
            <th>TITLE</th>
            <th>BODY</th>
            <th>DELETE</th>
            <th>EDIT</th>

        </thead>
         <tbody>
         {/* <tr>
                <td>1</td>
                   <td>title</td>
                   <td>Lorem ipsum dolor sit amet.</td>
                   <td className='btn btn-danger ' onClick={()=>deletePost(1)}>DELETE</td></tr>
                   <tr>
                <td>2</td>
                   <td>title</td>
                   <td>Lorem ipsum dolor sit amet.</td>
                   <td className='btn btn-danger ' onClick={()=>deletePost(1)}>DELETE</td></tr>  */}
        
            {posts.map((post)=>{
               return(    <tr key={post.id}>
                   <td>{post.id}</td>
                   <td>{post.title}</td>
                   <td>{post.body}</td>

                   <td > <button className='btn btn-danger' onClick={()=>deletePost(post.id)}>DELETE</button> </td>
                   <td  > <button className='btn btn-secondary ' onClick={()=> editPost(post.id)}>EDIT</button></td>

                 </tr> )
            })} 
           
        </tbody>
      </table>
</div>
    </div>
  )
}

export default Posts
