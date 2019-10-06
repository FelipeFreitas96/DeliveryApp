import styled from 'styled-components';

const Header = styled.View`
  height: 160px;
  backgroundColor: white;
`;

const TopRow = styled.View`
  height: 95px;
  flex-direction: row;
`;

const TopRowFirst = styled.View`
  flex: 1;
`;

const TopRowMiddle = styled.View`
  flex: 1;
  align-items: center;
`;

const TopRowLast = styled.View`
  flex: 1;
  align-items: flex-end;
`;

export { Header, TopRow, TopRowFirst, TopRowMiddle, TopRowLast };
