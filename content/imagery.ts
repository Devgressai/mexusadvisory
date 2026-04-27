import type { ImageRegistry } from "@/lib/imagery";

/**
 * Canonical image registry.
 *
 * Every image used anywhere in the UI must live here. Components consume
 * entries via `getImage(imagery, id)` and never hard-code paths.
 *
 * The `prompt` field is the source-of-truth input for regeneration via a
 * provider (Google Gemini / Imagen, or any equivalent). When the provider
 * runs, it should write back to the corresponding `src` path.
 */
export const imagery: ImageRegistry = {
  // ———————————————————————————————————————————— Hero & credibility
  "hero-bridge": {
    id: "hero-bridge",
    src: "/imagery/hero-bridge.webp",
    aspect: "landscape",
    source: "google-gemini-flash",
    prompt:
      "Cinematic aerial photograph of a vast modern cable-stayed international bridge spanning a wide river at blue-gold dawn, soft low mist hovering over the water, long architectural shadows, no people, no vehicles, no text, no logos, muted cinematic palette of deep navy blue and warm golden light, shot from helicopter at mid-altitude, large format editorial photography, photorealistic, quiet monumentality",
    alt: {
      en: "Aerial view of a modern cable-stayed international bridge spanning a wide river at dawn",
      es: "Vista aérea de un puente internacional moderno con atirantados cruzando un río amplio al amanecer",
    },
  },
  "hero-atmosphere": {
    id: "hero-atmosphere",
    src: "/imagery/hero-atmosphere.webp",
    aspect: "landscape",
    source: "google-imagen",
    prompt:
      "Editorial architectural photograph of a minimalist executive terrace in concrete, dark stone and floor-to-ceiling glass, overlooking a calm coastal horizon at dawn, soft grey-blue atmospheric palette, long shadows, no people, no text, large format film, cinematic wide composition, muted desaturated tones, quiet luxury, photorealistic",
    alt: {
      en: "Calm coastal horizon at dawn seen through a minimalist concrete and glass terrace",
      es: "Horizonte costero tranquilo al amanecer visto desde una terraza minimalista de concreto y vidrio",
    },
  },
  credibility: {
    id: "credibility",
    src: "/imagery/credibility.webp",
    aspect: "landscape",
    source: "google-gemini-flash",
    prompt:
      "Editorial photograph of a private advisory library with tall dark walnut bookshelves, polished leather reading chairs, warm indirect tungsten lighting, quiet atmospheric composition, no people, no text, no legible book titles, muted earth palette of deep brown and soft amber, medium format, publication-grade interior editorial photography, photorealistic",
    alt: {
      en: "Private advisory library with tall walnut shelves and warm indirect lighting",
      es: "Biblioteca de asesoría privada con altas estanterías de nogal e iluminación indirecta cálida",
    },
  },
  "contact-sky": {
    id: "contact-sky",
    src: "/imagery/contact-sky.webp",
    aspect: "landscape",
    source: "google-gemini-flash",
    prompt:
      "Editorial photograph looking up at a pristine deep blue sky with soft cirrus clouds and the glass and stone edge of a modernist tower at the corner of the frame catching soft morning light, no people, no text, muted cool blue palette, cinematic wide composition, shot on medium format, photorealistic, quiet and expansive",
    alt: {
      en: "Deep blue sky with soft cirrus clouds framed by the edge of a modernist tower",
      es: "Cielo azul profundo con nubes cirros suaves enmarcado por el borde de una torre modernista",
    },
  },
  "about-practice": {
    id: "about-practice",
    src: "/imagery/about-practice.webp",
    aspect: "landscape",
    source: "google-gemini-flash",
    prompt:
      "Editorial architectural photograph of a quiet empty private partners room with a long polished wooden table and tall windows overlooking a calm city at late afternoon, no people, no text, no logos, muted warm palette, cinematic composition, medium format, photorealistic, quiet and composed",
    alt: {
      en: "Empty private partners room with a long polished wooden table and tall city-facing windows",
      es: "Sala privada de socios vacía con mesa larga de madera pulida y ventanas altas con vista a la ciudad",
    },
  },

  // ———————————————————————————————————————————— Capabilities (5)
  "capabilities-anchor": {
    id: "capabilities-anchor",
    src: "/imagery/capabilities-anchor.webp",
    aspect: "landscape",
    source: "google-gemini-flash",
    prompt:
      "Editorial architectural photograph of a minimalist modern stone courtyard at golden hour, tall columns casting long shadows, empty, no people, no text, warm desaturated palette, cinematic composition, medium format, architectural weight, photorealistic",
    alt: {
      en: "Minimalist modern stone courtyard with tall columns at golden hour",
      es: "Patio de piedra moderno y minimalista con altas columnas en la hora dorada",
    },
  },
  "cap-immigration": {
    id: "cap-immigration",
    src: "/imagery/cap-immigration.webp",
    aspect: "landscape",
    source: "google-gemini-flash",
    prompt:
      "Editorial architectural photograph of a modern passport control hall at dawn, polished stone floors, curved ceiling, soft overhead lighting, no people, no signage, no text, monochromatic cool palette, architectural depth, medium format, photorealistic, quiet and institutional",
    alt: {
      en: "Modern passport control hall at dawn with polished stone floors and curved ceiling",
      es: "Sala moderna de control de pasaportes al amanecer con pisos de piedra pulida y techo curvo",
    },
  },
  "cap-risk": {
    id: "cap-risk",
    src: "/imagery/cap-risk.webp",
    aspect: "landscape",
    source: "google-gemini-flash",
    prompt:
      "Editorial photograph of a sparse modern security operations room with long desks and soft ambient monitor glow, muted blue-grey palette, no people, no legible text, architectural composition, cinematic depth, medium format, photorealistic, quiet institutional interior",
    alt: {
      en: "Sparse modern operations room with long desks and soft ambient light",
      es: "Sala de operaciones moderna con escritorios largos y luz ambiental suave",
    },
  },
  "cap-capital": {
    id: "cap-capital",
    src: "/imagery/cap-capital.webp",
    aspect: "landscape",
    source: "google-gemini-flash",
    prompt:
      "Editorial architectural photograph of the interior atrium of a modern private bank building, tall marble columns, polished stone floors, soft indirect natural light, no people, no text, muted cool palette, cinematic scale, medium format, photorealistic, quiet institutional composition",
    alt: {
      en: "Interior atrium of a modern private bank with tall marble columns",
      es: "Atrio interior de un banco privado moderno con altas columnas de mármol",
    },
  },
  "cap-jurisdiction": {
    id: "cap-jurisdiction",
    src: "/imagery/cap-jurisdiction.webp",
    aspect: "landscape",
    source: "google-gemini-flash",
    prompt:
      "Editorial architectural photograph of a classical courthouse facade with tall stone columns, morning sun casting long shadows, clear sky, no people, no text, muted warm palette, cinematic symmetry, medium format, photorealistic, quiet institutional weight",
    alt: {
      en: "Classical courthouse facade with tall stone columns in morning light",
      es: "Fachada clásica de juzgado con altas columnas de piedra bajo la luz de la mañana",
    },
  },

  // ———————————————————————————————————————————— Focus / insights (rail)
  "focus-immigration": {
    id: "focus-immigration",
    src: "/imagery/focus-immigration.webp",
    aspect: "landscape",
    source: "google-imagen",
    prompt:
      "Editorial photograph of an empty international airport transit corridor at twilight, polished terrazzo floors reflecting soft overhead lighting, curved modernist architecture, monochromatic cool navy and pearl grey tones, no people, no signage, no text, architectural emphasis, medium format, cinematic depth of field, photorealistic, quiet and atmospheric",
    alt: {
      en: "Empty international airport transit corridor at twilight with polished terrazzo floors",
      es: "Corredor vacío de tránsito de aeropuerto internacional al anochecer con pisos de terrazo pulido",
    },
  },
  "focus-investments": {
    id: "focus-investments",
    src: "/imagery/focus-investments.webp",
    aspect: "landscape",
    source: "google-gemini-flash",
    prompt:
      "Editorial architectural photograph of a modern private banking boardroom with tall marble and dark walnut walls, morning light streaming through floor-to-ceiling windows, polished stone floors, a long solid oak table, no people, no text, no logos, muted earth palette, cinematic composition, medium format, publication-grade editorial photography, photorealistic",
    alt: {
      en: "Private banking boardroom with marble walls and walnut paneling in soft morning light",
      es: "Sala de juntas de banca privada con paredes de mármol y paneles de nogal bajo luz suave de la mañana",
    },
  },
  "focus-trade": {
    id: "focus-trade",
    src: "/imagery/focus-trade.webp",
    aspect: "landscape",
    source: "google-gemini-flash",
    prompt:
      "Editorial aerial photograph of a vast modern logistics and shipping port at golden hour, rows of orderly industrial containers and warehouses, long cast shadows, desaturated warm palette, no people, no text, no visible brand marks, architectural scale, shot from a helicopter at low altitude, cinematic, photorealistic, quiet monumentality",
    alt: {
      en: "Aerial view of a modern logistics and shipping port at golden hour",
      es: "Vista aérea de un puerto logístico y de transporte marítimo moderno en la hora dorada",
    },
  },
  "insight-jurisdictional": {
    id: "insight-jurisdictional",
    src: "/imagery/insight-jurisdictional.webp",
    aspect: "landscape",
    source: "google-gemini-flash",
    prompt:
      "Editorial architectural photograph of a modernist government building facade with tall columns, morning light, no people, no text, muted cool palette, large format, quiet institutional composition, photorealistic",
    alt: {
      en: "Modernist government building facade with tall columns in morning light",
      es: "Fachada de edificio gubernamental modernista con altas columnas bajo la luz de la mañana",
    },
  },
  "insight-capital": {
    id: "insight-capital",
    src: "/imagery/insight-capital.webp",
    aspect: "landscape",
    source: "google-gemini-flash",
    prompt:
      "Editorial photograph of a sparse modern institutional archive room with steel shelving and soft indirect overhead light, cool muted palette, no people, no legible text, architectural depth, medium format, photorealistic, quiet and precise",
    alt: {
      en: "Modern institutional archive room with steel shelving and soft overhead light",
      es: "Sala de archivo institucional moderna con estanterías de acero y luz suave cenital",
    },
  },
  "insight-wealth": {
    id: "insight-wealth",
    src: "/imagery/insight-wealth.webp",
    aspect: "landscape",
    source: "google-gemini-flash",
    prompt:
      "Editorial photograph of a private study with an antique wooden desk, stacks of ledgers, a brass reading lamp lit, warm indirect light, no people, no visible text, deep walnut and amber palette, cinematic composition, publication-grade interior photography, photorealistic",
    alt: {
      en: "Private study with an antique wooden desk, ledgers and a lit brass reading lamp",
      es: "Estudio privado con escritorio antiguo de madera, libros de contabilidad y una lámpara de latón encendida",
    },
  },

  // ———————————————————————————————————————————— Offices (5 cities — client-supplied photography)
  "office-mexico-city": {
    id: "office-mexico-city",
    src: "/imagery/office-mexico-city.jpg",
    aspect: "portrait",
    source: "custom",
    prompt: "Client-supplied photograph of the Mexico City office building in Polanco (Rubén Darío 281).",
    alt: {
      en: "Mexus Advisory Mexico City office on Rubén Darío in Polanco",
      es: "Oficina de Mexus Advisory en Ciudad de México sobre Rubén Darío, Polanco",
    },
  },
  "office-el-paso": {
    id: "office-el-paso",
    src: "/imagery/office-el-paso.jpg",
    aspect: "portrait",
    source: "custom",
    prompt: "Client-supplied photograph of the El Paso downtown district at 213 S. El Paso Street.",
    alt: {
      en: "Mexus Advisory El Paso office on S. El Paso Street, downtown El Paso",
      es: "Oficina de Mexus Advisory en El Paso, S. El Paso Street, centro de El Paso",
    },
  },
  "office-san-antonio": {
    id: "office-san-antonio",
    src: "/imagery/office-san-antonio.jpg",
    aspect: "portrait",
    source: "custom",
    prompt: "Client-supplied photograph of the San Antonio office tower at 112 E Pecan Street.",
    alt: {
      en: "Mexus Advisory San Antonio office tower on E Pecan Street",
      es: "Torre de oficinas de Mexus Advisory en San Antonio, E Pecan Street",
    },
  },
  "office-juarez": {
    id: "office-juarez",
    src: "/imagery/office-juarez.jpg",
    aspect: "portrait",
    source: "custom",
    prompt:
      "Client-supplied photograph of the Ciudad Juárez office in Parque Industrial Antonio J. Bermúdez.",
    alt: {
      en: "Mexus Advisory Ciudad Juárez office in Parque Industrial Antonio J. Bermúdez",
      es: "Oficina de Mexus Advisory en Ciudad Juárez, Parque Industrial Antonio J. Bermúdez",
    },
  },
  "office-chihuahua": {
    id: "office-chihuahua",
    src: "/imagery/office-chihuahua.jpg",
    aspect: "portrait",
    source: "custom",
    prompt:
      "Client-supplied photograph of the Chihuahua office on Monte Albán, Col. Real de Potreros.",
    alt: {
      en: "Mexus Advisory Chihuahua office on Monte Albán, Real de Potreros",
      es: "Oficina de Mexus Advisory en Chihuahua, Monte Albán, Real de Potreros",
    },
  },
};
