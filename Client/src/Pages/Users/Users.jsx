import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom"

import { Button, Table } from 'antd';
import 'antd/dist/antd.css';

import { getAllUsersAPI } from '../../API/user';

import './User.scss'






const Users = () => {
  let Navigate = useNavigate()

  const [allusers, setAllUsers] = useState(null)
  const [filterData, setFilterData] = useState([])

  const [tableLoading, setTableLoading] = useState(false)

  const chatWithUser = (userID) => {
    Navigate("/dashboard/chat", { state: { userID } })
  }

  const getAllUsers = async () => {
    setTableLoading(true)
    let res = await getAllUsersAPI()
    if (res.error != null) {

    } else {
      setAllUsers(res.data.data)
      setFilterData(res.data.data.filter((data) => data.role != "admin"))
    }
    setTableLoading(false)
  }
  useEffect(() => {
    getAllUsers()
  }, [])

  const column = [
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      render: (_, data) => <> <div> {data.createdAt && data?.createdAt?.substring(0, 10)} </div> </>
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (_, data) => <> <div> {`${data?.firstName} ${data?.lastName}`} </div> </>
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      render: (_, data) => <> <div> {data?.email} </div> </>
    },
    {
      title: 'Plan',
      dataIndex: 'plan',
      key: 'plan',
      render: (_, data) => <> <div> {data?.plan || "Null"} </div> </>
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      render: (_, data) => <> <div className='table_action'> <Button onClick={() => chatWithUser(data._id)}> Chat </Button> </div> </>
    },
  ]

  return (
    <div className='main_user' >

      <div className="title">
        All Users
      </div>

      <div className="table_scroll">
        <Table
          dataSource={filterData}
          columns={column}
          loading={tableLoading}
        />
      </div>
    </div>
  )
}

export default Users