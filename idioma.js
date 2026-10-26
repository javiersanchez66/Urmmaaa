// ===== SISTEMA DE IDIOMAS ES / EN – URMA =====
const traducciones = {
  // Navegación
  "nav-inicio": { es: "Inicio", en: "Home" },
  "nav-problemas": { es: "Problemas", en: "Problems" },
  "nav-consejos": { es: "Consejos", en: "Tips" },
  "nav-cantones": { es: "Cantones", en: "Cantons" },
  "nav-paquetes": { es: "Paquetes", en: "Packages" },

  // Header / Footer
  "footer1": { es: "Sitio informativo sobre la Provincia de El Oro – Ecuador", en: "Informative site about El Oro Province – Ecuador" },
  "footer2": { es: "Hecho para orientación de viajeros | 2026", en: "Made for traveler guidance | 2026" },
  "volver-inicio": { es: "Volver al inicio", en: "Back to home" },

  // Página Inicio
  "subtitulo-inicio": { es: "Guía turística interactiva de El Oro", en: "Interactive tourist guide of El Oro" },
  "hero-titulo": { es: "Bienvenido a El Oro con Urma", en: "Welcome to El Oro with Urma" },
  "hero-texto": {
    es: "Descubre los atractivos, los desafíos y los consejos prácticos para viajar por una de las provincias más productivas y diversas de Ecuador.",
    en: "Discover the attractions, challenges and practical tips for traveling through one of Ecuador's most productive and diverse provinces."
  },
  "btn-problemas": { es: "Ver problemas para turistas", en: "See problems for tourists" },
  "btn-consejos": { es: "Ver consejos de viaje", en: "See travel tips" },
  "btn-cantones": { es: "Explorar cantones", en: "Explore cantons" },
  "btn-paquetes": { es: "Ver paquetes turísticos", en: "See tour packages" },
  "que-encontrar": { es: "¿Qué encontrarás en este sitio?", en: "What will you find on this site?" },
  "tarjeta1-titulo": { es: "Problemas reales", en: "Real problems" },
  "tarjeta1-texto": { es: "Inseguridad, clima, infraestructura y otros desafíos que enfrentan los turistas.", en: "Insecurity, weather, infrastructure and other challenges faced by tourists." },
  "tarjeta1-link": { es: "Ir a Problemas →", en: "Go to Problems →" },
  "tarjeta2-titulo": { es: "Consejos prácticos", en: "Practical tips" },
  "tarjeta2-texto": { es: "Recomendaciones claras para viajar con más seguridad y tranquilidad.", en: "Clear recommendations to travel with more safety and peace of mind." },
  "tarjeta2-link": { es: "Ir a Consejos →", en: "Go to Tips →" },
  "tarjeta3-titulo": { es: "Los 14 cantones", en: "The 14 cantons" },
  "tarjeta3-texto": { es: "Conoce cada cantón de la provincia de forma interactiva.", en: "Get to know each canton of the province interactively." },
  "tarjeta3-link": { es: "Ver cantones →", en: "See cantons →" },
  "tarjeta4-titulo": { es: "Paquetes turísticos", en: "Tour packages" },
  "tarjeta4-texto": { es: "Planes de cultura, aventura y naturaleza para disfrutar El Oro.", en: "Culture, adventure and nature plans to enjoy El Oro." },
  "tarjeta4-link": { es: "Ver paquetes →", en: "See packages →" },
  "datos-titulo": { es: "Datos rápidos de El Oro", en: "Quick facts about El Oro" },
  "dato1": { es: "Capital: Machala", en: "Capital: Machala" },
  "dato2": { es: "Cantones: 14", en: "Cantons: 14" },
  "dato3": { es: "Población aproximada: más de 700.000 habitantes", en: "Approximate population: more than 700,000 inhabitants" },
  "dato4": { es: "Atractivos principales: Playas de Jambelí, Puerto Bolívar, Zaruma, Piñas, bosque petrificado de Puyango", en: "Main attractions: Jambelí beaches, Puerto Bolívar, Zaruma, Piñas, Puyango petrified forest" },

  // Problemas
  "subtitulo-problemas": { es: "Problemas que pueden enfrentar los turistas", en: "Problems that tourists may face" },
  "problemas-titulo": { es: "Principales problemas para turistas", en: "Main problems for tourists" },
  "problemas-intro": {
    es: "Antes de viajar es importante conocer los desafíos reales que se han reportado en los últimos años en la provincia de El Oro.",
    en: "Before traveling it is important to know the real challenges that have been reported in recent years in El Oro province."
  },
  "prob1-titulo": { es: "1. Inseguridad y delincuencia", en: "1. Insecurity and crime" },
  "prob1-resumen": { es: "Es el problema más reportado en zonas costeras.", en: "It is the most reported problem in coastal areas." },
  "prob1-detalle": {
    es: "En cantones como Machala, Puerto Bolívar, El Guabo, Bajo Alto y Huaquillas se han registrado episodios de violencia. Esto ha reducido la afluencia turística en playas y malecones, especialmente durante feriados.",
    en: "In cantons such as Machala, Puerto Bolívar, El Guabo, Bajo Alto and Huaquillas, violent episodes have been recorded. This has reduced tourist arrivals on beaches and boardwalks, especially during holidays."
  },
  "prob2-titulo": { es: "2. Percepción de riesgo", en: "2. Risk perception" },
  "prob2-resumen": { es: "La imagen de la provincia se ha visto afectada.", en: "The image of the province has been affected." },
  "prob2-detalle": {
    es: "Aunque no todos los cantones tienen el mismo nivel de riesgo, muchos turistas nacionales prefieren viajar a Perú (Máncora, Zorritos) o a otras provincias ecuatorianas por considerarlo más seguro.",
    en: "Although not all cantons have the same level of risk, many national tourists prefer to travel to Peru (Máncora, Zorritos) or other Ecuadorian provinces because they consider them safer."
  },
  "prob3-titulo": { es: "3. Condiciones climáticas y oleaje", en: "3. Weather conditions and waves" },
  "prob3-resumen": { es: "Alertas frecuentes en playas durante feriados.", en: "Frequent alerts on beaches during holidays." },
  "prob3-detalle": {
    es: "Es común que se emitan alertas por oleaje peligroso en playas como Jambelí. En temporada de lluvias (enero-abril) pueden ocurrir desbordamientos de ríos y cierres temporales de carreteras.",
    en: "It is common for dangerous wave alerts to be issued on beaches such as Jambelí. During the rainy season (January-April) river overflows and temporary road closures may occur."
  },
  "prob4-titulo": { es: "4. Infraestructura vial", en: "4. Road infrastructure" },
  "prob4-resumen": { es: "Algunas vías hacia la zona alta están en mal estado.", en: "Some roads to the highlands are in poor condition." },
  "prob4-detalle": {
    es: "Las carreteras hacia destinos de altura (Zaruma, Piñas, Portovelo) o hacia ciertas playas pueden presentar daños o trabajos de mantenimiento, lo que alarga los tiempos de viaje.",
    en: "Roads to highland destinations (Zaruma, Piñas, Portovelo) or to certain beaches may have damage or maintenance work, which lengthens travel times."
  },
  "prob5-titulo": { es: "5. Baja ocupación en zonas costeras", en: "5. Low occupancy in coastal areas" },
  "prob5-resumen": { es: "Hoteles y servicios reducidos en algunas playas.", en: "Hotels and services reduced on some beaches." },
  "prob5-detalle": {
    es: "En destinos como Bajo Alto, Jambelí y Puerto Bolívar la oferta turística se ha visto afectada. Algunos establecimientos cierran temporalmente o reducen servicios por falta de visitantes.",
    en: "In destinations such as Bajo Alto, Jambelí and Puerto Bolívar the tourist offer has been affected. Some establishments close temporarily or reduce services due to lack of visitors."
  },
  "prob6-titulo": { es: "6. Competencia con destinos fronterizos", en: "6. Competition with border destinations" },
  "prob6-resumen": { es: "Muchos prefieren cruzar a Perú.", en: "Many prefer to cross to Peru." },
  "prob6-detalle": {
    es: "La cercanía con Perú hace que muchos ecuatorianos elijan cruzar la frontera por precio y percepción de mayor seguridad, impactando directamente el turismo interno de El Oro.",
    en: "The proximity to Peru causes many Ecuadorians to choose to cross the border for price and perception of greater security, directly impacting El Oro's domestic tourism."
  },
  "ver-mas": { es: "Clic para más información ▼", en: "Click for more information ▼" },
  "aviso-titulo": { es: "Importante", en: "Important" },
  "aviso-texto": {
    es: "La situación de seguridad puede cambiar. Se recomienda consultar fuentes oficiales o medios locales antes de viajar, especialmente a zonas costeras.",
    en: "The security situation may change. It is recommended to check official sources or local media before traveling, especially to coastal areas."
  },

  // Consejos
  "subtitulo-consejos": { es: "Consejos prácticos para viajar con más seguridad", en: "Practical tips for safer travel" },
  "consejos-titulo": { es: "Consejos para viajar a El Oro", en: "Tips for traveling to El Oro" },
  "consejos-intro": {
    es: "Sigue estas recomendaciones para disfrutar tu viaje con mayor tranquilidad.",
    en: "Follow these recommendations to enjoy your trip with greater peace of mind."
  },
  "consejo1-titulo": { es: "Consulta la situación actual", en: "Check the current situation" },
  "consejo1-texto": { es: "Antes de salir, revisa noticias locales o fuentes oficiales sobre seguridad y estado de las carreteras.", en: "Before leaving, check local news or official sources about security and road conditions." },
  "consejo2-titulo": { es: "Prefiere desplazarte de día", en: "Prefer daytime travel" },
  "consejo2-texto": { es: "Evita circular por zonas poco transitadas durante la noche, especialmente en la zona costera.", en: "Avoid driving through low-traffic areas at night, especially in the coastal zone." },
  "consejo3-titulo": { es: "Presta atención al oleaje", en: "Pay attention to the waves" },
  "consejo3-texto": { es: "En playas como Jambelí sigue siempre las indicaciones de guardavidas y las alertas de Inocar.", en: "On beaches such as Jambelí always follow the indications of lifeguards and Inocar alerts." },
  "consejo4-titulo": { es: "Zona alta suele ser más tranquila", en: "The highlands are usually quieter" },
  "consejo4-texto": { es: "Los cantones de altura (Zaruma, Piñas, Portovelo, Atahualpa) generalmente reportan mejor percepción de seguridad.", en: "Highland cantons (Zaruma, Piñas, Portovelo, Atahualpa) generally report a better perception of security." },
  "consejo5-titulo": { es: "Usa transporte formal", en: "Use formal transport" },
  "consejo5-texto": { es: "Prefiere cooperativas conocidas o servicios de transporte oficial. Evita mostrar objetos de valor en la calle.", en: "Prefer known cooperatives or official transport services. Avoid displaying valuables on the street." },
  "consejo6-titulo": { es: "Informa tu itinerario", en: "Share your itinerary" },
  "consejo6-texto": { es: "Deja siempre a alguien de confianza saber a dónde vas y cuándo planeas regresar.", en: "Always let someone you trust know where you are going and when you plan to return." },
  "consejo7-titulo": { es: "Revisa el estado de las vías", en: "Check road conditions" },
  "consejo7-texto": { es: "Si viajas hacia la zona montañosa, confirma el estado de las carreteras (pueden haber deslizamientos en época de lluvia).", en: "If you travel to the mountainous area, confirm the condition of the roads (there may be landslides in the rainy season)." },
  "zona-titulo": { es: "¿Dónde hay más tranquilidad?", en: "Where is it quieter?" },
  "zona-texto": {
    es: "Según reportes de operadores turísticos, durante feriados los visitantes suelen preferir la parte alta de la provincia (Piñas, Zaruma, Portovelo y Atahualpa) por la percepción de mayor seguridad y la oferta de actividades culturales y de naturaleza.",
    en: "According to reports from tourism operators, during holidays visitors usually prefer the high part of the province (Piñas, Zaruma, Portovelo and Atahualpa) due to the perception of greater security and the offer of cultural and nature activities."
  },
  "btn-ver-cantones": { es: "Ver todos los cantones", en: "See all cantons" },

  // Cantones
  "subtitulo-cantones": { es: "Los 14 cantones de la provincia", en: "The 14 cantons of the province" },
  "cantones-titulo": { es: "Cantones de El Oro", en: "Cantons of El Oro" },
  "cantones-intro": {
    es: "Haz clic en cada cantón para ver información básica. Puedes filtrar por zona:",
    en: "Click on each canton to see basic information. You can filter by zone:"
  },
  "filtro-todos": { es: "Todos", en: "All" },
  "filtro-costa": { es: "Zona costera", en: "Coastal zone" },
  "filtro-altura": { es: "Zona alta", en: "Highland zone" },
  "cabecera-capital": { es: "Capital provincial", en: "Provincial capital" },
  "tag-costa": { es: "Zona costera", en: "Coastal zone" },
  "tag-altura": { es: "Zona alta", en: "Highland zone" },
  "cantones-intro": { es: "Explora los 14 cantones de la provincia. Haz clic en cada tarjeta para leer más detalles. Puedes filtrar por zona:", en: "Explore the 14 cantons of the province. Click on each card to read more details. You can filter by zone:" },
  "resumen-machala": { es: "La capital bananera del mundo y el corazón urbano de El Oro.", en: "The banana capital of the world and the urban heart of El Oro." },
  "info-machala": { es: "Machala es la capital de la provincia y el principal centro comercial y portuario. Desde aquí se exporta gran parte del banano ecuatoriano. Puerto Bolívar, su puerto, ofrece paseos y vistas al mar. Es una ciudad dinámica, con parques, monumentos y buena oferta de hoteles y restaurantes. Ideal como punto de partida para explorar el resto de la provincia.", en: "Machala is the capital of the province and the main commercial and port center. Much of Ecuador's bananas are exported from here. Puerto Bolívar, its port, offers walks and sea views. It is a dynamic city with parks, monuments and a good range of hotels and restaurants. Ideal as a starting point to explore the rest of the province." },
  "resumen-pasaje": { es: "Cantón agrícola y de paso entre la costa y la sierra orense.", en: "Agricultural canton and gateway between the coast and the highlands." },
  "info-pasaje": { es: "Pasaje es un importante centro agrícola conocido por sus cultivos de banano, cacao y arroz. Su ubicación estratégica lo convierte en punto de conexión entre Machala y los cantones de la zona alta. Ofrece un ambiente más tranquilo que la capital y es ideal para quienes buscan conocer la vida rural de la provincia.", en: "Pasaje is an important agricultural center known for its banana, cocoa and rice crops. Its strategic location makes it a connection point between Machala and the highland cantons. It offers a quieter atmosphere than the capital and is ideal for those who want to experience the rural life of the province." },
  "resumen-santa-rosa": { es: "Uno de los cantones más grandes, con aeropuerto y conexión fronteriza.", en: "One of the largest cantons, with an airport and border connection." },
  "info-santa-rosa": { es: "Santa Rosa destaca por su extensión y diversidad. Cuenta con aeropuerto y es puerta de entrada hacia la frontera con Perú. Combina zonas de valle y cercanía a la costa. Es un cantón con fuerte actividad comercial y agrícola, perfecto para quienes viajan por tierra o buscan conexiones hacia el sur del país.", en: "Santa Rosa stands out for its size and diversity. It has an airport and is a gateway to the border with Peru. It combines valley areas and proximity to the coast. It is a canton with strong commercial and agricultural activity, perfect for those traveling by land or looking for connections to the south of the country." },
  "resumen-huaquillas": { es: "Ciudad fronteriza vibrante con intenso comercio binacional.", en: "Vibrant border city with intense binational trade." },
  "info-huaquillas": { es: "Huaquillas es la principal ciudad fronteriza de El Oro con Perú. Su mercado y actividad comercial son muy dinámicos. Es punto de paso frecuente de viajeros y comerciantes. Aunque conviene tomar precauciones de seguridad, ofrece una experiencia única de intercambio cultural y comercial entre ambos países.", en: "Huaquillas is the main border city of El Oro with Peru. Its market and commercial activity are very dynamic. It is a frequent transit point for travelers and traders. Although security precautions are advisable, it offers a unique experience of cultural and commercial exchange between both countries." },
  "resumen-el-guabo": { es: "Hogar de la playa de Bajo Alto y paisajes costeros.", en: "Home of Bajo Alto beach and coastal landscapes." },
  "info-el-guabo": { es: "El Guabo es conocido por la playa de Bajo Alto, un destino de sol y mar que en el pasado atrajo a muchos visitantes. También cuenta con zonas de manglar y actividad pesquera. Es un cantón costero con potencial turístico, ideal para quienes buscan playas menos masificadas (siempre verificando las condiciones de seguridad actuales).", en: "El Guabo is known for Bajo Alto beach, a sun-and-sea destination that used to attract many visitors. It also has mangrove areas and fishing activity. It is a coastal canton with tourism potential, ideal for those seeking less crowded beaches (always checking current security conditions)." },
  "resumen-arenillas": { es: "Cantón agrícola cercano a la frontera, de paso y producción.", en: "Agricultural canton near the border, transit and production area." },
  "info-arenillas": { es: "Arenillas se caracteriza por su producción agrícola y su ubicación cercana a la frontera. Es un cantón de paso importante y ofrece un ambiente más rural. Quienes viajan hacia el sur o hacia Perú suelen atravesarlo. Ideal para conocer la vida del campo orense.", en: "Arenillas is characterized by its agricultural production and its location near the border. It is an important transit canton and offers a more rural atmosphere. Those traveling south or to Peru often pass through it. Ideal for experiencing the rural life of El Oro." },
  "resumen-pinas": { es: "Conocida como el “Orquidario del Ecuador” por su riqueza floral.", en: "Known as the “Orchidarium of Ecuador” for its floral richness." },
  "info-pinas": { es: "Piñas es famosa por sus orquídeas y su clima agradable de altura. Ofrece paisajes montañosos, senderos y una atmósfera tranquila. Es uno de los destinos preferidos de la zona alta por su seguridad percibida y su oferta de turismo de naturaleza y cultura. Perfecta para quienes buscan paz y contacto con la naturaleza.", en: "Piñas is famous for its orchids and pleasant highland climate. It offers mountain landscapes, trails and a peaceful atmosphere. It is one of the preferred destinations in the highlands due to its perceived safety and its nature and cultural tourism offer. Perfect for those seeking peace and contact with nature." },
  "resumen-zaruma": { es: "Ciudad histórica, minera y uno de los Pueblos Mágicos de Ecuador.", en: "Historic mining town and one of Ecuador’s Magical Towns." },
  "info-zaruma": { es: "Zaruma es una de las joyas de El Oro. Su arquitectura colonial, calles empedradas, historia minera del oro y título de Pueblo Mágico la convierten en un destino cultural imprescindible. Ideal para caminar, conocer su patrimonio, degustar café local y disfrutar de vistas espectaculares de la sierra. Muy recomendada por su ambiente seguro y acogedor.", en: "Zaruma is one of the jewels of El Oro. Its colonial architecture, cobblestone streets, gold mining history and Magical Town status make it an essential cultural destination. Ideal for walking, discovering its heritage, tasting local coffee and enjoying spectacular highland views. Highly recommended for its safe and welcoming atmosphere." },
  "resumen-portovelo": { es: "Histórica ciudad minera junto a Zaruma, llena de patrimonio.", en: "Historic mining town next to Zaruma, full of heritage." },
  "info-portovelo": { es: "Portovelo comparte con Zaruma una rica historia minera. Aquí se pueden visitar restos de la actividad aurífera, museos y disfrutar de un ambiente de altura con clima fresco. Es un complemento perfecto a la visita de Zaruma y atrae a quienes buscan turismo cultural e histórico en un entorno montañoso.", en: "Portovelo shares a rich mining history with Zaruma. Here you can visit remains of gold mining activity, museums and enjoy a highland atmosphere with a cool climate. It is a perfect complement to a visit to Zaruma and attracts those seeking cultural and historical tourism in a mountain setting." },
  "resumen-atahualpa": { es: "Paisajes montañosos y ambiente rural tranquilo.", en: "Mountain landscapes and a peaceful rural atmosphere." },
  "info-atahualpa": { es: "Atahualpa (cabecera en Paccha) ofrece hermosos paisajes de montaña y un ritmo de vida pausado. Es ideal para el turismo rural, caminatas y para quienes desean alejarse del bullicio. Su entorno natural y la hospitalidad de su gente lo convierten en un destino auténtico de la zona alta orense.", en: "Atahualpa (seat in Paccha) offers beautiful mountain landscapes and a relaxed pace of life. Ideal for rural tourism, walks and for those who want to get away from the hustle. Its natural surroundings and the hospitality of its people make it an authentic destination in the highlands of El Oro." },
  "resumen-balsas": { es: "Pequeño cantón de altura, rural y sereno.", en: "Small highland canton, rural and serene." },
  "info-balsas": { es: "Balsas es uno de los cantones más pequeños y tranquilos de la provincia. Su ambiente rural, clima de altura y cercanía a otros destinos de la zona alta lo hacen atractivo para quienes buscan paz, naturaleza y una experiencia auténtica lejos de las multitudes.", en: "Balsas is one of the smallest and quietest cantons in the province. Its rural atmosphere, highland climate and proximity to other highland destinations make it attractive for those seeking peace, nature and an authentic experience away from the crowds." },
  "resumen-marcabeli": { es: "Cantón agrícola de altura con ambiente sosegado.", en: "Highland agricultural canton with a calm atmosphere." },
  "info-marcabeli": { es: "Marcabelí se caracteriza por su economía agrícola y su entorno montañoso. Es un destino poco masificado, ideal para el turismo de naturaleza y para conocer la vida cotidiana de la sierra orense. Ofrece tranquilidad y paisajes auténticos.", en: "Marcabelí is characterized by its agricultural economy and mountain surroundings. It is a little-visited destination, ideal for nature tourism and for experiencing everyday life in the highlands of El Oro. It offers tranquility and authentic landscapes." },
  "resumen-chilla": { es: "Uno de los cantones menos poblados, montañoso y rural.", en: "One of the least populated cantons, mountainous and rural." },
  "info-chilla": { es: "Chilla es un cantón pequeño y poco conocido, con paisajes montañosos y un fuerte carácter rural. Perfecto para viajeros que buscan destinos fuera de las rutas tradicionales, contacto con la naturaleza y la autenticidad de las comunidades de altura de El Oro.", en: "Chilla is a small and little-known canton, with mountain landscapes and a strong rural character. Perfect for travelers looking for destinations off the traditional routes, contact with nature and the authenticity of the highland communities of El Oro." },
  "resumen-las-lajas": { es: "Cantón pequeño de la zona alta con ambiente rural.", en: "Small highland canton with a rural atmosphere." },
  "info-las-lajas": { es: "Las Lajas (cabecera en La Victoria) es un cantón tranquilo de la zona alta. Ofrece un entorno rural, aire puro y la posibilidad de conocer la vida de las comunidades montañosas de El Oro. Ideal para quienes valoran la calma y los paisajes naturales.", en: "Las Lajas (seat in La Victoria) is a quiet highland canton. It offers a rural environment, pure air and the chance to experience the life of the mountain communities of El Oro. Ideal for those who value calm and natural landscapes." },

  // Paquetes
  "subtitulo-paquetes": { es: "Paquetes turísticos pensados para ti", en: "Tour packages designed for you" },
  "paquetes-titulo": { es: "Nuestros Paquetes Turísticos", en: "Our Tour Packages" },
  "paquetes-intro": {
    es: "Tres experiencias únicas en forma de tríptico: Cultura, Aventura y Naturaleza. Elige la que más se adapte a ti. Todos incluyen orientación de seguridad.",
    en: "Three unique experiences in triptych form: Culture, Adventure and Nature. Choose the one that suits you best. All include safety guidance."
  },
  "etiqueta-cultura": { es: "Cultura", en: "Culture" },
  "etiqueta-aventura": { es: "Aventura", en: "Adventure" },
  "etiqueta-naturaleza": { es: "Naturaleza", en: "Nature" },
  "mas-popular": { es: "Más popular", en: "Most popular" },
  "por-persona": { es: "/ persona", en: "/ person" },
  "paq1-nombre": { es: "Ruta Cultural Orense", en: "Orense Cultural Route" },
  "paq1-duracion": { es: "2 días / 1 noche", en: "2 days / 1 night" },
  "paq1-i1": { es: "Visita a Zaruma (Pueblo Mágico)", en: "Visit to Zaruma (Magical Town)" },
  "paq1-i2": { es: "Portovelo y su museo minero", en: "Portovelo and its mining museum" },
  "paq1-i3": { es: "Arquitectura colonial y plazas", en: "Colonial architecture and squares" },
  "paq1-i4": { es: "Degustación de comida típica", en: "Typical food tasting" },
  "paq1-i5": { es: "Café de altura y tradiciones", en: "Highland coffee and traditions" },
  "paq1-i6": { es: "Hospedaje en hostería colonial", en: "Stay in a colonial guesthouse" },
  "paq1-i7": { es: "Guía cultural local", en: "Local cultural guide" },
  "paq2-nombre": { es: "Aventura Costa & Sierra", en: "Coast & Highlands Adventure" },
  "paq2-duracion": { es: "2 días / 1 noche", en: "2 days / 1 night" },
  "paq2-i1": { es: "Paseo en lancha por las islas de Jambelí", en: "Boat ride through the Jambelí islands" },
  "paq2-i2": { es: "Senderismo en la zona de Piñas", en: "Hiking in the Piñas area" },
  "paq2-i3": { es: "Visita a miradores y cascadas cercanas", en: "Visit to viewpoints and nearby waterfalls" },
  "paq2-i4": { es: "Actividades al aire libre en Portovelo", en: "Outdoor activities in Portovelo" },
  "paq2-i5": { es: "Hospedaje en hotel cómodo", en: "Comfortable hotel accommodation" },
  "paq2-i6": { es: "Almuerzos y desayuno incluidos", en: "Lunches and breakfast included" },
  "paq2-i7": { es: "Guía de aventura y equipo básico", en: "Adventure guide and basic equipment" },
  "paq3-nombre": { es: "Naturaleza Pura de El Oro", en: "Pure Nature of El Oro" },
  "paq3-duracion": { es: "3 días / 2 noches", en: "3 days / 2 nights" },
  "paq3-i1": { es: "Bosque Petrificado de Puyango", en: "Puyango Petrified Forest" },
  "paq3-i2": { es: "Observación de aves y flora nativa", en: "Birdwatching and native flora" },
  "paq3-i3": { es: "Playas y manglares de Jambelí", en: "Beaches and mangroves of Jambelí" },
  "paq3-i4": { es: "Senderos ecológicos en la zona alta", en: "Ecological trails in the highlands" },
  "paq3-i5": { es: "Hospedaje en hostería ecológica", en: "Stay in an ecological lodge" },
  "paq3-i6": { es: "Todas las comidas incluidas", en: "All meals included" },
  "paq3-i7": { es: "Guía naturalista especializado", en: "Specialized naturalist guide" },
  "paq3-i8": { es: "Transporte privado", en: "Private transport" },
  "btn-reservar": { es: "Consultar disponibilidad", en: "Check availability" },
  "btn-ver-mas": { es: "Ver más detalles", en: "See more details" },
  "detalle1-titulo": { es: "¿Qué incluye esta experiencia?", en: "What does this experience include?" },
  "detalle1-texto": { es: "Recorre la historia viva de El Oro. Zaruma, declarada Pueblo Mágico, te recibe con calles empedradas, balcones coloniales y la memoria del oro. En Portovelo conocerás el legado minero y degustarás el auténtico café de altura. Ideal para amantes de la historia, la arquitectura y la gastronomía local.", en: "Walk through the living history of El Oro. Zaruma, declared a Magical Town, welcomes you with cobblestone streets, colonial balconies and the memory of gold. In Portovelo you will discover the mining legacy and taste authentic highland coffee. Ideal for lovers of history, architecture and local gastronomy." },
  "detalle1-i1": { es: "Itinerario día 1: Llegada a Zaruma + tour histórico", en: "Day 1 itinerary: Arrival in Zaruma + historic tour" },
  "detalle1-i2": { es: "Itinerario día 2: Portovelo + degustación + retorno", en: "Day 2 itinerary: Portovelo + tasting + return" },
  "detalle1-i3": { es: "Grupo reducido (máx. 12 personas)", en: "Small group (max. 12 people)" },
  "detalle1-i4": { es: "Recomendaciones de seguridad incluidas", en: "Safety recommendations included" },
  "detalle2-titulo": { es: "¿Qué incluye esta experiencia?", en: "What does this experience include?" },
  "detalle2-texto": { es: "Combina el mar y la montaña en un solo viaje. Navega entre las islas de Jambelí, camina por senderos de Piñas y descubre miradores con vistas impresionantes. Pensado para quienes buscan movimiento, paisajes y adrenalina suave. Nivel de dificultad: moderado.", en: "Combine sea and mountain in a single trip. Sail among the Jambelí islands, walk the trails of Piñas and discover viewpoints with impressive views. Designed for those seeking movement, landscapes and mild adrenaline. Difficulty level: moderate." },
  "detalle2-i1": { es: "Día 1: Costa – lancha y playa", en: "Day 1: Coast – boat and beach" },
  "detalle2-i2": { es: "Día 2: Sierra – senderismo y cascadas", en: "Day 2: Highlands – hiking and waterfalls" },
  "detalle2-i3": { es: "Equipo básico de senderismo incluido", en: "Basic hiking equipment included" },
  "detalle2-i4": { es: "Seguro de actividades y recomendaciones de seguridad", en: "Activity insurance and safety recommendations" },
  "detalle3-titulo": { es: "¿Qué incluye esta experiencia?", en: "What does this experience include?" },
  "detalle3-texto": { es: "Sumérgete en la naturaleza más pura de la provincia. Desde el impresionante Bosque Petrificado de Puyango (fósiles de más de 100 millones de años) hasta los manglares y playas de Jambelí, pasando por senderos de altura. Ideal para amantes de la biodiversidad y la fotografía de naturaleza.", en: "Immerse yourself in the purest nature of the province. From the impressive Puyango Petrified Forest (fossils over 100 million years old) to the mangroves and beaches of Jambelí, including highland trails. Ideal for lovers of biodiversity and nature photography." },
  "detalle3-i1": { es: "Día 1: Puyango y entorno natural", en: "Day 1: Puyango and natural surroundings" },
  "detalle3-i2": { es: "Día 2: Zona alta – senderos y aves", en: "Day 2: Highlands – trails and birds" },
  "detalle3-i3": { es: "Día 3: Manglares y playas de Jambelí", en: "Day 3: Mangroves and Jambelí beaches" },
  "detalle3-i4": { es: "Guía naturalista especializado y transporte privado", en: "Specialized naturalist guide and private transport" },
  "descarga-titulo": { es: "Descarga el Tríptico", en: "Download the Triptych" },
  "descarga-texto": { es: "Lleva contigo toda la información de los tres paquetes en un hermoso PDF listo para imprimir o compartir.", en: "Take with you all the information about the three packages in a beautiful PDF ready to print or share." },
  "btn-descargar": { es: "⬇ Descargar Tríptico PDF", en: "⬇ Download Triptych PDF" },

  "nota-paquetes-titulo": { es: "Nota importante", en: "Important note" },
  "nota-paquetes-texto": {
    es: "Los precios son referenciales y pueden variar según temporada y número de personas. Antes de reservar te damos información actualizada sobre seguridad en las zonas a visitar.",
    en: "Prices are referential and may vary according to season and number of people. Before booking we provide updated information on security in the areas to visit."
  }
};

let idiomaActual = localStorage.getItem("idioma") || "es";

function cambiarIdioma(nuevoIdioma) {
  idiomaActual = nuevoIdioma;
  localStorage.setItem("idioma", nuevoIdioma);

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const clave = el.getAttribute("data-i18n");
    if (traducciones[clave] && traducciones[clave][nuevoIdioma]) {
      el.textContent = traducciones[clave][nuevoIdioma];
    }
  });

  document.querySelectorAll(".btn-idioma").forEach(btn => btn.classList.remove("activo"));
  const btnActivo = document.querySelector(`.btn-idioma[data-lang="${nuevoIdioma}"]`);
  if (btnActivo) btnActivo.classList.add("activo");

  document.documentElement.lang = nuevoIdioma;
}

document.addEventListener("DOMContentLoaded", () => {
  cambiarIdioma(idiomaActual);
});
