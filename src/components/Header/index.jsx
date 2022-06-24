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
        <Link href='/'><li className={active === 'home' ? 'active' : ''}>home</li></Link>
        <Link href='/tools'><li className={active === 'tools' ? 'active' : ''}>felabTools</li></Link>
      </S.Menu>
      <S.FelabTools>
        <Link href='/store'><button>Loja de Scripts</button></Link>
      </S.FelabTools>
    </S.Header>
  )
}

export default Header