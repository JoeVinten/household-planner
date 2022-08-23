import { AiOutlineDelete } from 'react-icons/ai';
import styled from 'styled-components';

const StyledListItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5em 0;
`;

const StyledCheckbox = styled.input`
  -webkit-appearance: none;
  appearance: none;
  margin: 0;
  width: 2.5em;
  height: 2.5em;
  border: 0.15em solid #073b4c;
  border-radius: 50%;

  &:checked {
    background: #06d6a0;
    border: #06d6a0;
    clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
  }
`;

const StyledLabel = styled.label`
  font-size: 1.5rem;
  display: flex;
  align-items: center;
`;

const StyledLabelText = styled.h4`
  font-weight: normal;
  padding-left: 1em;
`;

const ListItem = ({ title }: { title: string }) => {
  return (
    <li>
      <StyledListItem>
        <div>
          <StyledLabel>
            <StyledCheckbox type="checkbox" />
            <StyledLabelText> {title}</StyledLabelText>
          </StyledLabel>
        </div>
        <AiOutlineDelete />
      </StyledListItem>
    </li>
  );
};

export default ListItem;
