// --------------------------- IMPORTS --------------------------- //

import React from 'react'
import * as S from './style.js'

// --------------------- COMPONENTE PRINCIAL --------------------- //

const Header = () => {
  return (
    <S.Header>
      <S.Logo>frontend.lab</S.Logo>
      <S.Menu>
        <li>home</li>
        <li>tools</li>
      </S.Menu>
      <S.FelabTools>
        <button>Web Filtro</button>
        <button>Loja de Scripts</button>
      </S.FelabTools>
    </S.Header>
  )
}

export default Header