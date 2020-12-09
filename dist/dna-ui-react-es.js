import React from 'react';
import { Table } from 'antd';

var columns = [{
  title: '姓名',
  dataIndex: 'name',
  key: 'name'
}, {
  title: '年龄',
  dataIndex: 'age',
  key: 'age'
}, {
  title: '住址',
  dataIndex: 'address',
  key: 'address'
}];
var datasource = [{
  key: '1',
  name: '胡彦斌',
  age: 32,
  address: '西湖区湖底公园1号'
}, {
  key: '2',
  name: '胡彦祖',
  age: 42,
  address: '西湖区湖底公园1号'
}];

var ChindataTable = function ChindataTable() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Table, {
    columns: columns,
    dataSource: datasource
  }));
};

export default ChindataTable;
