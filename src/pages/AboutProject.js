import React from 'react'
import temp from '../static/images/bookabout.jpg'

function AboutProject() {
  return (
    <div className="d-flex justify-content-center mb-5">
        <div className='col-md-6 about-box'>
            <h2 className="mt-3 d-flex justify-content-center">About This Project</h2>
            <div className="row d-flex justify-content-center mt-3 ms-auto me-auto ps-2 pe-2 pb-3"> 
                <div className="col-md-7" >
                        <p className="p-2" style={{ textAlign: "justify" }}>This project is for a job application for (insert company name). The aim of this project is to demonstart the developer's skills and programming knowledge regarding the React.JS framework as well to show the developer's understanding of good web and mobile design.</p>
                        <p className="p-2" style={{ textAlign: "justify" }}>Libraries used in the development of this application include Bootstrap 5 and Data Table</p>
                        <p className="p-2" style={{ textAlign: "justify" }}>You can see the whole book library by clicking on the book tab at the top of this page and then clicking on table of books link</p>


                </div>
                <div className="col-md-5 d-flex justify-content-center">
                    <img className="p-2 bookhero" src={temp} alt={temp}/>


                </div>

            </div>
        
        </div>
    </div>  
  )
}

export default AboutProject
