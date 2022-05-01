import { DatePicker, Space } from "antd";
import "antd/dist/antd.css";
import React, { useEffect, useState } from "react";
import { useToken } from "../App/useToken";
import { calcTime } from "./CalculateTime";
import "./Dashboards.style.scss";
type Range = {
  from: string;
  to: string;
};

type Task = {
  task_name: string;
  task_category: string;
  task_ranges: Range[];
  task_status: string;
};

async function createTask(
  taskInfo: {
    task_name: string;
    task_category: string;
    task_ranges: {};
    task_status: string;
  },
  token: string
) {
  return fetch("http://localhost:3000/task", {
    method: "POST",

    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },

    body: JSON.stringify(taskInfo),
  }).then((data) => data.json());
}
export const Dashboard = () => {
  const { getToken } = useToken();
  const token = getToken();
  const [tasks, setTasks] = useState<Task[]>([]);

  const [task_name, setTask_name] = useState("");
  const [task_category, setTask_category] = useState("");
  const [task_start, setTask_start] = useState("");
  const [task_end, setTask_end] = useState("");
  const [task_status, setTask_status] = useState("");

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

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const task = await createTask(
      {
        task_name,
        task_category,
        task_ranges: { from: task_start, to: task_end },
        task_status,
      },
      token
    );

    setTasks([tasks, ...task]);
  };

  const getRanges = (arr: Range[]) => {
    return arr.map((range, i) => (
      <ul key={i}>
        <li>{range.from}</li>
        <li>{range.to}</li>
      </ul>
    ));
  };

  const calculateTime = (arr: Range[]) => {
    let newArr = arr.map((a) =>
      Object.assign({
        from: new Date(a.from).valueOf(),
        to: new Date(a.to).valueOf(),
      })
    );
    let difference: number = 0;
    newArr.forEach((obj) => {
      difference = difference + (obj.to - obj.from);
    });

    return calcTime(difference);
  };

  const onChange = (range: any) => {
    const startDate = range[0]._d;
    const endDate = range[1]._d;
    setTask_start(startDate);
    setTask_end(endDate);
  };
  const { RangePicker } = DatePicker;
  return (
    <>
      <div>Dashb, this is a dashboard component</div>
      <DatePicker onChange={onChange} />
      <section className="tasks-container">
        {tasks ? (
          tasks.map((task, i) => (
            <div className="task" key={i}>
              <p>{task.task_name}</p>
              <p>{task.task_category}</p>
              {calculateTime(task.task_ranges)}
              <p>{task.task_status}</p>
            </div>
          ))
        ) : (
          <>Nothing</>
        )}
      </section>
      <div>
        <p>Create new task</p>
        <form action="">
          <input placeholder="Enter task name" value={task_name} onChange={(e) => setTask_name(e.target.value)}></input>
          <input
            placeholder="Enter task category"
            value={task_category}
            onChange={(e) => setTask_category(e.target.value)}
          ></input>

          <Space direction="vertical" size={12}>
            <RangePicker showTime onChange={(range) => onChange(range)} />
          </Space>
          <input
            placeholder="Enter task status"
            value={task_status}
            onChange={(e) => setTask_status(e.target.value)}
          ></input>
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
};
