import React,{useEffect,useState} from 'react'
import axios from 'axios'
import '../Style/book.css'
const Shop = () => {

    async function getBook(){
        let response= await axios.get("http://localhost:4200/books")
        bookdata = response.data.map(

            x=>{
                let url="http://localhost:8090/"+x.image;
                return (
                    <div className="card" key={x}>
                        <div className='card-body'><img src={url} /></div>
                        <div className="card-header" style={{fontSize:"12px",fontWeight:"bolder"}}>{x.name} </div>
                        <div className="card-footer"><span style={{color:"darkgreen"}}>{x.author}</span>  &nbsp;<span style={{color:"red"}}>Rs:{x.price}</span>  </div>
                    </div>
                )
            }
        )
        setData(bookdata)
    }

    useEffect(getBook,[])

    let [bookdata,setData] = useState("")
    
    return (
        <div className="container">
            {bookdata}
        </div>
    );
}

export default Shop;