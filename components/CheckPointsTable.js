import React from 'react';

const data = [{
  id: 1,
  name: '1．生产环境条件',
  subcnt: 7,
  subdata: [{
    subid: 1,
    subname: '厂区无扬尘、无积水，厂区、车间卫生整洁。',
    iskey: false,
    ischeck: false,
    isproblem: false
  }, {
    subid: 2,
    subname: '厂区、车间与有毒、有害场所及其他污染源保持规定的距离。',
    iskey: true,
    ischeck: false,
    isproblem: false
  }, {
    subid: 3,
    subname: '卫生间应保持清洁，应设置洗手设施，未与食品生产、包装或贮存等区域直接连通。',
    iskey: true,
    ischeck: false,
    isproblem: false
  }, {
    subid: 4,
    subname: '有更衣、洗手、干手、消毒设备、设施，满足正常使用。',
    iskey: false,
    ischeck: false,
    isproblem: false
  }, {
    subid: 5,
    subname: '通风、防尘、照明、存放垃圾和废弃物等设备、设施正常运行。',
    iskey: false,
    ischeck: false,
    isproblem: false
  }, {
    subid: 6,
    subname: '车间内使用的洗涤剂、消毒剂等化学品应与原料、半成品、成品、包装材料等分隔放置，并有相应的使用记录。',
    iskey: false,
    ischeck: false,
    isproblem: false
  }, {
    subid: 7,
    subname: '定期检查防鼠、防蝇、防虫害装置的使用情况并有相应检查记录，生产场所无虫害迹象。',
    iskey: false,
    ischeck: false,
    isproblem: false
  }]
}, {
  id: 2,
  name: '2．进货查验结果\r\n注：①检查原辅料仓库；②原辅料品种随机抽查，不足2种的全部检查。',
  subcnt: 3,
  subdata: [{
    subid: 1,
    subname: '查验食品原辅料、食品添加剂、食品相关产品供货者的许可证、产品合格证明文件；供货者无法提供有效合格证明文件的食品原料，有检验记录。',
    iskey: true,
    ischeck: false,
    isproblem: false
  }, {
    subid: 2,
    subname: '进货查验记录及证明材料真实、完整，记录和凭证保存期限不少于产品保质期期满后六个月，没有明确保质期的，保存期限不少于二年。',
    iskey: true,
    ischeck: false,
    isproblem: false
  }, {
    subid: 3,
    subname: '建立和保存食品原辅料、食品添加剂、食品相关产品的贮存、保管记录和领用出库记录。',
    iskey: false,
    ischeck: false,
    isproblem: false
  }]
}, {
  id: 3,
  name: '3．生产过程控制注：在成品库至少抽取2批次产品，按生产日期或批号追溯生产过程记录及控制的全部检查，有专供特定人群的产品至少抽查1个产品。',
  subcnt: 15,
  subdata: [{
    subid: 1,
    subname: '有食品安全自查制度文件，定期对食品安全状况进行自查并记录和处置。',
    iskey: false,
    ischeck: false,
    isproblem: false
  }, {
    subid: 2,
    subname: '使用的原辅料、食品添加剂、食品相关产品的品种与索证索票、进货查验记录内容一致。',
    iskey: true,
    ischeck: false,
    isproblem: false
  }, {
    subid: 3,
    subname: '建立和保存生产投料记录，包括投料种类、品名、生产日期或批号、使用数量等。',
    iskey: true,
    ischeck: false,
    isproblem: false
  }, {
    subid: 4,
    subname: '未发现使用非食品原料、回收食品、食品添加剂以外的化学物质、超过保质期的食品原料和食品添加剂生产食品。',
    iskey: true,
    ischeck: false,
    isproblem: false
  }, {
    subid: 5,
    subname: '未发现超范围、超限量使用食品添加剂的情况。',
    iskey: true,
    ischeck: false,
    isproblem: false
  }, {
    subid: 6,
    subname: '生产或使用的新食品原料，限定于国务院卫生行政部门公告的新食品原料范围内。',
    iskey: false,
    ischeck: false,
    isproblem: false
  }, {
    subid: 7,
    subname: '未发现使用药品、仅用于保健食品的原料生产食品。',
    iskey: true,
    ischeck: false,
    isproblem: false
  }, {
    subid: 8,
    subname: '生产记录中的生产工艺和参数与企业申请许可时提供的工艺流程一致。',
    iskey: true,
    ischeck: false,
    isproblem: false
  }, {
    subid: 9,
    subname: '建立和保存生产加工过程关键控制点的控制情况记录。',
    iskey: true,
    ischeck: false,
    isproblem: false
  }, {
    subid: 10,
    subname: '生产现场未发现人流、物流交叉污染。',
    iskey: false,
    ischeck: false,
    isproblem: false
  }, {
    subid: 11,
    subname: '未发现原辅料、半成品与直接入口食品交叉污染。',
    iskey: false,
    ischeck: false,
    isproblem: false
  }, {
    subid: 12,
    subname: '有温、湿度等生产环境监测要求的，定期进行监测并记录。',
    iskey: false,
    ischeck: false,
    isproblem: false
  }, {
    subid: 13,
    subname: '生产设备、设施定期维护保养并做好记录。',
    iskey: false,
    ischeck: false,
    isproblem: false
  }, {
    subid: 14,
    subname: '未发现标注虚假生产日期或批号的情况。',
    iskey: true,
    ischeck: false,
    isproblem: false
  }, {
    subid: 15,
    subname: '工作人员穿戴工作衣帽，生产车间内未发现与生产无关的个人或者其他与生产不相关物品，员工洗手消毒后进入生产车间。',
    iskey: false,
    ischeck: false,
    isproblem: false
  }]
}, {
  id: 4,
  name: '4．产品检验结果注：采取抽查方式',
  subcnt: 5,
  subdata: [{
    subid: 1,
    subname: '企业自检的，应具备与所检项目适应的检验室和检验能力，有检验相关设备及化学试剂，检验仪器设备按期检定。',
    iskey: false,
    ischeck: false,
    isproblem: false
  }, {
    subid: 2,
    subname: '不能自检的，应当委托有资质的检验机构进行检验。',
    iskey: false,
    ischeck: false,
    isproblem: false
  }, {
    subid: 3,
    subname: '有与生产产品相适应的食品安全标准文本，按照食品安全标准规定进行检验。',
    iskey: true,
    ischeck: false,
    isproblem: false
  }, {
    subid: 4,
    subname: '建立和保存原始检验数据和检验报告记录，检验记录真实、完整。',
    iskey: true,
    ischeck: false,
    isproblem: false
  }, {
    subid: 5,
    subname: '按规定时限保存检验留存样品并记录留样情况。',
    iskey: false,
    ischeck: false,
    isproblem: false
  }]
}, {
  id: 5,
  name: '5．贮存及交付控制\r\n注：采取抽查方式，有冷链要求的产品必须检查冷链情况。',
  subcnt: 8,
  subdata: [{
    subid: 1,
    subname: '原辅料的贮存有专人管理，贮存条件符合要求。',
    iskey: true,
    ischeck: false,
    isproblem: false
  }, {
    subid: 2,
    subname: '食品添加剂应当专门贮存，明显标示，专人管理。',
    iskey: true,
    ischeck: false,
    isproblem: false
  }, {
    subid: 3,
    subname: '不合格品应在划定区域存放。',
    iskey: false,
    ischeck: false,
    isproblem: false
  }, {
    subid: 4,
    subname: '根据产品特点建立和执行相适应的贮存、运输及交付控制制度和记录。',
    iskey: false,
    ischeck: false,
    isproblem: false
  }, {
    subid: 5,
    subname: '仓库温湿度应符合要求。',
    iskey: false,
    ischeck: false,
    isproblem: false
  }, {
    subid: 6,
    subname: '生产的产品在许可范围内。',
    iskey: false,
    ischeck: false,
    isproblem: false
  }, {
    subid: 7,
    subname: '有销售台账，台账记录真实、完整。',
    iskey: false,
    ischeck: false,
    isproblem: false
  }, {
    subid: 8,
    subname: '销售台账如实记录食品的名称、规格、数量、生产日期或者生产批号、检验合格证明、销售日期以及购货者名称、地址、联系方式等内容。',
    iskey: false,
    ischeck: false,
    isproblem: false
  }]
}, {
  id: 6,
  name: '6．不合格品管理和食品召回\r\n注：采取抽查方式',
  subcnt: 4,
  subdata: [{
    subid: 1,
    subname: '建立和保存不合格品的处置记录，不合格品的批次、数量应与记录一致。',
    iskey: false,
    ischeck: false,
    isproblem: false
  }, {
    subid: 2,
    subname: '实施不安全食品的召回，有召回计划、公告等相应记录。',
    iskey: true,
    ischeck: false,
    isproblem: false
  }, {
    subid: 3,
    subname: '召回食品有处置记录。',
    iskey: true,
    ischeck: false,
    isproblem: false
  }, {
    subid: 4,
    subname: '未发现使用召回食品重新加工食品情况（对因标签存在瑕疵实施召回的除外）。',
    iskey: false,
    ischeck: false,
    isproblem: false
  }]
}, {
  id: 7,
  name: '7．从业人员管理',
  subcnt: 6,
  subdata: [{
    subid: 1,
    subname: '有食品安全管理人员、检验人员、负责人。',
    iskey: false,
    ischeck: false,
    isproblem: false
  }, {
    subid: 2,
    subname: '有食品安全管理人员、检验人员、负责人培训和考核记录。',
    iskey: false,
    ischeck: false,
    isproblem: false
  }, {
    subid: 3,
    subname: '未发现聘用禁止从事食品安全管理的人员。',
    iskey: true,
    ischeck: false,
    isproblem: false
  }, {
    subid: 4,
    subname: '企业负责人在企业内部制度制定、过程控制、安全培训、安全检查以及食品安全事件或事故调查等环节履行了岗位职责并有记录。',
    iskey: false,
    ischeck: false,
    isproblem: false
  }, {
    subid: 5,
    subname: '建立从业人员健康管理制度，直接接触食品人员有健康证明，符合相关规定。',
    iskey: true,
    ischeck: false,
    isproblem: false
  }, {
    subid: 6,
    subname: '有从业人员食品安全知识培训制度，并有相关培训记录。',
    iskey: false,
    ischeck: false,
    isproblem: false
  }]
}, {
  id: 8,
  name: '8．食品安全事故处置',
  subcnt: 3,
  subdata: [{
    subid: 1,
    subname: '有定期排查食品安全风险隐患的记录。',
    iskey: false,
    ischeck: false,
    isproblem: false
  }, {
    subid: 2,
    subname: '有按照食品安全应急预案定期演练，落实食品安全防范措施的记录。',
    iskey: false,
    ischeck: false,
    isproblem: false
  }, {
    subid: 3,
    subname: '发生食品安全事故的，有处置食品安全事故记录。',
    iskey: false,
    ischeck: false,
    isproblem: false
  }]
}, {
  id: 9,
  name: '9．食品添加剂生产者管理',
  subcnt: 3,
  subdata: [{
    subid: 1,
    subname: '原料和生产工艺符合产品标准规定。',
    iskey: true,
    ischeck: false,
    isproblem: false
  }, {
    subid: 2,
    subname: '复配食品添加剂配方发生变化的，按规定报告。',
    iskey: false,
    ischeck: false,
    isproblem: false
  }, {
    subid: 3,
    subname: '食品添加剂产品标签载明“食品添加剂”，并标明贮存条件、生产者名称和地址、食品添加剂的使用范围、用量和使用方法。',
    iskey: false,
    ischeck: false,
    isproblem: false
  }]
}
];

