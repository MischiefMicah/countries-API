import '../styles/Nav.css'
import moonSvg from '../styles/icons/moon-outline.svg'

function Nav() {
    return (
    <div className="Nav">
        <h2>Where in the world?</h2>
        <button><img src={moonSvg} alt="Dark Mode Icon"/> Dark Mode</button>
    </div>
)
}

export default Nav