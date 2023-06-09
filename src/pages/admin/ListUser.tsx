import React from 'react'
import { Space, Table, Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Link } from 'react-router-dom'
import { IUser } from '../../types/user';

interface DataType {
    key: string | number;
    id: number;
    name: string;
    email: String;
    password: number;
    role: string;
}
interface IProps {
    user: IUser[],
    onRemove: (id: number) => void
}

const ListUserPage = (props: IProps) => {
    const removeUser = (id: number) => {
        const result = confirm("bạn có muốn xóa không");
        if (result == true) {
            props.onRemove(id)
        } else {
        }
    }
    const columns: ColumnsType<DataType> = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'password',
            dataIndex: 'password',
            key: 'password',
        },
        {
            title: 'role',
            dataIndex: 'role',
            key: 'role',
        },
        {
            title: 'Action',
            key: 'action',
            render: (record) => (

                <Space size="middle">
                    <Button type="primary" style={{ backgroundColor: 'red' }} onClick={() => removeUser(record.id)}>Remove</Button>
                </Space>
            ),
        },
    ];

    const data: DataType[] = props.user.map((item: IUser) => {
        return {
            key: item.id,
            ...item
        }
    })

    return (
        <div>
            <Table columns={columns} dataSource={data} pagination={{ pageSize: 5 }} />
        </div>
    )
}

export default ListUserPage