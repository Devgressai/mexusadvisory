import type { LocalizedString, LocalizedStringList } from "@/types/content";

interface ForeignInvestmentsSection {
  heading: LocalizedString;
  body: LocalizedStringList;
}

interface ForeignInvestments {
  title: LocalizedString;
  subtitle: LocalizedString;
  byLabel: LocalizedString;
  authorName: string;
  intro: LocalizedStringList;
  executiveSummary: ForeignInvestmentsSection;
  returnDecomposition: ForeignInvestmentsSection;
  caseStudyA: ForeignInvestmentsSection;
  caseStudyB: ForeignInvestmentsSection;
  partialHedge: ForeignInvestmentsSection;
  institutionalPositioning: ForeignInvestmentsSection;
  conclusion: ForeignInvestmentsSection;
  disclosureLabel: LocalizedString;
  disclosure: LocalizedString;
}

export const foreignInvestments: ForeignInvestments = {
  title: {
    en: "Foreign Investment in U.S. Equities During a Weaker U.S. Dollar Cycle",
    es: "Inversión Extranjera en Acciones de EE. UU. Durante un Ciclo de Dólar Estadounidense más Débil",
  },
  subtitle: {
    en: "A Perspective for Mexican and Latin American Investors",
    es: "Una Perspectiva para Inversionistas Mexicanos y Latinoamericanos",
  },
  byLabel: {
    en: "By",
    es: "Por",
  },
  authorName: "Mace Miller, J.D., M.B.A.",
  intro: {
    en: [
      "This memorandum provides a structured analysis of U.S. equity allocation during periods of relative U.S. dollar weakness. It expands upon return decomposition mathematics, currency impact modeling, and portfolio construction implications for intermediate and advanced investors operating from Mexico and broader Latin America.",
    ],
    es: [
      "Este memorándum ofrece un análisis estructurado de la asignación a acciones estadounidenses durante períodos de debilidad relativa del dólar. Amplía las matemáticas de descomposición de rendimientos, el modelado del impacto cambiario y las implicaciones de construcción de portafolios para inversionistas intermedios y avanzados que operan desde México y América Latina en general.",
    ],
  },
  executiveSummary: {
    heading: {
      en: "I. Executive Summary",
      es: "I. Resumen Ejecutivo",
    },
    body: {
      en: [
        "When allocating capital to U.S. equities, foreign investors experience a dual return structure: equity performance and currency translation. In periods where the U.S. dollar trades at comparatively weaker levels, entry pricing in local currency may appear attractive. However, subsequent exchange-rate movement materially affects realized returns.",
        "This paper outlines a formal return decomposition framework and provides illustrative quantitative examples to clarify how FX exposure interacts with equity performance.",
      ],
      es: [
        "Al asignar capital a acciones estadounidenses, los inversionistas extranjeros experimentan una estructura de rendimiento dual: el desempeño accionario y la traducción cambiaria. En períodos donde el dólar estadounidense cotiza a niveles comparativamente más débiles, los precios de entrada en moneda local pueden parecer atractivos. Sin embargo, el movimiento posterior del tipo de cambio afecta materialmente los rendimientos realizados.",
        "Este documento describe un marco formal de descomposición de rendimientos y ofrece ejemplos cuantitativos ilustrativos para aclarar cómo la exposición cambiaria interactúa con el desempeño accionario.",
      ],
    },
  },
  returnDecomposition: {
    heading: {
      en: "II. Return Decomposition Framework",
      es: "II. Marco de Descomposición de Rendimientos",
    },
    body: {
      en: [
        "For a Mexican investor, total return in MXN terms can be expressed as:",
        "Total Return (MXN) = (1 + Equity Return USD) × (1 + FX Return) – 1",
        "Where:",
        "Equity Return USD = percentage change in the U.S. equity investment.",
        "FX Return = percentage change in USD/MXN during the holding period.",
        "FX Return is calculated as:",
        "FX Return = (Ending FX Rate / Beginning FX Rate) – 1",
      ],
      es: [
        "Para un inversionista mexicano, el rendimiento total en términos de MXN puede expresarse como:",
        "Rendimiento Total (MXN) = (1 + Rendimiento Accionario USD) × (1 + Rendimiento FX) – 1",
        "Donde:",
        "Rendimiento Accionario USD = cambio porcentual en la inversión accionaria estadounidense.",
        "Rendimiento FX = cambio porcentual en USD/MXN durante el período de tenencia.",
        "El Rendimiento FX se calcula como:",
        "Rendimiento FX = (Tipo de cambio final / Tipo de cambio inicial) – 1",
      ],
    },
  },
  caseStudyA: {
    heading: {
      en: "III. Illustrative Case Study A – Equity Growth with Dollar Appreciation",
      es: "III. Caso Ilustrativo A – Crecimiento Accionario con Apreciación del Dólar",
    },
    body: {
      en: [
        "Assumptions:",
        "Beginning USD/MXN: 17.50",
        "Investment Amount: $100,000 USD",
        "Beginning Peso Investment: 1,750,000 MXN",
        "Equity Performance: +12%",
        "Ending USD/MXN: 19.00",
        "Step 1: Calculate Equity Value",
        "$100,000 × 1.12 = $112,000",
        "Step 2: Convert Back to MXN",
        "$112,000 × 19.00 = 2,128,000 MXN",
        "Step 3: Compute Peso Return",
        "(2,128,000 / 1,750,000) – 1 = 21.6% MXN Return",
        "Interpretation: Both equity appreciation and USD strengthening amplified local-currency returns.",
      ],
      es: [
        "Supuestos:",
        "USD/MXN inicial: 17.50",
        "Monto de inversión: $100,000 USD",
        "Inversión inicial en pesos: 1,750,000 MXN",
        "Desempeño accionario: +12%",
        "USD/MXN final: 19.00",
        "Paso 1: Calcular el valor accionario",
        "$100,000 × 1.12 = $112,000",
        "Paso 2: Reconvertir a MXN",
        "$112,000 × 19.00 = 2,128,000 MXN",
        "Paso 3: Calcular el rendimiento en pesos",
        "(2,128,000 / 1,750,000) – 1 = 21.6% de Rendimiento en MXN",
        "Interpretación: Tanto la apreciación accionaria como el fortalecimiento del USD amplificaron los rendimientos en moneda local.",
      ],
    },
  },
  caseStudyB: {
    heading: {
      en: "IV. Illustrative Case Study B – Equity Growth with Dollar Depreciation",
      es: "IV. Caso Ilustrativo B – Crecimiento Accionario con Depreciación del Dólar",
    },
    body: {
      en: [
        "Assumptions:",
        "Beginning USD/MXN: 17.50",
        "Investment Amount: $100,000 USD",
        "Beginning Peso Investment: 1,750,000 MXN",
        "Equity Performance: +10%",
        "Ending USD/MXN: 16.80",
        "Step 1: Equity Value",
        "$100,000 × 1.10 = $110,000",
        "Step 2: Convert Back to MXN",
        "$110,000 × 16.80 = 1,848,000 MXN",
        "Step 3: Compute Peso Return",
        "(1,848,000 / 1,750,000) – 1 ≈ 5.6% MXN Return",
        "Interpretation: Despite positive equity performance, USD depreciation reduced realized MXN returns.",
      ],
      es: [
        "Supuestos:",
        "USD/MXN inicial: 17.50",
        "Monto de inversión: $100,000 USD",
        "Inversión inicial en pesos: 1,750,000 MXN",
        "Desempeño accionario: +10%",
        "USD/MXN final: 16.80",
        "Paso 1: Valor accionario",
        "$100,000 × 1.10 = $110,000",
        "Paso 2: Reconvertir a MXN",
        "$110,000 × 16.80 = 1,848,000 MXN",
        "Paso 3: Calcular el rendimiento en pesos",
        "(1,848,000 / 1,750,000) – 1 ≈ 5.6% de Rendimiento en MXN",
        "Interpretación: A pesar del desempeño accionario positivo, la depreciación del USD redujo los rendimientos realizados en MXN.",
      ],
    },
  },
  partialHedge: {
    heading: {
      en: "V. Partial Hedge Illustration",
      es: "V. Ilustración de Cobertura Parcial",
    },
    body: {
      en: [
        "Assume 50% of currency exposure is hedged via forward contract at 17.50.",
        "Equity Return USD: +10%",
        "Spot FX at Exit: 16.80",
        "Unhedged Portion (50%):",
        "50% × $110,000 × 16.80 = 924,000 MXN",
        "Hedged Portion (50% locked at 17.50):",
        "50% × $110,000 × 17.50 = 962,500 MXN",
        "Total MXN Value = 1,886,500 MXN",
        "Return = (1,886,500 / 1,750,000) – 1 ≈ 7.8%",
        "Interpretation: Partial hedging reduced currency drag while preserving some flexibility.",
      ],
      es: [
        "Suponga que el 50% de la exposición cambiaria se cubre mediante un contrato forward a 17.50.",
        "Rendimiento Accionario USD: +10%",
        "Tipo de cambio spot a la salida: 16.80",
        "Porción no cubierta (50%):",
        "50% × $110,000 × 16.80 = 924,000 MXN",
        "Porción cubierta (50% asegurada a 17.50):",
        "50% × $110,000 × 17.50 = 962,500 MXN",
        "Valor total en MXN = 1,886,500 MXN",
        "Rendimiento = (1,886,500 / 1,750,000) – 1 ≈ 7.8%",
        "Interpretación: La cobertura parcial redujo la presión cambiaria, preservando cierta flexibilidad.",
      ],
    },
  },
  institutionalPositioning: {
    heading: {
      en: "VI. Institutional Positioning Considerations",
      es: "VI. Consideraciones de Posicionamiento Institucional",
    },
    body: {
      en: [
        "1. Separate strategic equity allocation from tactical currency positioning.",
        "2. Define target hedge ratios aligned with risk tolerance.",
        "3. Use staged entry to mitigate timing concentration risk.",
        "4. Align USD exposure with future USD liabilities where applicable.",
        "5. Rebalance currency exposure systematically rather than reactively.",
        "Currency management should not be speculative in nature; rather, it should function as a risk management overlay.",
      ],
      es: [
        "1. Separe la asignación estratégica accionaria del posicionamiento táctico cambiario.",
        "2. Defina ratios objetivo de cobertura alineados con la tolerancia al riesgo.",
        "3. Utilice una entrada por etapas para mitigar el riesgo de concentración temporal.",
        "4. Alinee la exposición al USD con pasivos futuros en USD cuando corresponda.",
        "5. Rebalancee la exposición cambiaria de forma sistemática, no reactiva.",
        "La gestión cambiaria no debe ser de naturaleza especulativa; más bien, debe funcionar como una capa de gestión de riesgo.",
      ],
    },
  },
  conclusion: {
    heading: {
      en: "VII. Conclusion",
      es: "VII. Conclusión",
    },
    body: {
      en: [
        "A weaker U.S. dollar may present an attractive capital allocation window for Latin American investors. However, realized outcomes depend on disciplined integration of equity and currency analysis. Understanding the mathematical interaction between asset performance and FX movement is central to institutional-grade portfolio construction.",
      ],
      es: [
        "Un dólar estadounidense más débil puede presentar una ventana atractiva de asignación de capital para los inversionistas latinoamericanos. Sin embargo, los resultados realizados dependen de una integración disciplinada del análisis accionario y cambiario. Comprender la interacción matemática entre el desempeño del activo y el movimiento cambiario es central para la construcción de portafolios de grado institucional.",
      ],
    },
  },
  disclosureLabel: {
    en: "Disclosure",
    es: "Aviso",
  },
  disclosure: {
    en: "This memorandum is for informational purposes only and does not constitute legal, tax, or investment advice. Currency movements are inherently uncertain and may materially impact returns. Investors should consult qualified advisors prior to implementing any investment or hedging strategy.",
    es: "Este memorándum tiene fines exclusivamente informativos y no constituye asesoría legal, fiscal o de inversión. Los movimientos cambiarios son inherentemente inciertos y pueden afectar materialmente los rendimientos. Los inversionistas deben consultar a asesores calificados antes de implementar cualquier estrategia de inversión o cobertura.",
  },
};
