//@flow
import styled from 'styled-components'
import { palette } from 'Theme'
import { Link as RRLink } from 'react-router'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: 100%;
`
export const Links = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 10px 20px 20px 20px;
  align-items: center;
  min-height: 40px;
`
export const Link = styled(RRLink)`
  color: ${palette.cerulean};
  margin-left: 20px;
  font-size: 16px;
`
export const Logo = styled.img`
  width: 40px;
  height: 40px;
`
export const Spacer = styled.div`
  display: flex;
  flex-grow: 1;
`
export const Footer = styled.div`
  padding: 20px;
  color: ${palette.boulder};
  font-size: 13px;
`
export const Facebook = styled.a`
  color: ${palette.boulder};
  &:hover {
    text-decoration: underline;
  }
`
