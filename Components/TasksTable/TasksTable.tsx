import { Space, Table, Tag } from "antd";
import React, { useEffect, useState } from "react";
import { useToken } from "../App/useToken";
import { calculateTime } from "../Dashboard/CalculateTime";
import { Task } from "../Dashboard/Dashboard";

export const TasksTable = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const { getToken } = useToken();

  let token = getToken();
  useEffect(() => {
    const getData = async () => {
      const data = await fetch("http://localhost:3000/tasks", {
        method: "GET",
        headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      });
      let result = await data.json();
      setTasks(result.tasks);
    };

    getData();
  }, []);

  const deleteTask = async (task_id: number, token = getToken()) => {
    return fetch(`http://localhost:3000/task/${task_id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    }).then((data) => data.json());
  };
  const handleDelete = (task: any) => {
    deleteTask(task.id);
  };

  const columns = [
    {
      title: "Date",
      key: "date",
      render: (text: any, record: any) => <p>{record.created_at.substr(0, 10)}</p>,
    },
    {
      title: "Task",

      render: (text: string, record: any) => <p key={record.task_name}>{record.task_name}</p>,
    },
    {
      title: "ID",

      render: (text: string, record: any) => <a key={record.id}>{record.id}</a>,
    },

    {
      title: "Categories",
      render: (text: any, record: any) => <Tag key={record.task_category}>{record.task_category}</Tag>,
    },
    {
      title: "Status",
      render: (text: any, record: any) => <Tag key={record.task_status}>{record.task_status}</Tag>,
    },
    {
      title: "Duration",
      render: (text: any, record: any) => <p key={record.task_range}>{calculateTime(record.task_ranges)}</p>,
    },
    {
      title: "Action",
      key: "action",
      render: (text: any, record: any) => (
        <Space size="middle" key={record} onClick={() => handleDelete(record)}>
          <a>Delete</a>
        </Space>
      ),
    },
  ];
  return <Table columns={columns} dataSource={tasks} pagination={{ pageSize: 5 }} rowKey={"Id"} key={"id"} />;
};
