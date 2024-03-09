import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Editbook() {
    const[name,setName]=useState("")
    const[author,setAuthor]=useState("")
    const[price,setPrice]=useState("")
    const[img,setImg]=useState("")
    const editBook=async()=>{

    }
    const updateBook=()=>{
       
    }
  return (
    <div>
        <Container>
                <Row className='my-5'>
                    <Col>
                      <h3>Edit Books</h3>
                        <input onChange={(e) => setName(e.target.value)} className='form-control my-2' type="text" placeholder='Book Name' />
                        <input  onChange={(e) => setAuthor(e.target.value)} className='form-control my-2' type="text" placeholder='Author' />
                        <input  onChange={(e) => setPrice(e.target.value)} className='form-control my-2' type="text" placeholder='Price' />
                        <input  onChange={(e) => setImg(e.target.value)} className='form-control my-2' type="text" placeholder='Image URL' />
                        <div className='text-center my-3'>
                        <button onClick={updateBook()} className='btn btn-success'>Update Book</button>
                    </div>

                    </Col>
                   
                   
                </Row>
            </Container>

    </div>
  )
}

export default Editbook