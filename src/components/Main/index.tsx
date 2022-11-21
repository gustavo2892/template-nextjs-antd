import { Button } from 'antd';

import * as S from './styles';

const Main = ({
  title = 'Template Nextjs',
  description = 'TypeScript, ReactJS, NextJS e ANTD'
}) => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Imagem de um átomo e React Avançado escrito ao lado"
    />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Um desenvolvedor de frente para uma tela com código"
    />
    <Button type="primary">ANTD</Button>
  </S.Wrapper>
);

export default Main;
