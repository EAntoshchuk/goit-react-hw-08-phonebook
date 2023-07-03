import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import css from './Layout.module.css';

export default function Layout() {
  return (
    <div>
      <header>
        <ul className={css.list}>
          <li className={css.list_item}>
            <NavLink to="/" className={css.link}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/movies" className={css.link}>
              Cotacts
            </NavLink>
          </li>
        </ul>
        <div
          style={{
            height: '40px',
            backgroundColor: 'yellow',
            marginBottom: '20px',
          }}
        ></div>
      </header>

      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
}
