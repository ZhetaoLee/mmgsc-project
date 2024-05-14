'use client';
import React from 'react';
import { Button, DatePicker, Dropdown, Input} from 'antd';
import "./page.css";
import type { MenuProps } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { useEffect, useState } from "react";
import { Table } from 'antd';

const dateFormat = 'YYYY/MM/DD';

const { RangePicker } = DatePicker;

const handleMenuClick: MenuProps['onClick'] = (e) => {
  console.log('click', e);
};

const items: MenuProps['items'] = [
  {
    label: '1st menu item',
    key: '1',
  },
  {
    label: '2nd menu item',
    key: '2',
  },
];

const menuProps = {
  items,
  onClick: handleMenuClick,
};

const columns = [
  {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
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

export default function Home() {
  const [list, setList] = useState([])
  const [filterList, setFilterList] = useState([]);

  useEffect(()=>{
    const URL = 'https://dev.smartjournal.net/um/test/api/jr/txn/atmlist/v1'
    async function getList(){
      const res = await fetch(URL)
      const json = await res.json()
      json.map((item:any, index:any) => {
        item.date = new Date(item.ts).toLocaleDateString("en-US");
        item.key = index;
      })
      setList(json)
      setFilterList(json)
    }
    getList()
  }, [])

  const handleChange = (value:any) => {
    if (value !== null){
      const start = new Date(value[0].format()).getTime();
      const end = new Date(value[1].format()).getTime();
      setList(filterList.filter((item:any) => item.ts >= start && item.ts <= end))
    } else {
      setList(filterList)
    }
  }

  return (
    <div className="App">
      <div className='header'>
        <h3 style={{display:"inline-block"}}>All Transactions</h3>
        <Button onClick={() => alert('not implemented')} size="large" style={{float:"right", marginRight: "50px", marginTop: "10px", width: "80px"}} type="default">Export</Button>
        <Button onClick={() => alert('not implemented')} size="large" style={{float:"right", marginRight: "20px", marginTop: "10px", width: "80px"}} type="default">Print </Button>
      </div>

      <div>
        <div className='block'>
          <h4>DATE</h4>
          <RangePicker onChange={handleChange}
              format={dateFormat}
          />
        </div>
        
        <div className='block'>
        <h4>ATM ID</h4>
          <Dropdown menu={menuProps} className='dropdown'>
            <Button>
                All ATMS
                <DownOutlined />
            </Button>
        </Dropdown>
        </div>

        <div className='block'>
        <h4>CUSTOMER PAN NUMBER</h4>
        <Input placeholder="Partial or full card number" style={{width:"250px"}}/>
        </div>

        <div className='block'>
        <h4>EMV CHIP ID</h4>
        <Dropdown menu={menuProps} className='dropdown'>
          <Button>
              All Applications
              <DownOutlined />
          </Button>
        </Dropdown>
        </div>

        <div className='block'>
        <h4>TRANSACTION SERIAL NUMBER</h4>
        <Input placeholder="4 digit number" style={{width:"250px"}}/>
        </div>
      </div>

    
    <Table dataSource={list} columns={columns} />
    </div>
  );
}
