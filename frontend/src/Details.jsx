import { useEffect, useState } from "react";
import { useNavigate, useParams, Link  } from "react-router-dom";
import './details.css';


function Details(){
const {id}=useParams();
const[book,setBook]=useState(null);
const Navigate=useNavigate();



//idee loacalstorage(home->details)

  useEffect(() => {
    if (id) {
      // جينا من button، نجيب الكتاب عن طريق API
      fetch(`${import.meta.env.VITE_API_URL}/books/${id}`)
        .then(res => res.json())
        .then(data =>{
          setBook(data);
          localStorage.setItem("detbook", JSON.stringify(data))})
    } else {
      // جينا من navbar، نجيب الكتاب الأخير المخزن
      const saved = localStorage.getItem("editbook");
      if (saved) setBook(JSON.parse(saved));
    }
  }, [id]);

if (!book) return<p>LOADING..!</p>

    return(
        <>
                
     <div className="body-details">
      <h1 className="title-det"> 🪞 مرآة الحكاية  </h1>
    =
      <div className="details-card">
    
     <h2> {book.title}</h2>
  <img src={book.img  ||"https://via.placeholder.com/150"} alt={book.title}/> 

  <div className="description">
   
    <p><strong>Author: </strong> {book.author}</p>
    <p><strong>Address: </strong> {book.address}</p>
      
    <p><strong>Birthplace: </strong> {book.birthplace}</p>
    <p><strong>Published Date: </strong> {book.publishedDate}</p>
         <p><strong>Summary: </strong> {book.summary}</p>
       
              <button className="button-det" onClick={() => Navigate('/')}>go back</button>
                  <Link to="/add">
  <button className="add-det">Add Book</button>
</Link>
  </div>
 
     
      </div>
  
     </div>
        </>
        
    );
};
export default Details;