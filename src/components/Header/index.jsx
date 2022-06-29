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
        <Link href='/tools'><li className={active === 'tools' ? 'active' : ''}>FELAB Tools</li></Link>
        <Link href='/'><li className={active === 'aboutUs' ? 'active' : ''}>Sobre a plataforma</li></Link>
      </S.Menu>
      <S.FelabTools>
        {/* <Link href='/store'><button>Loja de Scripts</button></Link> */}
        <Link href='/'><button>Entrar</button></Link>
        <Link href='/'><button>Cadastre-se</button></Link>
      </S.FelabTools>
    </S.Header>
  )
}

export default Header