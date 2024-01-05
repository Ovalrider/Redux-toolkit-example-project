import classes from './Header.module.css';
import {useSelector, useDispatch} from "react-redux"
import { authActions } from '../store/authSlice';

function Header (){
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
  const dispatch = useDispatch();
  function handleLogout(){
    dispatch(authActions.logout())
  }
  const navHtml = <nav>
  <ul>
    <li>
      <a href='/'>My Products</a>
    </li>
    <li>
      <a href='/'>My Sales</a>
    </li>
    <li>
      <button onClick={handleLogout}>Logout</button>
    </li>
  </ul>
</nav>
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuthenticated ? navHtml : null}
    </header>
  );
};

export default Header;
