import ListItem from './ListItem';
import styled from 'styled-components';

const StyledList = styled.ul`
  padding: 10px;
  box-shadow: 5px 7px 20px 0px #888888;
  max-width: 80%;
  border-radius: 1em;
`;

const List = () => {
  const fakeListItems = [
    { status: 'active', name: 'do one thing', id: 1 },
    { status: 'completed', name: 'do another thing', id: 2 },
    { status: 'removed', name: 'do one more thing', id: 3 },
  ];

  return (
    <StyledList>
      {fakeListItems.map((item) => (
        <div key={item.id}>
          <ListItem title={item.name} />
        </div>
      ))}
    </StyledList>
  );
};

export default List;
