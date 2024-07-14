import './Contact.css'
import theme from '../../assets/theme_pattern.svg';
import mail from '../../assets/mail_icon.svg'
import location from '../../assets/location_icon.svg'
import call from '../../assets/call_icon.svg'



export default function () {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "17e44223-d79c-4d7d-917b-e4bec401840d");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            alert(res.message);
        }
    };



    return (
        <>
            <div id='contact' className="contact">
                <div className="contact-title">
                    <h1>Get in touch</h1>
                    <img src={theme} alt="" />
                </div>
                <div className="contact-section">
                    <div className="contact-left">
                        <h1>Let's talk</h1>
                        <p>I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>

                        <div className="contact-details">
                            <div className="contact-detail">
                                <img src={mail} alt="" />
                                <p>kumariisha174@gmail.com</p>
                            </div>
                            <div className="contact-detail">
                                <img src={call} alt="" />
                                <p>+6202394636</p>
                            </div>
                            <div className="contact-detail">
                                <img src={location} alt="" />
                                <p>Ranchi</p>
                            </div>
                        </div>
                    </div>

                    <form onSubmit={onSubmit} className="contact-right">
                        <label htmlFor="">Your Name</label>
                        <input type="text" placeholder='Enter your name' name='name' />

                        <label htmlFor="">Your Email</label>
                        <input type="email" placeholder='Enter your email' name='email' />

                        <label htmlFor="">Write your message here</label>
                        <textarea name="message" rows="8" placeholder='Enter your message'></textarea>

                        <button type='submit' className="contact-submit">Submit now</button>
                    </form>
                </div>
            </div>
        </>
    )
}