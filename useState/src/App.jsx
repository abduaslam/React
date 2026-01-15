 import "./App.css"
 import { useState,useEffect } from "react";
 import axios  from "axios"

 function App(){
  const  [Posts,setPosts] =useState([])
  const [form,setform]=useState({title:'',body:"",id:null ,userId:1})
  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(resp => setPosts(resp.data))

  },[])

  const submit= e=>{
    e.preventDefault()
    const url =`https://jsonplaceholder.typicode.com/posts/${form.id || '' }`
    const req= form.id ?  axios.put : axios.post ;
    req(url,{title:form.title,body:form.body})
    .then(res=>{
      setPosts(form.id ? Posts.map(p.id===form.id ?res.data:p):[...Posts,res.data])
      setform({title:"",body:'',id:null});
    })
  }


  return(
<>
 <div>
<form onSubmit={submit}>
  <input type="text" value={form.title} placeholder="Title" onChange={e=>setform({...form,title:e.target.value})} />
 <textarea name="post" value={form.body} id=""  placeholder="Post" onChange={e=>setform({...form,body:e.target.value})}></textarea>
  <button>{form.id ? "update":"post"}</button>

  {
   
    Posts.map(p=>(
      <div key={p.id}>
        <h1>{p.title}</h1>
        <button onClick={()=>setform(p)}>Edit</button>
      </div>
    ))
  }
</form>

 </div>

</>

  )
 }
 export default App