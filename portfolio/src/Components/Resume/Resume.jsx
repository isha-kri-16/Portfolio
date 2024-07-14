import './Resume.css';
import { Document, Page } from 'react-pdf';
import resume from '../../assets/res.jpeg';


export default function Resume() {
    return (
        <>
        <h1>My Resume</h1>
        <div className="resume">
            <img src={resume} alt="" />
        </div>
        </>
        
    );
}
