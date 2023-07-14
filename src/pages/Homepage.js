import React , {useState} from 'react'
import bookhero from '../static/images/bookshero.jpg'
import books from '../books.json'
import AboutProject from './AboutProject';
import Footer from './Footer';

function Homepage() {
  const [goodbooks] = useState(books);

  return (

    <div>
      <div className="bookshop-container">
        <img className="bookshero mt-5" src={bookhero} alt="bookhero" />
        <div className="bookshop-title">
          <h1 className="titleborder d-flex justify-content-center p-3" style={{fontSize:"4rem"}}>Zakky's Book Library</h1>
        </div>
      </div>
      <div className="mt-3">
      <div className="row  d-flex justify-content-around">
        <h2 className="d-flex justify-content-center mt-3">Some Of Our Books</h2>
      
        {goodbooks.slice(0, 3).map((goodbook) => {
          return (
            <div className="col-md-3 mt-3 pb-5">
            <div class="card_border">
             <img className="card-image" src={goodbook.imageLink} alt="Avatar"/>
               <div className="container mt-3 mb-3">
                <h5 className="d-flex justify-content-center" >Author: {goodbook.author}</h5>
                <h5 className="d-flex justify-content-center">Title: {goodbook.title}</h5>

            </div>
          </div>
          </div>
          )})}

                  

                            
           
          </div>

      </div>
      <AboutProject/>
      <Footer/>
    </div>
  )
}

export default Homepage
