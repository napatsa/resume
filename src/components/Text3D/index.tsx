import * as THREE from 'three';

import { animated, useSpring } from '@react-spring/three';
import { extend, useFrame, useLoader } from '@react-three/fiber';
import { useEffect, useMemo, useRef, useState } from 'react';

import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import React from 'react';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import fontPassion from 'assets/fonts/PassionOneBold.blob';
import scssVariables from '_export.scss';
import { useDebouncedCallback } from 'use-debounce';

extend({ TextGeometry });

const Text = ({
  children,
  vAlign = 'center',
  hAlign = 'center',
  size = 1.5,
  color = scssVariables.primary,
  ...props
}: any) => {
  const [hover, setHover] = useState(false);
  const font = useLoader(FontLoader, fontPassion);
  const config = useMemo(
    () => ({
      font,
      size: 230,
      height: 20,
      curveSegments: 33,
      bevelEnabled: true,
      bevelThickness: 8,
      bevelSize: 2,
      bevelOffset: 0,
      bevelSegments: 8,
    }),
    [font]
  );
  const mesh = useRef();

  const debouncedHover = useDebouncedCallback((value) => {
    setHover(value);
  }, 300);

  const { rotate } = useSpring({
    rotate: hover ? [0, THREE.MathUtils.degToRad(-45), 0] : [0, 0, 0],
    config: { clamp: true },
  });

  useEffect(() => {
    const size = new THREE.Vector3();
    (mesh.current as any).geometry.center();
    (mesh.current as any).geometry.computeBoundingBox();
    (mesh.current as any).geometry.boundingBox.getSize(size);
    (mesh.current as any).position.x =
      hAlign === 'center' ? -size.x / 2 : hAlign === 'right' ? 0 : -size.x;
    (mesh.current as any).position.y =
      vAlign === 'center' ? -size.y / 2 : vAlign === 'top' ? 0 : -size.y;
  }, [children]);

  return (
    <group {...props} scale={[0.1 * size, 0.1 * size, 0.1]}>
      <animated.mesh
        ref={mesh}
        rotation={rotate as any}
        onPointerOver={() => {
          setHover(true);
          debouncedHover.cancel();
        }}
        onPointerOut={() => {
          debouncedHover(false);
        }}
      >
        <textGeometry args={[children, config]} />
        <meshStandardMaterial color={color} />
      </animated.mesh>
    </group>
  );
};

export default React.memo(Text);
