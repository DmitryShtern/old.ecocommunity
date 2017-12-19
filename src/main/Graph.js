import * as React from 'react'
import styled from 'styled-components'

const TableContainer = styled.div`
    position: absolute;
    padding-top:2%
    top: 0;
    left: 0;
    height: 90%;
    width: 100%;
    overflow: hidden;
`

const Graphic = styled.img`
  position: absolute;
  margin-left:10%;
  height: 100%;
  width: 90%;
  overflow: hidden;
`

const Graph = ({ data }) => (
  <TableContainer>
    <Graphic src={data} />
  </TableContainer>
)

export default Graph

// <MetricsGraphics
//       title="График продаж"
//       data={abc}
//       width={100}
//       height={100}
//       x_accessor=abc.name
//       y_accessor=abc.count />
