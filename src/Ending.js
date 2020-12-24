import React, { Component } from "react";

class Ending extends Component { //Ending
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };

    this.handleClickNextPage = this.handleClickNextPage.bind(this);
  }

  handleClickNextPage() {
    if (this.state.count < 4) {
      this.setState(state => ({
        count: this.state.count + 1,
      }));
    }
  }

  render() {
    return (
      <div>
        <div style={{display: "flex",
                     justifyContent: "center",}}>
          <img src={
                     this.state.count === 1 ? require('./1.png') :
                     this.state.count === 2 ? require('./2.png') :
                     this.state.count === 3 ? require('./3.png') :
                     this.state.count === 4 ? require('./4.png') :
                                              require('./wrong.png')
                   }
               alt="Ending"
               width="350"
               height="620"
               style={{position: 'absolute', zIndex: '1',}}>
          </img>
        </div>
        <div style={{display: "flex",
                     justifyContent: "center",}}>
          <button onClick={this.handleClickNextPage}
                  type = "button"
                  style={{backgroundColor: 'transparent',
                          position: 'absolute', zIndex: '2', top: '75%',
                          width: '200px', height:'100px',
                          border:'none'}}>
            下一頁
          </button>
        </div>
      </div>
    );
  }
}

export default Ending;
