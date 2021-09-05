import { Section, GoBackButton, Title, ListOfFollowersContainer, Person, Profile, ProfilePicture } from './styles';
import { FiArrowLeft } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

const UserFollowers = props => {
    const history = useHistory();
    const handleOnClick = route => history.push(route);
    return(
        <Section>
            <Title>Followers from: {(props.name)?.split(' ')[0]}</Title>
            <GoBackButton onClick={() => handleOnClick('/')}>
                <FiArrowLeft size={15} />
            </GoBackButton>
            <ListOfFollowersContainer>
                {(props?.followers).map(followers => (
                    <Person onClick={() => window.location.href(followers?.html_url)} key={followers?.id}>
                        <Profile>
                            <ProfilePicture src={followers?.avatar_url}/>
                            <h2>{followers?.login}</h2>
                        </Profile>
                    </Person>
                ))}
            </ListOfFollowersContainer>
        </Section>
    );
};

export default UserFollowers;