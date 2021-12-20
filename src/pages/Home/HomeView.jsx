import React, { useEffect, useState } from "react";
import { Input, Select, Space, Table } from "antd";
import { ModalComponent } from "../../components";
import useHomeHooks from "./HomeHooks";
import { PlusCircleFilled } from "@ant-design/icons/lib/icons";

const { Option } = Select;
const HomeView = () => {
  const { columns, data, rowSelection } = useHomeHooks();
  const [todos, setTodos] = useState(data);

  const handleSearch = (e) => {
    const search = e.target.value;
    if (search) {
      const findTodos = data.filter((todo) => {
        return (
          todo.name.toLowerCase().includes(search.toLowerCase()) ||
          todo.description.toLowerCase().includes(search.toLowerCase())
        );
      });
      setTodos(findTodos);
    } else {
      setTodos(data);
    }
  };
  const handleCategory = (done) => {
    if (done === "done") {
      const findTodos = data.filter((todo) => todo.done);
      setTodos(findTodos);
    } else if (done === "undone") {
      const findTodos = data.filter((todo) => !todo.done);
      setTodos(findTodos);
    } else {
      setTodos(data);
    }
  };
  useEffect(() => {
    setTodos(data);
  }, [data]);
  return (
    <>
      <div className="button-space">
        <Space>
          <ModalComponent
            title="Add"
            size="large"
            icon={<PlusCircleFilled />}
          />
        </Space>
      </div>
      <div className="site-layout-background">
        <Space className="button-space">
          <Select
            placeholder="select category"
            onChange={(e) => handleCategory(e)}
            allowClear
          >
            <Option value="done">Done</Option>
            <Option value="undone">Undone</Option>
          </Select>

          <Input
            placeholder="Search..."
            onChange={(e) => handleSearch(e)}
            allowClear
          />
        </Space>
        <Table
          columns={columns}
          rowKey="key"
          rowClassName={(record) => record.done && "done-text"}
          rowSelection={{
            ...rowSelection,
          }}
          dataSource={todos}
        />
      </div>
    </>
  );
};

export default HomeView;
