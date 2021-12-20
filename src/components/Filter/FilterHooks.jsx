import Form from "antd/lib/form/Form";
import React from "react";

function FilterHooks() {
  const [form] = Form.useForm();

  const handleSearch = () => {};

  const handleFilter = () => {};
  return {
    form,
    handleSearch,
    handleFilter,
  };
}

export default FilterHooks;
