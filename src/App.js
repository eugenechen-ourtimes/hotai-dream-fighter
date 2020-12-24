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
                                                                      cityName='芹苴市'
                                                                      cityPhoto={require('./cityPhoto_芹苴市.png')}
                                                                      width="189"
                                                                      height="109.8"
                                                                      styleTop="35%"
                                                                      cityIntroduction='芹苴是越南第四大城市，位於湄公河三角洲出海口，以豐富的水果跟水上傳統市場聞名。' {...props} /> } / > 
            <Route exact path="/i2" render={ (props) => <Introduction question="/q2"
                                                                      cityName='胡志明市'
                                                                      cityPhoto={require('./cityPhoto_胡志明市.png')}
                                                                      width="200"
                                                                      height="200"
                                                                      styleTop="35%"
                                                                      cityIntroduction='胡志明市又曾被稱作西貢，法國統治時建造了許多歐式建築，例如紅教堂，因此有東方小巴黎美稱。是越南最大城市，也是文化經濟中心。' {...props} /> } / >
            <Route exact path="/i3" render={ (props) => <Introduction question="/q3"
                                                                      cityName='峴港市'
                                                                      cityPhoto={require('./cityPhoto_峴港市.png')}
                                                                      width="189"
                                                                      height="109.8"
                                                                      styleTop="35%"
                                                                      cityIntroduction='峴港是越南中部直轄市，也是越南第四大都市。因為臨海，所以旅遊業發達，也是越南渡假勝地。' {...props} /> } / >
            <Route exact path="/i4" render={ (props) => <Introduction question="/q4"
                                                                      cityName='順化市'
                                                                      cityPhoto={require('./cityPhoto_順化市.png')}
                                                                      width="189"
                                                                      height="109.8" 
                                                                      styleTop="35%"
                                                                      cityIntroduction='順化曾是許多古王朝的首都，有大量的歷史建築，例如舊時的京城跟皇宮，同時也是聯合國教科文組織世界遺產之一。' {...props} /> } / >
            <Route exact path="/i5" render={ (props) => <Introduction question="/q5"
                                                                      cityName='海防市'
                                                                      cityPhoto={require('./cityPhoto_海防市.png')}
                                                                      width="200"
                                                                      height="200"
                                                                      styleTop="35%"
                                                                      cityIntroduction='海防是越南第三大城市，是工業中心，同時也擁有越南第二大的港口，城區內以法式園林跟歌劇院為特色，也臨近世界七大奇景之一的「下龍灣」。' {...props} /> } / >
            <Route exact path="/i6" render={ (props) => <Introduction question="/ending"
                                                                      cityName='河內市'
                                                                      cityPhoto={require('./cityPhoto_河內市.png')}
                                                                      width="200"
                                                                      height="200"
                                                                      styleTop="35%"
                                                                      cityIntroduction='河內是越南首都，舊稱東京。它位於紅河三角洲，是越南古代都城和當代政治經濟中心。' {...props} /> } / >

          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
