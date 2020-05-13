import React from 'react';

// import { Link } from 'react-router-dom';

import logo from '../../assets/logoNav.png';

import { Container, Content } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarber" />
        </nav>
        <h4>Developed by Theo Menezes</h4>
      </Content>
    </Container>
  );
}
