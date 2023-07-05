import Navigation from './Navigation';
import UserMenu from './UserMenu';
import AuthNav from './AuthNav';

export default function AppBar() {
  return (
    <header style={css.header}>
      <Navigation />
      <AuthNav />
      <UserMenu />
    </header>
  );
}