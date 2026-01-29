export const trips = [
  {
    id: 1,
    name: "Kyoto",
    image: "https://images.unsplash.com/photo-1549693578-d683be217e58",
    description:
      "Kyoto is a calm blend of tradition and nature, ideal for slow mornings, cultural walks, and peaceful evenings. This trip is designed to help you explore without rushing.\n\n🟢 Designed for a relaxed pace — 2–3 thoughtfully chosen places per day to avoid travel fatigue.",
    estimatedCost: 82000,
    bufferCost: 4500,
    tripStyle: "🌿 Relaxed",

    hotels: [
      {
        id: 101,
        hotelName: "K's House Kyoto - Hostel",
        hotelImage: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5",
        hotelDescription:
          "Clean, social hostel with private rooms available. Less than 10 minutes walk from Kyoto Station. Free coffee, tea, and laundry facilities.",
        estimatedCostPerNight: 2400,
        maxMembersPerRoom: 2,
        otherRoomSize: [1, 2, 4],
        address: "418 Naya-cho, Shichijo-sagaru, Higashi-kujo, Minami-ku",
      },
      {
        id: 102,
        hotelName: "Sakura Terrace The Atelier",
        hotelImage:
          "https://images.unsplash.com/photo-1566073771259-6a8506099945",
        hotelDescription:
          "Modern hotel with excellent amenities including onsen, free breakfast, and stylish rooms. Great location near Kyoto Station.",
        estimatedCostPerNight: 4000,
        maxMembersPerRoom: 2,
        otherRoomSize: [2, 3],
        address: "South of Kyoto Station, Minami-ku",
      },
      {
        id: 103,
        hotelName: "Hotel Gracery Kyoto Sanjo",
        hotelImage:
          "https://images.unsplash.com/photo-1582719508461-905c673771fd",
        hotelDescription:
          "Clean and comfortable hotel in central Kyoto with easy access to subway. Modern rooms with all amenities.",
        estimatedCostPerNight: 3200,
        maxMembersPerRoom: 2,
        otherRoomSize: [2, 3],
        address: "Sanjo Street, Nakagyo-ku",
      },
      {
        id: 104,
        hotelName: "The Pocket Hotel Kyoto-karasumagojo",
        hotelImage:
          "https://images.unsplash.com/photo-1590490360182-c33d57733427",
        hotelDescription:
          "Budget-friendly with contactless check-in. Free WiFi, clean rooms, and excellent value for money. Central location.",
        estimatedCostPerNight: 2800,
        maxMembersPerRoom: 2,
        otherRoomSize: [2, 3],
        address: "Shimogyo Ward, Karasuma area",
      },
    ],

    places: [
      {
        id: 201,
        placeName: "Fushimi Inari Shrine",
        placeImage:
          "https://images.unsplash.com/photo-1478436127897-769e1b3f0f36",
        timeNeeded: "2–3 hrs",
        address: "68 Fukakusa Yabunouchicho, Fushimi Ward",
        crowdLevel: "Very Busy",
        ticketPrice: 0,
      },
      {
        id: 202,
        placeName: "Kinkaku-ji (Golden Pavilion)",
        placeImage: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9",
        timeNeeded: "1–1.5 hrs",
        address: "1 Kinkakujicho, Kita Ward",
        crowdLevel: "Busy",
        ticketPrice: 500,
      },
      {
        id: 203,
        placeName: "Kiyomizu-dera Temple",
        placeImage:
          "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e",
        timeNeeded: "1.5–2 hrs",
        address: "1-294 Kiyomizu, Higashiyama Ward",
        crowdLevel: "Very Busy",
        ticketPrice: 400,
      },
      {
        id: 204,
        placeName: "Arashiyama Bamboo Grove",
        placeImage:
          "https://images.unsplash.com/photo-1528360983277-13d401cdc186",
        timeNeeded: "1–1.5 hrs",
        address: "Arashiyama, Ukyo Ward",
        crowdLevel: "Busy",
        ticketPrice: 0,
      },
      {
        id: 205,
        placeName: "Nijo Castle",
        placeImage:
          "https://images.unsplash.com/photo-1583737209957-84b8833f9c8a",
        timeNeeded: "1.5–2 hrs",
        address: "541 Nijojocho, Nakagyo Ward",
        crowdLevel: "Moderate",
        ticketPrice: 800,
      },
      {
        id: 206,
        placeName: "Gion District",
        placeImage:
          "https://images.unsplash.com/photo-1480796927426-f609979314bd",
        timeNeeded: "2–3 hrs",
        address: "Gion, Higashiyama Ward",
        crowdLevel: "Busy",
        ticketPrice: 0,
      },
      {
        id: 207,
        placeName: "Philosopher's Path",
        placeImage:
          "https://images.unsplash.com/photo-1590559899658-19ab53ba6d71",
        timeNeeded: "1–2 hrs",
        address: "Along Lake Biwa Canal, Sakyo Ward",
        crowdLevel: "Moderate",
        ticketPrice: 0,
      },
      {
        id: 208,
        placeName: "Nishiki Market",
        placeImage: "https://images.unsplash.com/photo-1555399784-17946f0cc2a7",
        timeNeeded: "1–2 hrs",
        address: "Nishikikoji Street, Nakagyo Ward",
        crowdLevel: "Busy",
        ticketPrice: 0,
      },
    ],

    cafes: [
      {
        id: 301,
        cafeName: "% Arabica Kyoto Higashiyama",
        averageCost: 600,
        address: "Higashiyama Ward, near Yasaka Pagoda",
        description: "World-famous coffee with stunning views.",
      },
      {
        id: 302,
        cafeName: "Tsujiri Gion",
        averageCost: 800,
        address: "Gion, Higashiyama Ward",
        description: "Traditional matcha parfaits and desserts.",
      },
      {
        id: 303,
        cafeName: "Inoda Coffee Honten",
        averageCost: 700,
        address: "Sanjo-Sakaimachi, Nakagyo Ward",
        description: "Historic Kyoto coffee house since 1940.",
      },
      {
        id: 304,
        cafeName: "Saryo Tsujiri",
        averageCost: 850,
        address: "Near Kiyomizu-dera",
        description: "Premium matcha sweets and traditional ambiance.",
      },
    ],
  },

  {
    id: 2,
    name: "Tokyo",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf",
    description:
      "Tokyo is fast, vibrant, and endlessly exciting, balanced here with enough breathing room to avoid burnout.\n\n🟡 Designed for a moderate pace.",
    estimatedCost: 90000,
    bufferCost: 5000,
    tripStyle: "⚡ Energetic",

    hotels: [
      {
        id: 105,
        hotelName: "Imano Tokyo Ginza Hostel",
        hotelImage:
          "https://images.unsplash.com/photo-1631049307264-da0ec9d70304",
        hotelDescription:
          "Modern capsule hotel in Ginza with excellent facilities. Close to metro and shopping districts.",
        estimatedCostPerNight: 2900,
        maxMembersPerRoom: 1,
        otherRoomSize: [1, 2],
        address: "Ginza, Chuo City",
      },
      {
        id: 106,
        hotelName: "Hotel Gracery Shinjuku",
        hotelImage:
          "https://images.unsplash.com/photo-1618773928121-c32242e63f39",
        hotelDescription:
          "Famous for Godzilla head on roof. Modern rooms, great location in Shinjuku entertainment district.",
        estimatedCostPerNight: 4200,
        maxMembersPerRoom: 2,
        otherRoomSize: [2, 3],
        address: "Kabukicho, Shinjuku",
      },
      {
        id: 107,
        hotelName: "Tokyu Stay Shibuya",
        hotelImage:
          "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6",
        hotelDescription:
          "Apartments with kitchenettes. Perfect for longer stays. Walking distance to Shibuya Crossing.",
        estimatedCostPerNight: 3800,
        maxMembersPerRoom: 2,
        otherRoomSize: [2, 3, 4],
        address: "Shibuya, Shibuya City",
      },
      {
        id: 108,
        hotelName: "Asakusa Hotel Hatago",
        hotelImage: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
        hotelDescription:
          "Traditional Japanese-style rooms near Senso-ji Temple. Authentic experience with modern comforts.",
        estimatedCostPerNight: 3500,
        maxMembersPerRoom: 2,
        otherRoomSize: [2, 3, 4],
        address: "Asakusa, Taito City",
      },
    ],

    places: [
      {
        id: 209,
        placeName: "Shibuya Crossing",
        placeImage:
          "https://images.unsplash.com/photo-1542051841857-5f90071e7989",
        timeNeeded: "30 min – 1 hr",
        address: "Shibuya, Shibuya City",
        crowdLevel: "Very Busy",
        ticketPrice: 0,
      },
      {
        id: 210,
        placeName: "Senso-ji Temple",
        placeImage: "https://images.unsplash.com/photo-1548591292-c2795de4cc0f",
        timeNeeded: "1.5–2 hrs",
        address: "2-3-1 Asakusa, Taito City",
        crowdLevel: "Very Busy",
        ticketPrice: 0,
      },
      {
        id: 211,
        placeName: "Meiji Shrine",
        placeImage:
          "https://images.unsplash.com/photo-1578469645742-46cae010e5d4",
        timeNeeded: "1–1.5 hrs",
        address: "1-1 Yoyogikamizonocho, Shibuya City",
        crowdLevel: "Busy",
        ticketPrice: 0,
      },
      {
        id: 212,
        placeName: "Tokyo Skytree",
        placeImage:
          "https://images.unsplash.com/photo-1513407030348-c983a97b98d8",
        timeNeeded: "2–3 hrs",
        address: "1-1-2 Oshiage, Sumida City",
        crowdLevel: "Busy",
        ticketPrice: 2100,
      },
      {
        id: 213,
        placeName: "Tsukiji Outer Market",
        placeImage:
          "https://images.unsplash.com/photo-1579027989536-b7b1f875659b",
        timeNeeded: "2–3 hrs",
        address: "Tsukiji, Chuo City",
        crowdLevel: "Very Busy",
        ticketPrice: 0,
      },
      {
        id: 214,
        placeName: "Tokyo Imperial Palace East Gardens",
        placeImage:
          "https://images.unsplash.com/photo-1571896349842-33c89424de2d",
        timeNeeded: "1.5–2 hrs",
        address: "1-1 Chiyoda, Chiyoda City",
        crowdLevel: "Moderate",
        ticketPrice: 0,
      },
      {
        id: 215,
        placeName: "Harajuku & Takeshita Street",
        placeImage: "https://images.unsplash.com/photo-1555218248-7f242361e91e",
        timeNeeded: "2–3 hrs",
        address: "Jingumae, Shibuya City",
        crowdLevel: "Very Busy",
        ticketPrice: 0,
      },
      {
        id: 216,
        placeName: "teamLab Borderless",
        placeImage:
          "https://images.unsplash.com/photo-1618556450991-2f1af64e8191",
        timeNeeded: "2–3 hrs",
        address: "Azabudai Hills, Minato City",
        crowdLevel: "Busy",
        ticketPrice: 3800,
      },
    ],

    cafes: [
      {
        id: 305,
        cafeName: "Ichiran Ramen Shibuya",
        averageCost: 980,
        address: "Shibuya, Shibuya City",
        description: "Solo dining booths, customize your ramen.",
      },
      {
        id: 306,
        cafeName: "Blue Bottle Coffee Roppongi",
        averageCost: 750,
        address: "Roppongi, Minato City",
        description: "Specialty coffee in minimalist setting.",
      },
      {
        id: 307,
        cafeName: "Starbucks Reserve Roastery Tokyo",
        averageCost: 1200,
        address: "Meguro, Meguro City",
        description: "Four-floor coffee experience with exclusive drinks.",
      },
      {
        id: 308,
        cafeName: "Cafe de L'Ambre",
        averageCost: 900,
        address: "Ginza, Chuo City",
        description: "Historic coffee shop, hand-drip since 1948.",
      },
    ],
  },

  {
    id: 3,
    name: "Osaka",
    image: "https://images.unsplash.com/photo-1580655653885-65763b2597d0",
    description:
      "Osaka is loud, friendly, and full of flavor. Street food, neon nights, and easy-going vibes.\n\n🟡 Designed for a moderate pace — explore, eat, repeat.",
    estimatedCost: 78000,
    bufferCost: 4000,
    tripStyle: "🍜 Food & Fun",

    hotels: [
      {
        id: 109,
        hotelName: "Hotel WBF Namba Motomachi",
        hotelImage:
          "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6",
        hotelDescription:
          "Comfortable stay near Namba Station. Surrounded by food streets and shopping areas.",
        estimatedCostPerNight: 3000,
        maxMembersPerRoom: 2,
        otherRoomSize: [1, 2, 3],
        address: "Namba, Osaka",
      },
    ],

    places: [
      {
        id: 217,
        placeName: "Dotonbori",
        placeImage:
          "https://images.unsplash.com/photo-1590559899731-a382839e5549",
        timeNeeded: "2–3 hrs",
        address: "Chuo Ward",
        crowdLevel: "Very Busy",
        ticketPrice: 0,
      },
      {
        id: 218,
        placeName: "Osaka Castle",
        placeImage:
          "https://images.unsplash.com/photo-1589452271712-64b8a66c7b71",
        timeNeeded: "2 hrs",
        address: "Chuo Ward",
        crowdLevel: "Busy",
        ticketPrice: 600,
      },
    ],

    cafes: [
      {
        id: 309,
        cafeName: "Takoyaki Doraku Wanaka",
        averageCost: 500,
        address: "Namba",
        description: "Classic Osaka street food experience.",
      },
    ],
  },

  {
    id: 4,
    name: "Nara",
    image: "https://images.unsplash.com/photo-1576669801775-ff43c5ab079d",
    description:
      "Nara is peaceful, green, and spiritual. Temples, parks, and gentle walks.\n\n🟢 Designed for a relaxed pace.",
    estimatedCost: 65000,
    bufferCost: 3500,
    tripStyle: "🌿 Calm",

    hotels: [
      {
        id: 110,
        hotelName: "Nara Visitor Center Inn",
        hotelImage:
          "https://images.unsplash.com/photo-1578683010236-d716f9a3f461",
        hotelDescription:
          "Simple stay close to Nara Park and major temples. Quiet nights guaranteed.",
        estimatedCostPerNight: 2600,
        maxMembersPerRoom: 2,
        otherRoomSize: [1, 2],
        address: "Noborioji, Nara",
      },
    ],

    places: [
      {
        id: 219,
        placeName: "Nara Park",
        placeImage:
          "https://images.unsplash.com/photo-1590559899658-4b8079fb432a",
        timeNeeded: "2–3 hrs",
        address: "Nara City",
        crowdLevel: "Moderate",
        ticketPrice: 0,
      },
      {
        id: 220,
        placeName: "Todai-ji Temple",
        placeImage:
          "https://images.unsplash.com/photo-1528360983277-13d401cdc186",
        timeNeeded: "1.5 hrs",
        address: "Zoshicho",
        crowdLevel: "Busy",
        ticketPrice: 600,
      },
    ],

    cafes: [
      {
        id: 310,
        cafeName: "Nakatanidou",
        averageCost: 300,
        address: "Nara City",
        description: "Famous for fresh mochi pounding.",
      },
    ],
  },

  {
    id: 5,
    name: "Hiroshima",
    image: "https://images.unsplash.com/photo-1505067216369-2a9dbbfcf32a",
    description:
      "Hiroshima is reflective, resilient, and quietly beautiful.\n\n🟢 Designed for a thoughtful and relaxed journey.",
    estimatedCost: 72000,
    bufferCost: 3800,
    tripStyle: "🕊️ Reflective",

    hotels: [
      {
        id: 111,
        hotelName: "Hotel Mystays Hiroshima",
        hotelImage:
          "https://images.unsplash.com/photo-1564501049412-61c2a3083791",
        hotelDescription:
          "Comfortable hotel near Peace Park with easy tram access.",
        estimatedCostPerNight: 3100,
        maxMembersPerRoom: 2,
        otherRoomSize: [2, 3],
        address: "Naka Ward",
      },
    ],

    places: [
      {
        id: 221,
        placeName: "Peace Memorial Park",
        placeImage: "https://images.unsplash.com/photo-1558862107-d49ef2a04d72",
        timeNeeded: "2 hrs",
        address: "Naka Ward",
        crowdLevel: "Moderate",
        ticketPrice: 0,
      },
      {
        id: 222,
        placeName: "Itsukushima Shrine",
        placeImage:
          "https://images.unsplash.com/photo-1590559899818-4d3d6c5e1cd9",
        timeNeeded: "3 hrs",
        address: "Miyajima",
        crowdLevel: "Busy",
        ticketPrice: 300,
      },
    ],

    cafes: [
      {
        id: 311,
        cafeName: "Hassei Okonomiyaki",
        averageCost: 900,
        address: "Hiroshima City",
        description: "Authentic Hiroshima-style okonomiyaki.",
      },
    ],
  },

  {
    id: 6,
    name: "Hakone",
    image: "https://images.unsplash.com/photo-1549893074-0f36b12ae9f9",
    description:
      "Hakone offers hot springs, lake views, and Mt. Fuji serenity.\n\n🟢 Designed for rest and recovery.",
    estimatedCost: 70000,
    bufferCost: 4000,
    tripStyle: "♨️ Onsen & Nature",

    hotels: [
      {
        id: 112,
        hotelName: "Hakone Yutowa",
        hotelImage: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa",
        hotelDescription:
          "Modern ryokan with onsen and free drinks. Close to Gora Station.",
        estimatedCostPerNight: 4500,
        maxMembersPerRoom: 2,
        otherRoomSize: [2, 3],
        address: "Gora, Hakone",
      },
    ],

    places: [
      {
        id: 223,
        placeName: "Lake Ashi",
        placeImage:
          "https://images.unsplash.com/photo-1570977867276-26570dcc6de9",
        timeNeeded: "2 hrs",
        address: "Hakone",
        crowdLevel: "Moderate",
        ticketPrice: 0,
      },
    ],

    cafes: [
      {
        id: 312,
        cafeName: "Bakery & Table Hakone",
        averageCost: 700,
        address: "Lake Ashi",
        description: "Fresh bread with lake views.",
      },
    ],
  },

  {
    id: 7,
    name: "Sapporo",
    image: "https://images.unsplash.com/photo-1586182987320-4f376d39d787",
    description:
      "Sapporo blends urban comfort with snowy landscapes and great food.\n\n🟡 Moderate pace.",
    estimatedCost: 88000,
    bufferCost: 4500,
    tripStyle: "❄️ Cool City",

    hotels: [
      {
        id: 113,
        hotelName: "Hotel Resol Trinity Sapporo",
        hotelImage:
          "https://images.unsplash.com/photo-1587985064135-0366536eab42",
        hotelDescription: "Stylish hotel near Odori Park with public bath.",
        estimatedCostPerNight: 3600,
        maxMembersPerRoom: 2,
        otherRoomSize: [2, 3],
        address: "Chuo Ward",
      },
    ],

    places: [
      {
        id: 224,
        placeName: "Odori Park",
        placeImage: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa",
        timeNeeded: "1–2 hrs",
        address: "Central Sapporo",
        crowdLevel: "Moderate",
        ticketPrice: 0,
      },
    ],

    cafes: [
      {
        id: 313,
        cafeName: "Soup Curry GARAKU",
        averageCost: 1100,
        address: "Sapporo",
        description: "Iconic Hokkaido soup curry.",
      },
    ],
  },

  {
    id: 8,
    name: "Kanazawa",
    image: "https://images.unsplash.com/photo-1590559899731-a382839e5549",
    description:
      "Kanazawa preserves Edo-era charm with gardens and samurai districts.\n\n🟢 Relaxed pace.",
    estimatedCost: 74000,
    bufferCost: 4000,
    tripStyle: "🏯 Cultural",

    hotels: [
      {
        id: 114,
        hotelName: "Hotel Pacific Kanazawa",
        hotelImage:
          "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4",
        hotelDescription: "Minimal, cozy hotel near Omicho Market.",
        estimatedCostPerNight: 2900,
        maxMembersPerRoom: 2,
        otherRoomSize: [1, 2],
        address: "Kanazawa City",
      },
    ],

    places: [
      {
        id: 225,
        placeName: "Kenrokuen Garden",
        placeImage:
          "https://images.unsplash.com/photo-1583737209957-84b8833f9c8a",
        timeNeeded: "2 hrs",
        address: "Kanazawa",
        crowdLevel: "Busy",
        ticketPrice: 320,
      },
    ],

    cafes: [
      {
        id: 314,
        cafeName: "Curio Espresso",
        averageCost: 600,
        address: "Kanazawa",
        description: "Chill coffee near Nagamachi district.",
      },
    ],
  },

  {
    id: 9,
    name: "Nagoya",
    image: "https://images.unsplash.com/photo-1580130379624-3a069adbffc5",
    description:
      "Nagoya is practical, historic, and underrated.\n\n🟡 Balanced pace.",
    estimatedCost: 76000,
    bufferCost: 4200,
    tripStyle: "⚙️ Balanced",

    hotels: [
      {
        id: 115,
        hotelName: "Meitetsu Inn Nagoya",
        hotelImage: "https://images.unsplash.com/photo-1561501900-3701fa6a0864",
        hotelDescription: "Reliable business hotel near Nagoya Station.",
        estimatedCostPerNight: 2800,
        maxMembersPerRoom: 2,
        otherRoomSize: [1, 2],
        address: "Nagoya Station",
      },
    ],

    places: [
      {
        id: 226,
        placeName: "Nagoya Castle",
        placeImage:
          "https://images.unsplash.com/photo-1584043204475-8cc101d6c77a",
        timeNeeded: "2 hrs",
        address: "Nagoya",
        crowdLevel: "Moderate",
        ticketPrice: 500,
      },
    ],

    cafes: [
      {
        id: 315,
        cafeName: "Komeda Coffee",
        averageCost: 650,
        address: "Nagoya",
        description: "Classic Japanese coffee chain.",
      },
    ],
  },

  {
    id: 10,
    name: "Yokohama",
    image: "https://images.unsplash.com/photo-1599262524799-4eeb7c0970b6",
    description:
      "Yokohama mixes port-city views with relaxed urban charm.\n\n🟢 Easy-going pace.",
    estimatedCost: 80000,
    bufferCost: 4500,
    tripStyle: "🌊 Chill City",

    hotels: [
      {
        id: 116,
        hotelName: "Hotel Edit Yokohama",
        hotelImage:
          "https://images.unsplash.com/photo-1568495248636-6432b97bd949",
        hotelDescription: "Modern design hotel close to Minato Mirai.",
        estimatedCostPerNight: 3300,
        maxMembersPerRoom: 2,
        otherRoomSize: [2, 3],
        address: "Minato Mirai",
      },
    ],

    places: [
      {
        id: 227,
        placeName: "Minato Mirai",
        placeImage:
          "https://images.unsplash.com/photo-1599262524799-4eeb7c0970b6",
        timeNeeded: "2–3 hrs",
        address: "Yokohama",
        crowdLevel: "Moderate",
        ticketPrice: 0,
      },
    ],

    cafes: [
      {
        id: 316,
        cafeName: "Bills Yokohama",
        averageCost: 1200,
        address: "Red Brick Warehouse",
        description: "Famous pancakes with bay views.",
      },
    ],
  },
];
