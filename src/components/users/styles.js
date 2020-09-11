import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  align-items: center;
  align-content: center;
  width: 100%;
  height: calc(100vh - 100px);

  img {
    width: 350px;
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
  }
`
export const NameUser = styled.div`
  font-size: 30px;
  font-weight: bold;
  text-transform: uppercase;
`
