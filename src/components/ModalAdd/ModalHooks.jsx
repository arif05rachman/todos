import React, { useState } from "react";
import { Form, message } from "antd";
import { useDispatch } from "react-redux";
import { addTodo, updateTodo } from "../../redux/actions/todos";

const ModalHooks = () => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();

  const handleOk = async (title) => {
    try {
      const values = await form.validateFields();
      if (values) {
        if (title === "Add") {
          dispatch(addTodo({ ...values, done: false }));
          message.success("todo saved");
        } else {
          dispatch(updateTodo({ ...values }));
          message.success("todo saved");
        }
        form.resetFields();
        setVisible(false);
      }
    } catch (error) {
      const { errorFields } = error;
      if (errorFields) {
        message.error("please fill all field");
      } else {
        message.error("todo not saved");
      }
    }
  };
  const handleCancel = () => {
    form.resetFields();
    setVisible(false);
  };

  return {
    visible,
    form,
    setVisible,
    handleOk,
    handleCancel,
  };
};

export default ModalHooks;
