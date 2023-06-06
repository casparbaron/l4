import * as THREE from 'three'
import { useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useIntersect, Image, ScrollControls, Scroll } from '@react-three/drei'

import Scriptnavbar from './script-navbar'
import Footer from './footer'
import Skills from './skills'

function Item({ url, scale, ...props }) {
  const visible = useRef(false)
  const [hovered, hover] = useState(false)
  const ref = useIntersect((isVisible) => (visible.current = isVisible))
  const { width, height } = useThree((state) => state.viewport)

  useFrame((state, delta) => {
    const itemHeight = height * scale[1]
    const positionY = -height / 2 + itemHeight / 2
    const targetPositionY = visible.current ? 0 : positionY

    ref.current.position.y = THREE.MathUtils.damp(ref.current.position.y, targetPositionY, 4, delta)
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
  const { width, height } = useThree((state) => state.viewport)

  return (
    <Scroll>
      <Item url="/1.png" scale={[width / 3, width / 3, 1]} position={[-width / 6, 0, 0]} />
      <Item url="/2.png" scale={[2, width / 3, 1]} position={[width / 30, -height, 0]} />
      <Item url="/3.png" scale={[width / 3, width / 5, 1]} position={[-width / 4, -height * 1, 0]} />
      <Item url="/4.png" scale={[width / 5, width / 5, 1]} position={[width / 4, -height * 1.2, 0]} />
      <Item url="/5.png" scale={[width / 5, width / 5, 1]} position={[width / 10, -height * 1.75, 0]} />
      <Item url="/6.png" scale={[width / 3, width / 3, 1]} position={[-width / 4, -height * 2, 0]} />
      <Item url="/8.png" scale={[width / 2, width / 2, 1]} position={[width / 4, -height * 3.0, 0]} />
      <Item url="/10.png" scale={[width / 3, width / 3, 1]} position={[-width / 5, -height * 3.3, 0]} />
    </Scroll>
  )
}

export const App = () => (
  <Canvas orthographic camera={{ zoom: 80 }} gl={{ alpha: false, antialias: false, stencil: false, depth: false }} dpr={[1, 1.5]}>
    <color attach="background" args={['#f0f0f0']} />

    <ScrollControls damping={5} pages={5}>
      <Items />
      <Scroll html style={{ width: '100%' }}>
        <h1 style={{ position: 'absolute', top: `50vh`, right: '5vw', transform: `translate3d(0,-100%,0)` }}>
          wir
        </h1>
        <h1 style={{ position: 'absolute', top: '180vh', left: '5vw' }}>bauen</h1>
        <h1 style={{ position: 'absolute', top: '260vh', right: '5vw' }}>dein</h1>
        <h1 style={{ position: 'absolute', top: '300vh', left: '5vw' }}>portfolio</h1>
        <h1 style={{ position: 'absolute', top: '410vh', right: '0vw' }}>Unser Angebot</h1>

        <span style={{ position: 'absolute', top: '440vh', left: '0vw' }}>
          <Skills />
        </span>

        <Scriptnavbar />
      </Scroll>
    </ScrollControls>
  </Canvas>
)
