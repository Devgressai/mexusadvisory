import type { Person } from "@/types/content";

/**
 * People roster. Ordered Members first, Executives second, to match the
 * way the roster is grouped on /about/people. Each entry resolves to an
 * /about/people/<slug> detail page.
 */
export const people: Person[] = [
  // ———————————————————————————————————————————— Members
  {
    id: "mace-miller",
    slug: "mace-miller",
    name: "Mace Miller",
    role: { en: "Managing Partner", es: "Socio Administrador" },
    location: { en: "Americas", es: "Américas" },
    email: "mmiller@mexusadvisory.com",
    education: {
      en: "J.D., Texas Tech University School of Law · B.B.A. and M.B.A., The University of Texas at El Paso",
      es: "J.D., Texas Tech University School of Law · B.B.A. y M.B.A., Universidad de Texas en El Paso",
    },
    bio: {
      en: [
        "Mace Miller is a seasoned financial expert and legal professional with a distinguished career spanning multiple industries and sectors. He is a graduate of the University of Texas at El Paso, where he earned both a Bachelor of Business Administration (BBA) and a Master of Business Administration (MBA). Mr. Miller also obtained his Doctorate of Jurisprudence from the Texas Tech School of Law.",
        "He has held U.S. securities licenses Series 6, 65, and 7 during his tenure as a Principal for Raymond James Financial Services. His career highlights include serving as the Managing Director for Coronado Capital Advisors, a municipal-derivative hedge fund. He has advised or managed assets and transactions exceeding $1B USD, covering a diverse range of financial and legal issues including managing investment accounts, formation of alternative energy development limited partnerships and litigation of cross-border investment transactions.",
        "Currently, Mace Miller is the Managing Member of Mexus Advisory, a multinational bespoke global mobility consulting firm. His extensive experience in both the financial and legal arenas, combined with his strategic insight, has positioned him as a trusted advisor and leader in the industry.",
      ],
      es: [
        "Mace Miller es un experto financiero y profesional legal con una distinguida carrera que abarca múltiples industrias y sectores. Es egresado de la Universidad de Texas en El Paso, donde obtuvo la licenciatura (BBA) y la maestría (MBA) en administración de empresas. También obtuvo su Doctorado en Jurisprudencia en la Texas Tech School of Law.",
        "Mantuvo las licencias de valores estadounidenses Series 6, 65 y 7 durante su etapa como Principal en Raymond James Financial Services. Entre los puntos altos de su carrera destaca su trabajo como Director General de Coronado Capital Advisors, un hedge fund de derivados municipales. Ha asesorado o administrado activos y transacciones por más de USD 1,000 millones, cubriendo una amplia gama de temas financieros y legales, incluyendo la administración de cuentas de inversión, la formación de sociedades para el desarrollo de energías alternativas y el litigio de transacciones de inversión transfronterizas.",
        "Actualmente, Mace Miller es Socio Administrador de Mexus Advisory, una firma multinacional de consultoría en movilidad global. Su amplia experiencia en los ámbitos financiero y legal, combinada con su visión estratégica, lo posiciona como un asesor y líder de confianza en la industria.",
      ],
    },
    practices: ["global-immigration-consulting", "jurisdictional-optimization"],
    languages: ["English", "Español"],
    tier: "member",
  },
  {
    id: "jeremy-anderson",
    slug: "jeremy-anderson",
    name: "Jeremy Anderson",
    role: {
      en: "Immigration Lawyer & Global Mobility Consultant",
      es: "Abogado de Inmigración y Consultor en Movilidad Global",
    },
    location: { en: "Americas", es: "Américas" },
    email: "janderson@mexusadvisory.com",
    education: {
      en: "J.D., Louisiana State University",
      es: "J.D., Louisiana State University",
    },
    bio: {
      en: [
        "Jeremy Anderson is an immigration lawyer and global mobility consultant who advises high-performing individuals, families, and organizations on the legal, strategic, and operational complexities of cross-border movement. His work sits at the intersection of immigration, international mobility, personal wealth planning, and risk mitigation, with a particular focus on serving high net worth individuals and globally active families whose lives, assets, and business interests span multiple jurisdictions.",
        "Jeremy counsels clients on immigration strategy, residence and relocation planning, cross-border compliance, and the risks that arise when personal, professional, and financial matters move across borders. He is known for helping clients protect both opportunity and stability by addressing immigration exposure alongside broader concerns such as family mobility, asset protection, privacy, succession considerations, and jurisdictional risk. His approach is deliberate, discreet, and tailored to the realities faced by individuals and families managing international lifestyles and multigenerational interests.",
        "In his work with companies and private clients, Jeremy advises on global mobility programs, employment-based immigration, workforce movement, and compliance frameworks that support growth while reducing legal and operational risk. He works closely with leadership teams, HR partners, family offices, and other professional advisors to align immigration strategy with broader personal and business objectives.",
        "Jeremy is also a recognized media voice on cross-border issues, particularly those affecting immigration law. He has been featured by international media outlets including TV Azteca, Televisa, CNN en Español, BBC, RaiTV, Univision, and Telemundo, as well as numerous local channels, where he provides insight on immigration developments and related cross-border matters.",
        "Clients value Jeremy for his judgment, responsiveness, and ability to turn complex regulatory environments into clear, actionable guidance. His practice is grounded in the belief that global mobility should create confidence rather than uncertainty. Through his legal and consulting work, he helps clients preserve freedom of movement, protect personal wealth, and mitigate risk across borders with clarity and purpose.",
      ],
      es: [
        "Jeremy Anderson es abogado de inmigración y consultor en movilidad global, y asesora a personas, familias y organizaciones de alto perfil en las complejidades legales, estratégicas y operativas del movimiento transfronterizo. Su trabajo se sitúa en la intersección de la inmigración, la movilidad internacional, la planeación patrimonial y la mitigación de riesgos, con un enfoque particular en personas de alto patrimonio y familias globales cuyos activos, intereses comerciales y estilos de vida abarcan múltiples jurisdicciones.",
        "Jeremy asesora a sus clientes en estrategia migratoria, planificación de residencia y reubicación, cumplimiento transfronterizo y riesgos que surgen cuando los asuntos personales, profesionales y financieros cruzan fronteras. Es reconocido por ayudar a sus clientes a proteger tanto las oportunidades como la estabilidad, abordando la exposición migratoria junto con otras consideraciones clave como la movilidad familiar, la protección de activos, la privacidad, la sucesión patrimonial y el riesgo jurisdiccional. Su enfoque es deliberado, discreto y diseñado conforme a la realidad de personas y familias que gestionan estilos de vida internacionales e intereses multigeneracionales.",
        "En su trabajo con empresas y clientes privados, Jeremy asesora sobre programas de movilidad global, inmigración basada en empleo, traslado internacional de personal y marcos de cumplimiento que apoyan el crecimiento mientras reducen el riesgo legal y operativo. Colabora estrechamente con equipos directivos, profesionales de recursos humanos, family offices y otros asesores para alinear la estrategia migratoria con objetivos personales y empresariales más amplios.",
        "Jeremy también es una voz reconocida en medios de comunicación sobre temas transfronterizos, en particular aquellos que afectan el derecho migratorio. Ha sido invitado en medios internacionales como TV Azteca, Televisa, CNN en Español, BBC, RaiTV, Univision y Telemundo, así como en numerosos canales locales, donde ofrece análisis sobre desarrollos migratorios y asuntos relacionados con la movilidad internacional.",
        "Sus clientes valoran su criterio, capacidad de respuesta y habilidad para traducir entornos regulatorios complejos en orientación clara y práctica. Su práctica se basa en la convicción de que la movilidad global debe generar confianza, no incertidumbre. A través de su trabajo legal y de consultoría, ayuda a sus clientes a preservar su libertad de movimiento, proteger su patrimonio y mitigar riesgos a través de fronteras con claridad y propósito.",
      ],
    },
    practices: ["global-immigration-consulting", "alternative-capital-sourcing"],
    languages: ["English", "Español"],
    tier: "member",
  },
  {
    id: "david-arase",
    slug: "david-arase",
    name: "David Arase",
    role: {
      en: "International Business Strategist",
      es: "Estratega de Negocios Internacionales",
    },
    location: { en: "Americas · Asia", es: "Américas · Asia" },
    bio: {
      en: [
        "David Arase is an international business strategist specializing in global trade, manufacturing networks, and supply chain strategy. His work focuses on how companies navigate tariff regimes, international sourcing structures, and cross-border market development across Asia, the United States, and Latin America. Arase has worked with organizations operating in China, Singapore, Latin America, and the United States on international market strategy, supply chain development, and trade optimization.",
        "In China's media sector, he served as U.S. Advisor to the Beijing Headquarters of Hengdian World Studios, the world's largest film and television production complex. In this role he provided strategic insight on international market positioning and engagement with Western media companies. He later served as Chief Strategist for the United States and Latin America at Terran Pictures in Beijing, where he worked on international market development connecting Chinese production with partners and audiences across the Americas.",
        "David also worked with Avatar Capital as Director of Cross-Border Strategy, collaborating with investment teams in Singapore and Beijing on investment initiatives and the role of private capital in developing international production and manufacturing networks. His work examined how capital flows influence emerging supply chain hubs and regional trade corridors across Asia.",
        "In the apparel sector, David served as Executive Vice President of PPLA, a Los Angeles fashion company. In this role he focused on international sourcing, supply chain coordination, and strategic development across apparel manufacturing networks. During this period PPLA established wholesale distribution relationships with major U.S. retailers including Macy's, Nordstrom, and other national department store chains, requiring coordination of large-scale production, vendor compliance, and international retail logistics.",
        "He also served as U.S. legal counsel to Selenium (now JBL Selenium), a Brazilian professional audio and speaker technology company, advising on legal and commercial matters related to the company's expansion into the United States and supporting cross-border commercial relationships between Brazilian manufacturing operations and U.S. partners.",
        "A central focus of his work involves global manufacturing strategy and tariff engineering. He served as U.S. Advisor to Wood Park, a Singapore-based manufacturer with factories throughout Southeast Asia and a supplier of premium teak outdoor furniture to major United States retailers. He also served as U.S. legal counsel to Mitra Green, a U.S. importer and distributor of furniture, where he focused on international sourcing, regulatory matters, and supply chain coordination.",
        "Through this work, David has developed expertise in tariff engineering and trade optimization, analyzing product design, sourcing structures, and manufacturing processes to manage tariff exposure and optimize customs classifications under U.S. import regulations. His work focuses on how companies restructure supply chains and production strategies in response to shifting trade policies and global manufacturing dynamics.",
      ],
      es: [
        "David Arase es un estratega de negocios internacionales especializado en comercio global, redes de manufactura y estrategia de cadena de suministro. Su trabajo se enfoca en cómo las empresas navegan los regímenes arancelarios, las estructuras internacionales de abastecimiento y el desarrollo de mercados transfronterizos en Asia, Estados Unidos y América Latina. Arase ha trabajado con organizaciones que operan en China, Singapur, América Latina y Estados Unidos en estrategia de mercados internacionales, desarrollo de cadenas de suministro y optimización comercial.",
        "En el sector de medios en China, se desempeñó como Asesor para EE. UU. de la sede en Beijing de Hengdian World Studios, el mayor complejo de producción de cine y televisión del mundo. En este rol, proporcionó visión estratégica sobre el posicionamiento en mercados internacionales y el relacionamiento con compañías de medios occidentales. Posteriormente fue Estratega Principal para Estados Unidos y América Latina en Terran Pictures en Beijing, trabajando en el desarrollo de mercados internacionales que conectaron la producción china con socios y audiencias en las Américas.",
        "David también colaboró con Avatar Capital como Director de Estrategia Transfronteriza, en conjunto con equipos de inversión en Singapur y Beijing, sobre iniciativas de inversión y el papel del capital privado en el desarrollo de redes internacionales de producción y manufactura. Su trabajo examinó cómo los flujos de capital influyen en los emergentes hubs de cadenas de suministro y corredores regionales de comercio en Asia.",
        "En el sector de indumentaria, David se desempeñó como Vicepresidente Ejecutivo de PPLA, una empresa de moda con sede en Los Ángeles. En este rol se enfocó en el abastecimiento internacional, la coordinación de la cadena de suministro y el desarrollo estratégico de redes de manufactura. Durante este periodo, PPLA estableció relaciones de distribución mayorista con grandes minoristas estadounidenses, incluyendo Macy's, Nordstrom y otras cadenas nacionales de tiendas por departamento, lo que requirió coordinar producción a gran escala, cumplimiento de proveedores y logística minorista internacional.",
        "También se desempeñó como consejero legal en EE. UU. de Selenium (hoy JBL Selenium), compañía brasileña de tecnología de audio profesional y altavoces, asesorando en asuntos legales y comerciales vinculados a su expansión en Estados Unidos y apoyando relaciones transfronterizas entre operaciones de manufactura en Brasil y socios en EE. UU.",
        "Un eje central de su trabajo es la estrategia de manufactura global y la ingeniería arancelaria. Fue Asesor para EE. UU. de Wood Park, manufacturera con sede en Singapur y fábricas en todo el Sudeste Asiático, proveedora de muebles de teca de alta gama para grandes minoristas estadounidenses. También fue consejero legal en EE. UU. de Mitra Green, importador y distribuidor estadounidense de muebles, enfocándose en el abastecimiento internacional, asuntos regulatorios y coordinación de la cadena de suministro.",
        "A través de este trabajo, David ha desarrollado experiencia en ingeniería arancelaria y optimización comercial, analizando el diseño de productos, las estructuras de abastecimiento y los procesos de manufactura para gestionar la exposición arancelaria y optimizar las clasificaciones aduaneras bajo las regulaciones de importación de EE. UU. Su trabajo se enfoca en cómo las empresas reestructuran cadenas de suministro y estrategias de producción en respuesta a políticas comerciales cambiantes y dinámicas globales de manufactura.",
      ],
    },
    practices: ["jurisdictional-optimization"],
    languages: ["English"],
    tier: "member",
  },
  {
    id: "federico-vielledent",
    slug: "federico-vielledent",
    name: "Federico Vielledent",
    role: {
      en: "Lawyer and Co-Founder, DeepBrokers",
      es: "Abogado y Cofundador, DeepBrokers",
    },
    location: { en: "Americas", es: "Américas" },
    email: "fvielledent@mexusadvisory.com",
    education: {
      en: "University of Notre Dame · Texas School of Law",
      es: "University of Notre Dame · Texas School of Law",
    },
    bio: {
      en: [
        "Federico Vielledent is a lawyer and Co-Founder of DeepBrokers whose work sits at the intersection of global mobility, cross-border legal strategy, and international healthcare access. DeepBrokers is the advisory platform of a 40+ year international private medical insurance MGA that designs and structures global health coverage for high-net-worth and internationally mobile families. The platform combines underwriting depth, legal insight, and long-term strategic planning to unlock access to the world's leading hospitals and medical centers worldwide. Federico's focus is ensuring that healthcare access is not treated as a commodity product, but as a structural asset — engineered to remain durable across decades, jurisdictions, and regulatory change.",
        "A graduate of the University of Notre Dame and Texas School of Law, Federico brings legal precision and capital allocation perspective to cross-border planning. At Mexus Advisory, he advises internationally mobile families and investors on integrating immigration strategy, asset protection, estate planning, global healthcare positioning, and comprehensive wealth allocation into a cohesive framework — aligning mobility, capital, and risk management under a unified long-term strategy.",
        "He is licensed to practice law in Texas and holds the Series 65 investment advisor license.",
      ],
      es: [
        "Federico Vielledent es abogado y Cofundador de DeepBrokers, cuya práctica se sitúa en la intersección de la movilidad global, la estrategia legal transfronteriza y el acceso internacional a la atención médica. DeepBrokers es la plataforma asesora de una MGA internacional de seguros médicos privados con más de 40 años de trayectoria, que diseña y estructura cobertura de salud global para familias de alto patrimonio e internacionalmente móviles. La plataforma combina profundidad de suscripción, criterio legal y planeación estratégica de largo plazo para abrir acceso a los principales hospitales y centros médicos del mundo. El enfoque de Federico es asegurar que el acceso a la salud no se trate como un producto básico, sino como un activo estructural — diseñado para permanecer duradero a lo largo de décadas, jurisdicciones y cambios regulatorios.",
        "Egresado de la University of Notre Dame y de la Texas School of Law, Federico aporta precisión legal y visión de asignación de capital a la planeación transfronteriza. En Mexus Advisory asesora a familias e inversionistas internacionalmente móviles en la integración de la estrategia migratoria, la protección de activos, la planificación patrimonial, el posicionamiento global de la cobertura médica y la asignación integral de patrimonio en un marco coherente — alineando movilidad, capital y gestión de riesgo bajo una estrategia unificada de largo plazo.",
        "Está habilitado para ejercer la abogacía en Texas y cuenta con la licencia de asesor de inversiones Series 65.",
      ],
    },
    practices: ["global-immigration-consulting", "wealth-advisory"],
    languages: ["Español", "English", "Português"],
    tier: "member",
  },
  {
    id: "ricardo-vielledent",
    slug: "ricardo-vielledent",
    name: "Ricardo E. Vielledent",
    role: {
      en: "Cross-Border Attorney | Co-Founder, DeepBrokers",
      es: "Abogado Transfronterizo | Cofundador, DeepBrokers",
    },
    location: { en: "Americas", es: "Américas" },
    email: "rvielledent@mexusadvisory.com",
    education: {
      en: "B.S. in Finance, Trinity University · J.D., Emory University School of Law",
      es: "B.S. en Finanzas, Trinity University · J.D., Emory University School of Law",
    },
    bio: {
      en: [
        "Ricardo Vielledent is a cross-border attorney and Co-Founder of DeepBrokers, where he advises internationally mobile families, business owners, and private clients on complex matters involving legal strategy, international healthcare access, and long-term planning. His work is centered on helping clients navigate the intersection of law, wealth, mobility, and risk with clarity and discretion.",
        "Ricardo earned his B.S. in Finance from Trinity University and his J.D. from Emory University School of Law. His background in finance and law allows him to approach client matters with both technical precision and commercial judgment, particularly where legal structure, asset protection, and strategic planning converge. He also brings a stronger foundation in litigation, which informs his perspective on risk, leverage, dispute exposure, and the realities of enforcement when sophisticated planning is put to the test.",
        "Through DeepBrokers, Ricardo works with clients who are not simply purchasing insurance, but seeking a more deliberate approach to healthcare access across borders. His advisory style is shaped by the understanding that, for globally positioned families, access to premier medical institutions can be an important component of broader wealth, lifestyle, and contingency planning. His work often involves aligning international health coverage with the larger legal and strategic framework surrounding a client's family, business interests, and long-term objectives.",
        "Ricardo is licensed to practice law in Texas and Alabama and is admitted to practice before the United States District Courts for the Western and Southern Districts of Texas, as well as the United States Court of Appeals for the Fifth Circuit.",
      ],
      es: [
        "Ricardo Vielledent es abogado transfronterizo y Cofundador de DeepBrokers, donde asesora a familias internacionalmente móviles, empresarios y clientes privados en asuntos complejos que involucran estrategia legal, acceso internacional a la atención médica y planeación de largo plazo. Su práctica se centra en ayudar a los clientes a navegar la intersección entre derecho, patrimonio, movilidad y riesgo con claridad y discreción.",
        "Ricardo obtuvo su B.S. en Finanzas por Trinity University y su J.D. por Emory University School of Law. Su formación en finanzas y derecho le permite abordar los asuntos de sus clientes con precisión técnica y criterio comercial, particularmente en los puntos en los que convergen la estructura legal, la protección de activos y la planeación estratégica. Además, aporta una base más sólida en litigio, lo que enriquece su perspectiva sobre el riesgo, el apalancamiento, la exposición a disputas y la realidad de la ejecución cuando una planeación sofisticada se pone a prueba.",
        "A través de DeepBrokers, Ricardo trabaja con clientes que no simplemente adquieren un seguro, sino que buscan un enfoque más deliberado del acceso a la salud a través de fronteras. Su estilo asesor está moldeado por el entendimiento de que, para familias globalmente posicionadas, el acceso a instituciones médicas de primer nivel puede ser un componente importante de una planeación más amplia de patrimonio, estilo de vida y contingencias. Su trabajo a menudo implica alinear la cobertura internacional de salud con el marco legal y estratégico mayor que rodea a la familia, los intereses empresariales y los objetivos de largo plazo del cliente.",
        "Ricardo está habilitado para ejercer la abogacía en Texas y Alabama, y admitido para ejercer ante los Tribunales de Distrito de los Estados Unidos para los Distritos Oeste y Sur de Texas, así como ante el Tribunal de Apelaciones de los Estados Unidos para el Quinto Circuito.",
      ],
    },
    practices: ["wealth-advisory", "jurisdictional-optimization"],
    languages: ["English", "Español"],
    tier: "member",
  },
  {
    id: "ruben-guerrero",
    slug: "ruben-guerrero",
    name: "Ruben Guerrero",
    role: {
      en: "Commercial Real Estate Broker | Investment Advisor",
      es: "Corredor Inmobiliario Comercial | Asesor de Inversiones",
    },
    location: { en: "Americas", es: "Américas" },
    education: {
      en: "B.B.A. in Finance, The University of Texas at El Paso",
      es: "B.B.A. en Finanzas, Universidad de Texas en El Paso",
    },
    bio: {
      en: [
        "Ruben Guerrero is a commercial real estate broker specializing in the acquisition, disposition, leasing and investment advisory services for properties across multifamily, retail, office, industrial, land, and mixed-use assets. He has successfully represented clients in multi-million-dollar transactions involving both national and regional clients providing experienced guidance from initial underwriting and valuation through negotiation and closing.",
        "With a strong foundation in financial analysis, Ruben delivers detailed underwriting, risk assessment, and strategic insight that enable investors, developers, and business owners to make well-informed decisions and maximize long-term portfolio performance. His analytical approach allows clients to clearly evaluate projected returns, capital structures, and market positioning before executing a transaction.",
        "Ruben brings more than 25 years of senior-level experience in finance, accounting, operations, and executive management. Prior to his real estate career, he served over two decades as a corporate executive, including as Senior Vice President overseeing a multi-million-dollar consumer credit portfolio and underwriting operations. His background in credit markets, capital acquisition, and regulatory management provides clients with a sophisticated understanding of financing and investment strategy.",
        "He also has experience assisting foreign nationals with acquiring real estate in the United States, navigating cross-border transactions with discretion and efficiency. Ruben holds a B.B.A. in Finance from the University of Texas at El Paso and remains actively involved in the El Paso business community.",
        "Committed to integrity, confidentiality, and results, Ruben positions himself as a trusted real estate advisor focused on protecting his clients' capital and delivering measurable value.",
      ],
      es: [
        "Ruben Guerrero es corredor inmobiliario comercial especializado en la adquisición, venta, arrendamiento y asesoría de inversiones de propiedades multifamiliares, retail, oficinas, industriales, suelo y activos de uso mixto. Ha representado con éxito a clientes en transacciones de varios millones de dólares tanto a nivel nacional como regional, aportando asesoramiento experimentado desde la suscripción inicial y la valuación hasta la negociación y el cierre.",
        "Con una sólida base en análisis financiero, Ruben ofrece suscripciones detalladas, evaluación de riesgos y visión estratégica que permiten a inversionistas, desarrolladores y empresarios tomar decisiones bien informadas y maximizar el desempeño de largo plazo del portafolio. Su enfoque analítico permite a los clientes evaluar con claridad los rendimientos proyectados, las estructuras de capital y el posicionamiento de mercado antes de ejecutar una transacción.",
        "Ruben aporta más de 25 años de experiencia a nivel senior en finanzas, contabilidad, operaciones y administración ejecutiva. Antes de su carrera inmobiliaria, se desempeñó durante más de dos décadas como ejecutivo corporativo, incluyendo como Vicepresidente Senior supervisando un portafolio de crédito al consumidor y operaciones de suscripción por múltiples millones de dólares. Su trayectoria en mercados de crédito, adquisición de capital y gestión regulatoria brinda a sus clientes una comprensión sofisticada de la estrategia de financiamiento e inversión.",
        "También tiene experiencia asistiendo a extranjeros en la adquisición de bienes raíces en Estados Unidos, navegando transacciones transfronterizas con discreción y eficiencia. Ruben tiene un B.B.A. en Finanzas por la Universidad de Texas en El Paso y mantiene una participación activa en la comunidad empresarial de El Paso.",
        "Comprometido con la integridad, la confidencialidad y los resultados, Ruben se posiciona como un asesor inmobiliario de confianza enfocado en proteger el capital de sus clientes y entregar valor medible.",
      ],
    },
    practices: ["alternative-capital-sourcing", "wealth-advisory"],
    languages: ["English", "Español"],
    tier: "member",
  },
  // ———————————————————————————————————————————— Executives
  {
    id: "roberto-ortigoza",
    slug: "roberto-ortigoza",
    name: "Roberto Ortigoza",
    role: {
      en: "CDMX Director, Anderson Legal Group",
      es: "Director CDMX, Anderson Legal Group",
    },
    location: { en: "México", es: "México" },
    email: "rortigoza@mexusadvisory.com",
    education: {
      en: "M.B.A. (Marketing), Universidad Tec Milenio · LL.B., Universidad Autónoma de Ciudad Juárez",
      es: "M.B.A. (Marketing), Universidad Tec Milenio · Lic. en Derecho, Universidad Autónoma de Ciudad Juárez",
    },
    bio: {
      en: [
        "Roberto Ortigoza Mares is an immigration attorney focused on helping foreign-owned businesses successfully launch and scale operations in Mexico and the United States. He works closely with founders, investors, and executive teams to design immigration strategies that support market entry, workforce mobility, and long-term growth.",
        "He currently serves as CDMX Director for Anderson Legal Group, a binational immigration law firm, where he leads cross-border legal initiatives for companies expanding into North America. His work spans business and employment visas, corporate immigration compliance, and strategic planning for multinational teams. Known for his practical approach, Roberto bridges legal requirements with business objectives, ensuring immigration becomes an enabler—not a barrier—to expansion.",
        "Roberto holds a Master's Degree in Business Administration with a specialization in Marketing from Universidad Tec Milenio (2014–2016) and a Bachelor of Laws from Universidad Autónoma de Ciudad Juárez (2005–2010). He also holds certifications in Project Management (PMBOK), Environmental Leadership for Competitiveness from SEMARNAT, and Performance Indicator Development from INDETE—strengthening his ability to manage complex projects, measure outcomes, and deliver results-driven legal solutions.",
        "He is an active member of ANADE (National Association of Corporate Lawyers in Mexico), reflecting his commitment to continuous professional development and corporate legal best practices. Recognized for his business-oriented mindset and clear communication style, Roberto combines legal expertise with operational insight to help companies navigate complex immigration landscapes with confidence.",
      ],
      es: [
        "Roberto Ortigoza Mares es abogado de inmigración enfocado en ayudar a empresas de capital extranjero a lanzar y escalar operaciones con éxito en México y Estados Unidos. Trabaja de cerca con fundadores, inversionistas y equipos directivos para diseñar estrategias migratorias que respalden la entrada al mercado, la movilidad de personal y el crecimiento a largo plazo.",
        "Actualmente se desempeña como Director CDMX de Anderson Legal Group, firma binacional de derecho migratorio, donde lidera iniciativas legales transfronterizas para empresas que se expanden a Norteamérica. Su práctica abarca visas de negocios y empleo, cumplimiento migratorio corporativo y planeación estratégica para equipos multinacionales. Reconocido por su enfoque práctico, Roberto tiende puentes entre los requisitos legales y los objetivos de negocio, asegurando que la inmigración sea un habilitador —no una barrera— para la expansión.",
        "Roberto tiene una Maestría en Administración de Empresas con especialización en Marketing por Universidad Tec Milenio (2014–2016) y una Licenciatura en Derecho por la Universidad Autónoma de Ciudad Juárez (2005–2010). También posee certificaciones en Gestión de Proyectos (PMBOK), Liderazgo Ambiental para la Competitividad por la SEMARNAT y Desarrollo de Indicadores de Desempeño por INDETE—fortaleciendo su capacidad para gestionar proyectos complejos, medir resultados y entregar soluciones legales orientadas a resultados.",
        "Es miembro activo de ANADE (Asociación Nacional de Abogados de Empresa en México), reflejando su compromiso con el desarrollo profesional continuo y las mejores prácticas legales corporativas. Reconocido por su mentalidad orientada al negocio y su claridad comunicativa, Roberto combina su experiencia legal con visión operativa para ayudar a las empresas a navegar entornos migratorios complejos con confianza.",
      ],
    },
    practices: ["global-immigration-consulting", "jurisdictional-optimization"],
    languages: ["Español", "English"],
    tier: "executive",
  },
  {
    id: "darilu-cartagena",
    slug: "darilu-cartagena",
    name: "Darilú Cartagena",
    role: {
      en: "Director of Insurance | Licensed Life Insurance Agent",
      es: "Directora de Seguros | Agente Licenciada de Seguros de Vida",
    },
    location: { en: "Americas", es: "Américas" },
    email: "dcartagena@mexusadvisory.com",
    education: {
      en: "B.A. in University Studies, The University of Southern Mississippi",
      es: "B.A. en Estudios Universitarios, The University of Southern Mississippi",
    },
    bio: {
      en: [
        "A strategic advisor and client advocate, Darilú Cartagena brings a results-driven approach to life insurance planning. For over 10 years, she has served within The Anderson Immigration Law Group and its affiliated entities, helping scale operations, implement high-level systems, and support the firm's substantial growth. Today, she applies that same precision, leadership, and clarity to protecting families and preserving financial stability.",
        "A graduate of The University of Southern Mississippi, Darilú combines structured analytical thinking with a deeply relational approach to client service. She is fluent in Spanish, allowing her to serve both English- and Spanish-speaking families with clarity and cultural understanding. Her professional background in organizational growth and implementation enables her to guide clients through complex financial decisions with confidence and transparency.",
        "As a licensed life insurance agent serving multiple states, Darilú has helped secure the financial protection of hundreds of families — from business owners to hardworking blue-collar professionals whose income sustains their households. Her guidance has helped families avoid foreclosure after an unexpected loss, cover funeral expenses without debt, and access living benefits during serious medical events.",
        "Darilú is known for her ability to simplify what others make complicated. Life insurance is often misunderstood, and many clients approach it with hesitation. Her greatest strength lies in clarifying doubts, explaining policies with transparency, and ensuring families feel safe, informed, and confident in their decisions.",
        "Beyond serving U.S.-based families, Darilú has developed a specialized focus in assisting foreign nationals seeking access to U.S. life insurance solutions. Leveraging her firm's deep knowledge of immigration processes, she helps clients establish proper U.S. nexus, understand eligibility requirements, and structure coverage in a compliant and strategic manner.",
        "She collaborates with industry professionals who bring more than 20 years of experience, combining seasoned expertise with personalized service. Her mission is not simply to sell policies — it is to protect income, preserve dignity, and secure generational stability.",
      ],
      es: [
        "Asesora estratégica y defensora del cliente, Darilú Cartagena aporta un enfoque orientado a resultados en la planeación de seguros de vida. Durante más de 10 años ha colaborado con The Anderson Immigration Law Group y sus entidades afiliadas, ayudando a escalar operaciones, implementar sistemas de alto nivel y apoyar el sustancial crecimiento de la firma. Hoy aplica esa misma precisión, liderazgo y claridad a la protección de familias y a la preservación de la estabilidad financiera.",
        "Egresada de The University of Southern Mississippi, Darilú combina un pensamiento analítico estructurado con un enfoque profundamente relacional en el servicio al cliente. Con dominio del español, atiende con claridad y comprensión cultural tanto a familias angloparlantes como hispanohablantes. Su experiencia profesional en crecimiento organizacional e implementación le permite guiar a los clientes a través de decisiones financieras complejas con confianza y transparencia.",
        "Como agente licenciada de seguros de vida con presencia en múltiples estados, Darilú ha ayudado a asegurar la protección financiera de cientos de familias — desde empresarios hasta trabajadores cuyo ingreso sostiene el hogar. Su orientación ha permitido a familias evitar ejecuciones hipotecarias tras pérdidas inesperadas, cubrir gastos funerarios sin endeudarse y acceder a beneficios en vida durante eventos médicos graves.",
        "Darilú es reconocida por su capacidad de simplificar lo que otros vuelven complicado. El seguro de vida suele ser incomprendido y muchos clientes se acercan con dudas. Su mayor fortaleza es aclarar esas dudas, explicar las pólizas con transparencia y asegurar que las familias se sientan seguras, informadas y confiadas en sus decisiones.",
        "Además de atender a familias en Estados Unidos, Darilú ha desarrollado un enfoque especializado en asistir a extranjeros que buscan acceso a soluciones de seguros de vida en EE. UU. Apoyándose en la experiencia migratoria de su firma, ayuda a los clientes a establecer el nexo estadounidense, entender los requisitos de elegibilidad y estructurar la cobertura de forma cumplida y estratégica.",
        "Colabora con profesionales de la industria que aportan más de 20 años de experiencia, combinando conocimiento consolidado con servicio personalizado. Su misión no es simplemente vender pólizas — es proteger el ingreso, preservar la dignidad y asegurar la estabilidad generacional.",
      ],
    },
    practices: ["wealth-advisory", "risk-management"],
    languages: ["English", "Español"],
    tier: "executive",
  },
];

export function getPerson(slug: string): Person | undefined {
  return people.find((p) => p.slug === slug);
}
