/*import React from 'react';
import { useEffect, useState } from "react";
import { Table } from 'antd';

const columns = [
    {
        title: 'Date',
        dataIndex: 'ts',
        key: 'ts',
    },
    {
        title: 'ATM ID',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Customer PAN',
        dataIndex: 'customerPan',
        key: 'customerPan',
    },
    {
        title: 'Description',
        dataIndex: 'description',
        key: 'description',
    },
    {
        title: 'Code',
        dataIndex: 'code',
        key: 'code',
    }
];
function AppTable(props:any) {

  const [list, setList] = useState([])

  useEffect(()=>{
    const URL = 'https://dev.smartjournal.net/um/test/api/jr/txn/atmlist/v1'
    async function getList(){
      const res = await fetch(URL)
      const json = await res.json()
      json.map((item:any, index:any) => {
        item.ts = new Date(item.ts).toLocaleDateString("en-US");
        item.key = index;
      })
      console.log(props.start);

      if (props.start !== 0 && props.end !== 0){
        console.log("check")
      }
      setList(json)
    }
    getList()
  }, [])

  return (
    <div>
        <Table dataSource={list} columns={columns} />
    </div>
  );
}

export default AppTable;*/
