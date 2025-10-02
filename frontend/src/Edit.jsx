import { useEffect, useState } from "react";

  import { useNavigate ,useParams} from "react-router-dom";
import './edit.css';
function Edit(){
    const Navigate = useNavigate();
    const {id}=useParams();
   const [Books, setBooks] = useState({
  title: "",
  author: "",
  img: "",
  address: "",
  birthplace: "",
  publishedDate: "",
  summary: ""
   });

   //cnx with backend
   useEffect(()=>{
    if(id){
 fetch("https://raw.githubusercontent.com/itharha/book-library-dbjson/refs/heads/main/db.json")
    .then(res=>res.json())
    .then(data=>{
         const found = data.books.find(b => b.id === id); // نجيب الكتاب بالـ id
        if (found) {
          setBooks(found);
        }
 localStorage.setItem("editbook", JSON.stringify(found))
    }
    )}

    
    else{
        const save= localStorage.getItem("editbook");
        if(save) setBooks(JSON.parse(save))
    }
     },[id]);

   //pour update les infos  using name(title,authr,summary..)
   const handleChange=(e)=>{
    const {name,value}=e.target;
    setBooks(prev=>({...prev,[name]:value}));
   };

//pour save modifictions
const handleSave=()=>{
    fetch(`${import.meta.env.VITE_API_URL}/books/${id}`,{
method:"PUT",
headers:{"Content-Type":"application/json"},
body:JSON.stringify(Books)
    })
    .then(res=>res.json())
    .then(()=> Navigate(`/details/${id}`))
    .catch(err=>console.log(err))

 };
    
    return(
     <>
    
    <div className="edit-body">
          <h1 className="title-edit">🖋️  أعد صياغة الذكرى..Believe in yourself and trust your journey.✨</h1>
     

          <div className="input-container-edit">

      <input name="title" value={Books.title} onChange={handleChange} placeholder="Title" />
      <input name="author" value={Books.author} onChange={handleChange} placeholder="Author" />
      <input name="img" value={Books.img} onChange={handleChange} placeholder="Image URL" />
      <input name="address" value={Books.address} onChange={handleChange} placeholder="Address" />
      <input name="birthplace" value={Books.birthplace} onChange={handleChange} placeholder="Birthplace" />
      <input type="date" name="publishedDate" value={Books.publishedDate} onChange={handleChange} />
      <textarea name="summary" value={Books.summary} onChange={handleChange} placeholder="Summary" />
      <button  className="save" onClick={handleSave}>Save</button>

        </div>

     </div>
     </> 
   
    )
 
}

export default Edit;