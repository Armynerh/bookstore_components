import { NavLink } from 'react-router-dom';
import avatar from './avatar.png';

const links = [
  { path: '/', text: 'BOOKS' },
  { path: 'categories', text: 'CATEGORIES' },
];

const Navbar = () => (
  <div className="navdiv">
    <nav className="navbar flex auto">
      <h1 className="color1">Bookstore CMS</h1>
      <ul className="flex">
        {links.map((link) => (
          <li key={link.text} className="nav-item">
            <NavLink to={link.path}>{link.text}</NavLink>
          </li>
        ))}
      </ul>
      <div className="flex avatar">
        <img src={avatar} alt="avatar" />
      </div>
    </nav>
  </div>

);
export default Navbar;
