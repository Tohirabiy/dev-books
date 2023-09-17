import React from "react";
import "./style.scss";
import IMG from "../../assets/images/SignIn.png";
import { Button, Checkbox, Form, Input } from "antd";
import { TextInput } from "flowbite-react";
import SignUp from "./SignUp";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../service/auth/useAuth";
import { ToastContainer, toast } from "react-toastify";

const SignIn = () => {
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log("Success:", {
      email: values.username,
      password: values.password,
    });

    let user = { email: values.username, password: values.password };
    useAuth
      .login(user)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        toast.success("Succes");
        if (res.data.status === 200 && localStorage.getItem("token")) {
          // navigate("/")
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Error:", err.message);
        navigate("/");
        localStorage.setItem("token","koouhuihuihuihuhih");
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <div className="grid grid-cols-2 items-center w-full gap-x-[81px]  mx-auto h-screen">
        <div className="item bg-[#C9AC8C] justify-end me-4 h-full flex items-center">
          <img src={IMG} className="w-[500px] h-[500px]" alt="" />
        </div>

        <div className="item">
          <ToastContainer />

          <h1>Kirish</h1>
          <p>
            Siz avval ro'yhatdan o'tganmisiz?
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
              name="username"
              rules={[
                {
                  required: true,
                  message: "Iltimos loginni kiriting!",
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
    </>
  );
};
export default SignIn;
