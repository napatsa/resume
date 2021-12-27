import { Box, Flex } from '@react-three/flex';

import { Text3D } from 'components';
import { animated } from '@react-spring/three';

const Title: React.FC<any> = ({ pos = [0, 0, 0] }) => {
  return (
    <animated.group position={pos}>
      <Flex flexDirection="row" justifyContent="center" alignItems="center">
        <Box margin={1} marginLeft={40}>
          <Text3D>S</Text3D>
        </Box>
        <Box marginLeft={4}>
          <Text3D>K</Text3D>
        </Box>
        <Box marginLeft={-12}>
          <Text3D>I</Text3D>
        </Box>
        <Box marginLeft={12}>
          <Text3D>L</Text3D>
        </Box>
        <Box marginLeft={3}>
          <Text3D>L</Text3D>
        </Box>
      </Flex>
    </animated.group>
  );
};

export default Title;
