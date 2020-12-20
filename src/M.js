import React, { Component } from "react";

class M extends Component { //M
  constructor(props) {
	super(props);

	}

    render() {
	  return (
		<p>
		{
		  <div>
		    <div style={{display: "flex",
		                 justifyContent: "center",}}>
		      <button style={{backgroundColor: 'transparent',
		                      position: 'absolute', zIndex: '2', top: '15%',
		                      width: '200px', height:'30px',
		                      border:'none',
		                      fontSize: '15px',
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
		                      fontSize: '15px',
		                      /*font:'fantasy'*/}}>
		        {this.props.description}
		      </button>
		    </div>

		    <div style={{display: "flex",
		                 justifyContent: "center",}}>
		      <button onClick={this.handleClickWrongAnswer}
		              style={{backgroundColor: 'transparent',
		                      position: 'absolute', zIndex: '2', top: '55%',
		                      width: '200px', height:'200px',
		                      border:'none',
		                      fontSize: '15px',
		                      /*font:'fantasy'*/}}>
		        {this.props.context}
		      </button>
		    </div>

		  </div>

		}

		</p>
		);
	}




}

export default M;
