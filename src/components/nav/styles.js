import styled from 'styled-components'

export const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  justify-items: center;
  align-items: center;
  align-content: center;
  width: 100%;
  height: 100px;
  background-color: #acced2;
  padding: 20px;
`
export const WrapperLogo = styled.div`
  width: 33%;
  text-align: ${(props) => props.align};
  img {
    width: ${(props) => props.width};
    transition: 400ms;
    :hover {
      cursor: pointer;
      transform: scale(1.1);
    }
  }
`
