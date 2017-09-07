//@flow
import styled from 'styled-components'
import { palette } from 'Theme'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  overflow: hidden;
`
export const Logo = styled.img`
  width: 400px;
  height: 400px;
  @media (max-width: 500px) {
    width: 200px;
    height: 200px;
  }
`
export const Description = styled.div`
  font-size: 25px;
  font-style: italic;
  margin: 0 20px;
  text-align: center;
  @media (max-width: 500px) {
    font-size: 20px;
  }
`
export const SubDescription = styled.div`
  text-align: center;
  margin-top: 50px;
  font-size: 20px;
  font-style: italic;
  @media (max-width: 500px) {
    margin-top: 30px;
    font-size: 15px;
  }
`
export const Email = styled.a`
  color: ${palette.cerulean};
  font-style: normal;
  font-size: 35px;
  margin-right: 15px;
  @media (max-width: 500px) {
    font-size: 25px;
  }
`
