import React from 'react';
import 'antd/dist/antd.css';
import {Table} from 'antd';
import './User.scss'

const { Column, ColumnGroup } = Table;

interface DataType {
  key: React.Key;
  date: string;
  name: string;
  email: string;
  plan: string;

}

const data: DataType[] = [
  {
    key: '1',
    date: '12/11/2023',
    name:'Junaid did9fj',
    email:'@pakistanwersefijd.com',
    plan:'Premium number'

    
  },
  {
    key: '1',
    date: '12/11/2023',
    name:'Junaid did9fj',
    email:'@pakistanwersefijd.com',
    plan:'Premium number'

    
  },
  {
    key: '1',
    date: '12/11/2023',
    name:'Junaid did9fj',
    email:'@pakistanwersefijd.com',
    plan:'Premium number'

    
  },
  {
    key: '1',
    date: '12/11/2023',
    name:'Junaid did9fj',
    email:'@pakistanwersefijd.com',
    plan:'Premium number'

    
  },
  {
    key: '1',
    date: '12/11/2023',
    name:'Junaid did9fj',
    email:'@pakistanwersefijd.com',
    plan:'Premium number'

    
  },
  {
    key: '1',
    date: '12/11/2023',
    name:'Junaid did9fj',
    email:'@pakistanwersefijd.com',
    plan:'Premium number'

    
  },
  {
    key: '1',
    date: '12/11/2023',
    name:'Junaid did9fj',
    email:'@pakistanwersefijd.com',
    plan:'Premium number'

    
  },
  {
    key: '1',
    date: '12/11/2023',
    name:'Junaid did9fj',
    email:'@pakistanwersefijd.com',
    plan:'Premium number'

    
  },
  {
    key: '1',
    date: '12/11/2023',
    name:'Junaid did9fj',
    email:'@pakistanwersefijd.com',
    plan:'Premium number'

    
  },
  {
    key: '1',
    date: '12/11/2023',
    name:'Junaid did9fj',
    email:'@pakistanwersefijd.com',
    plan:'Premium number'

    
  },
  {
    key: '1',
    date: '12/11/2023',
    name:'Junaid did9fj',
    email:'@pakistanwersefijd.com',
    plan:'Premium number'

    
  },
  {
    key: '1',
    date: '12/11/2023',
    name:'Junaid did9fj',
    email:'@pakistanwersefijd.com',
    plan:'Premium number'

    
  },
  {
    key: '1',
    date: '12/11/2023',
    name:'Junaid did9fj',
    email:'@pakistanwersefijd.com',
    plan:'Premium number'

    
  },
  {
    key: '1',
    date: '12/11/2023',
    name:'Junaid did9fj',
    email:'@pakistanwersefijd.com',
    plan:'Premium number'

    
  },
  {
    key: '1',
    date: '12/11/2023',
    name:'Junaid did9fj',
    email:'@pakistanwersefijd.com',
    plan:'Premium number'

    
  },
  {
    key: '1',
    date: '12/11/2023',
    name:'Junaid did9fj',
    email:'@pakistanwersefijd.com',
    plan:'Premium number'

    
  },
  {
    key: '1',
    date: '12/11/2023',
    name:'Junaid did9fj',
    email:'@pakistanwersefijd.com',
    plan:'Premium number'

    
  },
  {
    key: '1',
    date: '12/11/2023',
    name:'Junaid did9fj',
    email:'@pakistanwersefijd.com',
    plan:'Premium number'

    
  },
  {
    key: '1',
    date: '12/11/2023',
    name:'Junaid did9fj',
    email:'@pakistanwersefijd.com',
    plan:'Premium number'

    
  },
  {
    key: '1',
    date: '12/11/2023',
    name:'Junaid did9fj',
    email:'@pakistanwersefijd.com',
    plan:'Premium number'

    
  },
  {
    key: '1',
    date: '12/11/2023',
    name:'Junaid did9fj',
    email:'@pakistanwersefijd.com',
    plan:'Premium number'

    
  },
  {
    key: '1',
    date: '12/11/2023',
    name:'Junaid did9fj',
    email:'@pakistanwersefijd.com',
    plan:'Premium number'

    
  },
  {
    key: '1',
    date: '12/11/2023',
    name:'Junaid did9fj',
    email:'@pakistanwersefijd.com',
    plan:'Premium number'

    
  },
  {
    key: '1',
    date: '12/11/2023',
    name:'Junaid did9fj',
    email:'@pakistanwersefijd.com',
    plan:'Premium number'

    
  },
  {
    key: '1',
    date: '12/11/2023',
    name:'Junaid did9fj',
    email:'@pakistanwersefijd.com',
    plan:'Premium number'

    
  },
 
];

const Users = () => {
  return (
    <div className='main_user' >
 
    <div className="title">
    All Users
    </div>

<div className="table_scroll">

<Table dataSource={data}>
<ColumnGroup>
<Column title="Date" dataIndex="date" key="date" />
<Column title="Name" dataIndex="name" key="name" />
<Column title="Email" dataIndex="email" key="email" />
<Column title="Plan" dataIndex="plan" key="plan" />
</ColumnGroup>
</Table>
</div>
    </div>
  )
}

export default Users