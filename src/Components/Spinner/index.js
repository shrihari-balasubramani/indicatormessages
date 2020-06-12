import styled from '@xstyled/styled-components';
import CircularProgress from '@material-ui/core/CircularProgress';
import { th } from '@xstyled/system';

const StyledCircularProgress = styled(CircularProgress)`
  color: ${th.color('primary.main')};
`;

export default StyledCircularProgress;
