import { Section, GoBackButton, Title, ListOfReposContainer, Repo } from './styles';
import { FiArrowLeft } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

const ReposContainer = props => {
    const history = useHistory();
    const handleOnClick = route => history.push(route);
    return(
        <Section>
            <Title>Repos from: {(props.name)?.split(' ')[0]}</Title>
            <GoBackButton onClick={() => handleOnClick('/')}>
                <FiArrowLeft size={15} />
            </GoBackButton>
            <ListOfReposContainer>
                {(props?.repos).map(repo => (
                    <Repo onClick={() => window.location.href(repo?.html_url)} key={repo?.id}>
                        <h2>{repo?.name}</h2>
                        <p>{repo?.description}</p>
                    </Repo>
                ))}
            </ListOfReposContainer>
        </Section>
    );
};

export default ReposContainer;