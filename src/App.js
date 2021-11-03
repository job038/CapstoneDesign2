import logo from './logo.svg';
import './App.css';
import {Alert,ButtonGroup,Navbar,Nav,Container,Form,Button,Table,InputGroup,FormControl,Row,Col,Image} from 'react-bootstrap';
import { Link,Route,Switch,useHistory }from 'react-router-dom';
import { useState } from 'react';
import { width } from 'dom-helpers';

function App() {
  let [이메일,이메일변경]=useState("")
  let [로그인여부,로그인여부변경]=useState(false)
  let history = useHistory()
  return (
    <div className="App">
       <Navbar bg="light" variant="light" className="Navbar">
          <Container>
            <Navbar.Brand onClick={()=>{
              로그인여부===true
              ?history.push("/main")
              :history.push("/")
            }}>자동회의록</Navbar.Brand>
            <Nav className="me-auto">
              
              <Nav.Link onClick={()=>{history.push("/minutes")}} >나만의 회의록</Nav.Link>
              <Nav.Link >나의 일정</Nav.Link>
              
            </Nav>
            {
              로그인여부===true
              ? <Navbar.Text>
              Signed in as: <a href="#login">강현구</a>
              </Navbar.Text>
              : null
            }
          </Container>
       </Navbar>

       


      <Switch>
      <Route path="/detail">
        <Detail/>
      </Route>
      
      <Route path="/main">
        <Main/>  
      </Route> 

      <Route path="/register">
        <Register history={history}/>
      </Route>

      <Route path="/minutes">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>회의제목</th>
              <th>회의날짜</th>
              
              
            </tr>
          </thead>
          <tbody>
            <tr onClick={()=>{history.push("/detail")}}>
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
           onClick={()=>{history.push("/main") ;로그인여부변경(true)}}>로그인</Button>
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

function Register(props){

  let [registerInfo,setRegisterInfo]=useState({email:"",pw:"",checkpw:"",name:"",phonenum:""})
  let [registerCheck,setRegisterCheck]=useState([false,false,false])
  let [비번일치,비번일치변경]=useState(true)

  


  return(
    <div className="Form">
      
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>회원정보를 입력해주세요</Form.Label>
          <Form.Control type="email" placeholder="이메일 주소" />
                  
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="비밀번호"  onChange={(e)=>{
              let copy = {...registerInfo}
              delete copy.pw
              setRegisterInfo({...copy,pw:e.target.value})
            }}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="비밀번호 확인"  onChange={(e)=>{
              let copy = {...registerInfo}
              delete copy.checkpw
              setRegisterInfo({...copy,checkpw:e.target.value})
            }}/>
          </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="이름" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="휴대폰 번호" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          
          <Form.Check type="checkbox" label="ㅤ[필수] 만 14세 이상입니다ㅤㅤ" />
          <Form.Check type="checkbox" label="ㅤ[필수] 자동회의록 이용약관 동의" />
          <Form.Check type="checkbox" label="ㅤ[필수] 개인정보 수집 및 이용 동의" />

        
        </Form.Group>

        
      
        
        

  <Button className="Button" variant="secondary" size="lg" 
  onClick={()=>{
      registerInfo.pw===registerInfo.checkpw
      ? props.history.push("/")
      : 비번일치변경(false)
      
    
    }}>
  동의하고 가입하기
  </Button>
      
      </Form>
      
      {
        비번일치===true
        ?null
        :<Alert variant="danger">
        비밀번호가 일치하지 않습니다
      </Alert>
      }
  
    </div>
  )
}

function Main(){
  return (
    <div className="Main">

      <Form.Group controlId="formFile" className="mb-3">
      <Image  className="temp" src="img/record.png"  />
      <br/>
          <Form.Label>변환할 음성파일을 선택하세요</Form.Label>
          <Form.Control type="file" />
        </Form.Group>

      <Container>
        <div style={{paddingTop:"1vh"}}/>
      <Image  className="temp" src="img/exchange.png"  />
        <Row>
        <ButtonGroup size="lg" className="mb-2">
    <Button variant="outline-secondary"style={{color:"black"}}>회의록 변환</Button>
    <Button variant="outline-secondary"style={{color:"black"}}>회의록 요약</Button>
    
  </ButtonGroup>
        </Row>
      </Container>
      
    </div>
  )
}

function Detail(){
  return (
    <div className="DetailOutLine">
      <div className="DetailCategory">
        회의제목ㅤ:  거래처 입찰건3
      </div>

      <hr/>

      <div className="DetailCategory2">
        회의날짜ㅤ: 2021.08.30
      </div>

      <hr/>

      <div className="DetailCategory2">
        참석자ㅤㅤ: 김부장,강대리,이사원,정대표
      </div>

      <hr/>
      <div className="DetailCategory2">
        회의내용</div>

        <div className="DetailMinutes">

            1. 동해물과 백두산이 마르고 닳도록
                하느님이 보우하사 우리나라 만세
                무궁화 삼천리 화려 강산
                대한 사람 대한으로 길이 보전하세

                2. 남산 위에 저 소나무 철갑을 두른 듯
                바람 서리 불변함은 우리 기상일세
                무궁화 삼천리 화려 강산
                대한 사람 대한으로 길이 보전하세

                3. 가을 하늘 공활한데 높고 구름 없이
                밝은 달은 우리 가슴 일편단심일세
                무궁화 삼천리 화려 강산
                대한 사람 대한으로 길이 보전하세

                4. 이 기상과 이 맘으로 충성을 다하여
                괴로우나 즐거우나 나라 사랑하세
                무궁화 삼천리 화려 강산
                대한 사람 대한으로 길이 보전하세
        
        </div>
        <div className="ButtonGroup">
        <ButtonGroup vertical>
        <Button variant="outline-danger">음성파일다운</Button>

        <Button variant="outline-danger">회의록다운</Button>
        <Button variant="outline-success">수정하기</Button>
        <Button variant="outline-success">삭제하기</Button>
        <Button variant="outline-info">메일전송</Button>
        </ButtonGroup >
        </div>
       
  
  

      

     
      
    </div>
  )
}

export default App;
