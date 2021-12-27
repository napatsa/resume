import { Box, Flex } from '@react-three/flex';

import { Text3D } from 'components';

const Title: React.FC = () => {
  return (
    <Flex flexDirection="row" justifyContent="center" alignItems="center">
      <Box marginLeft={55}>
        <Text3D>W</Text3D>
      </Box>
      <Box marginLeft={-5}>
        <Text3D>O</Text3D>
      </Box>
      <Box marginLeft={0}>
        <Text3D>R</Text3D>
      </Box>
      <Box marginLeft={4}>
        <Text3D>K</Text3D>
      </Box>
    </Flex>
  );
};

export default Title;
