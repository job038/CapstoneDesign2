import React from 'react';
import {Table} from 'react-bootstrap';


function Minutes(props){
    
    return (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>회의제목</th>
              <th>회의날짜</th>
              
              
            </tr>
          </thead>
          <tbody>
            <tr onClick={()=>{props.history.push("/detail")}}>
              <td>3</td>
              <td>거래처 입찰건3</td>
              <td>2021.08.30</td>
  
            </tr>
            <tr>
              <td>2</td>
              <td>거래처 입찰건2</td>
              <td>2021.08.23</td>
              
            </tr>
            <tr>
              <td>1</td>
              <td>거래처 입찰건</td>
              <td>2021.08.16</td>
            
            </tr>
          </tbody>
        </Table>

    )
}

export default Minutes;