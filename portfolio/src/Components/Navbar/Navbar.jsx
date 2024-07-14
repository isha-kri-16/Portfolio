import './Navbar.css'
import logo from '../../assets/logo.svg'
import { useRef, useState } from 'react'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'



export default function Navbar() {

    const [menu, setMenu] = useState("home")
    const menuRef = useRef();

    const openMenu = () => {
        menuRef.current.style.right = "0"
    }

    const closeMenu = () => {
        menuRef.current.style.right = "-350px"
    }


    return(
        <>
        <div className="navbar">
            {/* <img src={logo} alt="" /> */}
            <img src={menu_open} alt=""  onClick={openMenu}  className='nav-mob-open' />

            <ul ref={menuRef} className="nav-menu">
                <img src={menu_close} alt="" onClick={closeMenu} className='nav-mob-close'  />

                <li>  <AnchorLink  className="anchor-link" href='#home' > <p  onClick={() => setMenu("home")  } >Home</p> </AnchorLink> <p  onClick={() => setMenu("home")  } ></p>  {menu==="home" ? <img src={underline} alt=''/> : <></> }               </li>
                <li> <AnchorLink  className="anchor-link" offset={50} href='#about' > <p onClick={() => setMenu("about")  }>About</p>  </AnchorLink>        {menu==="about" ? <img src={underline} alt=''/> : <></> }             </li>
                <li> <AnchorLink  className="anchor-link" offset={50} href='#project' > <p onClick={() => setMenu("projects")  }>Skills</p></AnchorLink>   {menu==="projects" ? <img src={underline} alt=''/> : <></> }       </li>
                {/* <li> <AnchorLink  className="anchor-link" offset={50} href='#resume' > <p onClick={() => setMenu("resume")  }>Resume</p> </AnchorLink>      {menu==="resume" ? <img src={underline} alt=''/> : <></> }         </li> */}
                <li> <AnchorLink  className="anchor-link" offset={50} href='#contact' > <p onClick={() => setMenu("contact")  }>Contact</p></AnchorLink>   {menu==="contact" ? <img src={underline} alt=''/> : <></> }     </li>
            </ul>

            <div className="nav-connect"> <AnchorLink  className="anchor-link" offset={50} href='#contact' > Connect With Me </AnchorLink></div>

        </div>
        </>
    )
}