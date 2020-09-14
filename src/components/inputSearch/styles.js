import styled from 'styled-components'

export const ContainerForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 33%;
  transition: 400ms;
  margin-right: 10px;
`
export const WrapperSearch = styled.div`
  width: 100%;
  display: flex;
  align-content: center;
  justify-items: center;
  flex-direction: column;
  h3{
  margin-bottom: 10px;
  margin-left: 10px;
  }
`

export const ButtonSearch = styled.button`
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 45px;
  margin-top: 20px;
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
