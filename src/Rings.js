import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export function Rings() {
    const itemsRef = useRef([]);

    useFrame(state => {
        for(let i = 0; i < itemsRef.current.length; i++) {
            let mesh = itemsRef.current[i];
            let z = (i - 7) * 3.5;
            mesh.position.set(0, 0, -z);
        }
    })

    return (
        <>
          {[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map((v, i) => (
            <mesh
              castShadow
              receiveShadow
              position = {[0, 0, 0]}
              key={i}
              ref={(el) => (itemsRef.current[i] = el)}
            >
                <torusGeometry args={[3.35, 0.05, 16, 100]} />
                <meshStandardMaterial emissive={[0.5, 0.5, 0.5]} color={[0, 0, 0]} />
            </mesh>
            ))}
        </>
    )
}
