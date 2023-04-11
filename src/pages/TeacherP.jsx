import React, { useState } from "react";
import { Button, Form, Input, Modal, Select, Table, Tag } from "antd";
import {
  ExclamationCircleFilled,
  DeleteOutlined,
  EditOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import {
  addTeacherAction,
  deleteTeacherAction,
  editTeacherAction,
} from "../redux/actions/teacherAction";
// import { FILTERALLTEACHERS } from "../redux/types";
// import { FILTERFIELDTEACHER } from "./../redux/types";

const { confirm } = Modal;

const TeacherP = () => {
  const columns = [
    {
      title: "FirstName",
      key: "firstName",
      dataIndex: "firstName",
    },
    {
      title: "LastName",
      key: "lastName",
      dataIndex: "lastName",
    },
    {
      title: "Field",
      key: "field",
      dataIndex: "field",
    },
    {
      title: "Address",
      key: "address",
      dataIndex: "address",
    },
    {
      title: "Groups",
      key: "groups",
      render: (row) => (
        <>
          {row.groups.map((el, i) => (
            <Tag key={i}>{el}</Tag>
          ))}
        </>
      ),
    },
    {
      width: 200,
      title: "Actions",
      render: (row) => (
        <>
          <Button
            type="primary"
            style={{ marginRight: "10px" }}
            onClick={() => editTeacher(row.id)}
          >
            <EditOutlined />
          </Button>
          <Button type="primary" danger onClick={() => deleteTeacher(row.id)}>
            <DeleteOutlined />
          </Button>
        </>
      ),
    },
  ];
  const { teachers } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [teacherForm] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    if (selectedTeacher) {
      teacherForm.validateFields().then((values) => {
        dispatch(editTeacherAction({ id: selectedTeacher, ...values }));
      });
    } else {
      teacherForm.validateFields().then((values) => {
        dispatch(addTeacherAction(values));
      });
    }
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const openFormModal = () => {
    showModal();
    setSelectedTeacher(null);
    teacherForm.resetFields();
  };
  const deleteTeacher = (id) => {
    confirm({
      title: "Do you Want to delete this teacher?",
      icon: <ExclamationCircleFilled />,
      onOk() {
        dispatch(deleteTeacherAction(id));
      },
    });
  };
  const editTeacher = (id) => {
    showModal();
    setSelectedTeacher(id);
    let teacher = teachers.find((t) => t.id === id);
    teacherForm.setFieldsValue(teacher);
  };
  // onChange={() => filterFieldTecher(selectedTeacher)}
  // const filterFieldTecher = (id) => {
  //   let findedTeachers = teachers.find((t) => t.id === id);
  //   console.log(findedTeachers);
  //   // dispatch({ type: FILTERFIELDTEACHER, data: teachers });
  // };
  // const allTeachers = () => {
  //   dispatch({ type: FILTERALLTEACHERS });
  // };
  // onClick={allTeachers()}
  return (
    <>
      <Table
        title={() => (
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h1>O'qituvchilar jadvali</h1>
            <Button type="primary">
              <UserAddOutlined /> All teacher
            </Button>
            <Select>
              <Select.Option value="AngularJs">AngularJs</Select.Option>
              <Select.Option value="ReactJs">ReactJs</Select.Option>
              <Select.Option value="VueJs">VueJs</Select.Option>
            </Select>
            <Button onClick={openFormModal} type="primary">
              <UserAddOutlined /> Add teacher
            </Button>
          </div>
        )}
        dataSource={teachers}
        columns={columns}
      />
      <Modal
        title="O'qituvchi ma'lumotlari"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText={selectedTeacher ? "Save" : "Add"}
      >
        <Form
          form={teacherForm}
          labelCol={{
            span: 24,
          }}
          wrapperCol={{
            span: 24,
          }}
          initialValues={{
            field: "ReactJs",
          }}
        >
          <Form.Item
            label="FirstName"
            name="firstName"
            rules={[
              {
                required: true,
                message: "Please fill this field!",
              },
            ]}
          >
            <Input placeholder="FirstName" />
          </Form.Item>
          <Form.Item
            label="LastName"
            name="lastName"
            rules={[
              {
                required: true,
                message: "Please fill this field!",
              },
            ]}
          >
            <Input placeholder="LastName" />
          </Form.Item>
          <Form.Item
            label="Address"
            name="address"
            rules={[
              {
                required: true,
                message: "Please fill this field!",
              },
            ]}
          >
            <Input placeholder="Address" />
          </Form.Item>
          <Form.Item
            label="Select field"
            name="field"
            rules={[
              {
                required: true,
                message: "Please fill this field!",
              },
            ]}
          >
            <Select>
              <Select.Option value="AngularJs">AngularJs</Select.Option>
              <Select.Option value="ReactJs">ReactJs</Select.Option>
              <Select.Option value="VueJs">VueJs</Select.Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default TeacherP;
