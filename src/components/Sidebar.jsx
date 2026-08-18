import "./Sidebar.css";

export default function Sidebar() {

    return (
        <aside className="sidebar">
            <nav className="sidebarNav">
                <a className='navButton_text' href='#education'>Education</a >
                <a className='navButton_text' href='#experience'>Experience</a>
                <a className='navButton_text' href='#projects'>Projects</a>
                <a className='navButton_text' href='#contact-me'>Contact Me</a>
            </nav>
        </aside>
    );
}