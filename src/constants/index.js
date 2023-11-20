import {
    fyp,
    metaverse,
    metamory,
    metaprint,
    mia1,
    mia2,
    mia3,
    mia4,
    sketchfab,
    Garden,
    table,
    link,
    multiTool,
    miterSaw,
    blade,
    drillPress,
    drum,
    musicBox,
    threejs,
    AIcar,
    HKUST,
    hkust,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];

  const experiences = [
    {
      title: "Student Technical Advisor",
      company_name: "HKUST",
      icon: HKUST,
      iconBg: "#383E56",
      date: "09/2020 – 05/2022",
      points: [
        "Provide instructional support to students, offering guidance and workshops to help them understand course materials.",
        "Collaborate on producing tutorial videos for power tool safety training.",
        
      ],
    },
    {
      title: "3D Engineer Internship",
      company_name: "Metamory",
      icon: metamory,
      iconBg: "#E6DEDD",
      date: "10/2022 – 03/2023",
      points: [
        "Create demonstration videos on virtual cemeteries for pets.",
        "Design and manufacture tailor-made printing products, including 3D printing, sanding, and spray painting.",
      ],
    },
    {
      title: "3D Product Design Internship",
      company_name: "Metaprint",
      icon: metaprint,
      iconBg: "#383E56",
      date: "06/2023 – 08/2023",
      points: [
        "Develop customized one-to-one metaverse and create custom 3D avatars using Oncyber, Vroid studio, and Blender.",
        "Organize and teach STEAM courses, including 3D modeling, and animation.",
        "Design and manufacture merchandise based on client’s needs.",
        "Visualize product designs in 3D space.",
      ],
    },
  ];
  
  const projects = [
    {
      name: "2022-2023 FYP – mUShroom fanTasy – A 3D game Built Around Campus",
      description:
      [
        "A 3D game related to the daily story of the Engineering Students in HKUST. In this project,",
        " I have acquired the skills to create an open-world 3D map, design enemy game assets through meshing and animation, as well as efficiently divide tasks between the developer and modeling teams.",      
      ],
      tags: [
        {
          name: "Unity",
          color: "light-yellow-text-gradient",
        },
        {
          name: "Blender",
          color: "orange-text-gradient",
        },
        {
          name: "Illustrator",
          color: "purple-text-gradient",
        },
        {
          name: "Vroid Studio",
          color: "yellow-text-gradient",
        },
      ],
      image: hkust,
      source_code_link: "https://youtu.be/kaq0LQ05Gx8",
    },
    {
      name: "CCC Rotary Secondary School Metaverse Scene and Avatar Creation",
      description:
      [
        "Metaverse that includes five school-related scenes and student avatar. ",
        "This project utilizes 3D scanning and 3D modeling to reappear the facilities in the school.",
      ],
      tags: [
        {
          name: "Oncyber",
          color: "blue-text-gradient",
        },
        {
          name: "Blender",
          color: "orange-text-gradient",
        },
        {
          name: "Vroid Studio",
          color: "yellow-text-gradient",
        },
        {
          name: "Illustrator",
          color: "purple-text-gradient",
        },
      ],
      image: metaverse,
      source_code_link: "https://oncyber.io/spaces/0GXlNrppSVpb88FiTFuo",
    },
    {
      name: "COMP4441 Mia1",
      description:
        "An AMD that rearrange scenes from Bocchi the Rock to follow the music of opening 2 of Re: zero.",
      tags: [
        {
          name: "Adobe Premiere Pro",
          color: "pink-text-gradient",
        },
      ],
      image: mia1,
      source_code_link: "https://youtu.be/VHXkMMe0yvE",
    },
    {
      name: "COMP4441 Mia2",
      description:
        "A video remix of the dodgeball scenes in Spy X Family and Hunter X Hunter.",
      tags: [
        {
          name: "Adobe Premiere Pro",
          color: "pink-text-gradient",
        },
      ],
      image: mia2,
      source_code_link: "https://youtu.be/vtznSjkKG_0",
    },
    {
      name: "COMP4441 Mia3",
      description:
        "This project utilizes Blender to create a MMD of Team Rocket.",
      tags: [
        {
          name: "Adobe Premiere Pro",
          color: "pink-text-gradient",
        },
        {
          name: "Blender",
          color: "orange-text-gradient",
        },
      ],
      image: mia3,
      source_code_link: "https://youtu.be/vtznSjkKG_0",
    },
    {
      name: "COMP4441 Mia4",
      description:
        "This project utilizes AI technology to generate lyrics, synchronize AI-generated voices with music and animate image characters so that their lips follow the music.",
      tags: [
        {
          name: "Adobe Premiere Pro",
          color: "pink-text-gradient",
        },
        {
          name: "Microsoft Text to Speech",
          color: "deepblue-text-gradient",
        },
        {
          name: "Adobe Audition",
          color: "green-text-gradient",
        },
      ],
      image: mia4,
      source_code_link: "https://youtu.be/_gcv_XP0pCM",
    },
    {
      name: "3D Garden Cemetery",
      description:
      "This project visualize an environmental garden cemetery, providing comfortable and free space to pets after death.",      
      tags: [
        {
          name: "Blender",
          color: "orange-text-gradient",
        },
      ],
      image: Garden,
      source_code_link: "https://youtu.be/OrnF5YrHCMs",
    },
    {
      name: "Customized Table",
      description:
        "This project is a table that utilizes Fusion 360 in sketching, and made by using aluminium extrusion and wood. Which aims to be mobile, detachable and combinable",
      tags: [
        {
          name: "Fusion 360",
          color: "orange-red-gradient",
        },
        {
          name: "Power Tools",
          color: "white-text-gradient",
        },
      ],
      image: table,
      source_code_link: "https://a360.co/3FApvlE",
    },
    {
      name: "Sci-fi Music Box",
      description:
        "This project is to tailor-made a PCB case with SCi-fi elements.",
      tags: [
        {
          name: "Fusion 360",
          color: "orange-red-gradient",
        },
        {
          name: "Illustrator",
          color: "purple-text-gradient",
        },
        {
          name: "Blender",
          color: "orange-text-gradient",
        },
      ],
      image: musicBox,
      source_code_link: "https://a360.co/3YToZX5",
    },
    {
      name: "Sci-fi AI Car",
      description:
        "This project is to tailor-made a AI car with SCi-fi elements.",
      tags: [
        {
          name: "Fusion 360",
          color: "orange-red-gradient",
        },
        {
          name: "Illustrator",
          color: "purple-text-gradient",
        },
      ],
      image: AIcar,
      source_code_link: "https://a360.co/3NgAtQD",
    },
    {
      name: "Power Tools Tutorial: Basic Usage and Operation of Multi Tool",
      description:
      "This project create a tutorial that shows the basic usage and operation of a multi tool",
      tags: [
        {
          name: "Adobe premiere pro",
          color: "pink-text-gradient",
        },
        {
          name: "Power Tools",
          color: "white-text-gradient",
        },
      ],
      image: multiTool,
      source_code_link: "https://youtu.be/gUIL1wr-Y8c",
    },
    {
      name: "Power Tools Tutorial: Basic operation of Makita LS0714 Miter Saw",
      description:
        "This project create a tutorial that shows the basic operation of Makita LS0714 Miter Saw.",
      tags: [
        {
          name: "Adobe premiere pro",
          color: "pink-text-gradient",
        },
        {
          name: "Power Tools",
          color: "white-text-gradient",
        },
      ],
      image: miterSaw,
      source_code_link: "https://youtu.be/lQsEnYA1yBw",
    },
    {
      name: "Power Tools Tutorial: How to change Miter Saw Blade?",
      description:
        "This project create a tutorial that shows the way to change the blade of Mikita Miter Saw.",
      tags: [
        {
          name: "Adobe premiere pro",
          color: "pink-text-gradient",
        },
        {
          name: "Power Tools",
          color: "white-text-gradient",
        },
      ],
      image: blade,
      source_code_link: "https://youtu.be/hdvupAb8Nvk",
    },
    {
      name: "Power Tools Tutorial: Drill Press",
      description:
        "This project create a tutorial that shows the basic usage of a drill press.",
      tags: [
        {
          name: "Adobe premiere pro",
          color: "pink-text-gradient",
        },
        {
          name: "Power Tools",
          color: "white-text-gradient",
        },
      ],
      image: drillPress,
      source_code_link: "https://youtu.be/5eiBxO2Fwn4",
    },
    {
      name: "Drum Machine",
      description:
        "This project is to develop drum machine that allows users to create their own beats by clicking the squares on the drum pad or using keyboard shortcut. The 3D drum will have animation according to different pitch.",
      tags: [
        {
          name: "html",
          color: "white-text-gradient",
        },
        {
          name: "three.js",
          color: "white-text-gradient",
        },
        {
          name: "midi.js",
          color: "white-text-gradient",
        },
      ],
      image: drum,
      source_code_link: "https://youtu.be/6oIl41U3ubA",
    },
  ];
  
  export { experiences, projects };