import React, { useState } from 'react';
import Table from './table/Table';
import Head from './table/Head';
import Body from './table/Body';
import Row from './table/Row';
import Column from './table/Column';
import Button from './button/Button';
import data from '../data/data.json';
import { getObjectKeys } from '../data/utils';
import '../App.css';

const RenderKids = (items) => getObjectKeys(items).map((key, index) => {
  return (
    <Table key={index}>
      <caption>{ key }</caption>
      <Head headers={getObjectKeys(items[key].records[0].data)} />
      <Body>
        { RenderRows(items[key].records) }
      </Body>
    </Table>
  );
}); 

const RenderColumns = (items) => getObjectKeys(items).map((key, index) => 
  <Column key={index}>
    { items[key] }
  </Column>
);

const RenderRows = (items) => {
  const [rows, setRows] = useState(Array(items.length).fill(false));
  const setRowsHelper = (index, value) => {
    const _rows = [...rows];
    _rows[index] = value;
    setRows(_rows);
  };
  
  return items.map((item, index) => (
    <React.Fragment key={index}>
      <Row>
        <Column>
          { !!getObjectKeys(item.kids).length && 
            <Button
              aria-label={`${!rows[index] ? "Expand" : "Shrink"} ID ${item.data['Identification number']}`}
              variant={`${!rows[index] ? "primary" : "secondary"}`}
              onClick={() => setRowsHelper(index, !rows[index])}
            >
              {!rows[index] ? "Expand" : "Shrink"}
            </Button>
          }
        </Column>
        { RenderColumns(item.data) }
      </Row>
      { !!getObjectKeys(item.kids).length &&
      <Row className={`${!rows[index] && "hidden"}`}>
        <Column colSpan="100%">
          { RenderKids(item.kids) }
        </Column>
      </Row> }
    </React.Fragment>
  ));
};

function HierarchyTable() {
  return (
    <div style={{overflowX: 'auto'}}>
      <Table>
        <Head headers={getObjectKeys(data[0].data)} colSpan="100%"/>
        <Body>
          { RenderRows(data) }
        </Body>
      </Table>
    </div>
  );
}

export default HierarchyTable;
