import * as React from 'react'
import styled from 'styled-components'

const TableContainer = styled.div`
  width: 100%;
  margin-top: 2%;
  height: 100%;
`

const TableCheck = ({ selling }) => (
  <TableContainer>
    <table cellPadding="5%" height="100%" width="80%" align="center" border="2">
      <p font-size="200%">ПРОДАЖИ</p>
      <tr>
        <th>ID Продажи</th>
        <th>Наименование</th>
        <th>Цена за шт</th>
        <th>Проданно (шт)</th>
        <th>Стоимость</th>
      </tr>
      {selling.map(sell => (
        <tr>
          <td>{sell.id}</td>
          <td>{sell.name}</td>
          <td>{sell.price}</td>
          <td>{sell.count}</td>
          <td>{sell.cost}</td>
        </tr>
      ))}
    </table>
  </TableContainer>
)

export default TableCheck
