import styles from './index.less';
import { Input, Button, Modal, Select } from 'antd';
import { useState } from 'react';
import _ from 'lodash';

const { Option } = Select;
const { TextArea } = Input;

export default function IndexPage({ all = [], vis, onCancel, setShowData }: any) {
  const [tl, setTl] = useState('');
  const handleChange = (value: any) => {
    setTl(value);
  };
  const fz = () => {
    const getNoTls=all.filter((i:any)=>!tl.includes(i))
    const newData = _.shuffle(getNoTls);

    setShowData({
      tl:tl,
      per:newData
    })
    onCancel();
  };
  return (
    <Modal
      visible={vis}
      onCancel={onCancel}
      title={'选择我们的组长'}
      okText={'开始分组'}
      onOk={fz}
      maskClosable={false}
    >
      <Select
        mode="multiple"
        allowClear
        style={{ width: '100%' }}
        placeholder="多选"
        onChange={handleChange}
      >
        {all.map((i: any) => (
          <Option key={i} value={i}>
            {i}
          </Option>
        ))}
      </Select>
    </Modal>
  );
}
