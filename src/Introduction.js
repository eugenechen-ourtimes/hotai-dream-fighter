import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import QM from './QM';
import Ending from './Ending';

class Introduction extends Component { //Introduction
  constructor(props) {
    super(props);
    this.state = {
      isIntroVisible: true,
    };
    this.handleClickNextPage = this.handleClickNextPage.bind(this);
  }  

  handleClickNextPage() {
    this.setState(state => ({
      isIntroVisible: false,
    }));
  }

  render() {
    return (
      <p align="center">
        <div>
          {
            this.state.isIntroVisible ?
            <div style={{display: "flex",
                         justifyContent: "center",}}>
              <img src={this.props.iPhoto}
                   alt="introduction"
                   height="100%"
                   style={{position: 'absolute', zIndex: '1',}}/>
            </div>
            :
            <div></div>
          }

          <BrowserRouter>
            <div>
              {
                this.state.isIntroVisible ?
                <div>
                  <Link to={this.props.question}>
                    <div style={{display: "flex",
                                 justifyContent: "center",}}>
                      <button onClick={this.handleClickNextPage}
                              type = "button"
                              style={{backgroundColor: 'transparent',
                                      position: 'absolute', zIndex: '2', top: '91%',
                                      height:'5%',
                                      width: '100%',
                                      /*border:'none'*/}}>
                        {/*下一頁*/}
                      </button>
                    </div>
                  </Link>
                </div>
                :
                <div></div>
              }
            </div>

            <Switch>
              <Route exact path="/q1" render={ (props) => <QM mission={false}
                                                              answer='a'
                                                              qPhoto={require('./q1.png')}
                                                              cPhoto={require('./c1.png')}
                                                              wPhoto={require('./w1.png')}
                                                              {...props} /> } />
              <Route exact path="/q2" render={ (props) => <QM mission={true}
                                                              answer='b'
                                                              qPhoto={require('./q2.png')}
                                                              cPhoto={require('./c2.png')}
                                                              wPhoto={require('./w2.png')}
                                                              mPhoto={require('./m2.png')}
                                                              {...props} /> } />
              <Route exact path="/q3" render={ (props) => <QM mission={false}
                                                              answer='c'
                                                              qPhoto={require('./q3.png')}
                                                              cPhoto={require('./c3.png')}
                                                              wPhoto={require('./w3.png')}
                                                              {...props} /> } />
              <Route exact path="/q4" render={ (props) => <QM mission={true}
                                                              answer='b'
                                                              qPhoto={require('./q4.png')}
                                                              cPhoto={require('./c4.png')}
                                                              wPhoto={require('./w4.png')}
                                                              mPhoto={require('./m4.png')}
                                                              {...props} /> } />
              <Route exact path="/q5" render={ (props) => <QM mission={true}
                                                              answer='c'
                                                              qPhoto={require('./q5.png')}
                                                              cPhoto={require('./c5.png')}
                                                              wPhoto={require('./w5.png')}
                                                              mPhoto={require('./m5.png')}
                                                              {...props} /> } />
              <Route exact path="/ending" render={ (props) => <Ending
                                                              {...props} /> } />
            </Switch>
          </BrowserRouter>
        </div>
      </p>
    );
  }
}

export default Introduction;
