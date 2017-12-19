import * as React from 'react'
import styled from 'styled-components'

const TableContainer = styled.div`
  width: 100%;
  margin-top: 2%;
  height: 100%;
`

const ResetVar = styled.div`
  color: white;
  width: 0;
  height: 0%;
`


let culSum = 0
let sumCost = 0

const TableABC = ({ abc }) => (
  <TableContainer>
    <ResetVar>
      {(culSum = 0)}
      {(sumCost = 0)}
    </ResetVar>
    {abc.map(abcItem => {
      sumCost += abcItem.cost
    })}
    <table cellPadding="5%" height="100%" width="80%" align="center" border="2">
      <p font-size="200%">ABC АНАЛИЗ</p>
      <tr>
        <th>ID</th>
        <th>Наименование</th>
        <th>Цена за шт</th>
        <th>Количество</th>
        <th>Стоимость</th>
        <th>Кумулятивная стоимость</th>
        <th>% Кумулятивная стоимость</th>
      </tr>
      {abc.map((abcItem, i) => (
        <tr>
          <td>{abcItem.id}</td>
          <td>{abcItem.name}</td>
          <td>{abcItem.price}</td>
          <td>{abcItem.count}</td>
          <td>{abcItem.cost}</td>
          <td>{(culSum += abcItem.cost)}</td>
          <td>{culSum / sumCost * 100}%</td>
        </tr>
      ))}
    </table>
  </TableContainer>
)

export default TableABC
