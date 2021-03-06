import styled from 'styled-components';

export const Section = styled.section`
    width: 400px;
    height: 420px;
    background: rgba(255,255,255,.95);
    border-radius: 10px;
    border-bottom: 10px solid #A020F0;
    margin-top: 15px;
    
    @media (max-width: 430px) {
        width: 300px;
    } 
`

export const GoBackButton = styled.button`
    width: 30px;
    height: 30px;
    border-radius: 15px;
    border: none;
    background: #A020F0;
    margin-left: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFF;
    transition: ease .3s;

    &:hover {
        transform: scale(1.05);
        transition: ease .3s;
        cursor: pointer;
    }
`

export const Title = styled.h1`
    font-size: 20px;
    font-weight: 700;
    margin-top: 10px;
    color: #444;
    width: 100%;
    text-align: center;
    height: 30px;
`

export const ListOfFollowingContainer = styled.h1`
    height: 350px;
    width: 100%;
    padding: 10px;
    overflow-y: scroll;
`

export const Person = styled.h2`
    width: 100%;
    height: 80px;
    background: rgba(0,0,0,.05);
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 10px;
    h2 {
        font-size: 15px;
        width: 100%;
        overflow: hidden;
        color: #444;
    }
    p {
        font-size: 12px;
        font-weight: 400;
        color: #777;
        width: 100%;
        height: 30px;
        overflow: hidden;
        line-height: 1.3;
        margin-top: 10px;
    }
`

export const Profile = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`

export const ProfilePicture = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 2px solid #aaa;
`