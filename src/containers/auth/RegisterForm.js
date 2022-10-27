// useEffect import 
import React,{useEffect} from 'react';
// useSelector, useDispatch import
import { useDispatch, useSelector } from 'react-redux';
// auth module 액션 생성함수 import
import { changeField, initializeForm, register } from '../../modules/auth';
// AuthForm import
import AuthForm from '../../Components/auth/AuthForm';


const RegisterForm = () => {
    const dispatch = useDispatch();
    const { form, auth, authError } = useSelector(({ auth }) => ({
        form: auth.register,
        auth: auth.auth,
        authError: auth.authError,
      }));
  
    // input change event 로 액션 디스패치. 디스패치 : 액션을 발생시키는 것.
    const onChange = e => {
        const { value, name } = e.target;
        dispatch(
          changeField({
            form: 'register',
            key: name,
            value,
          }),
        );
      };
    // form submit event 로 register 함수에 현재 username, password 를 파라미터로 넣어서 액션 디스패치. 
    // 사가에 대한 API 요청 처리후, 이에 대한 결과를 auth/authError 를 통해 조회
    const onSubmit = e => {
        e.preventDefault();
        const { username, password, passwordConfirm } = form;
        console.log(e);
        
        
        if (password !== passwordConfirm){
            // 오류처리 할 것임
            return ; 
        }
        dispatch(register({ username, password }));
    };
    // 컴포넌트 초기 렌더링시 form 초기화
    useEffect(()=>{
        // 액션 생성 함수 import
        dispatch(initializeForm('register'));
    },[dispatch]);

    // auth, authError 값 중에서 무엇이 유효한지에 따라 다른 작업을 함.
    useEffect(()=>{
        if (authError){
            console.log('오류 발생');
            console.log(authError);
            return;
        }
        if(auth){
            console.log('회원가입 성공');
            console.log(auth);
        }
    },[auth,authError])

    return (
        
       <AuthForm
       type="register"
       form={form}
       onChange={onChange}
       onSubmit={onSubmit} 
       />
    );
};

export default RegisterForm;
