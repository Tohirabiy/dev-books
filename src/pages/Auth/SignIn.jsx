import React from "react";
import "./style.scss";
import IMG from "../../assets/images/SignIn.png";
import { Link } from "react-router-dom";
import { Button, Checkbox, Form, Input } from "antd";
import { TextInput , } from "flowbite-react";
import SignUp from "./SignUp";
const onFinish = (values) => {
  console.log("Success:", values);

};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const SignIn = () => (
  <div className="grid grid-cols-2 items-center w-full gap-x-[81px]  mx-auto h-screen">
    <div className="item bg-[#C9AC8C] justify-end me-4 h-full flex items-center">
      <img src={IMG} className="w-[500px] h-[500px]" alt="" />
    </div>

    <div className="item">
      <h1>Registrasiya</h1>
      <p>
        Siz ro'yhatdan o'tgansizmi? 
        <Link className="sane" to="/signup">
          (Royhatdan otish)
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
          name={["user", "email"]}
          rules={[
            {
              type: "email",
              required: true,

              message: "Iltimos emailgizni kiriting!",
            },
          ]}
        >
          <Input
            className="py-2  dfd rounded-lg w-[328px]  mb-[17px]"
            placeholder="Login"
          />
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
            placeholder="Parol"
          />
        </Form.Item>

        <Form.Item>
          <Button
            className="bg-[#152540] btnsignin text-white  w-[328px] to block"
            htmlType="submit"
          >
            Kirish
          </Button>
        </Form.Item>
      </Form>
    </div>
  </div>
);
export default SignIn;
