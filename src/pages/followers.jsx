import React, { useContext } from 'react';
import Container from '../components/container';
import UserFollowers from '../components/userFollowers';
import { context } from '../context';

const Followers = () => {
    const ctx = useContext(context);
    return(
        <Container>
            <UserFollowers name={ctx.userData?.name} followers={ctx.userFollowers}></UserFollowers>
        </Container>
    );
};

export default Followers;