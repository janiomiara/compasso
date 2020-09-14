import styled from 'styled-components'

export const ContainerStareed = styled.div`
  display: flex;
  width: 400px;
  height: 500px;
  background: #c9ccb3;
  border-radius: 10px;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  margin: 5px;
`

export const WrapperStarred = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  flex-direction: column;
  align-items: center;
  padding: 5px;
  overflow-x: auto;
  flex-wrap: nowrap;
`
export const StarredTitle = styled.div`
  display: flex;
  justify-items: center;
  flex-direction: column;
  width: 100%;
  height: 50px;
  font-weight: bold;
  font-size: 15px;
  margin: 5px;
  align-items: center;
  padding: 5px;
  border-bottom: 1px solid #707070;
`

export const StarredCard = styled.div`
  display: flex;
  width: 100%;
  height: 200px;
  background: #dbe0b3;
  margin: 5px;
  border-radius: 5px;
  align-items: center;
  padding: 20px;
  justify-content: space-between;
`
export const CardTitle = styled.h3`
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
`
export const CardLiguagen = styled.p`
  font-size: 10px;
  text-transform: uppercase;
`
