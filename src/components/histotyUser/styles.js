import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 10px;
`

export const ImgUser = styled.img`
  width: 30px;
  margin-left: 3px;
  height: 30px;
  border-radius: 50%;
  box-shadow: 0px 0px 20px -6px rgba(0, 0, 0, 0.71);
  animation: slide-in-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  transition: 400ms;
  filter: grayscale(100%);
  :hover {
    cursor: pointer;
    transform: scale(1.1);
     filter: none;
  }
`