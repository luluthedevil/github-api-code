import React from 'react';
import { useHistory } from 'react-router-dom';
import { Container, NumberContainer } from './styles.js';

const UserNumbers = props => {
    const history = useHistory();
    const handleOnClick = route => history.push(route);
    return (
        <Container>
            <NumberContainer onClick={() => handleOnClick('/repos')}>
                <h2>{props.repos}</h2>
                <h3>Repos</h3>
            </NumberContainer>

            <NumberContainer onClick={() => handleOnClick('/followers')}>
                <h2>{props.followers}</h2>
                <h3>Followers</h3>
            </NumberContainer>

            <NumberContainer onClick={() => handleOnClick('/following')}>
                <h2>{props.following}</h2>
                <h3>Following</h3>
            </NumberContainer>
        </Container>
    )
};

export default UserNumbers