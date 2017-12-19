import React from 'react'
import Header from './Header'
import styled from 'styled-components'
import TableProduct from './TableProduct'
import TableCheck from './TableCheck'
import TableABC from './TableABC'
import Graph from './Graph'

const Screen = styled.div`
  width: auto;
  height: auto;
`

const Container = ({
  image,
  products,
  selling,
  abc,
  count_abc,
  isOpenTableProduct,
  isOpenTableCheck,
  isOpenTableABC,
  isOpenGraph,
  ...ocProps
}) => (
  <Screen>
    <Header {...ocProps} />
    {isOpenTableProduct && <TableProduct products={products} />}
    {isOpenTableCheck && <TableCheck selling={selling} />}
    {isOpenTableABC && <TableABC abc={abc} />}
    {isOpenGraph && <Graph data={image}/>}
  </Screen>
)

export default Container
