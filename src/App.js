import Badge from "react-bootstrap/Badge";
import React from 'react';
import { marked } from 'marked';
//import { marked } from 'marked';
export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      markdown: "",
    };
  }
  updateMarkDown(markdown){
    this.setState({
      markdown
    })
  }
  render(){
    let inputStyle={
      width: "400px",
      height: "50vh",
      marginLeft: "auto",
      marginRight: "auto",
      padding: "10px"
    };
    let outputStyle={
      width: "400px",
      height: "50vh",
      backgroundColor: "#DCDCDC",
      marginLeft: "auto",
      marginRight: "auto",
      padding: "10px"
    }
    const app=this;
    function createMarkdown(){
      return {
        __html: marked.parse(app.state.markdown)
      }
    }
    return (
      <div className="App">
        <div className="container">
          <div className="row mt-4">
            <div className="col text-center">
              <h1>
                {" "}
                <Badge className="text-align-center" variant="light">
                  Markdown Previewer
                </Badge>
              </h1>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-6">
              <div className="col text-center">
                <h4>
                  <Badge className="text-align-center" bg="secondary">
                    Markdown Input
                  </Badge>
                </h4>
              </div>
              <div className="mark-input" style={inputStyle}>
                <textarea
                  className="input"
                  style={inputStyle}
                  value={this.state.markdown}
                  onChange={(e)=>{
                    this.updateMarkDown(e.target.value)
                  }}
                >
                  {console.log(this.state.markdown)}
                </textarea>
              </div>
            </div>
            <div className="col-md-6">
              <div className="col text-center">
                <h4>
                  <Badge className="text-align-center" bg="secondary">
                    Preview
                  </Badge>
                </h4>
              </div>
            <div
                style={outputStyle}
              dangerouslySetInnerHTML={createMarkdown()}></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
