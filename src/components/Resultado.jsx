import styled from "@emotion/styled"

const Contenedor = styled.div`
  color: #FFF;
  font-family: 'Lato', sans-serif;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 20px;
`

const Imagen = styled.img`
  display: block;
  width: 120px;
`

const Text = styled.p`
  font-size: 18px;
  span{
    font-weight: 700;
    
  }
`

const Precio = styled.p`
  font-size: 24px;
  span{
    font-weight: 700;

  }
`

const Resultado = ({resultado}) => {
  const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = resultado
  return (
    <Contenedor>
      <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt="imagen cripto" />
      <div>
        <Precio>El precio es de: <span>{PRICE}</span></Precio>
        <Text>Precio mas alto del día: <span>{HIGHDAY}</span></Text>
        <Text>Precio mas bajo del día: <span>{LOWDAY}</span></Text>
        <Text>Variación últimas 24 horas: <span>{CHANGEPCT24HOUR}</span></Text>
        <Text>Última actualización: <span>{LASTUPDATE}</span></Text>
      </div>
    </Contenedor>
  )
}

export default Resultado