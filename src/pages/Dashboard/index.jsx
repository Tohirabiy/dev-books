import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Tabs, Table, Select, Textarea } from "flowbite-react";
// import { HiAdjustments, HiClipboardList, HiUserCircle } from 'react-icons/hi';
import { Modal, Upload, Input } from "antd";
import { Button } from "flowbite-react";
import UploadImage from "./../../components/UI/Upload/Upload";

const onChange = (key) => {
  console.log(key);
};
const index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isModalOpen2, setIsModalOpen2] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const showModal2 = () => {
    setIsModalOpen2(true);
  };
  const handleOk2 = () => {
    setIsModalOpen2(false);
  };
  const handleCancel2 = () => {
    setIsModalOpen2(false);
  };

  return (
    <div className=".container">
      <Modal
        okText="saqlash"
        canselText="Bekor qilish"
        title="Kitob qo'shish"
        width={"1200px"}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okButton="danger"
      >
        <div className="flex">
          <div className="p-5">
            <UploadImage />
          </div>

          <div className="p-5 grow">
            <h1 className="text-lg">Kitob qoshish</h1>
            <Input
              type="text"
              className=" rounded-lg py-3 mb-3"
              placeholder="Kitob nomi"
            />
            <Input
              type="number"
              className=" rounded-lg py-3 mb-3"
              placeholder="sahifalar soni"
            />
            <Input
              type="date"
              className=" rounded-lg py-3 mb-3"
              placeholder="Yil"
            />
            <Input
              type="number"
              className=" rounded-lg py-3 mb-3"
              placeholder="Kitob narxi"
            />
            {/* <Input
              type="text"
              className=" rounded-lg py-3 mb-3"
              placeholder="Davlat"
            /> */}
            <Select id="countries" required>
              <option disabled selected className="py-3 mb-3">
            
                Kitob mualifini tanglang
              </option>
              <option> Canada </option>
              <option> France </option>
              <option> Germany </option>
            </Select>
            <Textarea
              id="comment"
              placeholder="Tasnifini yozing"
              required
              rows={4}
            />
          </div>
        </div>
      </Modal>
      <Modal
        title="Muallif qo'shish"
        width={"1200px"}
        open={isModalOpen2}
        onOk={handleOk2}
        onCancel={handleCancel2}
      >
        <div className="flex">
          <div className="p-5">
            <UploadImage />
          </div>

          <div className="p-5 grow">
            <label htmlFor="name">
                <p>Ismi:</p>
            <Input id="name" type="text" className=" rounded-lg py-3 mb-3"  placeholder="Ismi"/>
            </label>
<label htmlFor="lastname">
    <p>Sharifi:</p>
<Input id="lastname" type="text" className=" rounded-lg py-3 mb-3"  placeholder="Sharifi"/>

</label>
<label htmlFor="birth_of">
<p>Tug'ilgan sana</p>
<Input id="birth_of" type="date" className=" rounded-lg py-3 mb-3"  placeholder="Tug'ilgan sana"/>

</label>

<label htmlFor="death_end">
    <p>Vafot etgan sana</p>
    <Input id="death_end" type="date" className=" rounded-lg py-3 mb-3" placeholder="Vafot etgan sana" />

</label>

<label htmlFor="country">
    <p>Davlat</p>
<Input id="country" type="text" className=" rounded-lg py-3 mb-3" placeholder="Davlat"/>

</label>
            <Textarea
              id="comment"
              placeholder="BIO"
              required
              rows={4}
            />
          </div>
        </div>
      </Modal>
      <div className="flex  justify-between  py-8 border-b-2">
        <div className="text-xl font-sans flex items-center gap-x-4">
            
   <Link to="/">
   <Button gradientDouTone="purpleToBlue">
          Bosh sahifa
          </Button>
   </Link>
          <span>
          Umumiy baza
          </span>
          </div>
        <div className="flex gap-x-2  font-mono">
          <Button gradientMonochrome="success" onClick={showModal}>
            Kitob qo'shish
          </Button>
          <Button gradientMonochrome="purple" onClick={showModal2}>
            Muallif qo'shish
          </Button>
        </div>
      </div>
      <div className="my-4 font-mono">
        <Tabs.Group aria-label="Default tabs" style="default">
          <Tabs.Item className="font-mono" title="Kitoblar">
            <Table hoverable>
              <Table.Head>
                <Table.HeadCell>Nomi</Table.HeadCell>
                <Table.HeadCell>Mualllifi</Table.HeadCell>
                <Table.HeadCell>Narxi</Table.HeadCell>
                <Table.HeadCell>Sahifalar soni</Table.HeadCell>
                <Table.HeadCell>Yil</Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    Apple MacBook Pro 17"
                  </Table.Cell>
                  <Table.Cell>Sliver</Table.Cell>
                  <Table.Cell>Laptop</Table.Cell>
                  <Table.Cell>$2999</Table.Cell>
                  <Table.Cell>
                    <a
                      className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                      href="/tables"
                    >
                      <p>Batafsil</p>
                    </a>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </Tabs.Item>
          <Tabs.Item className="font-mono" title="Mualliflar">
            <Table hoverable>
              <Table.Head>
                <Table.HeadCell>Muallif</Table.HeadCell>
                <Table.HeadCell>Kitoblar soni</Table.HeadCell>
                <Table.HeadCell>Tug'ilgan sana</Table.HeadCell>
                <Table.HeadCell>BIO</Table.HeadCell>
                <Table.HeadCell>Batafsil</Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    Apple MacBook Pro 17"
                  </Table.Cell>
                  <Table.Cell>Sliver</Table.Cell>
                  <Table.Cell>Laptop</Table.Cell>
                  <Table.Cell>$2999</Table.Cell>
                  <Table.Cell>
                    <a
                      className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                      href="/tables"
                    >
                      <p>Batafsil</p>
                    </a>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </Tabs.Item>
        </Tabs.Group>
      </div>
    </div>
  );
};

export default index;
