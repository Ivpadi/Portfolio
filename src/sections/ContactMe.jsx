import './Sections.css';

export default function ContactMe() {

    return (
        <div className="pageContent paddingLarge">
            <div className="pageContentHeader">
                <div className="pageContentHeader-section">
                    <h2 id="contact-me" className="headerTitle-medium">
                        Contact Me
                    </h2>
                </div>
            </div>
            <div className='contactBox'>
                <a className='contactPanel' href='mailto:diegozinedine027@gmail.com'>
                    <span className='contactTitle'><b>Email</b></span>
                    <span className='contactDet'>diegozinedine027@gmail.com</span>
                </a>
                
                <a className='contactPanel' href='tel:0221713281'>
                    <span className='contactTitle'><b>Phone</b></span>
                    <span className='contactDet'>022 171 3281</span>
                </a>
                <a className='contactPanel' href='https://github.com/Ivpadi'>
                    <span className='contactTitle'><b>Github</b></span>
                    <span className='contactDet'>link</span>
                </a>
            </div>
        </div>
    );
}
