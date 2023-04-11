import { Button, Form, Input, Modal, Select, Table } from "antd";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const GroupP = () => {
  const groups = useSelector((state) => state.groups);
  const teachers = useSelector((state) => state.teachers);
  const [groupForm] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedGroup, setSelectedTeacher] = useState(null);
  const columns = [
    {
      title: "Group",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Max size",
      dataIndex: "size",
      key: "size",
    },
    {
      title: "Teacher",
      dataIndex: "teacher",
      key: "teacher",
    },
  ];
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const openFormModal = () => {
    showModal();
    setSelectedTeacher(null);
    groupForm.resetFields();
  };
  return (
    <>
      <Table
        title={() => (
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h1>Guruhlar jadvali</h1>
            <Button onClick={openFormModal} type="primary">
              Add group
            </Button>
          </div>
        )}
        dataSource={groups}
        columns={columns}
      />
      <Modal
        title="O'qituvchi ma'lumotlari"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText={selectedGroup ? "Save" : "Add"}
      >
        <Form
          form={groupForm}
          labelCol={{
            span: 24,
          }}
          wrapperCol={{
            span: 24,
          }}
          initialValues={{
            teacher: teachers[0].id,
          }}
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[
              {
                required: true,
                message: "Please fill this field!",
              },
            ]}
          >
            <Input placeholder="Name" />
          </Form.Item>
          <Form.Item
            label="Max size"
            name="size"
            rules={[
              {
                required: true,
                message: "Please fill this field!",
              },
            ]}
          >
            <Input placeholder="Max Size" />
          </Form.Item>
          <Form.Item
            label="Select teacher"
            name="teacher"
            rules={[
              {
                required: true,
                message: "Please fill this field!",
              },
            ]}
          >
            <Select
              options={teachers.map((t) => ({
                label: t.firstName + " " + t.lastName,
                value: t.id,
              }))}
            />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default GroupP;
