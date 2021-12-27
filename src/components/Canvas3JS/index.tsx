import { Canvas } from '@react-three/fiber';

const Canvas3JS: React.FC<any> = ({ children, ...props }) => {
  return (
    <Canvas camera={{ position: [0, 1, 40] }} {...props}>
      <pointLight position={[-20, 40, 120]} intensity={0.9} />
      {children}
    </Canvas>
  );
};

export default Canvas3JS;
