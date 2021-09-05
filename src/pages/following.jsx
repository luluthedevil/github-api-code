import React, { useContext } from 'react';
import Container from '../components/container';
import UserFollowing from '../components/userFollowing';
import { context } from '../context';

const Following = () => {
    const ctx = useContext(context);
    return(
        <Container>
            <UserFollowing name={ctx.userData?.name} following={ctx.userFollowing}></UserFollowing>
        </Container>
    );
};

export default Following;