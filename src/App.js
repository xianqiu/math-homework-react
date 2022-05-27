import React from 'react';
import './App.css';
import { Space, Tabs, Typography, Divider } from 'antd';
import { Content } from './Content';
import { dataAdd } from './dataAdd';
import { dataMult } from './dataMult';

const { Title, Text} = Typography;
const { TabPane } = Tabs;


const MyTitle = () => (
    <Typography>
      <Title></Title>
      <Title level={2}>『小作业』 一键生成</Title>
      <Title level={4}>作业分级，一目了然</Title>
      <Divider/>
      <Space direction='vertical'>
        <Text>轻松布置作业。孩子做作业，你却在刷手机111。</Text>
        <Text>「加减法」 「乘除法」</Text>
        <Text>点击「刷新」，生成新作业</Text>
      </Space>
      <Divider/>
    </Typography>
);

class SeriesTab extends React.Component {

  render() {
    return (
    <Tabs type="card">
      <TabPane tab="加减法" key="add">
        <Content data={dataAdd} series="add"/>
      </TabPane>
      <TabPane tab="乘除法" key="mult">
        <Content data={dataMult} series="mult"/>
      </TabPane>
    </Tabs>
  );
  }
};


const App = () => (
  <div className="App">
    <Space direction='vertical' size="middle">
      <MyTitle/>
      <SeriesTab/>
    </Space>
  </div>
);


export default App;