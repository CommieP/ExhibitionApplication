const data = [
    {
        index: 0,
        name: "Piyush Jain",
        projectName: "1 BHK Apartment",
        imageurl: "../src/assets/tileImages/image.png",
        url: "../src/assets/models/scene0.glb",
        sceneData: {
            cameraPosition: { x: -1.5, y: 2.4, z: 5 },
            cameraRotation: { y : -Math.PI/2 },
            lightIntensity: 1.75,
            modelScale: 1.5,
        }
    }, 
    {
        index: 1,
        name: "Anirudh P",
        projectName: "Bat Cave",
        imageurl: "../src/assets/tileImages/image1.jpeg",
        url: "../src/assets/models/scene1.gltf",
        sceneData: {
            cameraPosition: { x: -3, y: 2.4, z: 6 },
            cameraRotation: { y : -Math.PI/2 },
            lightIntensity: 2.5,
            modelScale: 1,
        }
    }, 
    {
        index: 2,
        name: "Arya K",
        projectName: "Cozy Corner",
        imageurl: "../src/assets/tileImages/image2.jpeg",
        url: "../src/assets/models/scene2.gltf",
        sceneData: {
            cameraPosition: { x: -35, y: 4, z: 0 },
            cameraRotation: { y : 1.4 },
            lightIntensity: 2,
            modelScale: 2,
        }
    }, 
    {
        index: 3,
        name: "Arya N",
        projectName: "House of Horror",
        imageurl: "../src/assets/tileImages/image3.jpeg",
        url: "../src/assets/models/scene3.gltf",
        sceneData: {
            cameraPosition: { x: 0, y: 1.6, z: 5  },
            cameraRotation: { y : 0  },
            lightIntensity: 2,
            modelScale: 1,
        }
    }, 
    {
        index: 4,
        name: "Dhruvika A",
        projectName: "Nobita's room",
        imageurl: "../src/assets/tileImages/image4.jpeg",
        url: "../src/assets/models/scene4.gltf",
        sceneData: {
            cameraPosition: { x: 0, y: 1.6, z: 0  },
            cameraRotation: { y : 0  },
            lightIntensity: 3 ,
            modelScale: 0.5,
        }
    }, 
    {
        index: 5,
        name: "Inayath A",
        projectName: "Bedroom",
        imageurl: "../src/assets/tileImages/image5.jpeg",
        url: "../src/assets/models/scene5.gltf",
        sceneData: {
            cameraPosition: { x: 0, y: 1.4, z: 0  },
            cameraRotation: { y : 0  },
            lightIntensity: 3 ,
            modelScale: 1,
        }
    }, 
    {
        index: 6,
        name: "Janhavi S",
        projectName: "",
        imageurl: "",
        url: "",
    }, 
    {
        index: 7,
        name: "Kartik A",
        projectName: "",
        imageurl: "",
        url: "",
    }, 
    {
        index: 8,
        name: "M Ruman",
        projectName: "Echoes of Earth",
        imageurl: "../src/assets/tileImages/image8.jpeg",
        url: "../src/assets/models/scene8.gltf",
        sceneData: {
            cameraPosition: { x: 1, y: 1.4, z: -4  },
            cameraRotation: { y :4  },
            lightIntensity: 3 ,
            modelScale: 4,
        }
    }, 
    {
        index: 9,
        name: "Natansh R",
        projectName: "shame",
        imageurl: "",
        url: "",
    }, 
    {
        index: 10,
        name: "Nihal L",
        projectName: "",
        imageurl: "",
        url: "",
        sceneData: {
            cameraPosition: { x: 0, y: 1.4, z: 0  },
            cameraRotation: { y : 0  },
            lightIntensity: 3 ,
            modelScale: 1,
        }
    }, 
    {
        index: 11,
        name: "Nishesh D",
        projectName: "Space Pod",
        imageurl: "../src/assets/tileImages/image11.jpeg",
        url: "../src/assets/models/scene11.gltf",
        sceneData: {
            cameraPosition: { x: 0, y: 1, z: 0  },
            cameraRotation: { y : Math.PI+0.1 },
            lightIntensity: 3 ,
            modelScale: 5,
        }
    }, 
    {
        index: 12,
        name: "Ragini B",
        projectName: "Stranger Things",
        imageurl: "../src/assets/tileImages/image12.jpeg",
        url: "../src/assets/models/scene12.gltf",
        sceneData: {
            cameraPosition: { x: -3, y: 1.6, z: -0.2  },
            cameraRotation: { y : 3.5 },
            lightIntensity: 3 ,
            modelScale: 0.09,
        }
    }, 
    {
        index: 13,
        name: "Sahithya S",
        projectName: "Living Room",
        imageurl: "../src/assets/tileImages/image13.jpeg",
        url: "../src/assets/models/scene13.gltf",
        sceneData: {
            cameraPosition: { x: 0.3, y: 0.4, z: 0  },
            cameraRotation: { y : 0 },
            lightIntensity: 3 ,
            modelScale: 0.09,
        }
    },
    {
        index: 14,
        name: "Sakshi D",
        projectName: "Living Room",
        imageurl: "../src/assets/tileImages/image14.jpeg",
        url: "../src/assets/models/scene14.gltf",
        sceneData: {
            cameraPosition: { x: 4, y: 0.4, z: -1 },
            cameraRotation: { y : 0 },
            lightIntensity: 1 ,
            modelScale: 1,
        }
    }, 
    {
        index: 15,
        name: "Shaheen F",
        projectName: "Haunted House of Shaheen",
        imageurl: "../src/assets/tileImages/image15.jpeg",
        url: "../src/assets/models/scene15.gltf",
        sceneData: {
            cameraPosition: { x: 0, y: 2, z: 0 },
            cameraRotation: { y : 0 },
            lightIntensity: 1 ,
            modelScale: 0.5,
        }
    }, 
    {
        index: 16,
        name: "Sushmita M",
        projectName: "Art Room",
        imageurl: "../src/assets/tileImages/image16.jpeg",
        url: "../src/assets/models/scene16.gltf",
        sceneData: {
            cameraPosition: { x: 0, y: 2, z: 0 },
            cameraRotation: { y : 0 },
            lightIntensity: 1.5 ,
            modelScale: 0.75,
        }
    },
];

export default data