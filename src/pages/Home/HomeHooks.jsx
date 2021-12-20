import React, { useEffect, useState } from "react";
import dragula from "dragula";
import { useDispatch, useSelector } from "react-redux";
import { getTodos, removeTodo, updateTodo } from "../../redux/actions/todos";
import { Button, message, Modal, Space } from "antd";
import { ModalComponent } from "../../components";
import {
  EditFilled,
  ExclamationCircleOutlined,
} from "@ant-design/icons/lib/icons";

const { confirm } = Modal;
const getIndexInParent = (el) => Array.from(el.parentNode.children).indexOf(el);

const useHomeHooks = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Action",
      dataIndex: "id",
      key: "id",
      width: "10%",
      align: "center",
      render: (id, record) => {
        return (
          <Space>
            <ModalComponent
              title="Update"
              size="small"
              icon={<EditFilled />}
              todo={record}
            />
            <Button
              type="primary"
              danger
              shape="round"
              size="small"
              onClick={() => handleDelete(id)}
            >
              Delete
            </Button>
          </Space>
        );
      },
    },
  ];

  const handleDelete = (id) => {
    confirm({
      title: "Do you want to delete these todo?",
      icon: <ExclamationCircleOutlined />,
      onOk() {
        dispatch(removeTodo(id));
        message.success("todo deleted");
      },
      onCancel() {},
    });
  };

  const handleReorder = (dragIndex, draggedIndex) => {
    setData((oldState) => {
      const newState = [...oldState];
      const item = newState.splice(dragIndex, 1)[0];
      newState.splice(draggedIndex, 0, item);
      return newState;
    });
  };

  useEffect(() => {
    setData(todos);
  }, [todos]);

  useEffect(() => {
    dispatch(getTodos());
    let start;
    let end;
    const container = document.querySelector(".ant-table-tbody");
    const drake = dragula([container], {
      moves: (el) => {
        start = getIndexInParent(el);
        return true;
      },
    });

    drake.on("drop", (el) => {
      end = getIndexInParent(el);
      handleReorder(start, end);
    });
  }, []);

  const rowSelection = {
    onSelect: (record, selected) => {
      dispatch(updateTodo({ ...record, done: selected }));
    },
    hideSelectAll: true,
  };

  return {
    columns,
    data,
    rowSelection,
  };
};

export default useHomeHooks;
