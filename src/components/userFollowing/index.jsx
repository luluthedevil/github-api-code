import { Section, GoBackButton, Title, ListOfFollowingContainer, Person, Profile, ProfilePicture } from './styles';
import { FiArrowLeft } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

const UserFollowing = props => {
    const history = useHistory();
    const handleOnClick = route => history.push(route);
    return(
        <Section>
            <Title>Following from: {(props.name)?.split(' ')[0]}</Title>
            <GoBackButton onClick={() => handleOnClick('/')}>
                <FiArrowLeft size={15} />
            </GoBackButton>
            <ListOfFollowingContainer>
                {(props?.following).map(following => (
                    <Person onClick={() => window.location.href(following?.html_url)} key={following?.id}>
                        <Profile>
                            <ProfilePicture src={following?.avatar_url}/>
                            <h2>{following?.login}</h2>
                        </Profile>
                    </Person>
                ))}
            </ListOfFollowingContainer>
        </Section>
    );
};

export default UserFollowing;