import React from "react";
import { Form, Input, Button } from "antd";

import UploadImage from "../../components/UI/Upload/Upload";

const Security = () => {
  const onFinish = (value) => {
    console.log(value);
  };
  return (
    <div className="container">
      
      <div className="flex py-16 ">
        
        <div className="form grow">
        <h1 className="text-2xl font-sans my-4">Ma'lumotlarni yangilang</h1>

          <Form name="form_item_path" layout="vertical" onFinish={onFinish}>
            <label className="block mb-8" htmlFor="name">
              <p>Email</p>
              <Input
                className=" mb-4 bg-[#F3F6F9] rounded-lg p-4 border-0"
                placeholder="Email"
              />
            </label>

            <label className="block mb-8" htmlFor="password">
              <p>Hozirgi parol</p>
              <Input
                className=" mb-4 bg-[#F3F6F9] rounded-lg p-4 border-0"
                placeholder="***********"
              />
            </label>
            <div className="flex gap-x-[30px]">
              <label  htmlFor="tel" className="block mb-8 grow">
                <p>Yangi parol:</p>
                <Input
                  type="password"
                  className=" mb-4 bg-[#F3F6F9] rounded-lg p-4 border-0"
                  placeholder="***********"
                />
              </label>
              <label  htmlFor="email" className="grow block mb-8">
                <p>Parolni tashtiqlash</p>
                <Input
                  type="password"
                  className=" mb-4 bg-[#F3F6F9] rounded-lg p-4 border-0"
                  placeholder="***********"
                />
              </label>
            </div>

          <div className="flex justify-between">
          <span></span>
          <Button
              className=" pb-[11px]  pl-[23px] pr-[26px] bg-[#152540] text-white"
              htmlType="submit"
            >
              Saqlash
            </Button>
          </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Security;
