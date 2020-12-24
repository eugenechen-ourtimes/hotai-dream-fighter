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
                   width="350" height="620"
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
                                      position: 'absolute', zIndex: '2', top: '87%',
                                      width: '200px', height:'100px',
                                      border:'none'}}>
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
                                                              missionUrl='/m1'
                                                              heading='越南跟台灣有些相似的節慶，但慶祝的方式有所不同。'
                                                              question='請問哪一個傳統節慶台灣跟越南都有？'
                                                              a='中秋節'
                                                              b='聖誕節'
                                                              c='解放南方統一日'
                                                              answer='a'
                                                              isItCorrect='你答對了！'
                                                              explanation='中秋節在越南又稱望月節，同時也是一個兒童的節日。在中秋節，孩子們會提鯉魚燈慶祝。'
                                                              {...props} /> } />
              <Route exact path="/q2" render={ (props) => <QM mission={true}
                                                              missionUrl='/m2'
                                                              heading='在越南的歷史中，有過漫長被外國統治的經驗，對越南歷史有著深遠的影響。'
                                                              question='在歷史上，越南曾被哪一國統治？'
                                                              a='韓國'
                                                              b='法國'
                                                              c='英國'
                                                              answer='b'
                                                              isItCorrect='你答對了！'
                                                              explanation='越南近代曾經被法國統治近百年，法國的統治也對越南的飲食、建築等文化造成深遠的影響。'
                                                              {...props} /> } />
              <Route exact path="/q3" render={ (props) => <QM mission={false}
                                                              missionUrl='/m3'
                                                              heading='越南跟台灣一樣有十二生肖，只有其中一種動物與台灣不同。'
                                                              question='請問是下列哪一種動物？'
                                                              a='樹懶'
                                                              b='烏龜'
                                                              c='貓'
                                                              answer='c'
                                                              isItCorrect='你答對了！'
                                                              explanation='有一種說法是，由於越南天氣炎熱，老鼠成患讓許多人傷透腦筋，而貓是老鼠的天敵，尤其在越南文化中，人們相信貓咪可以使來年五穀豐收，風調雨順，故而用貓取代兔年，作為吉利的代表。'
                                                              {...props} /> } />
              <Route exact path="/q4" render={ (props) => <QM mission={true}
                                                              missionUrl='/m4'
                                                              heading='越南的傳統服裝，越語為ao dai，也被譯為衫長、襖套等，看起來有點像是中式的旗袍。'
                                                              question='請問哪一個配件是越南傳統服飾中的重要元素？'
                                                              a='領結'
                                                              b='笠帽'
                                                              c='草鞋'
                                                              answer='b'
                                                              isItCorrect='你答對了！'
                                                              explanation='笠帽（nón lá）輕便好用，是遮陽擋雨的重要越南服飾。每個地區的笠帽略有不同各具特色。'
                                                              {...props} /> } />
              <Route exact path="/q5" render={ (props) => <QM mission={true}
                                                              missionUrl='/m5'
                                                              heading='在台灣的原住民文化中，也有嚼食檳榔的習俗。'
                                                              question='請問在越南傳統文化中，檳榔象徵著什麼意義？'
                                                              a='友情'
                                                              b='愛情'
                                                              c='親情'
                                                              answer='c'
                                                              isItCorrect='你答對了！'
                                                              explanation='在越南，相傳古早有雙胞胎兄弟同時愛上一名女生，女子嫁給哥哥，弟弟傷心離家，在河邊死掉化成白石，哥哥和太太一起去找，先後過世，他們分別在白石旁，另化成檳榔樹和荖葉，因此檳榔象徵著家人的重要。'
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
