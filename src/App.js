

import * as THREE from 'three'
import { useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useIntersect, Image, ScrollControls, Scroll } from '@react-three/drei'
import React, { useEffect } from 'react';
import  Scriptnavbar  from './script-navbar'
import  Footer  from './footer'
import  Skills  from './skills'



function Item({ url, scale, ...props }) {
  const visible = useRef(false)
  const [hovered, hover] = useState(false)
  const ref = useIntersect((isVisible) => (visible.current = isVisible))
  const { height } = useThree((state) => state.viewport)
  useFrame((state, delta) => {
    ref.current.position.y = THREE.MathUtils.damp(ref.current.position.y, visible.current ? 0 : -height / 2 + 1, 4, delta)
    ref.current.material.zoom = THREE.MathUtils.damp(ref.current.material.zoom, visible.current ? 1 : 1.5, 4, delta)
    ref.current.material.grayscale = THREE.MathUtils.damp(ref.current.material.grayscale, hovered ? 0 : 1, 4, delta)
  })
  return (
    <group {...props}>
      <Image ref={ref} onPointerOver={() => hover(true)} onPointerOut={() => hover(false)} scale={scale} url={url} />
    </group>
  )
}


function Items() {
  const { width: w, height: h } = useThree((state) => state.viewport)
  return (
    <Scroll>
      <Item url="/1.png" scale={[w / 3, w / 3, 1]} position={[-w / 6, 0, 0]} />
      <Item url="/2.png" scale={[2, w / 3, 1]} position={[w / 30, -h, 0]} />
      <Item url="/3.png" scale={[w / 3, w / 5, 1]} position={[-w / 4, -h * 1, 0]} />
      <Item url="/4.png" scale={[w / 5, w / 5, 1]} position={[w / 4, -h * 1.2, 0]} />
      <Item url="/5.png" scale={[w / 5, w / 5, 1]} position={[w / 10, -h * 1.75, 0]} />
      <Item url="/6.png" scale={[w / 3, w / 3, 1]} position={[-w / 4, -h * 2, 0]} />
   
      <Item url="/8.png" scale={[w / 2, w / 2, 1]} position={[w / 4, -h * 3.0, 0]} />
      <Item url="/10.png" scale={[w / 3, w / 3, 1]} position={[-w / 5, -h * 3.0, 0]} />
      <Item url="/11.png" scale={[w / 2, w / 5, 1]} position={[-w / 5, -h * 5.1, 0]} />
      <Item url="/12.png" scale={[2, w / 3, 1]} position={[w / 3, -h* 5, 1]} />
      
    </Scroll>
  )
}



export const App = () => {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  let pages;
  if (windowHeight < 800) {
    pages = 7;
  } else if (windowHeight < 1200) {
    pages = 6;
  } else {
    pages = 5.1;
  }


  return (
    <Canvas orthographic camera={{ zoom: 80 }} gl={{ alpha: false, antialias: false, stencil: false, depth: false }} dpr={[1, 1.5]}>
      <color attach="background" args={['#f0f0f0']} />

      <ScrollControls damping={5} pages={pages}>
      <Items />
      <Scroll html style={{ width: '100%' }}>
        
        <h1 style={{ position: 'absolute', top: `50vh`, right: '5vw', transform: `translate3d(0,-100%,0)` }}>wir</h1>
        <h1 style={{ position: 'absolute', top: '180vh', left: '5vw' }}>bauen</h1>
        <h1 style={{ position: 'absolute', top: '260vh', right: '5vw'}}>dein</h1>
        <h1 style={{ position: 'absolute', top: '300vh', left: '5vw'}}>portfolio</h1>
        <h1 style={{ position: 'absolute', top: '385vh', right: '0vw'}}>Unser Angebot</h1>

    
          <span style={{ position: 'absolute', top: '410vh', left: '0vw'}}>
            
          <Skills/>
          </span>
          
          <Scriptnavbar/>
          
      </Scroll>
      
    </ScrollControls>
  </Canvas>
  
  );
};





