import './Sections.css';

export default function Experience() {

    return (
        <div className="pageContent paddingLarge">
            <div className="pageContentHeader">
                <div className="pageContentHeader-section">
                    <h2 id="experience" className="headerTitle-medium">
                        Experience
                    </h2>
                </div>
            </div>
            <div className='jobPanel'>
                <div className='jobHeader'>
                    <h4 className='jobTitle'><b>Service Desk Analyst</b> — Datacom</h4>
                    <span className='date'>April 2026 - Present</span>
                </div>
                <div className='jobLocation'></div>
                <ul className='jobResponsibilities'>
                    <li>Provided Level 1 ICT support to Department of Corrections staff across New Zealand</li>
                    <li>Diagnosed and resolved hardware, software, account and connectivity issues within SLA targets</li>
                    <li>Delivered customer focused technical support while managing incidents and escalating complex issues</li>
                </ul>
            </div>
            <div className='jobPanel'>
                <div className='jobHeader'>
                    <h4 className='jobTitle'><b>Casual Events Host</b> — Tuhura Otago Museum</h4>
                    <span className='date'>October 2024 - April 2026</span>
                </div>
                <div className='jobLocation'></div>
                <ul className='jobResponsibilities'>
                    <li>Supported the setup and operation of events, ensuring venues were prepared accurately and on schedule</li>
                    <li>Delivered professional front-of-house and bar service while handling transactions and complying with operational procedures</li>
                    <li>Collaborated with event staff to resolve issues in real time and ensure a positive visitor experience</li>
                </ul>
            </div>
            <div className='jobPanel'>
                <div className='jobHeader'>
                    <h4 className='jobTitle'><b>Casual Worker (Port Operations & Waste Collection)</b> — Onestaff</h4>
                    <span className='date'>Nov 2024 - April 2025</span>
                </div>
                <div className='jobLocation'></div>
                <ul className='jobResponsibilities'>
                    <li>Worked in time-sensitive, safety-critical environments requiring strict adherence to procedures and clear team communication</li>
                    <li>Assisted with unloading, organising, and storing commercial goods in coordination with team members</li>
                    <li>Maintained pace, accuracy, and safety standards while supporting scheduled waste and recycling collection routes</li>
                </ul>
            </div>
            <div className='jobPanel'>
                <div className='jobHeader'>
                    <h4 className='jobTitle'><b>VIP Guest Volunteer</b> — FIFA</h4>
                    <span className='date'>July 2023 - August 2023</span>
                </div>
                <div className='jobLocation'></div>
                <ul className='jobResponsibilities'>
                    <li>Supported VIP guests by providing clear guidance, hospitality services, and prompt assistance in a high-expectation environment</li>
                    <li>Maintained professional standards of cleanliness, presentation, and service within restricted access areas</li>
                    <li>Adapted quickly to changing requirements while maintaining a calm and professional demeanour</li>
                </ul>
            </div>
        </div>
    );
}
