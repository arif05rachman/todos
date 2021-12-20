import React from "react";
import { Form, Input, Select } from "antd";
import filterHooks from "./FilterHooks";

const { Option } = Select;

function Filter() {
  const { form, handleFilter, handleSearch } = filterHooks();
  return (
    <div>
      <Form
        form={form}
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        autoComplete="off"
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <Input placeholder="Name" />
        </Form.Item>
        <Form.Item
          label="Category"
          name="category"
          rules={[{ required: true, message: "Please input your category!" }]}
        >
          <Select placeholder="Select category">
            <Option value="indor">Indor</Option>
            <Option value="outdor">Outdor</Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="Description"
          name="description"
          rules={[
            { required: true, message: "Please input your description!" },
          ]}
        >
          <Input.TextArea placeholder="Description" />
        </Form.Item>
      </Form>
    </div>
  );
}

export default Filter;
