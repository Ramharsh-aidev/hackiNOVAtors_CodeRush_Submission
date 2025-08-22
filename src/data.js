// src/data.js

// This file holds all the content for the individual subject pages.

export const subjectData = {
  physics: {
    title: "Physics Simulations",
    description: "Delve into the foundational laws of the universe. From the smallest particles to the vastness of space, interact with the principles that govern reality.",
    accentColor: "text-blue-400", // For titles and glows
    simulations: [
      {
        id: 1,
        title: "Ohm's Law Circuit Builder",
        description: "Construct virtual circuits, manipulate voltage and resistance, and visualize the flow of current in real-time.",
        difficulty: "Easy",
        image: "https://via.placeholder.com/600x400.png/1d4ed8/ffffff?text=Circuit+Lab"
      },
      {
        id: 2,
        title: "Orbital Mechanics",
        description: "Launch satellites, adjust gravitational forces, and observe the elegant dance of celestial bodies.",
        difficulty: "Medium",
        image: "https://via.placeholder.com/600x400.png/5b21b6/ffffff?text=Orbital+Mechanics"
      },
      {
        id: 3,
        title: "Wave Interference",
        description: "Visualize how light and sound waves interact, creating patterns of constructive and destructive interference.",
        difficulty: "Medium",
        image: "https://via.placeholder.com/600x400.png/0e7490/ffffff?text=Wave+Patterns"
      },
      {
        id: 4,
        title: "Special Relativity",
        description: "Experience time dilation and length contraction as you approach the speed of light in this mind-bending simulation.",
        difficulty: "Hard",
        image: "https://via.placeholder.com/600x400.png/1e1b4b/ffffff?text=Relativity"
      },
    ]
  },
  chemistry: {
    title: "Chemistry Labs",
    description: "Explore the molecular world. Build molecules, simulate chemical reactions, and uncover the building blocks of matter.",
    accentColor: "text-orange-400",
    simulations: [
      {
        id: 1,
        title: "Molecule Builder (VSEPR)",
        description: "Construct 3D molecules and see how electron pairs repel each other to determine molecular geometry.",
        difficulty: "Easy",
        image: "https://via.placeholder.com/600x400.png/ea580c/ffffff?text=Molecule+Builder"
      },
      {
        id: 2,
        title: "Titration Analysis",
        description: "Perform a virtual titration to determine the concentration of an unknown solution with precision.",
        difficulty: "Medium",
        image: "https://via.placeholder.com/600x400.png/c2410c/ffffff?text=Titration"
      },
      {
        id: 3,
        title: "Gas Laws Simulator",
        description: "Manipulate pressure, volume, and temperature to understand the relationships defined by Boyle's and Charles's Laws.",
        difficulty: "Medium",
        image: "https://via.placeholder.com/600x400.png/9a3412/ffffff?text=Gas+Laws"
      },
    ]
  },
  biology: {
    title: "Biology Explorations",
    description: "Journey into the intricate systems of life. From the cellular level to entire ecosystems, witness the complexity of the natural world.",
    accentColor: "text-green-400",
    simulations: [
      {
        id: 1,
        title: "DNA Replication Fork",
        description: "An interactive simulation where you control the enzymes like helicase and polymerase to replicate a strand of DNA.",
        difficulty: "Medium",
        image: "https://via.placeholder.com/600x400.png/16a34a/ffffff?text=DNA+Replication"
      },
      {
        id: 2,
        title: "Cellular Respiration",
        description: "Follow a glucose molecule through glycolysis, the Krebs cycle, and the electron transport chain to see how ATP is produced.",
        difficulty: "Hard",
        image: "https://via.placeholder.com/600x400.png/15803d/ffffff?text=Cellular+Respiration"
      },
      {
        id: 3,
        title: "Photosynthesis Light Reactions",
        description: "Manipulate light intensity and wavelength to observe the production of ATP and NADPH in the thylakoid membrane.",
        difficulty: "Hard",
        image: "https://via.placeholder.com/600x400.png/166534/ffffff?text=Photosynthesis"
      },
    ]
  }
};