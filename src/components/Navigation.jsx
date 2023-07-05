import NavLink from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <NavLink to="/" style={css.link} activeStyle={css.activeLink}>
        Home
      </NavLink>
      {
        <NavLink to="/contacts" style={css.link} activeStyle={css.activeLink}>
          Contacts
        </NavLink>
      }
    </nav>
  );
};

export default Navigation;
