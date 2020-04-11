import React from 'react';

export default class Index extends React.PureComponent {
  constructor(props) {
    super(props);
    // khai bao state
    this.state = {count: 0}
    // khi khai bao bao gia tri cho state - nen khai bao bao cac kieu du lieu nguyen thuy trong js
    //  cac kieu du lieu ko bi thay doi
    // han che gan tri gia tri la array hay object - neu ma dung thi can phai xu ly imuatable state
  }

  changeCounter = () => {
    // cap nhap lai state
    this.setState(state =>({
      ...state,
      count: state.count + 1
    }))
    // this.setState({
    //   count: this.state.count + 1
    // })
  }

  render(){
    return(
      <>
        <h3>{this.state.count}</h3>
        <button onClick={() => this.changeCounter()}> +1</button>
      </>
    )
  }
}