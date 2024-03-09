import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { addbookapi } from '../Services/AllAPI';


function Addbook() {
    const[name,setName]=useState("")
    const[author,setAuthor]=useState("")
    const[price,setPrice]=useState("")
    const[img,setImg]=useState("")
    
    
    const addBook=async()=>{
        if(!name || !author|| !price || !img){
            alert("Enter All Fields")
        }
        else{
            const book={
                name,author,price,img
            }
            console.log(book);
            try{
                const result=await addbookapi(book)
                console.log(result);
                alert(result.data)
            }
            catch(err){
                alert("Cannot add Book")
            }
        }

    }
   

  return (
    <div>
<Container>
                <Row className='my-5'>
                    <Col>
                      <h3>Add Books</h3>
                        <input onChange={(e) => setName(e.target.value)} className='form-control my-2' type="text" placeholder='Book Name' />
                        <input  onChange={(e) => setAuthor(e.target.value)} className='form-control my-2' type="text" placeholder='Author' />
                        <input  onChange={(e) => setPrice(e.target.value)} className='form-control my-2' type="text" placeholder='Price' />
                        <input  onChange={(e) => setImg(e.target.value)} className='form-control my-2' type="text" placeholder='Image URL' />
                        <div className='text-center my-3'>
                        <button onClick={addBook} className='btn btn-success'>Add Book</button>
                    </div>

                    </Col>
                   
                   
                </Row>
            </Container>
        

    </div>
  )
}

export default Addbook