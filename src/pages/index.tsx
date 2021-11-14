import styles from './index.less';
import { Input, Button, Space, Select } from 'antd';
import { useState } from 'react';
import LeaderModal from './LeaderModal';

const { Option } = Select;
const { TextArea } = Input;

export default function IndexPage() {
  const [all, setAll] = useState<any>([]);
  const [vis, setVis] = useState(false);
  const [showData, setShowData] = useState({ tl: [], per: [] });
  const onChange = (e:any) => {
    const data = e.target.value || '';
    const arr = data.split(' ').filter(Boolean);
    setAll([...new Set(arr)]);
  };
  const getGroup = () => {
    setVis(true);
  };
  return (
    <div className={styles.bg} style={{ height: window.innerHeight + 'px' }}>
      <div className={styles.box}>
        <h1>参加的宝宝有：</h1>
        <div>
          <TextArea
            placeholder={'输入名字并用空格隔开'}
            style={{ width: '100%' }}
            maxLength={100}
            onChange={onChange}
          />
        </div>

        <h1>
          人员分组：
          <Button type={'primary'} onClick={getGroup}>
            点击分组
          </Button>
        </h1>
        <h3>
          队长：{showData.tl.length} 队员：{showData.per.length}
        </h3>
        <div className={styles.dataBox}>
          {showData.tl.map((i: any) => (
            <div
              className={styles.team}
              style={{
                fontSize: '16px',
                width: 100 / showData.tl.length + '%',
              }}
            >
              {i}
            </div>
          ))}
          {showData.per.map((i: any) => (
            <div
              className={styles.team}
              style={{
                fontSize: '15px',
                width: 100 / showData.tl.length + '%',
              }}
            >
              {i}
            </div>
          ))}
        </div>
      </div>
      {
        <LeaderModal
          vis={vis}
          onCancel={() => {
            setVis(false);
          }}
          all={all}
          setShowData={setShowData}
        />
      }
    </div>
  );
}
