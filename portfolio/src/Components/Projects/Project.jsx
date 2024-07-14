import './Project.css'
import theme from '../../assets/theme_pattern.svg';
import Services_Data from '../../assets/services_data';
import arrow_icon from '../../assets/arrow_icon.svg'

export default function Project() {
    return(
        <>
        <div id='project' className="project">
            <div className="project-title">
                <h1>My Projects</h1>
                <img src={theme} alt="" />
            </div>

            <div className="project-container">
                {Services_Data.map((service, index) => {
                    return <div key={index} className="project-format">
                        <h3>{service.s_no}</h3>
                        <h2>{service.s_name} </h2>
                        <p>{service.s_desc}</p>

                        <div className="project-readmore">
                            <p>Read More</p>
                            <img src={arrow_icon} alt="" />
                        </div>

                    </div>
                })}
            </div>
        </div>
        </>
    )
}