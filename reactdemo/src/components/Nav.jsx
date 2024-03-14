import instagramLogo from '../assets/instagram.png'; 
import ThemeToggle from './ThemeToggle'; 

const Nav = () => {
    const contents =
        <nav>
            <button>
                <img src={instagramLogo} alt="brand logo" />
            </button>
            <input type="text" className="search" placeholder="search" />
            <span className="nav-links">
                <button>
                    <i className="fas fa-home"/>
                </button>
                <button>
                    <i className="fas fa-comment-alt" />
                </button>
                <button>
                    <i className="fas fa-compass" />
                </button>
                <button>
                    <i className="fas fa-heart" />
                </button>
            </span>
            <ThemeToggle />
        </nav>
    return (contents);
}

export default Nav;