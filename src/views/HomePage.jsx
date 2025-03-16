import React from 'react'
import NavBar from '../Components/navbar.jsx'
import PicCard from '../Components/PicCard.jsx'
import pic1 from './../assets/pic1.png'
import pic2 from './../assets/pic2.png'
import pic3 from './../assets/pic3.png'
import Footer from '../Components/footer.jsx'

export default function HomePage() {
    return (
        <>
            <NavBar />
            <h1>Home Page</h1>
            <PicCard showimg={pic1} wi={"100px"} />
            <br />
            <PicCard showimg={pic2} wi={"500px"} />
            <br />
            <PicCard showimg={pic3} wi={"200px"} />
            <br />
            <Footer />
        </>
    )
}
