// --------------------------- IMPORTS --------------------------- //

import React from 'react'
import * as S from './style.js'

// --------------------- COMPONENTE PRINCIAL --------------------- //

const Header = ({ active }) => {
  return (
    <S.Header>
      <S.Logo>frontend.lab</S.Logo>
      <S.Menu>
        <li className={active === 'home' ? 'active' : ''}>home</li>
        <li className={active === 'tools' ? 'active' : ''}>felabTools</li>
      </S.Menu>
      <S.FelabTools>
        <button>Loja de Scripts</button>
      </S.FelabTools>
    </S.Header>
  )
}

export default Header