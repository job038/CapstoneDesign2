import { useState } from "react";
import React from "react";
import {Alert,Form,Button} from 'react-bootstrap';

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
                setRegisterInfo({...copy,pw:e.target.value})
              }}/>
            </Form.Group>
  
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="password" placeholder="비밀번호 확인"  onChange={(e)=>{
                let copy = {...registerInfo}
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

  export default Register;