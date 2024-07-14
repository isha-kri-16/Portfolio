import './Hero.css'
// import profile from '../assets/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import me from '../assets/me2.jpg'




export default function Hero() {
    return(
        <>
        <div id='hero' className="hero">
            <img src={me} alt="" className='me' />
            {/* <img src={profile} alt="" /> */}
            <h1> <span>I'm Isha,</span> Frontend Developer based in India.</h1>
            <p>Hi, I'm Isha, a passionate Frontend Developer from Ranchi. I specialize in creating stunning, responsive web applications using HTML, CSS, JavaScript, and React. With a keen eye for detail and a dedication to excellence, I transform ideas into visually captivating and functional digital experiences.
            </p>

            <div className="hero-action">
                <div className="hero-connect"><AnchorLink  className="anchor-link" offset={50} href='#contact' > Connect With Me </AnchorLink></div>
                {/* <div className="hero-resume"> <AnchorLink className='anchor-link' offset={50} href='#resume'>My resume</AnchorLink></div> */}
            </div>
        </div>
        </>
    )
}