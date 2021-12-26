import { Box, Flex } from '@react-three/flex';
import { Canvas3JS, Text3D } from 'components';

import { Suspense } from 'react';

const About = () => {
  return (
    <div>
      <Suspense fallback={null}>
        <Canvas3JS>
          <Flex flexDirection="row" justifyContent="center" alignItems="center">
            <Box marginLeft={50}>
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
        </Canvas3JS>
      </Suspense>
    </div>
  );
};

export default About;
