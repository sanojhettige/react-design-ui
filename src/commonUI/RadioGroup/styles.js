import styled from 'styled-components';

import Flex from '../Flex';
import { RadioContainer } from '../Radio/styles';

export const GroupContainer = styled(Flex)`
  display: inline-flex;
  flex-direction: column;
  align-items: stretch;

  & ${RadioContainer} + ${RadioContainer} {
    margin-top: 10px;
  }
`;
