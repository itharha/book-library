import React,{useState} from 'react';
import './add.css' ;
import {Link} from 'react-router-dom';

function Add(){
const[title,setTitle]=useState("");
const[author,setAuthor]=useState("");
const[img,setImg]=useState("");
const[address,setAddress]=useState("");
const[publishedDate,setPublishedDate]=useState("");
const [summary, setSummary] = useState("");

const newBook={title,author,img,address,publishedDate,summary}

async function Handle(e){
    e.preventDefault();
    await fetch(`${import.meta.env.VITE_API_URL}/books`,{
    method: "POST",
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify(newBook)

    });
      setTitle("");
setAuthor("");
setImg("");
setAddress("");
setPublishedDate("");
setSummary("");

}



const handleImageChange = (e) => {
  const file = e.target.files[0];
  const reader = new FileReader();
  reader.onloadend = () => {
    setImg(reader.result); // هنا النتيجة هي Base64 string
  };
  if (file) {
    reader.readAsDataURL(file); // نحولو لـ Base64
  }
};

return(
<form  className="add-body" onSubmit={Handle}>
       <h1 className="title-home">  🕊️ دع كلماتك تعيش</h1>
  <div  className="input-container">
  <input
        type="text"
        placeholder="Book Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <input
        type="text"
        placeholder="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <input
        type="text"
        placeholder="Published Date"
        value={publishedDate}
        onChange={(e) => setPublishedDate(e.target.value)}
      />
      <textarea
        placeholder="Summary"
        value={summary}
        onChange={(e) => setSummary(e.target.value)}
      />
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <button className='button-add' type="submit">Add Book</button>
  </div>
        


</form>


)
};
export default Add;