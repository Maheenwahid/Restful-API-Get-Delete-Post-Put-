import React, { useState } from 'react'

const Enterpost = (props) => {
    const {addNewpost}=props
    const [title,setTitle]=useState("")
    const [body,setBody]=useState("")
    // const [count,setCount]=useState(0)

const handleSubmit=(e)=>{
  e.preventDefault();
  const newpost={
    title:title,
    body:body,
    id:Math.random().toString(36).slice(2)
    // id:count
}
  addNewpost(newpost)
  setTitle('');
  setBody('');
//   setCount((prev)=>prev+1)
}
  return (
    <div className='mt-5 mb-5 shadow p-3 mb-5 bg-white rounded container '>
      <h2 className="container text-center  "> Add/Create  new post :</h2>
      <div>
        <form  className='container  '>
        <div class="mb-3">
         <label htmlFor="title">Title:</label>
         <input type="text" name="" id="title"  className="form-control " value={title} onChange={(e)=>setTitle(e.target.value)} />
</div>
         <div class="mb-3">
        <label htmlFor="body">Body:</label>
         <input type="text" name="" id="body" className="form-control"  value={body} onChange={(e)=>setBody(e.target.value)} />
         </div>
         <button  className='btn ' style={{backgroundColor:'#dc3545',color:'white'}} onClick={handleSubmit}>Submit</button>
        </form></div>

    </div>
  )
}

export default Enterpost
