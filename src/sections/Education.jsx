import './Sections.css';

export default function Education() {

    return (
        <div className="pageContent paddingLarge">
            <div className="pageContentHeader">
                <div className="pageContentHeader-section">
                    <h2 id="education" className="headerTitle-medium">
                        Education
                    </h2>
                </div>
            </div>
            <div className='jobPanel'>
                <div className='jobHeader'>
                    <h4 className='jobTitle'><b>University of Otago</b></h4>
                </div>
                    <div className='jobLocation'>B.A., Computer Science — Dunedin, Otago</div>
                    <p className='relCoursework'><b>GPA:</b> Cumulative - 6.1 / Final Year - 7.7</p>
                    <p className='relCoursework'><b>Relevant Coursework:</b> Algorithms and Data Structures, Web, Database and Networks, Computer Systems, Artificial Intelligence, Software Engineering, Cloud Computing Architecture, Network Management and Security</p>
            </div>
        </div>
    );
}
