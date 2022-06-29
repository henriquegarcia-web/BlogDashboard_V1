// --------------------------- IMPORTS --------------------------- //

import React from 'react'
import * as S from './style.js'

import Link from 'next/link';

// --------------------- COMPONENTE PRINCIAL --------------------- //

const Header = ({ active }) => {
  return (
    <S.Header>
      <Link href='/'><S.Logo>frontend.lab</S.Logo></Link>
      <S.Menu>
        <Link href='/'><li className={active === 'home' ? 'active' : ''}>Início</li></Link>
        <Link href='/tools'><li className={active === 'tools' ? 'active' : ''}>Ferramentas</li></Link>
        <Link href='/about'><li className={active === 'about' ? 'active' : ''}>Sobre a plataforma</li></Link>
      </S.Menu>
      <S.FelabTools>
        {/* <Link href='/store'><button>Loja de Scripts</button></Link> */}
        <Link href='/sign-in'><button>Entrar</button></Link>
        <Link href='/sign-up'><button>Cadastre-se</button></Link>
      </S.FelabTools>
    </S.Header>
  )
}

export default Header