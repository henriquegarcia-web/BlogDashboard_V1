/* eslint-disable @next/next/no-page-custom-font */
// --------------------------- IMPORTS --------------------------- //

import Head from 'next/head'
import * as S from '../styles/pages/tools.js'
import * as G from '../styles/globals.js'
import * as I from 'react-icons/fi'

import Header from '../components/Header/index.jsx'
import { useState } from 'react'

// --------------------- COMPONENTE PRINCIAL --------------------- //

export default function Resources() {
  return (
    <>
      <Head>
        <title>Ferramentas | frontend.lab</title>
        <meta name="description" content="Recursos" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@100;200;300;400;500;600;700;800&display=swap" rel="stylesheet" />

        <link href="https://fonts.googleapis.com/css2?family=Baloo+Paaji+2:wght@400;500;600;700;800&family=Ruda:wght@400;500;600;700;800;900&display=swap" rel="stylesheet"></link>
      </Head>

      <G.Page>

        <Header active='tools' />

        <G.PageContent>
          
          <S.ToolsContainer>
            <S.ToolsHeader>
              <h2>Soluções em desenvolvimento | <b>FELAB Tools</b></h2>
              <p>Conheça nossas ferramentas front-end com previsão de lançamento ainda em 2022</p>
            </S.ToolsHeader>
            <S.SolutionsWrapper>

              <SolutionContainer 
                iconClass='webFilter'
                icon={<I.FiSearch />}
                title='FELAB Web Filtro'
                subtitle='Ferramenta de consulta avançada baseada na web'
                details='Um sistema de pesquisa inteligente, com imensidão de conteúdos acessíveis para que você possa usar, conforme desejado. A plataforma oferece informações úteis e atualizadas, que deveram lhe ajudar no dia-a-dia desenvendo front-end.'
              />

              <SolutionContainer 
                iconClass='code'
                icon={<I.FiCode />}
                title='FELAB Code'
                subtitle='Ferramenta de consulta avançada de códigos'
                details='Um sistema de pesquisa inteligente, capaz de reconhecer sua necessidade e lhe entregar os melhores resultados em formato de código, pronto para você usar.'
              />

            </S.SolutionsWrapper>
          </S.ToolsContainer>

        </G.PageContent>
      </G.Page>
    </>
  )
}

export const SolutionContainer = ({ iconClass, icon, title, subtitle, details }) => {

  const [activeDetails, setActiveDetails] = useState(false)

  return (
    <S.SolutionContainer>
      <S.SolutionImageContainer>
        <S.SolutionImage className={iconClass}></S.SolutionImage>
      </S.SolutionImageContainer>
      <S.SolutionIcon>
        <div className='icon_container'>{icon}</div>
      </S.SolutionIcon>
      <S.SolutionTitle>{title}</S.SolutionTitle>
      <S.SolutionSubtitle>{subtitle}</S.SolutionSubtitle>
      <S.SolutionDescription>
        <b onClick={() => setActiveDetails(!activeDetails)}>+ Detalhes</b> <br />
        <div className={activeDetails ? '' : 'none'}>
          {details}
        </div>
      </S.SolutionDescription>
      <S.DescriptionCta>
        <ReactionsCtas />
      </S.DescriptionCta>
    </S.SolutionContainer>
  )
}

export const ReactionsCtas = () => {
  return (
    <>
      <S.ReactionContainer>
        <S.ReactionEmoji>💚</S.ReactionEmoji>
        <S.ReactCounter>07</S.ReactCounter>
      </S.ReactionContainer>

      <S.ReactionContainer>
        <S.ReactionEmoji>👍</S.ReactionEmoji>
        <S.ReactCounter>14</S.ReactCounter>
      </S.ReactionContainer>

      <S.ReactionContainer>
        <S.ReactionEmoji>🧪</S.ReactionEmoji>
        <S.ReactCounter>35</S.ReactCounter>
      </S.ReactionContainer>

      <S.ReactionContainer>
        <S.ReactionEmoji>🚀</S.ReactionEmoji>
        <S.ReactCounter>08</S.ReactCounter>
      </S.ReactionContainer>
    </>
  )
}
