import styled from 'styled-components'

export const ContainerForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 33%;
  transition: 400ms;
  margin-right: 10px;
`

export const ButtonSearch = styled.button`
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 45px;
  border-radius: 5px;
  background-color: ${(props) => (props.disabled ? '#8e999b' : '#0f7f94')};
  color: white;
  margin-left: 10px;
  transition: 400ms;
  :hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`
