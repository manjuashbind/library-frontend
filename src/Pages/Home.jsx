import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img2 from '../Components/images/img2.png'
import BookCard from '../Components/BookCard';
import { Link } from 'react-router-dom';
import { viewbookapi } from '../Services/AllAPI';

function Home() {
const[data,setData]=useState([])

    const viewBooks=async()=>{

        try{
            const result=await viewbookapi();
            console.log(result);
            // setData(result.data)
        }
        catch(err){
            console.log("cannot Fetch "+err);
        }
    }
    //console.log(data);
    useEffect(()=>{       
        viewBooks();
        
    },[])
   

  return (
    <div>
       <Container>
        <Row className='my-5'>
            <Col className='my-5'>
            <h1 className='text-dark'>Welcome to Online Library..</h1>
            <h5 className='text-secondary'>your gateway to a world of knowledge and information. Our online library offers a vast collection of resources to support your learning, research, and exploration endeavors.</h5>
            <button className='btn btn-success'>Get Started </button>
            </Col>
            <Col>
            <img className='img-fluid' src={img2} alt="" />
            </Col>
        </Row>
       </Container>
       <Container>
                <Row className='my-4'>
                    <div className='text-center py-3'>
                <Link to={'/add'}><button  className='btn btn-primary'><i class="fa-solid fa-plus"></i> Add Books</button></Link><br /><br />
                </div>
            <Col>
            <BookCard/>
            </Col>
            
            
        </Row>
       </Container>
    </div>
  )
}

export default Home