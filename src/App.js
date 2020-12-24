import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Introduction from './Introduction';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLink: true,
    };
    this.hideLink = this.hideLink.bind(this);
    this.testing = true; //If we are testing now?
  }

  hideLink() {
    this.setState(state => ({
      showLink: false,
    }));
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          { 
            this.testing && this.state.showLink ?
            <Link to="/i1" onClick={this.hideLink}> Introduction 1 </Link>
            :
            <div> </div>
          }
          {
            this.testing && this.state.showLink ?
            <Link to="/i2" onClick={this.hideLink}> Introduction 2 </Link>
            :
            <div> </div>
          }
          {
            this.testing && this.state.showLink ?
            <Link to="/i3" onClick={this.hideLink}> Introduction 3 </Link>
            :
            <div> </div>
          }
          {
            this.testing && this.state.showLink ?
            <Link to="/i4" onClick={this.hideLink}> Introduction 4 </Link>
            :
            <div> </div>
          }
          {
            this.testing && this.state.showLink ?
            <Link to="/i5" onClick={this.hideLink}> Introduction 5 </Link>
            :
            <div> </div>
          }
          {
            this.testing && this.state.showLink ?
            <Link to="/i6" onClick={this.hideLink}> Introduction 6 </Link>
            :
            <div> </div>
          }
          <Switch>
            <Route exact path="/i1" render={ (props) => <Introduction question="/q1" 
                                                                      iPhoto={require('./i1.png')}
                                                                      {...props} /> } / >
            <Route exact path="/i2" render={ (props) => <Introduction question="/q2"
                                                                      iPhoto={require('./i2.png')}
                                                                      {...props} /> } / >
            <Route exact path="/i3" render={ (props) => <Introduction question="/q3"
                                                                      iPhoto={require('./i3.png')}
                                                                      {...props} /> } / >
            <Route exact path="/i4" render={ (props) => <Introduction question="/q4"
                                                                      iPhoto={require('./i4.png')}
                                                                      {...props} /> } / >
            <Route exact path="/i5" render={ (props) => <Introduction question="/q5"
                                                                      iPhoto={require('./i5.png')}
                                                                      {...props} /> } / >
            <Route exact path="/i6" render={ (props) => <Introduction question="/ending"
                                                                      iPhoto={require('./introduction.png')}
                                                                      {...props} /> } / >
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
