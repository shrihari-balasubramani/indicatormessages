import styled from '@xstyled/styled-components';

const MessagesWithFilter = styled.div`
  display: flex;
  width: 100%;
  & .small-portion {
    width: 30%;
    padding: 3;
    box-sizing: border-box;
  }
  & .large-portion {
    width: 70%;
    padding: 2;
    box-sizing: border-box;
    & .fullWidth {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
    }
  }
`;

export default MessagesWithFilter;
