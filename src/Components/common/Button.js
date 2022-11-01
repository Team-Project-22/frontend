import React from 'react';
// css import
import styled,{css} from 'styled-components';
// Link import
import { Link } from 'react-router-dom';

// css 스타일 따로 분리
const buttonStyle = css`
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.25rem 1rem -1rem;
  color: white;
  outline: none;
  cursor: pointer;
  background: #E44C64;
  /* width 100% props */
  ${props =>
    props.fullWidth &&
    css`
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
      width: 100%;
      font-size: 1.125rem;
    `}
    /* color props */
  ${props =>
    props.cyan &&
    css`
      background: #2D2E38;
      &:hover {
        background: #2D2E38;
      }
    `}
`;




// buttonStyle 값 재사용.
const StyledButton = styled.button`
  ${buttonStyle}
`;
// 마찬가지로 Link 태그에도 똑같은 스타일 재사용
const StyledLink = styled(Link)`
  
`;
// Button 에 받아오는 props 를 모두 styledButton 에 전달한다는 의미(...props)
const Button = props => {
  // to 라는 props 가 있다면 링크 컴포넌트를 띄워주고, 아니면 버튼 컴포넌틀를 띄워줌.
  return props.to ? (
    // styled 로 직접 감싸서 만든 컴포넌트이기 때문에 임의로 props 가 필터링 되지 않는다. 
    // 그래서 StyledLink 를 사용하는 과정에서 props.cyan 의 값을 숫자 1과 0 으로 변환해주었는데, 
    // 필터링이 되지 않으면, true, false 의 불리언 값으로 Link에서 사용하는 a태그에 그대로 전달되는데, a 태그는 불리언값을 임의 props로 설정되지 않고 오직 숫자/문자열만 허용하기 때문에 숫자로 변환해준 것.
    <StyledLink {...props} cyan={props.cyan ? 1 : 0} />
  ) : (
    // styled.button 의 경우 cyan과 같은 임의의 props 가 자동으로 필터링되어 스타일을 만드는 용도로만 사용되고, 실제 button 엘리먼트에 속성이 전달되지 않는다.
    <StyledButton {...props} />
  );
};

export default Button;