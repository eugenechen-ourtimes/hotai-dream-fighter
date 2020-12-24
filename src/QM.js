import React, { Component } from "react";

class QM extends Component { //Q&M
  constructor(props) {
    super(props);
    this.state = {
      result: 'question',
      prompt: {
        correct: '你答對了！',
        wrong: '你答錯了！',
      }
    };
    this.handleClickCorrectAnswer = this.handleClickCorrectAnswer.bind(this);
    this.handleClickWrongAnswer = this.handleClickWrongAnswer.bind(this);
    this.handleClickNextPage = this.handleClickNextPage.bind(this);
  }

  handleClickCorrectAnswer() {
    this.setState(state => ({
      result: 'correct',
    }));
  }

  handleClickWrongAnswer() {
    this.setState(state => ({
      result: 'wrong',
    }));
  }

  handleClickNextPage() {
    this.setState(state => ({
      result: 'mission',
    }));
  }

  render() {
    return (
      <p>
        {
          this.state.result === 'correct' ?
          <div style={{display: "flex",
                       justifyContent: "center",}}>
            <img src={this.props.cPhoto}
                 alt="Correct"
                 width="350" height="620"
                 style={{position: 'absolute', zIndex: '1',}}/>
          </div>
          :
          this.state.result === 'wrong' ?
          <div style={{display: "flex",
                       justifyContent: "center",}}>
            <img src={this.props.wPhoto}
                 alt="Wrong"
                 width="350" height="620"
                 style={{position: 'absolute', zIndex: '1',}}/>
          </div>
          :
          this.state.result === 'question' ? 
          <div style={{display: "flex",
                       justifyContent: "center",}}>
            <img src={this.props.qPhoto}
                 alt="question"
                 width="350" height="620"
                 style={{position: 'absolute', zIndex: '1',}}/>
          </div>
          :
          this.state.result === 'mission' && this.props.mission ?
          <div style={{display: "flex",
                       justifyContent: "center",}}>
            <img src={this.props.mPhoto}
                 alt="question"
                 width="350" height="620"
                 style={{position: 'absolute', zIndex: '1',}}/>
          </div>
          :
          <div>
            Exception
          </div>
        }

        {
          this.state.result === 'question' ?
          <div>
            <div style={{display: "flex",
                         justifyContent: "center",}}>
              <button onClick={this.props.answer === 'a' ? this.handleClickCorrectAnswer : this.handleClickWrongAnswer}
                      style={{backgroundColor: 'transparent',
                              position: 'absolute', zIndex: '2', top: '55%',
                              width: '200px', height:'80px',
                              border:'none'
                             }}>
                {/*A: {this.props.a}*/}
              </button>
            </div>
            <div style={{display: "flex",
                         justifyContent: "center",}}>
              <button onClick={this.props.answer === 'b' ? this.handleClickCorrectAnswer : this.handleClickWrongAnswer}
                      style={{backgroundColor: 'transparent',
                              position: 'absolute', zIndex: '2', top: '65%',
                              width: '200px', height:'80px',
                              border:'none'}}>
                {/*B: {this.props.b}*/}
              </button>
            </div>
            <div style={{display: "flex",
                         justifyContent: "center",}}>
              <button onClick={this.props.answer === 'c' ? this.handleClickCorrectAnswer : this.handleClickWrongAnswer}
                      style={{backgroundColor: 'transparent',
                              position: 'absolute', zIndex: '2', top: '75%',
                              width: '200px', height:'80px',
                              border:'none'}}>
                {/*C: {this.props.c}*/}
              </button>
            </div>
          </div>
          :
          (this.state.result === 'correct' || this.state.result === 'wrong') && this.props.mission ?
          <div>
            <div style={{display: "flex",
                         justifyContent: "center",}}>
              <button onClick={this.handleClickNextPage}
                      type = "button"
                      style={{backgroundColor: 'transparent',
                              position: 'absolute', zIndex: '2', top: '75%',
                              width: '200px', height:'100px',
                              border:'none'}}>
                {/*下一頁*/}
              </button>
            </div>
          </div>
          :
          <div> </div>
        }
      </p>
    );
  }
}

export default QM;
