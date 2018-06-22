import React from 'react';

export default () => (
  <div className="date">
    <p className="item">年</p>
    <p className="item">月</p>
    <p className="item">日</p>

    <style jsx>{`
.date {
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  margin-left: 120px;
}

.item {
  margin-left: 30px;
}

    `}</style>
  </div>
)
