//@flow
import React from 'react'
import LogoSrc from 'assets/images/closies_facebook_picture.png'
import { Container, Logo, Description, Email, SubDescription } from './Home.style'

export default class Home extends React.Component {
  render() {
    return <Container>
      <Logo src={LogoSrc} />
      <Description>
        Closies - social network for close friends and family
      </Description>
      <SubDescription>
        <Email href='mailto:beornborn@gmail.com'>Ask</Email>
        to learn more
      </SubDescription>
    </Container>
  }
}
