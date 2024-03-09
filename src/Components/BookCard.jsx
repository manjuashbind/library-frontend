import React from 'react'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn
  } from 'mdb-react-ui-kit';
  import { Link } from 'react-router-dom';

function BookCard() {
    const deleteBook=()=>{
      
    }
  return (
    <div>
        <MDBCard>
      <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>Card title</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
       
        <Link to={'/edit/:id'}><button className='btn btn-success'><i class="fa-solid fa-pen-to-square"></i></button></Link>
        <button onClick={deleteBook()} className='btn btn-danger'><i class="fa-solid fa-plus"></i><i class="fa-solid fa-trash"></i></button>
      </MDBCardBody>
    </MDBCard>

    </div>
  )
}

export default BookCard