import React, { Component } from "react";
 
class NewPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            students: [
                { id: 1, name: 'Joe', age: 21, email: 'joe@test.com'},
                { id: 2, name: 'Bob', age: 22, email: 'Bob@test.com'}
            ]
        }
    }

    returnTableData() {
        return this.state.students.map((student, index) => {
            let col = Object.keys(student)
            return (
               <tr key={student.id}>
                  {col.map((val, index) => {
                     return <td key={index}>{student[col[index]]}</td>
                  })}
               </tr>
            )
         })
    }

    renderTableHeader() {
        let header = Object.keys(this.state.students[0])
        return header.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }
    
    render() {
        return (
            <div>
                <h1 id='title'>TESTING TABLE PAGE</h1>
                <table id='students'>
                    <tbody>
                        <tr>{this.renderTableHeader()}</tr>
                        {this.returnTableData()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default NewPage;