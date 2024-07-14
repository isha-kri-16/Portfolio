import './Skill.css';
import theme from '../../assets/theme_pattern.svg';
import html from '../../assets/html.png';
import css from '../../assets/css-3.png';
import bootstrap from '../../assets/bootstrap.png';
import react from '../../assets/react.png';
import tailwind from '../../assets/tailwind-css.png';
import js from '../../assets/js.png'


export default function Skill() {
    return(
        <>
        <div id='project' className="project">
            <div className="project-title">
                <h1>My Skills</h1>
                {/* <img src={theme} alt="" /> */}
            </div>

            <div className="icons-img">
                <img src={html} alt=""  className='html'/>
                <img src={css} alt=""  className='css'/>
                <img src={js} alt="" />
                <img src={react} alt="" />
                <img src={bootstrap} alt="" className='boot'/>
                <img src={tailwind} alt=""  className='tailwind' />
            </div>
        </div>
        </>
    )
}