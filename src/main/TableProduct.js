import * as React from 'react'
import styled from 'styled-components'

const TableContainer = styled.div`
  width: 100%;
  margin-top: 2%;
  height: 100%;
`

const Table = styled.table`
  margin-right: 5%;
  margin-left: 5%;
  width: 100%;
  height: 100%;
`

const TableProduct = ({ products }) => (
  <TableContainer>
    <table cellPadding="5%" height="100%" width="80%" align="center" border="2">
      <p font-size="200%">ТОВАРЫ</p>
      <tr>
        <th>ID Tовара</th>
        <th>Наименование</th>
        <th>Цена</th>
        <th>Кол-во</th>
      </tr>
      {products.map(product => (
        <tr>
          <td>{product.id}</td>
          <td>{product.name}</td>
          <td>{product.price}</td>
          <td>{product.count}</td>
        </tr>
      ))}
    </table>
  </TableContainer>
)

export default TableProduct
