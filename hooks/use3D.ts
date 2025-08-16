import { useEffect, useRef } from 'react';
import * as THREE from 'three';

/
 * Interface for the 3D Model settings specific to luxury LRP cosmetics.
 */
interface ModelSettings {
    modelPath: string;
    scale: number;
    position: [number, number, number];
}

/
 * Custom hook for creating 3D interactive elements specific to luxury LRP cosmetics.
 * @returns {Object} - An object containing a ref to the 3D container and a function to initialize the 3D scene.
 */
export const use3D = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const sceneRef = useRef<THREE.Scene | null>(null);
    const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
    const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
    const modelSettings: ModelSettings = {
        modelPath: '/models/luxury_cosmetics_model.glb',
        scale: 1,
        position: [0, 0, 0],
    };

    /
     * Initialize the 3D scene for luxury LRP cosmetics.
     */
    const initScene = () => {
        if (containerRef.current) {
            // Create scene
            sceneRef.current = new THREE.Scene();
            sceneRef.current.background = new THREE.Color(0xffffff); // white background

            // Setup camera
            cameraRef.current = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            cameraRef.current.position.z = 5;

            // Setup renderer
            rendererRef.current = new THREE.WebGLRenderer({ antialias: true });
            rendererRef.current.setSize(window.innerWidth, window.innerHeight);
            containerRef.current.appendChild(rendererRef.current.domElement);

            // Load the 3D model
            const loader = new THREE.GLTFLoader();
            loader.load(modelSettings.modelPath, (gltf) => {
                const model = gltf.scene;
                model.scale.set(modelSettings.scale, modelSettings.scale, modelSettings.scale);
                model.position.set(...modelSettings.position);
                sceneRef.current?.add(model);
            });

            // Add ambient light
            const ambientLight = new THREE.AmbientLight(0xffa500, 0.5); // orange ambient light
            sceneRef.current.add(ambientLight);

            // Add directional light
            const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
            directionalLight.position.set(1, 1, 1);
            sceneRef.current.add(directionalLight);

            // Animation loop
            const animate = () => {
                requestAnimationFrame(animate);
                rendererRef.current?.render(sceneRef.current!, cameraRef.current!);
            };
            animate();
        }
    };

    useEffect(() => {
        initScene();
        return () => {
            if (rendererRef.current) {
                rendererRef.current.dispose();
            }
        };
    }, []);

    return { containerRef };
};