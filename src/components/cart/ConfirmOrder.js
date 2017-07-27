import React from 'react';
import { Table } from 'semantic-ui-react';

const ConfirmOrder = () => (
  <Table definition>
    <Table.Body>
      <Table.Row>
        <Table.Cell>PERSONAL DETAILS</Table.Cell>
        <Table.Cell>JohoshaphatTse</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Email</Table.Cell>
        <Table.Cell>tsejx@foxmail.com</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>HOME ADDRESS</Table.Cell>
        <Table.Cell>San Francisco Street 5 No.101</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>DELIVERY COMPANY</Table.Cell>
        <Table.Cell>SF DELIVERY</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>DELIVERY NOTIFICATION</Table.Cell>
        <Table.Cell>952768</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>ORDER VALUE</Table.Cell>
        <Table.Cell>$1000</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
)

export default ConfirmOrder;