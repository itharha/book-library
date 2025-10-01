import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
  import  './Home.css';
  import { useNavigate } from "react-router-dom";

function Home() {

  const [Books, setBooks] = useState([]);
  const[Cherche,setCherche]=useState("");
    const[Quer,setQuery]=useState("");
  const Navigate = useNavigate();

//idea relate input with search lklma lydkhlha user
function handleChange(e){
  setCherche(e.target.value);
}
//idea  of search bar
function handleSerach() {
return  Books.filter((Book)=>
Book.title.toLowerCase().includes(Cherche.toLowerCase().trim())|| Book.author.toLowerCase().includes(Cherche.toLowerCase().trim())

);
};
//idea t3 keyword
function handleKeyDown(e){
  if(e.key=="Enter"){
    setQuery(Cherche);
  }
}

// idea of .env in fetch("import.meta.env..") 
   useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/books`)
      .then((res) => res.json())
      .then((data) => setBooks(data))
      .catch((err) => console.error("not found", err));
  }, []);

  // idea of delete
     async function handleDelete(Book) {
      await fetch(`${import.meta.env.VITE_API_URL}/books/${Book.id}`, {
        method: "DELETE",
      });
      setBooks(Books.filter((b) => b.id !== Book.id));
}

// idee localstrge going to details..
const handleDet = (Book) =>{
  localStorage.setItem("detbook",JSON.stringify(Book));
  Navigate("/details");
}

// idee localstrge going to edit.
const handle = (Book) =>{
  localStorage.setItem("editbook",JSON.stringify(Book));
  Navigate("/edit");
}

  return (
  <>
      <div className="body-home">
       <h1 className="title-home"> 💫 عالم يسكنه الورق </h1>
   
 <div className="search-bar">
   
  <input className="input-search"  type="text" value={Cherche} placeholder="SEARCH FOR YOUR BOOK" onChange={ handleChange} onKeyDown={handleKeyDown}/>
  <button className="button-search" >search</button>

  </div>
  <main >
</main>



      <ul>
    <div className="container-home">
   {handleSerach().map((Book) => (
          <li key={Book.id}>

            <div className="home-card">
         <img src={Book.img} alt={Book.title}/>
            <h3>{Book.title}</h3>
            <p>{Book.author}</p>
              <Link to={`/details/${Book.id}`}>    
     <button className="button-link" >View More</button> </Link>
     <button className="button-del" onClick={() => handleDelete(Book)}>Delete</button>
  <Link to={`/edit/${Book.id}`}>
            <button className="button-edit">Edit</button>
          </Link>

            </div>
          </li> 
         ))}
     </div>
      </ul>
    </div>
  </>
  
  );
}
export default Home;


