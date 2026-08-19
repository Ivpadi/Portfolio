import './Header.css';

export default function Header() {

    return (
        <header className='header'>
            <div className='headerInner'>
                <a className='headerName' href='https://ivpadi.github.io/Portfolio/'><strong>Diego Olivera</strong></a>

                <nav className='headerLinks'>
                    <div className='headerLinks_list'>
                        <a className='navButton_text' href='#education'>Education</a >
                        <a className='navButton_text' href='#experience'>Experience</a>
                        <a className='navButton_text' href='#projects'>Projects</a>
                        <a className='navButton_text navButton_cta' href='#contact-me'>Contact Me</a>
                    </div>
                </nav>
            </div>
        </header>
    );
}
