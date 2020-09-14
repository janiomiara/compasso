import styled from 'styled-components'

export const WrapperHeard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  align-items: center;
  align-content: center;
`
export const ImgUser = styled.img`
  width: 200px;
  border-radius: 50%;
  box-shadow: 0px 0px 20px -6px rgba(0, 0, 0, 0.71);
  animation: slide-in-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

  @keyframes slide-in-top {
    0% {
      -webkit-transform: translateY(-1000px);
      transform: translateY(-1000px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      opacity: 1;
    }
  }
`

export const Wrapperuser = styled.div`
  display: flex;
  width: 400px;
  height: 500px;
  background: #afb4b9;
  border-radius: 10px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  margin: 10px;
`
export const WrapperButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`
export const ButtonUser = styled.button`
  border: none;
  color: white;
  border-radius: 10px;
  padding: 10px 15px;
  background: ${(props) => props.color};
  margin: 10px;
  transition: 400ms;
  :hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`

export const NameUser = styled.h3`
  margin-top: 10px;
  font-size: 15px;
  font-weight: bold;
  text-transform: uppercase;
`
export const SubTitle = styled.p`
  font-size: 10px;
  text-transform: uppercase;
`
export const ContainerStatus = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 100px;
  padding: 10px;
  color: #a2a2a2;
`
export const WrapperStatus = styled.div`
  display: flex;
  background: white;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  width: 80px;
  height: 100%;
  border-radius: 5px;

  div {
    color: #404040;
    font-size: 13px;
    font-weight: bold;
  }
`
