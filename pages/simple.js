import React from 'react';

export default class extends React.Component {

  static async getInitialProps({req}) {
    const {query, params, body} = req;
    return {data: body}
  }

  render() {
    return <div>
      <p>
        Hello，Mini Force!
      </p>

      <table border="1">
        <thead>
        <tr>
          <th width="100">No.</th>
          <th width="200">Name</th>
        </tr>
        </thead>
        <tbody>
        {
          ['福特', '露西', '麦克斯', '赛米']
            //.concat(this.props.data)
            .map((name, index) => (
            <tr key={String(index)}>
              <td>{index + 1}</td>
              <td>{name}</td>
            </tr>
          ))
        }
        </tbody>
      </table>
    </div>
  }
}
