import React from 'react';
import NoticeTable from '../components/NoticeTable';
import PageDivider from '../components/PageDivider';
import CheckPointsTable from '../components/CheckPointsTable';
import data from "../data/example";
import CheckResultTable from '../components/CheckResultTable';

export default class extends React.Component {

  static async getInitialProps({req}) {
    const {query, params, body} = req;
    return {data: body}
  }

  render() {
    return <div>

      <NoticeTable data={data.notice} />

      <PageDivider />

      <CheckPointsTable />

      <PageDivider />

      <CheckResultTable />


    </div>
  }
}
