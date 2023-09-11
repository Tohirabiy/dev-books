import React from "react";
import { Switch } from "antd";


import { Button , Select } from "flowbite-react";

const Setting = () => {
  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };
  return (
    <div className="container ">
      <div className="wrapper">
        <h1 className="font-sans my-8 text-2xl">Sozlanmalar</h1>
        <Select className="font-sans py-4" id="countries" required>
          <option>Uzb</option>
          <option>Eng</option>
          <option>Rus</option>
          <option>Germany</option>
        </Select>
        <div className="py-3">
          <p className="font-sans my-2"> Mavzu</p>
          <Switch defaultChecked onChange={onChange} />
        </div>

        <div className="flex justify-between">
            <span></span>
        <Button
              className=" font-sans bg-[#152540] text-white"
              htmlType="submit"
            >
              Saqlash
            </Button>
        </div>
      </div>
    </div>
  );
};

export default Setting;
