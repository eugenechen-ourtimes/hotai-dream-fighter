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
                     this.state.count === 1 ? require('./comics01.png') :
                     this.state.count === 2 ? require('./comics02.png') :
                     this.state.count === 3 ? require('./comics03.png') :
                     this.state.count === 4 ? require('./comics04.png') :
                                              require('./wrong.png')
                   }
               alt="Ending"
               height="100%"
               style={{position: 'absolute', zIndex: '1',}}>
          </img>
        </div>
        <div style={{display: "flex",
                     justifyContent: "center",}}>
          {
            this.state.count < 4 ?
            <button onClick={this.handleClickNextPage}
                    type = "button"
                    style={{backgroundColor: 'transparent',
                            position: 'absolute', zIndex: '2', top: '88%',
                            width: '100%', height:'7%',
                            /*border:'none'*/}}>
              下一頁
            </button>
            :
            <div></div>
          }
        </div>
      </div>
    );
  }
}

export default Ending;
