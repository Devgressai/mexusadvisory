import type { LocalizedString, LocalizedStringList } from "@/types/content";

interface CompetencyArea {
  title: LocalizedString;
  roleBefore: LocalizedStringList;
  focusAreasLeadIn?: LocalizedString;
  focusAreas?: LocalizedStringList;
  roleAfter?: LocalizedStringList;
  valueProp: LocalizedStringList;
}

interface PartnersProgram {
  title: LocalizedString;
  programOverview: {
    intro: LocalizedStringList;
    relationshipsLeadIn: LocalizedString;
    agreementTypes: LocalizedStringList;
    independenceNote: LocalizedString;
    pillarsLeadIn: LocalizedString;
    pillars: LocalizedStringList;
    integrationNote: LocalizedString;
  };
  competencyAreas: CompetencyArea[];
  advantage: {
    title: LocalizedString;
    body: LocalizedStringList;
    benefitsLeadIn: LocalizedString;
    benefits: LocalizedStringList;
    closer: LocalizedString;
  };
}

export const partnersProgram: PartnersProgram = {
  title: {
    en: "Professional Partners Program",
    es: "Programa de Socios Profesionales",
  },
  programOverview: {
    intro: {
      en: [
        "The Mexus Advisory Professional Partners Program is a collaborative platform designed to align leading domestic and international professional service providers with Mexus Advisory's multidisciplinary global advisory practice. The program allows distinguished attorneys, accountants, economists, insurance professionals, and financial advisors to formally associate with Mexus Advisory in delivering integrated solutions to internationally mobile individuals, families, and businesses.",
        "Through this initiative, Mexus cultivates a network of highly qualified professionals who share a commitment to technical excellence, fiduciary integrity, and cross-border sophistication. Participants in the program collaborate with Mexus Advisory through formalized professional arrangements tailored to their respective regulatory environments and professional licensing structures.",
      ],
      es: [
        "El Programa de Socios Profesionales de Mexus Advisory es una plataforma colaborativa diseñada para alinear a los principales proveedores nacionales e internacionales de servicios profesionales con la práctica de asesoría global multidisciplinaria de Mexus Advisory. El programa permite que abogados, contadores, economistas, profesionales de seguros y asesores financieros distinguidos se asocien formalmente con Mexus Advisory para ofrecer soluciones integradas a individuos, familias y empresas con movilidad internacional.",
        "A través de esta iniciativa, Mexus cultiva una red de profesionales altamente calificados que comparten un compromiso con la excelencia técnica, la integridad fiduciaria y la sofisticación transfronteriza. Los participantes del programa colaboran con Mexus Advisory mediante acuerdos profesionales formalizados, adaptados a sus respectivos entornos regulatorios y estructuras de licencia profesional.",
      ],
    },
    relationshipsLeadIn: {
      en: "These relationships may include:",
      es: "Estas relaciones pueden incluir:",
    },
    agreementTypes: {
      en: [
        "Joint Representation Agreements with Mexus member licensed attorneys",
        "Teaming Agreements with accountants, economists, and financial advisors",
        "Agency Agreements with insurance professionals and risk specialists",
      ],
      es: [
        "Acuerdos de Representación Conjunta con abogados licenciados miembros de Mexus",
        "Acuerdos de Colaboración con contadores, economistas y asesores financieros",
        "Acuerdos de Agencia con profesionales de seguros y especialistas en riesgo",
      ],
    },
    independenceNote: {
      en: "This structure allows each professional to maintain full independence while benefiting from coordinated client engagement, shared technical expertise, and expanded access to international advisory opportunities.",
      es: "Esta estructura permite que cada profesional mantenga plena independencia mientras se beneficia de la coordinación con el cliente, la experiencia técnica compartida y un mayor acceso a oportunidades de asesoría internacional.",
    },
    pillarsLeadIn: {
      en: "The program is designed to deliver best-in-class, comprehensive, and dynamic global advisory services addressing three core pillars:",
      es: "El programa está diseñado para entregar servicios globales de asesoría dinámicos, integrales y de máximo nivel que abordan tres pilares centrales:",
    },
    pillars: {
      en: [
        "Immigration and Global Mobility Strategy",
        "Multinational Estate Planning and Execution",
        "Worldwide Risk Management and Asset Protection",
      ],
      es: [
        "Estrategia de Migración y Movilidad Global",
        "Planificación y Ejecución Patrimonial Multinacional",
        "Gestión de Riesgo y Protección Patrimonial Global",
      ],
    },
    integrationNote: {
      en: "By integrating multiple professional disciplines, Mexus Advisory ensures that clients receive coordinated solutions that address the legal, financial, tax, and risk implications of cross-border living, investing, and enterprise.",
      es: "Al integrar múltiples disciplinas profesionales, Mexus Advisory asegura que los clientes reciban soluciones coordinadas que abordan las implicaciones legales, financieras, fiscales y de riesgo de vivir, invertir y emprender de forma transfronteriza.",
    },
  },
  competencyAreas: [
    {
      title: {
        en: "Immigration and Global Mobility Attorneys",
        es: "Abogados de Migración y Movilidad Global",
      },
      roleBefore: {
        en: [
          "Corporate, security, finance and immigration attorneys within the Professional Partners Program collaborate with Mexus Advisory on the legal structuring and execution of cross-border mobility strategies. These professionals provide regulatory guidance and representation in immigration matters involving employment-based migration, investor immigration, family-based petitions, and complex multinational residency planning.",
          "Formal collaboration typically occurs through Joint Representation Agreements, allowing attorneys to maintain full professional independence while coordinating closely with Mexus advisors on strategy development and client implementation.",
        ],
        es: [
          "Los abogados corporativos, de seguridad, de finanzas y de migración del Programa de Socios Profesionales colaboran con Mexus Advisory en la estructuración legal y la ejecución de estrategias de movilidad transfronteriza. Estos profesionales brindan orientación regulatoria y representación en asuntos migratorios que involucran migración por empleo, migración por inversión, peticiones familiares y planificación de residencia multinacional compleja.",
          "La colaboración formal típicamente ocurre a través de Acuerdos de Representación Conjunta, permitiendo a los abogados mantener plena independencia profesional mientras coordinan estrechamente con los asesores de Mexus en el desarrollo de estrategia y la implementación con el cliente.",
        ],
      },
      valueProp: {
        en: [
          "Participation in the program provides immigration counsel access to a broader ecosystem of international planning expertise. Many immigration matters intersect with tax planning, corporate structuring, asset protection, and risk management considerations. Through collaboration with Mexus Advisory, attorneys can deliver more comprehensive solutions while expanding their access to international investor and globally mobile clientele.",
          "The program also allows immigration attorneys to integrate mobility planning with broader advisory services such as investment structuring, insurance planning, and estate design—areas that frequently arise but may fall outside the core practice of immigration law.",
        ],
        es: [
          "La participación en el programa otorga a los abogados de migración acceso a un ecosistema más amplio de experiencia en planificación internacional. Muchos asuntos migratorios se cruzan con consideraciones de planificación fiscal, estructuración corporativa, protección patrimonial y gestión de riesgo. A través de la colaboración con Mexus Advisory, los abogados pueden entregar soluciones más integrales mientras amplían su acceso a inversionistas internacionales y clientela con movilidad global.",
          "El programa también permite a los abogados de migración integrar la planificación de movilidad con servicios de asesoría más amplios como estructuración de inversiones, planificación de seguros y diseño patrimonial—áreas que surgen con frecuencia pero pueden quedar fuera de la práctica central del derecho migratorio.",
        ],
      },
    },
    {
      title: {
        en: "International Tax Attorneys and Estate Planning Counsel",
        es: "Abogados de Fiscalidad Internacional y Asesores de Planificación Patrimonial",
      },
      roleBefore: {
        en: [
          "Attorneys specializing in international tax and cross-border estate planning work alongside Mexus Advisory to design and implement sophisticated wealth transfer and asset structuring strategies for globally connected families.",
        ],
        es: [
          "Los abogados especializados en fiscalidad internacional y planificación patrimonial transfronteriza trabajan junto a Mexus Advisory para diseñar e implementar estrategias sofisticadas de transferencia patrimonial y estructuración de activos para familias globalmente conectadas.",
        ],
      },
      focusAreasLeadIn: {
        en: "These professionals advise on matters including:",
        es: "Estos profesionales asesoran en asuntos que incluyen:",
      },
      focusAreas: {
        en: [
          "Cross-border estate planning",
          "Treaty analysis and tax residency planning",
          "Foreign trust structuring",
          "Asset migration and jurisdictional optimization",
          "U.S. estate tax exposure for non-resident investors",
        ],
        es: [
          "Planificación patrimonial transfronteriza",
          "Análisis de tratados y planificación de residencia fiscal",
          "Estructuración de fideicomisos extranjeros",
          "Migración de activos y optimización jurisdiccional",
          "Exposición al impuesto sucesorio de EE. UU. para inversionistas no residentes",
        ],
      },
      roleAfter: {
        en: [
          "Engagements are typically governed through Joint Representation Agreements, ensuring clear delineation of legal responsibilities while allowing coordinated client strategy.",
        ],
        es: [
          "Los compromisos típicamente se rigen mediante Acuerdos de Representación Conjunta, asegurando una clara delimitación de responsabilidades legales y permitiendo una estrategia coordinada con el cliente.",
        ],
      },
      valueProp: {
        en: [
          "International clients frequently encounter complex intersections between immigration status, asset ownership structures, and estate tax exposure. By working with Mexus Advisory, estate planning counsel gain access to a client base that actively requires multinational planning solutions.",
          "The collaboration also enhances the execution phase of planning, as Mexus Advisory assists with implementation logistics, insurance structures, investment integration, and ongoing advisory support for globally mobile families.",
        ],
        es: [
          "Los clientes internacionales con frecuencia enfrentan intersecciones complejas entre estatus migratorio, estructuras de propiedad de activos y exposición al impuesto sucesorio. Al trabajar con Mexus Advisory, los asesores de planificación patrimonial obtienen acceso a una base de clientes que requiere activamente soluciones de planificación multinacional.",
          "La colaboración también fortalece la fase de ejecución de la planificación, ya que Mexus Advisory asiste con logística de implementación, estructuras de seguros, integración de inversiones y soporte continuo de asesoría para familias con movilidad global.",
        ],
      },
    },
    {
      title: {
        en: "Accountants and International Tax Advisors",
        es: "Contadores y Asesores Fiscales Internacionales",
      },
      roleBefore: {
        en: [
          "Certified public accountants, international tax advisors, and economic consultants collaborate with Mexus Advisory through Teaming Agreements to deliver coordinated tax planning and compliance solutions for multinational clients.",
        ],
        es: [
          "Los contadores públicos certificados, asesores fiscales internacionales y consultores económicos colaboran con Mexus Advisory mediante Acuerdos de Colaboración para entregar soluciones coordinadas de planificación fiscal y cumplimiento para clientes multinacionales.",
        ],
      },
      focusAreasLeadIn: {
        en: "These professionals provide expertise in areas including:",
        es: "Estos profesionales aportan experiencia en áreas que incluyen:",
      },
      focusAreas: {
        en: [
          "Cross-border income taxation",
          "Corporate tax structuring",
          "Foreign reporting obligations",
          "Transfer pricing considerations",
          "Multijurisdictional tax compliance",
          "Binational capital stack construction and implementation",
        ],
        es: [
          "Tributación de ingresos transfronterizos",
          "Estructuración fiscal corporativa",
          "Obligaciones de reporte en el extranjero",
          "Consideraciones de precios de transferencia",
          "Cumplimiento fiscal multijurisdiccional",
          "Construcción e implementación de estructuras de capital binacionales",
        ],
      },
      roleAfter: {
        en: [
          "Because tax considerations are often central to immigration, investment, and estate planning strategies, accounting professionals play a critical role in the multidisciplinary advisory model employed by Mexus Advisory.",
        ],
        es: [
          "Dado que las consideraciones fiscales suelen ser centrales en las estrategias de migración, inversión y planificación patrimonial, los profesionales contables desempeñan un papel crítico en el modelo de asesoría multidisciplinaria empleado por Mexus Advisory.",
        ],
      },
      valueProp: {
        en: [
          "Participation in the program allows accounting professionals to expand their reach into the international mobility and cross-border planning markets. Clients working with Mexus Advisory often require sophisticated tax structuring to accompany immigration, investment, and estate planning decisions.",
          "Through coordinated engagement with Mexus Advisory, accountants can participate in complex planning engagements that involve multiple jurisdictions while maintaining their independent practice and client relationships.",
        ],
        es: [
          "La participación en el programa permite a los profesionales contables ampliar su alcance hacia los mercados de movilidad internacional y planificación transfronteriza. Los clientes que trabajan con Mexus Advisory frecuentemente requieren una estructuración fiscal sofisticada que acompañe sus decisiones de migración, inversión y planificación patrimonial.",
          "Mediante el compromiso coordinado con Mexus Advisory, los contadores pueden participar en compromisos de planificación complejos que involucran múltiples jurisdicciones, manteniendo al mismo tiempo su práctica independiente y sus relaciones con clientes.",
        ],
      },
    },
    {
      title: {
        en: "Financial Advisors and Investment Professionals",
        es: "Asesores Financieros y Profesionales de Inversión",
      },
      roleBefore: {
        en: [
          "Licensed financial advisors and investment professionals collaborate with Mexus Advisory under Teaming Agreements to support the investment management and capital deployment strategies of globally mobile clients.",
        ],
        es: [
          "Los asesores financieros licenciados y profesionales de inversión colaboran con Mexus Advisory bajo Acuerdos de Colaboración para apoyar las estrategias de gestión de inversiones y despliegue de capital de los clientes con movilidad global.",
        ],
      },
      focusAreasLeadIn: {
        en: "These professionals assist clients with:",
        es: "Estos profesionales asisten a clientes con:",
      },
      focusAreas: {
        en: [
          "U.S. investment access for foreign nationals",
          "Portfolio management in U.S. dollar-denominated assets",
          "International diversification strategies",
          "Cross-border investment structures",
          "Liquidity planning associated with immigration and relocation",
          "Private, alternative capital access for growth or diversity iniatives",
        ],
        es: [
          "Acceso a inversiones en EE. UU. para extranjeros",
          "Gestión de portafolio en activos denominados en dólares estadounidenses",
          "Estrategias de diversificación internacional",
          "Estructuras de inversión transfronteriza",
          "Planificación de liquidez asociada a migración y reubicación",
          "Acceso a capital privado y alternativo para iniciativas de crecimiento o diversidad",
        ],
      },
      roleAfter: {
        en: [
          "Investment advisors participating in the program work alongside Mexus Advisory's wealth planning professionals to align portfolio strategy with immigration timelines, estate planning structures, and tax considerations.",
        ],
        es: [
          "Los asesores de inversión que participan en el programa trabajan junto a los profesionales de planificación patrimonial de Mexus Advisory para alinear la estrategia de portafolio con plazos migratorios, estructuras de planificación patrimonial y consideraciones fiscales.",
        ],
      },
      valueProp: {
        en: [
          "Globally mobile clients often face significant limitations when attempting to access international capital markets due to regulatory, custodial, and tax constraints. Through collaboration with Mexus Advisory, financial advisors gain access to specialized expertise in cross-border investment structuring and international client onboarding.",
          "This integrated approach enables advisors to provide solutions to foreign investors seeking exposure to U.S. markets while navigating regulatory requirements and international tax considerations.",
        ],
        es: [
          "Los clientes con movilidad global a menudo enfrentan limitaciones significativas al intentar acceder a los mercados internacionales de capital debido a restricciones regulatorias, de custodia y fiscales. A través de la colaboración con Mexus Advisory, los asesores financieros obtienen acceso a experiencia especializada en estructuración de inversiones transfronterizas y la incorporación de clientes internacionales.",
          "Este enfoque integrado permite a los asesores ofrecer soluciones a inversionistas extranjeros que buscan exposición a los mercados de EE. UU. mientras navegan los requisitos regulatorios y las consideraciones fiscales internacionales.",
        ],
      },
    },
    {
      title: {
        en: "Insurance Professionals and Risk Advisors",
        es: "Profesionales de Seguros y Asesores de Riesgo",
      },
      roleBefore: {
        en: [
          "Insurance professionals participate in the program through Agency Agreements, enabling them to deliver specialized risk management solutions that complement broader global planning strategies.",
        ],
        es: [
          "Los profesionales de seguros participan en el programa mediante Acuerdos de Agencia, lo que les permite entregar soluciones especializadas de gestión de riesgo que complementan estrategias globales de planificación más amplias.",
        ],
      },
      focusAreasLeadIn: {
        en: "These professionals assist with:",
        es: "Estos profesionales asisten con:",
      },
      focusAreas: {
        en: [
          "International health insurance coverage",
          "Global life insurance planning",
          "Cross-border risk mitigation",
          "Asset protection structures",
          "Liquidity planning for estate settlement",
        ],
        es: [
          "Cobertura internacional de seguros de salud",
          "Planificación global de seguros de vida",
          "Mitigación de riesgo transfronterizo",
          "Estructuras de protección patrimonial",
          "Planificación de liquidez para liquidación patrimonial",
        ],
      },
      roleAfter: {
        en: [
          "Insurance strategies often play a critical role in multinational planning, particularly for clients with assets and beneficiaries across multiple jurisdictions.",
        ],
        es: [
          "Las estrategias de seguros a menudo juegan un papel crítico en la planificación multinacional, particularmente para clientes con activos y beneficiarios en múltiples jurisdicciones.",
        ],
      },
      valueProp: {
        en: [
          "By partnering with Mexus Advisory, insurance professionals gain access to complex international planning cases where risk management is an integral component of broader wealth and mobility strategies.",
          "These engagements frequently involve high-net-worth clients with international exposure who require sophisticated insurance structures to support estate planning, tax mitigation, and family protection objectives.",
        ],
        es: [
          "Al asociarse con Mexus Advisory, los profesionales de seguros obtienen acceso a casos complejos de planificación internacional donde la gestión de riesgo es un componente integral de estrategias más amplias de patrimonio y movilidad.",
          "Estos compromisos involucran con frecuencia a clientes de alto patrimonio neto con exposición internacional que requieren estructuras de seguros sofisticadas para apoyar la planificación patrimonial, la mitigación fiscal y los objetivos de protección familiar.",
        ],
      },
    },
  ],
  advantage: {
    title: {
      en: "The Mexus Advisory Advantage",
      es: "La Ventaja de Mexus Advisory",
    },
    body: {
      en: [
        "The Professional Partners Program is built on the recognition that global clients require coordinated expertise across multiple disciplines. No single professional can independently address the legal, financial, tax, and risk considerations inherent in cross-border planning.",
        "Mexus Advisory serves as the integrating advisory platform, coordinating specialists across jurisdictions and professional domains to deliver cohesive strategies for internationally mobile individuals and families.",
      ],
      es: [
        "El Programa de Socios Profesionales se construye sobre el reconocimiento de que los clientes globales requieren experiencia coordinada en múltiples disciplinas. Ningún profesional puede abordar de forma independiente las consideraciones legales, financieras, fiscales y de riesgo inherentes a la planificación transfronteriza.",
        "Mexus Advisory funciona como la plataforma de asesoría integradora, coordinando especialistas a través de jurisdicciones y dominios profesionales para entregar estrategias cohesivas a individuos y familias con movilidad internacional.",
      ],
    },
    benefitsLeadIn: {
      en: "Through this collaborative model, Professional Partners benefit from:",
      es: "A través de este modelo colaborativo, los Socios Profesionales se benefician de:",
    },
    benefits: {
      en: [
        "Access to international clientele",
        "Participation in multidisciplinary advisory engagements",
        "Expanded professional visibility within a global advisory network",
        "Opportunities for coordinated business development",
        "The ability to deliver truly comprehensive client solutions",
      ],
      es: [
        "Acceso a clientela internacional",
        "Participación en compromisos de asesoría multidisciplinaria",
        "Mayor visibilidad profesional dentro de una red de asesoría global",
        "Oportunidades de desarrollo de negocio coordinado",
        "Capacidad de entregar soluciones verdaderamente integrales al cliente",
      ],
    },
    closer: {
      en: "The result is a professional ecosystem capable of addressing the increasingly complex challenges of global mobility, multinational wealth, and cross-border risk management.",
      es: "El resultado es un ecosistema profesional capaz de abordar los desafíos cada vez más complejos de la movilidad global, el patrimonio multinacional y la gestión de riesgo transfronterizo.",
    },
  },
};
