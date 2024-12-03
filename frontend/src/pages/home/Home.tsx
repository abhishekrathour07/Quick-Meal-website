import React from 'react'
import { CarouselMain } from '../../components/CarouselMain'
import Menu from '../../components/Menu'
import LoadApp from '../../components/LoadApp'
import Footer from '../../components/Footer'


const Home: React.FC = () => {
    return (
        <div className="bg-[url('images/background.png')]">
            <CarouselMain />
            <Menu />
            <LoadApp />
            <Footer />

        </div>
    )
}

export default Home