export default () => (

  <div className="container">

    <p className="title">监督要点检查表</p>

    <table style={{width: '100%'}} border="1" cellspacing="0" cellpadding="0">
      <thead>
        <tr>
          <th className="th1">检查项目</th>
          <th className="th2">序号</th>
          <th className="th3">检查内容</th>
          <th className="th4">是否检查</th>
          <th className="th5">发现问题</th>
          <th className="th6">量化分值</th>
          <th className="th7">量化得分</th>
          <th className="th8">备注</th>
        </tr>
      </thead>

      <tbody>

      {
        data.map(item => (
          item.subdata.map((subitem, index) => (
            <tr>
              { index === 0 && <td rowspan={item.subcnt}>{item.name}</td> }
              <td align="center">{`${subitem.isKey ? '*' : ''}${subitem.subid}`}</td>
              <td style={{padding: 10}}>{subitem.subname}</td>
              <td align="center"><input type="checkbox"/></td>
              <td align="center"><input type="checkbox"/></td>
              <td align="center">0</td>
              <td align="center">0</td>
              <td></td>
            </tr>
          ))
        ))
      }
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
      }

      th {
        padding: 10px 15px;
      }

      .th1, .td1 {
        width: 10%;
      }

      .th2, .td2 {
        width: 5%;
      }

      .th3, .td3 {
        width: 35%;
      }

      .th4, .td4 {
        width: 10%;
      }

      .th5, .td5 {
        width: 10%;
      }

      .th6, .td6 {
        width: 10%;
      }

      .th7, .td7 {
        width: 10%;
      }

      .th8, .td8 {
        width: 10%;
      }

      table, table tr th, table tr td {
        border:1px solid #dadada;
      }

    `}</style>
  </div>

);
