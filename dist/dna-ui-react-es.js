import { createElement } from 'react';
import { Input, Table } from 'antd';

const ChindataTable = props => (createElement("div", null,
    createElement("div", { className: "head-part" },
        createElement("div", { className: "head-left" }, props.name),
        createElement(Input, { className: "head-right", onPressEnter: (e) => props.search(e) })),
    createElement(Table, { columns: props.columns, dataSource: props.dataSource, showHeader: true })));

export default ChindataTable;
