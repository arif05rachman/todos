import React from "react";
import { Modal, Button, Input, Form, Select } from "antd";
import ModalHooks from "./ModalHooks";

const { Option } = Select;

const ModalComponent = ({ title, size, icon, todo }) => {
  const { visible, setVisible, handleOk, handleCancel, form } = ModalHooks();
  return (
    <>
      <Button
        type="primary"
        onClick={() => setVisible(true)}
        shape="round"
        icon={icon}
        size={size}
      >
        {title}
      </Button>
      <Modal
        title={<h2 style={{ textAlign: "center" }}>{title} Todo</h2>}
        top
        visible={visible}
        onOk={() => handleOk(title)}
        onCancel={handleCancel}
        width={800}
      >
        <Form
          form={form}
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          autoComplete="off"
          initialValues={todo}
        >
          <Form.Item label="id" name="id" hidden>
            <Input />
          </Form.Item>

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
      </Modal>
    </>
  );
};

export default ModalComponent;
