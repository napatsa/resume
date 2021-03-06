import { Box, Flex } from '@react-three/flex';

import { Text3D } from 'components';
import { animated } from '@react-spring/three';

const Title: React.FC<any> = ({ pos = [0, 0, 0] }) => {
  return (
    <animated.group position={pos}>
      <Flex flexDirection="row" justifyContent="center" alignItems="center">
        <Box marginLeft={45}>
          <Text3D>A</Text3D>
        </Box>
        <Box marginLeft={1}>
          <Text3D>B</Text3D>
        </Box>
        <Box marginLeft={4}>
          <Text3D>O</Text3D>
        </Box>
        <Box marginLeft={0}>
          <Text3D>U</Text3D>
        </Box>
        <Box marginLeft={0}>
          <Text3D>T</Text3D>
        </Box>
      </Flex>
    </animated.group>
  );
};

export default Title;
