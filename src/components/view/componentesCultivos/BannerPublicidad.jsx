import React from 'react'

const BannerPublicidad = () => {
  return (
    <div className="col-6 col-sm-2 mx-auto">
    <ul className='px-0' style={{listStyle: "none"}}>
      <li>
        <a href = "https://www.anasac.cl/">
          <img src="https://chilemergente.files.wordpress.com/2012/11/anasac-jardin-logo.jpg?w=640" 
              alt="anasac" 
              className="mw-100"/>
        </a>
      </li>
      <li>
        <a href = "https://vegus.cl/">
          <img src="data:image/png;base64,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" 
              alt="anasac" 
              className="mw-100"/>
        </a>
      </li>
      <li className='pb-4'>
        <a href = "https://jardinorganika.cl/">
          <img src="https://jardinorganika.cl/wp-content/uploads/2019/04/logo_ORGANIKA.png" 
              alt="anasac" 
              className="mw-100"/>
        </a>
      </li>
    </ul>
  </div>   
  )
}

export default BannerPublicidad