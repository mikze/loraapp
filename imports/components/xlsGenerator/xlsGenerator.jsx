import Workbook from 'react-excel-workbook'
import React from "react";


 
 class XlsGenerator extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          data: this.props.data,
          lines: this.props.lines,
          mydata: []
        };
        console.log(props.data.data);
    }

    

        componentWillReceiveProps(nextProps, nextState) {
            this.setState({ data: nextProps.data });
            this.setState({ lines: nextProps.lines });
          };


      render() 
      {
 
      return (
        <div>
            <Workbook filename="Pomiar.xlsx" element={<button className="btn btn-lg btn-primary">Download xlsx</button>}>
            
            {
                this.state.lines.map(
                    x => <Workbook.Sheet data={this.props.data.data[x]} name={"Pomiar " + x}>
                           <Workbook.Column label= 'id' value="x"/>
                           <Workbook.Column label= {x} value="y"/>
                         </Workbook.Sheet>
                )
            }
            
        
            </Workbook>
        </div>
        )};

}

export default XlsGenerator;