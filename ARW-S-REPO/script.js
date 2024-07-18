const pets = [
    {
        name: "Scoob",
        rarity: "Event",
        description: "An event pet available for a limited time.",
        images: {
            normal: "images/scoob_normal.jpg",
            neon: "images/scoob_neon.jpg",
            megaNeon: "images/scoob_mega_neon.jpg"
        }
    },
    {
        name: "Buffalo",
        rarity: "Common",
        description: "A common pet that is friendly and easy to find.",
        images: {
            normal: "images/buffalo_normal.jpg",
            neon: "images/buffalo_neon.jpg",
            megaNeon: "images/buffalo_mega_neon.jpg"
        }
    },
    {
        name: "Cat",
        rarity: "Common",
        description: "A common pet known for its cuteness and agility.",
        images: {
            normal: "images/cat_normal.jpg",
            neon: "images/cat_neon.jpg",
            megaNeon: "images/cat_mega_neon.jpg"
        }
    },
    {
        name: "Dog",
        rarity: "Common",
        description: "A loyal and friendly pet that loves to play.",
        images: {
            normal: "images/dog_normal.jpg",
            neon: "images/dog_neon.jpg",
            megaNeon: "images/dog_mega_neon.jpg"
        }
    },
    {
        name: "Otter",
        rarity: "Common",
        description: "An aquatic mammal that is playful and energetic.",
        images: {
            normal: "images/otter_normal.jpg",
            neon: "images/otter_neon.jpg",
            megaNeon: "images/otter_mega_neon.jpg"
        }
    },
    {
        name: "Chicken",
        rarity: "Common",
        description: "A farm animal known for laying eggs.",
        images: {
            normal: "images/chicken_normal.jpg",
            neon: "images/chicken_neon.jpg",
            megaNeon: "images/chicken_mega_neon.jpg"
        }
    },
    {
        name: "Robin",
        rarity: "Common",
        description: "A small bird with a cheerful song.",
        images: {
            normal: "images/robin_normal.jpg",
            neon: "images/robin_neon.jpg",
            megaNeon: "images/robin_mega_neon.jpg"
        }
    },
    {
        name: "Bandicoot",
        rarity: "Common",
        description: "A small marsupial found in Australia.",
        images: {
            normal: "images/bandicoot_normal.jpg",
            neon: "images/bandicoot_neon.jpg",
            megaNeon: "images/bandicoot_mega_neon.jpg"
        }
    },
    {
        name: "Chick",
        rarity: "Common",
        description: "A young chicken, very cute and fluffy.",
        images: {
            normal: "images/chick_normal.jpg",
            neon: "images/chick_neon.jpg",
            megaNeon: "images/chick_mega_neon.jpg"
        }
    },
    {
        name: "Tasmanian Tiger",
        rarity: "Common",
        description: "An extinct carnivorous marsupial native to Tasmania.",
        images: {
            normal: "images/tasmanian_tiger_normal.jpg",
            neon: "images/tasmanian_tiger_neon.jpg",
            megaNeon: "images/tasmanian_tiger_mega_neon.jpg"
        }
    },
    {
        name: "Ground Sloth",
        rarity: "Common",
        description: "An extinct species of large, slow-moving mammal.",
        images: {
            normal: "images/ground_sloth_normal.jpg",
            neon: "images/ground_sloth_neon.jpg",
            megaNeon: "images/ground_sloth_mega_neon.jpg"
        }
    },
    {
        name: "Stingray",
        rarity: "Common",
        description: "A flat-bodied fish known for its sting.",
        images: {
            normal: "images/stingray_normal.jpg",
            neon: "images/stingray_neon.jpg",
            megaNeon: "images/stingray_mega_neon.jpg"
        }
    },
    {
        name: "Wolpertinger",
        rarity: "Common",
        description: "A mythical creature said to inhabit the alpine forests.",
        images: {
            normal: "images/wolpertinger_normal.jpg",
            neon: "images/wolpertinger_neon.jpg",
            megaNeon: "images/wolpertinger_mega_neon.jpg"
        }
    },
    {
        name: "Walrus",
        rarity: "Common",
        description: "A large marine mammal with tusks.",
        images: {
            normal: "images/walrus_normal.jpg",
            neon: "images/walrus_neon.jpg",
            megaNeon: "images/walrus_mega_neon.jpg"
        }
    },
    {
        name: "Bullfrog",
        rarity: "Common",
        description: "A large, loud-voiced amphibian.",
        images: {
            normal: "images/bullfrog_normal.jpg",
            neon: "images/bullfrog_neon.jpg",
            megaNeon: "images/bullfrog_mega_neon.jpg"
        }
    },
    {
        name: "Ant",
        rarity: "Common",
        description: "A small insect known for its hardworking nature.",
        images: {
            normal: "images/ant_normal.jpg",
            neon: "images/ant_neon.jpg",
            megaNeon: "images/ant_mega_neon.jpg"
        }
    },
    {
        name: "Mouse",
        rarity: "Common",
        description: "A small rodent known for its agility.",
        images: {
            normal: "images/mouse_normal.jpg",
            neon: "images/mouse_neon.jpg",
            megaNeon: "images/mouse_mega_neon.jpg"
        }
    },
    {
        name: "Dugong",
        rarity: "Common",
        description: "A marine mammal related to the manatee.",
        images: {
            normal: "images/dugong_normal.jpg",
            neon: "images/dugong_neon.jpg",
            megaNeon: "images/dugong_mega_neon.jpg"
        }
    },
    {
        name: "Sado Mole",
        rarity: "Common",
        description: "A small burrowing mammal.",
        images: {
            normal: "images/sado_mole_normal.jpg",
            neon: "images/sado_mole_neon.jpg",
            megaNeon: "images/sado_mole_mega_neon.jpg"
        }
    },
    {
        name: "Bali Starling",
        rarity: "Common",
        description: "A critically endangered bird known for its striking appearance.",
        images: {
            normal: "images/bali_starling_normal.jpg",
            neon: "images/bali_starling_neon.jpg",
            megaNeon: "images/bali_starling_mega_neon.jpg"
        }
    },
    {
        name: "Malayan Tapir",
        rarity: "Common",
        description: "A herbivorous mammal native to Southeast Asia.",
        images: {
            normal: "images/malayan_tapir_normal.jpg",
            neon: "images/malayan_tapir_neon.jpg",
            megaNeon: "images/malayan_tapir_mega_neon.jpg"
        }
    },
    // Continue adding pets here...
];

// Function to generate pet sections dynamically
function generatePetSections() {
    const petsSection = document.getElementById('pets');

    pets.forEach(pet => {
        const petSection = document.createElement('section');
        petSection.classList.add('pet-section');
        petSection.innerHTML = `
            <div class="container">
                <h2>${pet.name}</h2>
                <p>Rarity: ${pet.rarity}</p>
                <p>${pet.description}</p>
                <div class="pet-images">
                    <img src="${pet.images.normal}" alt="Normal ${pet.name}">
                    <img src="${pet.images.neon}" alt="Neon ${pet.name}">
                    <img src="${pet.images.megaNeon}" alt="Mega Neon ${pet.name}">
                </div>
            </div>
        `;
        petsSection.appendChild(petSection);
    });
}

// Call the function to generate pet sections
generatePetSections();
