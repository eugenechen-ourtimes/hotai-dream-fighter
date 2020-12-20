import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import M from './M';

class QM extends Component { //Q&M
  constructor(props) {
    super(props);
    this.state = {
      result: 'question',
      prompt: {
        correct: '你答對了！',
        wrong: '你答錯了！',
      }
      //answerCorrectPrompt: '你答對了！',
      //answerWrongPrompt: '你答錯了！',
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
  	/*return (
  		<div>
  			{this.props.mission
  			<h1> question and mission </h1>
  			:
  			<h1> question </h1>
  			}
  		</div>
  	);*/

    /*let text = <h1> abcs </h1>;
    return (
      text
    );*/

    return (
      <p>
        {
          this.state.result === 'correct' ?
          <div style={{display: "flex",
                       justifyContent: "center",}}>
            <img src={require('./correct.png')}
                 alt="Correct"
                 width="350" height="620"
                 style={{position: 'absolute', zIndex: '1',}}/>
          </div>
          :
          this.state.result === 'wrong' ?
          <div style={{display: "flex",
                       justifyContent: "center",}}>
            <img src={require('./wrong.png')}
                 alt="Wrong"
                 width="350" height="620"
                 style={{position: 'absolute', zIndex: '1',}}/>
          </div>
          :
          this.state.result === 'question' ? 
          <div style={{display: "flex",
                       justifyContent: "center",}}>
            <img src={require('./question.png')}
                 alt="question"
                 width="350" height="620"
                 style={{position: 'absolute', zIndex: '1',}}/>
          </div>
          :
          this.state.result === 'mission' ? 
          <div style={{display: "flex",
                       justifyContent: "center",}}>
            <img src={require('./mission.png')}
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
              <button style={{backgroundColor: 'transparent',
                              position: 'absolute', zIndex: '2', top: '15%',
                              width: '200px', height:'30px',
                              border:'none',
                              /*font:'fantasy'*/}}>
                {this.props.heading}
              </button>
            </div>

            <div style={{display: "flex",
                         justifyContent: "center",}}>
              <button style={{backgroundColor: 'transparent',
                              position: 'absolute', zIndex: '2', top: '40%',
                              width: '200px', height:'30px',
                              border:'none',
                              /*font:'fantasy'*/}}>
                {this.props.question}
              </button>
            </div>

            <div style={{display: "flex",
                         justifyContent: "center",}}>
              <button onClick={this.props.answer==='a' ? this.handleClickCorrectAnswer : this.handleClickWrongAnswer}
                      style={{backgroundColor: 'transparent',
                              position: 'absolute', zIndex: '2', top: '55%',
                              width: '200px', height:'30px',
                              border:'none'
                              /*font:'fantasy'*/}}>
                A: {this.props.a}
              </button>
            </div>

            <div style={{display: "flex",
                         justifyContent: "center",}}>
              <button onClick={this.props.answer==='b' ? this.handleClickCorrectAnswer : this.handleClickWrongAnswer}
                      style={{backgroundColor: 'transparent',
                              position: 'absolute', zIndex: '2', top: '65%',
                              width: '200px', height:'30px',
                              border:'none'}}>
                B: {this.props.b}
              </button>
            </div>

            <div style={{display: "flex",
                         justifyContent: "center",}}>
              <button onClick={this.props.answer==='c' ? this.handleClickCorrectAnswer : this.handleClickWrongAnswer}
                      style={{backgroundColor: 'transparent',
                              position: 'absolute', zIndex: '2', top: '75%',
                              width: '200px', height:'30px',
                              border:'none'}}>
                C: {this.props.c}
              </button>
            </div>
          </div>
          :
  
          <BrowserRouter>
            <div>
              {
                this.state.result === 'correct' || this.state.result === 'wrong' ?

                <div>

                  <div style={{display: "flex",
                               justifyContent: "center",}}>
                    <button style={{backgroundColor: 'transparent',
                                    position: 'absolute', zIndex: '2', top: '20%',
                                    width: '200px', height:'30px',
                                    border:'none',
                                    /*font:'fantasy'*/}}>
                      {
                        this.state.result === 'correct' ?
                        this.state.prompt.correct
                        :
                        this.state.result === 'wrong' ?
                        this.state.prompt.wrong
                        :
                        <div>
                        </div>
                      }

                    </button>
                  </div>

                  <div style={{display: "flex",
                               justifyContent: "center",}}>
                    <button style={{backgroundColor: 'transparent',
                                    position: 'absolute', zIndex: '2', top: '40%',
                                    width: '200px', height:'200px',
                                    border:'none', 
                                    /*font:'fantasy'*/}}>
                      {this.props.explanation}
                    </button>
                  </div>

                  {
                    this.props.mission ?
                    <div>
                      <Link to={this.props.missionUrl}>
                        <div style={{display: "flex",
                                     justifyContent: "center",}}>
                          <button onClick={this.handleClickNextPage}
                                  type = "button"
                                  style={{backgroundColor: 'transparent',
                                          position: 'absolute', zIndex: '2', top: '75%',
                                          width: '200px', height:'30px',
                                          border:'none'
                                          /*textSize : '2',*/
                                          /*fontFamily:'標楷體'*/}}>
                            下一頁
                          </button>
                        </div>
                      </Link>
                    </div>
                    :
                    <div></div>
                  }
                </div>
                :
                <div> </div>

              }
              <Switch>
                <Route exact path="/m1" render={ (props) => <M heading='A'
                                                               description='A'
                                                               context='A' {...props} /> } /> 
                <Route exact path="/m2" render={ (props) => <M heading='越南的傳統節慶'
                                                               description='越南有許多傳統節慶與臺灣很像，但其中都存在著一些差異。'
                                                               context='請黎利上網搜尋一個越南的傳統節慶，並向黎坦分享。可以進一步比較台灣與越南的，相同與相異之處喔！' {...props} /> } /> 
                <Route exact path="/m3" render={ (props) => <M heading='A'
                                                               description='A'
                                                               context='A' {...props} /> } /> 
                <Route exact path="/m4" render={ (props) => <M heading='越南語的問候語'
                                                               description='越南語的你好，是「心早」（xin chào），用心問早。 '
                                                               context='請跟你周遭的三位朋友，用越南問問好。' {...props} /> } /> 
                <Route exact path="/m5" render={ (props) => <M heading='與越南的連結'
                                                               description='越南與臺灣關係緊密，其中移民人數更是佔大宗。'
                                                               context='請黎利與黎坦分享自己生活經驗中，一件跟越南有關的事情（食物、電視、朋友等等）' {...props} /> } />
                <Route exact path="/m6" render={ (props) => <M heading='A'
                                                               description='A'
                                                               context='A' {...props} /> } />
              </Switch>
            </div>
          </BrowserRouter>
        }
      </p>
    );
  }
}

export default QM;
