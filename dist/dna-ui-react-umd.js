(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react'), require('antd')) :
  typeof define === 'function' && define.amd ? define(['react', 'antd'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.geneUI = factory(global.React, global.antd));
}(this, (function (React, antd) { 'use strict';

  const ChindataTable = props => (React.createElement("div", null,
      React.createElement("div", { className: "head-part" },
          React.createElement("div", { className: "head-left" }, props.name),
          React.createElement(antd.Input, { className: "head-right", onPressEnter: (e) => props.search(e) })),
      React.createElement(antd.Table, { columns: props.columns, dataSource: props.dataSource, showHeader: true })));

  return ChindataTable;

})));
