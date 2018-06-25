import React from 'react';
import SignDate from './SignDate';

const ITEMS = [
  {key: 'unit', label: '被检查单位'},
  {key: 'address', label: '地址'},
  {key: 'contact', label: '联系人'},
  {key: 'phone', label: '联系电话'},
  {key: 'license', label: '许可证号'},
  {key: 'officer', label: '检察人员及执法证件名称、编号'},
  {key: 'checkTime', label: '检查时间'},
  {key: 'checkAddress', label: '检查地点'},
];



export default ({data}) => {
  return <div className="container">
    <p className="title">
      食品生产经营日常监督检查要点表
    </p>

    <p className="sub-title">
      告知页
    </p>

    <div className="box">
      {
        ITEMS.map(({key, label}, index)=> (
          <div className="item" key={String(index)}>
            <div className="item-label">
              {label}：
            </div>
            <div className="item-value">{data[key]}</div>
          </div>
        ))
      }

      <div className="item">
        <div className="item-label">告知事项：</div>
      </div>

      <div style={{paddingLeft: 30}}>
        <p>我们是监督检查人员，现出示执法证件。我们依法对你（单位）进行日常监督检查，请予配合。</p>
        <p>依照法律规定，监督检查人员少于两人或者所出示的执法证件与其身份不符的，你（单位）有权拒绝检查；对于监督检查人员有下列情形之一的，你（单位）有权申请回避：（1）系当事人或当事人的近亲属；（2）与本人或本人近亲属有利害关系；（3）与当事人有其他关系，可能影响公正执法的。</p>
        <p>问：你（单位）是否申请回避？</p>
        <div className="item">
          <div className="item-label">答：</div>
          <div className="item-value">不申请</div>
        </div>
      </div>


      <div className="sign">
        <div className="sign-left">
          <div>被检查单位签字：</div>
          <SignDate />
        </div>
        <div className="sign-right">
          <div>检察人员签字：</div>
          <SignDate />
        </div>
      </div>
    </div>


    <style jsx>{`
      .container {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .title {
        display: inline-block;
        font-size: 22px;
      }

      .sub-title {
        display: inline-block;
        font-size: 16px;
      }

      .box {
        border: 1px solid black ;
        width: 90%;
        height: 820px;
        padding: 30px;
      }

      .item {
        display: flex;
        flex-direction: row;
        margin-bottom: 20px;
      }

      .item-label {
        font-weight:bold;
      }

      .item-value {
        display: inline-block;
        border-bottom: 1px solid black;
        width: 300px;
        padding-left: 10px;
      }

      .sign {
        display: flex;
        flex-direction: row;
        margin-top: 50px;
      }

      .sign-left {
        flex: 1
      }

      .sign-right {
        flex: 1
      }

      `}</style>


  </div>
}
