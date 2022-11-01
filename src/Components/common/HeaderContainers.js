import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../../components/common/Header';
import user from '../../modules/user';


const HeaderContainer = () => {
    // user 리덕스 연결
    const { user } = useSelector(({user}) => ({ user : user.user}));
    return (
        <div>
            <Header user = {user} />
        </div>
    );
};

export default HeaderContainer;