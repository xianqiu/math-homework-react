import React from 'react';
import { Table, Tag, Button, Space} from 'antd';
import { DownloadOutlined, RedoOutlined } from '@ant-design/icons';
import axios from 'axios';


class ButtonDownload extends React.Component {
  
    render() {
      
      const url = "d/math_homework_" + this.props.series + "_" + this.props.level + ".pdf";
      return <Button 
        size='small' 
        type='primary' 
        ghost 
        href={url}
        icon={<DownloadOutlined />} 
        download={"math_homework_" + this.props.series + "_" + this.props.level + ".pdf"}
        >下载</Button>
    }
  }


class ButtonRefresh extends React.Component {

  constructor(props) {
    super(props);
    this.handelClick = this.handelClick.bind(this);
    this.state = {delay: false};
  }

  handelClick() {
    // http request
    const host = "120.48.10.116"
    const url = "http://" + host + ":8888/?series=" + this.props.series + "&level=" + this.props.level;
    axios.get(url).then(response => {
        console.log(response);
        console.log("Done.");
    }).catch(err => {
        // 错误处理
        console.log(err);
        console.log("Fail.");
    }).finally(() => {
    });

    console.log("Refreshing >>");
    console.log("Series = " + this.props.series + ", Level = " + this.props.level);
    this.setState({delay: true});
    setTimeout(() => {
        this.setState({delay: false});
    }, 3000);
  }

  render() {
    return <Button 
      size='small' 
      type='primary' 
      ghost 
      icon={<RedoOutlined />}
      loading={this.state.delay}
      onClick={this.handelClick}>刷新</Button>
  }

}


class Content extends React.Component {

    render() {
      const columns = [
          {
            title: '等级',
            dataIndex: 'level',
            key: 'level',
          },
          {
            title: '题型',
            key: 'formula',
            dataIndex: 'formula',
            render: (formula, record) => formula.map(f => (
              <Tag color="blue" key={"L" + record.level + f}>
                {f}
              </Tag>
            ))
          },
          {
              title: '说明',
              dataIndex: 'comment',
              key: 'comment',
          },
          {
            title: 'PDF',
            key: 'action',
            render: (text, record) => (
              <Space>
                <ButtonDownload series={this.props.series} level={record.level}/>
                <ButtonRefresh series={this.props.series} level={record.level}/>
              </Space>
            ),
          },
        ];
      return <Table columns={columns} dataSource={this.props.data} bordered={false}/>;
    }
}


export { Content };