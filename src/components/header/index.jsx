import React, { useState, useContext } from 'react';
import { FiSearch } from 'react-icons/fi';

import {
    HeaderSection,
    HeaderTitle,
    HeaderInputContainer,
    HeaderInput,
    HeaderSearchButton
} from './styles';

import client from '../../services/client.js'
import { context } from '../../context';

const Header = () => {
    const ctx = useContext(context);
    const [searchedValue, setSearchedValue] = useState('');
    async function getUserData(){
        try{
            const response = await client.get(`/${searchedValue}`);
            const repos = await client.get(`/${searchedValue}/repos`);
            const followers = await client.get(`/${searchedValue}/followers`);
            const following = await client.get(`/${searchedValue}/following`);
            
            ctx.setUserData(response.data);
            ctx.setUserRepos(repos.data);
            ctx.setUserFollowers(followers.data);
            ctx.setUserFollowing(following.data);
        } catch (err){
            console.log(err);
            ctx.setUserData(err);
        }
    };
    return(
        <HeaderSection>
            <HeaderTitle>Github Profile</HeaderTitle>
            <HeaderInputContainer>
                <HeaderInput value={searchedValue} onChange={event => setSearchedValue(event.target.value)} />
                
                <HeaderSearchButton onClick={getUserData}>
                    <FiSearch size={15} />
                </HeaderSearchButton>
            </HeaderInputContainer>
        </HeaderSection>
    )
};

export default Header;