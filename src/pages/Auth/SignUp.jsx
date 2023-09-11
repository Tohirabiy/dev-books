import React from "react";
import "./style.scss";
import IMG from "../../assets/images/SignUp.png";
import { Link } from "react-router-dom";
import { Button, Checkbox, Form, Input } from "antd";
import { TextInput } from "flowbite-react";
// import useAuth

const onFinish = (values) => {
  console.log("Success:", values);

};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const SignUp = () => (
  <div className="grid grid-cols-2 items-center w-full gap-x-[81px]  mx-auto h-screen">
    <div className="item bg-[#C9AC8C] justify-end me-4 h-full flex items-center">
      <img src={IMG} alt="" />
    </div>

    <div className="item">
      <h1>Ro'yhatdan otish</h1>
      <p>
        Avval ro'yhatdan o'tgan bolsangiz?
        <Link className="sane" to="/signin">
          (kiring)
        </Link>
      </p>

      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="on"
      >
        <Form.Item
          className="mb-[34px]"
          name="firsName"
          rules={[
            {
              required: true,
              message: "Iltimos ismingizni kiriting!",
            },
          ]}
        >
          <Input className="py-2 ddd w-[328px]  " placeholder="Ism" />
        </Form.Item>

        <Form.Item
          className="mb-[34px]"
          name="lastName"
          rules={[
            {
              required: true,
              message: "Iltimos Sharifingizni kiriting!",
            },
          ]}
        >
          <Input className="py-2 ddd w-[328px]  " placeholder="Sharif " />
        </Form.Item>

        <Form.Item
          className="mb-[34px]"
          name="phone"
          rules={[
            {
              required: true,
              message: "Iltimos telefon raqmingizni kiriting!",
            },
          ]}
        >
          <Input className="py-2 ddd w-[328px]  " placeholder="Telefon " />
        </Form.Item>

        <Form.Item
          className="mb-[34px]"
          name={["user", "email"]}
          rules={[
            {
              required: true,
              type: "email",

              message: "Iltimos emailgizni kiriting!",
            },
          ]}
        >
          <Input className="py-2 ddd w-[328px]  " placeholder="Email " />
        </Form.Item>

        <Form.Item
          className="mb-[34px]"
          name="password"
          rules={[
            {
              required: true,
              message: "Iltimos parolni kiriting!",
            },
          ]}
        >
          <Input.Password
            className="py-2 ddd w-[328px]  "
            placeholder="parol"
          />
        </Form.Item>

        <Form.Item>
          <Button
            className="bg-[#152540] btnsignin text-white  w-[328px]  block"
            htmlType="submit"
          >
            Ro'yhatdan o'tish
          </Button>
        </Form.Item>
      </Form>
    </div>
  </div>
);
export default SignUp;
