import './Header.css';

export default function Header() {

    return (
        <header className='header'>
            <div className='headerName'>Diego Olivera</div>

            <nav className='headerLinks'>
                <div className='headerLinks_list'>
                    <a className='navButton_text' href='#aboutme'>About Me</a>
                    <a className='navButton_text' href='#education'>Education</a >
                    <a className='navButton_text' href='#experience'>Experience</a>
                    <a className='navButton_text' href='#coursework'>Coursework</a>
                    <a className='navButton_text' href='#extracurriculars'>Extracurriculars</a>
                    <a className='navButton_text' href='#contact-me'>Contact Me</a>
                </div>
            </nav>

            <div className='resumeLink'>
                <a className='navButton_text' href='./resume.pdf'>Resume</a>
            </div>
        </header>
    );
}
