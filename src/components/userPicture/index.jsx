import { Container, ProfilePicture } from './styles.js';

const UserPicture = props => (
    <Container>
        <ProfilePicture src={props?.url} alt={props?.alternativeText}/>
    </Container>
);

export default UserPicture;