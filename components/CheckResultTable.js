import React from 'react';

export default () => (
  <div className="container">

    <p>省（区、市）市县（市、区）食品药品监督管理局</p>
    <p className="title">食品生产经营日常监督检查结果记录表</p>
    <p>编号：20181000011</p>

    <table style={{width: '100%'}}>
      <tbody>
      <tr>
        <td className="td1 label">名称</td>
        <td className="td2"></td>
        <td className="td3 label">地址</td>
        <td className="td4"></td>
      </tr>

      <tr>
        <td className="td1 label">联系人</td>
        <td className="td2"></td>
        <td className="td3 label">联系方式</td>
        <td className="td4"></td>
      </tr>

      <tr>
        <td className="td1 label">许可证编号</td>
        <td className="td2"></td>
        <td className="td3 label">检查次数</td>
        <td className="td4">
          本年度第&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;次检查
        </td>
      </tr>

      <tr>
        <td colSpan="4" style={{paddingBottom: 80}}>
          <p className="label">检查内容：</p>
          <p>食品药品稽查大队检查人员 根据《中华人民共和国食品安全法》及其实施条例、《食品生产经营日常监督检查管理办法》的规定，于2018年06月24日对你单位进行了监督检查。本次监督检查按照表开展，共检查了（1）项内容；其中：</p>
          <p>重点项（0）项，项目序号分别是（），发现问题（0）项，项目序号分别是（）；</p>
          <p>一般项（0）项，项目序号分别是（），发现问题（0）项，项目序号分别是（）。</p>
          <p>本次检查得分：0。</p>
        </td>
      </tr>

      <tr>
        <td colSpan="4" style={{paddingBottom: 200}}>
          <p className="label">检查结果：</p>
          <p>■符合    □基本符合    □不符合</p>
          <p className="label">检查结果：</p>
          <p>■通过    □书面限期整改    □食品生产经营者立即停止食品生产经营活动 </p>
          <p className="label">检查结果：</p>
          <span><span className="label">说明</span>（可附页）:</span>
        </td>
      </tr>
      </tbody>
    </table>



    <style jsx>{`
      .container {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .title {
        display: inline-block;
        font-size: 22px;
        margin: 20px 0;
      }

      .label {
        font-weight: bold;
      }

      .th1, .td1 {
        width: 15%;
      }

      .th2, .td2 {
        width: 35%;
      }

      .th3, .td3 {
        width: 15%;
      }

      .th4, .td4 {
        width: 35%;
      }

      table {
        border-collapse: collapse;
      }

      td {
        padding: 10px 15px;
      }

      table, td {
        border:1px solid black;
      }

      p {
        margin-top: 0;
        margin-bottom: 8px;
      }

    `}</style>
  </div>
);


