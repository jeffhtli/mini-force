import React from 'react';
import NoticeTable from '../components/NoticeTable';
import PageDivider from '../components/PageDivider';
import CheckPointsTable from '../components/CheckPointsTable';


export default class extends React.Component {

  static async getInitialProps({req}) {
    const {query, params, body} = req;
    return {data: body}
  }

  render() {
    return <div>

      <NoticeTable />

      <PageDivider />

      <CheckPointsTable />



    </div>
  }
}
