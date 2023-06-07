import "./heroSection.css"
import { NavLink } from 'react-router-dom'

const HeroSection = () => {
  return (
    <div>
        <div className="container">

            <div className="grid grid-2-cols">
                <div className="hero-section-data">
                    <p className="intro-data">welcome to</p>
                    <h1>Walnut Kart</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum obcaecati placeat quia, aut mollitia debitis sapiente eos eum error iste accusantium quaerat dolor ea modi sunt, illum dolores! Voluptas, nesciunt!</p>
                    <NavLink><button className='btn'>shop</button></NavLink>
                </div>
                {/* Homepage Image */}
                <figure>
                    <img src="../../img/1.jpg" alt="hero" className="hero-image" />
                </figure>
            </div>
        </div>
    </div>
  )
}

export default HeroSection