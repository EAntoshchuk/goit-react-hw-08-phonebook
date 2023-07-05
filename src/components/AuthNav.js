import { NavLink } from 'react-router-dom';

export default function AuthNav() {
  return (
    <div>
      <NavLink
        to="/register"
        exect
        style={css.link}
        activeStyle={css.activeLink}
      >
        Register
      </NavLink>
      <NavLink to="/login" exect style={css.link} activeStyle={css.activeLink}>
        Login
      </NavLink>
    </div>
  );
}
