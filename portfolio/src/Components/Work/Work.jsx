
import './Work.css';
import theme from '../../assets/theme_pattern.svg';
import mywork_data from '../../assets/mywork_data';
import arrow from '../../assets/arrow_icon.svg';

export default function Work() {
    return (
        <div id='work' className="work">
            <div className="work-title">
                <h1>My latest work</h1>
                <img src={theme} alt="" />
            </div>

            <div className="work-container">
                {mywork_data.map((work, index) => {
                    return (
                        <>
                        <div key={index} className="work-item">
                            <img src={work.w_img} alt={`Work ${index + 1}`} />
                            <div className="work-buttons">
                                <a href={work.github_link} target="_blank" rel="noopener noreferrer">
                                    <button>GitHub</button>
                                </a>
                                <a href={work.demo_link} target="_blank" rel="noopener noreferrer">
                                    <button>Demo</button>
                                </a>
                            </div>
                        </div>
                        </>
                    );
                })}
            </div>

            {/* <div className="work-showmore">
                <p>Show more</p>
                <img src={arrow} alt="" />
            </div> */}
        </div>
    );
}
