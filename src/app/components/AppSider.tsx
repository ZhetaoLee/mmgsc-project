import React from 'react';
import { Menu } from 'antd';
import Link from 'next/link';

export default function AppSider() {
  const menuitems = [
    { label: <Link href="/">Transactions</Link>, key: 1},
    { label: <Link href="/settings">Settings</Link>, key: 2},
    { label: <Link href="/usermanagement">User Management</Link>, key: 3},
    { label: <Link href="/atmmanagement">ATM Management</Link>, key: 4},
    { label: <Link href="/account">My account</Link>, key: 5},
  ];
  return (
    <Menu style={{
      backgroundColor: "#f1f1f1",
      left: 0,
      height: "100%",
    }}
      mode="inline"
      items={menuitems}
    >
    </Menu>
  );
}