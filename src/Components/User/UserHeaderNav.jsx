import React from 'react';
import { UserContext } from '../../UserContext';
import { NavLink, useNavigate } from 'react-router-dom';
import Feed from '../../Assets/Feed';
import Estatisticas from '../../Assets/Estatisticas';
import Adicionar from '../../Assets/Adicionar';
import Sair from '../../Assets/Sair';
import styles from './UserHeaderNav.module.css';

const UserHeaderNav = () => {
  const [mobile, setMobile] = React.useState(null);
  const { userLogout } = React.useContext(UserContext);
  const navigate = useNavigate();

  function handleLogout() {
    userLogout();
    navigate('/login');
  }

  return (
    <nav className={styles.nav}>
      <NavLink to="">
        <Feed />
        {mobile && 'Minhas fotos'}
      </NavLink>
      <NavLink to="estatisticas">
        <Estatisticas />
        {mobile && 'Estatísticas'}
      </NavLink>
      <NavLink to="postar">
        <Adicionar />
        {mobile && 'Adicionar fotos'}
      </NavLink>
      <button onClick={handleLogout}>
        <Sair />
        {mobile && 'Sair'}
      </button>
    </nav>
  );
};

export default UserHeaderNav;
