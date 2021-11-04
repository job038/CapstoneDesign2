import logo from './logo.svg';
import './App.css';
import {Alert,ButtonGroup,Navbar,Nav,Container,Form,Button,Table,InputGroup,FormControl,Row,Col,Image} from 'react-bootstrap';
import { Link,Route,Switch,useHistory }from 'react-router-dom';
import { useState } from 'react';
import { width } from 'dom-helpers';
import Minutes from './Minutes';
import Register from './Register';
import Trans from './Trans';
import Detail from './Detail';


function App() {

  let [이메일,이메일변경]=useState("")
  let [로그인여부,로그인여부변경]=useState(false)
  let history = useHistory()


  return (
    <div className="App">
       
      <NavBar 로그인여부={로그인여부} history={history}/>
       


      <Switch>
     

        <Route path="/detail">
          <Detail/>
        </Route>
        
        <Route path="/trans">
          <Trans/>  
        </Route> 

        <Route path="/register">
          <Register history={history}/>
        </Route>

        <Route path="/minutes">
          <Minutes history={history}/>
          
        </Route>

        <Route path="/">
        <div className="Jumbotron">
            <h1 className="JumboText">손쉽게 회의록을 관리하세요</h1> 
        </div>
          <Form className="Form">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="e-mail" onChange={(e)=>{이메일변경(e.target.value)}} />
            </Form.Group>
            {이메일}
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="password" placeholder="비밀번호" />
            </Form.Group>
            
            <Button className="Button" variant="secondary" size="lg"
            onClick={()=>{history.push("/trans") ;로그인여부변경(true)}}>로그인</Button>
          </Form>
          <br/>
          <hr />
          <p >아직 회원이 아니신가요?</p>
          <Button className="Button" variant="outline-secondary" onClick={()=>{history.push("/register")}}>회원 가입</Button>

        </Route>

      

    </Switch>
     

      
    </div>
  );
}

function NavBar(props){
  return (
    <Navbar bg="light" variant="light" className="Navbar">
          <Container>
            <Navbar.Brand onClick={()=>{
              props.로그인여부===true
              ?props.history.push("/main")
              :props.history.push("/")
            }}>자동회의록</Navbar.Brand>
            <Nav className="me-auto">
              
              <Nav.Link onClick={()=>{props.history.push("/minutes")}} >나만의 회의록</Nav.Link>
              <Nav.Link >나의 일정</Nav.Link>
              
            </Nav>
            {
              props.로그인여부===true
              ? <Navbar.Text>
              Signed in as: <a href="#login">강현구</a>
              </Navbar.Text>
              : null
            }
          </Container>
       </Navbar>
  )
}




export default App;
