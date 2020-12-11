import * as React from 'react'
import { Table, Input } from 'antd'

interface columnObj {
  key: string,
  title: string,
  dataIndex: string
}

interface dataSourceObj {
  key: string,
  name: string,
  address: string,
  age: number
}

interface Props {
  columns: any[],
  dataSource: any[],
  search: Function,
  name?: string | React.ReactFragment
}

const ChindataTable: React.FunctionComponent<Props> = props => (
  <div>
    <div className="head-part">
      <div className="head-left">{props.name}</div>
      <Input className="head-right" onPressEnter={(e) => props.search(e)}/>
    </div>
    <Table columns={props.columns} dataSource={props.dataSource} showHeader={true} />
  </div>
)

export default ChindataTable