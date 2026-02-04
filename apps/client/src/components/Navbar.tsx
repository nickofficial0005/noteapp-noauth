import { StickyNote } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <Link to="/" className="navbar-brand">
                    <StickyNote size={24} />
                    <span>NoteApp</span>
                </Link>
                <div className="navbar-links">
                    <Link to="/" className="nav-link">Home</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
