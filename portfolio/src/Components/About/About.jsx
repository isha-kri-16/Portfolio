import './About.css'
import theme from '../../assets/theme_pattern.svg';
import profile from '../../assets/about_profile.svg';
import me from '../../assets/me2.jpg';

export default function About() {
    return(
        <>
        <div id='about' className="about">
            <div className="about-title">
                <h1>About me</h1>
                <img src={theme} alt="" />
            </div>

            <div className="about-sections">
                <div className="about-left">
                    {/* <img src={profile} alt="" /> */}
                <img src={me} alt="" />

                </div>

                <div className="about-right">
                    <div className="about-para" style={{fontSize:16}}>
                        <p >Hello! I'm Isha, a passionate Frontend Developer from Ranchi. With a B.Com degree from Marwari College, I have transitioned my career path towards web development, where I find my true passion lies. I specialize in crafting visually appealing and highly functional web applications using HTML, CSS, JavaScript, and React. </p>

                        <p>Over the years, I have honed my skills by working on various projects that showcase my ability to bring designs to life with precision and creativity. I am proficient in using CSS frameworks like Bootstrap and Tailwind CSS, which help streamline the development process and ensure responsiveness across different devices.</p>

                        <p>I am always on the lookout for new challenges and opportunities to grow. If you’re looking for a dedicated and detail-oriented frontend developer, feel free to get in touch!</p>
                    </div>

                {/* <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}} /></div>
                    <div className="about-skill"><p>JavaScript</p><hr style={{width:"70%"}} /></div>
                    <div className="about-skill"><p>React JS</p><hr style={{width:"60%"}} /></div>
                    <div className="about-skill"><p>Git/Github</p><hr style={{width:"50%"}} /></div>
                </div> */}
            </div>
        </div>

        </div>

        </>
    )
}