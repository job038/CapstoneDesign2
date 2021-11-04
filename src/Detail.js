import React from 'react';
import {ButtonGroup,Button} from 'react-bootstrap';

function Detail2(){
    return (
      <>
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
      </>
    )
  }
  
export default Detail2;