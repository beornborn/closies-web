//@flow
import React from 'react'
import pt from 'prop-types'
import { Link as RRLink } from 'react-router'
import LogoSrc from 'assets/images/closies_facebook_picture.png'
import { Container, Links, Link, Logo, Spacer, Footer, Facebook} from './Layout.style'

export default class Layout extends React.Component {
  static propTypes = {
    children: pt.element.isRequired
  }

  render() {
    return <Container>
      <Links>
        <RRLink to='/'>
          <Logo src={LogoSrc} />
        </RRLink>
        <Spacer />
        <Link to='/privacy'>Privacy Policy</Link>
        <Link to='/terms'>Terms of Service</Link>
      </Links>
      {this.props.children}
      <Spacer />
      <Footer>
        Closies &copy; 2017, &nbsp;
        <Facebook href='https://www.facebook.com/og.gorbunov' target='_blank'>
          Oleg Gorbunov
        </Facebook>
      </Footer>
    </Container>
  }
}
