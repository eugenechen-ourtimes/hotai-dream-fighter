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
                 height="100%"
                 style={{position: 'absolute', zIndex: '1',}}/>
          </div>
          :
          this.state.result === 'wrong' ?
          <div style={{display: "flex",
                       justifyContent: "center",}}>
            <img src={this.props.wPhoto}
                 alt="Wrong"
                 height="100%"
                 style={{position: 'absolute', zIndex: '1',}}/>
          </div>
          :
          this.state.result === 'question' ? 
          <div style={{display: "flex",
                       justifyContent: "center",}}>
            <img src={this.props.qPhoto}
                 alt="question"
                 height="100%"
                 style={{position: 'absolute', zIndex: '1',}}/>
          </div>
          :
          this.state.result === 'mission' && this.props.mission ?
          <div style={{display: "flex",
                       justifyContent: "center",}}>
            <img src={this.props.mPhoto}
                 alt="question"
                 height="100%"
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
                              position: 'absolute', zIndex: '2', top: '58%',
                              width: '100%', height:'7%',
                              /*border:'none'*/
                             }}>
                {/*A: {this.props.a}*/}
              </button>
            </div>
            <div style={{display: "flex",
                         justifyContent: "center",}}>
              <button onClick={this.props.answer === 'b' ? this.handleClickCorrectAnswer : this.handleClickWrongAnswer}
                      style={{backgroundColor: 'transparent',
                              position: 'absolute', zIndex: '2', top: '68%',
                              width: '100%', height:'7%',
                              /*border:'none'*/
                             }}>
                {/*B: {this.props.b}*/}
              </button>
            </div>
            <div style={{display: "flex",
                         justifyContent: "center",}}>
              <button onClick={this.props.answer === 'c' ? this.handleClickCorrectAnswer : this.handleClickWrongAnswer}
                      style={{backgroundColor: 'transparent',
                              position: 'absolute', zIndex: '2', top: '77%',
                              width: '100%', height:'7%',
                              /*border:'none'*/
                             }}>
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
                      style={ this.props.exception === true ?
                              {backgroundColor: 'transparent',
                              position: 'absolute', zIndex: '2', top: '80%',
                              width: '100%', height:'7%',
                              /*border:'none'*/
                              }
                              :
                              {backgroundColor: 'transparent',
                              position: 'absolute', zIndex: '2', top: '78%',
                              width: '100%', height:'7%',
                              /*border:'none'*/
                              }
                            }>
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
