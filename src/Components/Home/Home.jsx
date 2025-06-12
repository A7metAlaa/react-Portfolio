import avatar from "../../../src/assets/images/avatar.svg"
export default function Home() {
  return (
     <div className='vh-100 bg-success d-flex justify-content-center align-items-center '>
    <div className='container text-white '>
    
    <figure className='text-center'>

        <img src={avatar} className='w-25 text-center' alt='homepageimage'></img>
        <figcaption>
          <h1 className='text-center text-uppercase '> Start Framework </h1>

          <span>-------------</span>
          <p>Graphic Artist - Web Designer - Illustrator</p>
        </figcaption>
    </figure>
     
 
      </div>
    </div> 
  )
}
