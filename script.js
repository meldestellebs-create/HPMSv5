const paths = {
  ohneAbschluss: {
    hauptschulabschluss: [
      {
        title: "VAB (Vorqualifizierungsjahr Arbeit/Beruf)",
        steps: ["Ohne Abschluss", "VAB + Prüfung", "Hauptschulabschluss"],
        duration: "1 Jahr",
        note: "Im VAB wird berufliche Orientierung geboten und der Hauptschulabschluss kann über eine Prüfung erworben werden.",
        recommended: true
      },
      {
        title: "AV (Ausbildungsvorbereitung)",
        steps: ["Ohne Abschluss", "AV + Prüfung", "Hauptschulabschluss"],
        duration: "1 Jahr",
        note: "Die AV bereitet auf eine Berufsausbildung vor und ermöglicht den Erwerb eines dem Hauptschulabschluss gleichwertigen Bildungsstands.",
        recommended: true
      },
      {
        title: "AVdual (Ausbildungsvorbereitung dual)",
        steps: ["Ohne Abschluss", "AVdual + Prüfung", "Hauptschulabschluss"],
        duration: "1-2 Jahre",
        note: "AVdual kombiniert schulisches Lernen mit Betriebspraktika. Der Hauptschulabschluss wird über eine Prüfung erworben.",
        recommended: true
      },
      {
        title: "1-jährige Berufsfachschule (1BFS)",
        steps: ["Ohne Abschluss", "1-jährige Berufsfachschule", "Hauptschulabschluss"],
        duration: "1 Jahr",
        note: "Mit erfolgreichem Abschluss der 1BFS wird ein dem Hauptschulabschluss gleichwertiger Bildungsstand erlangt.",
        recommended: true
      },
      {
        title: "Ausbildung Alltagsbetreuer/in",
        steps: ["Ohne Abschluss", "Berufsfachschule Alltagsbetreuung", "Berufsabschluss + Hauptschulabschluss"],
        duration: "Individuell",
        note: "Die Ausbildung kann ohne Hauptschulabschluss begonnen werden. Der erfolgreiche Abschluss schließt einen dem Hauptschulabschluss gleichwertigen Bildungsstand ein."
      },
      {
        title: "Über duale Ausbildung",
        steps: ["Ohne Abschluss", "Duale Ausbildung", "Berufsabschluss + Hauptschulabschluss"],
        duration: "2-3,5 Jahre",
        note: "Mit dem erfolgreichen Abschluss einer dualen Ausbildung wird ein dem Hauptschulabschluss gleichwertiger Bildungsstand erworben."
      }
    ],
    mittlereReife: [
      {
        title: "Über Hauptschulabschluss und 2BFS",
        steps: ["Ohne Abschluss", "AVdual/VAB/AV", "Hauptschulabschluss", "2-jährige Berufsfachschule", "Mittlere Reife"],
        duration: "3-4 Jahre",
        note: "Zunächst Hauptschulabschluss erwerben, dann über die 2BFS zur Fachschulreife (Mittlere Reife).",
        recommended: true
      },
      {
        title: "Über Hauptschulabschluss und Modell 9+3",
        steps: ["Ohne Abschluss", "AVdual/VAB", "Hauptschulabschluss", "Duale Ausbildung (3 Jahre, Ø 2,5)", "Mittlere Reife"],
        duration: "4-5 Jahre",
        note: "Mit guten Leistungen in der Ausbildung kann ein dem Realschulabschluss gleichwertiger Bildungsstand zuerkannt werden."
      }
    ],
    berufsabschluss: [
      {
        title: "Direkte duale Ausbildung (ohne Abschluss möglich)",
        steps: ["Ohne Abschluss", "Duale Ausbildung", "Berufsabschluss"],
        duration: "2-3,5 Jahre",
        note: "In manchen Berufen ist eine Ausbildung auch ohne Schulabschluss möglich.",
        recommended: true
      },
      {
        title: "Über Hauptschulabschluss",
        steps: ["Ohne Abschluss", "AVdual/VAB", "Hauptschulabschluss", "Duale Ausbildung", "Berufsabschluss"],
        duration: "3,5-5,5 Jahre",
        note: "Mit Hauptschulabschluss verbessern sich die Chancen auf einen Ausbildungsplatz deutlich."
      }
    ],
    bachelor: [
      {
        title: "Über Abitur zum Studium",
        steps: ["Ohne Abschluss", "Hauptschulabschluss", "Mittlere Reife", "Abitur", "Studium"],
        duration: "10+ Jahre",
        note: "Auch ohne Schulabschluss ist der Weg bis zum Studium möglich."
      }
    ]
  },

  sbbz: {
    bve: [
      {
        title: "Berufsvorbereitende Einrichtung (BVE)",
        steps: ["SBBZ", "BVE"],
        duration: "2 Jahre",
        note: "SBBZ-spezifisches Angebot: Die BVE bereitet auf eine Beschäftigung auf dem allgemeinen Arbeitsmarkt vor.",
        recommended: true
      }
    ],
    vabKF: [
      {
        title: "VAB-KF (Kooperative Form)",
        steps: ["SBBZ", "VAB-KF"],
        duration: "1 Jahr",
        note: "SBBZ-spezifisches Angebot: Vorbereitung auf Ausbildung oder Beschäftigung.",
        recommended: true
      }
    ],
    sonderberufsschule: [
      {
        title: "Sonderberufsschule",
        steps: ["SBBZ", "Sonderberufsschule", "Berufsabschluss"],
        duration: "Individuell",
        note: "SBBZ-spezifisches Angebot: Ausbildung speziell für Menschen mit Behinderung.",
        recommended: true
      }
    ],
    hauptschulabschluss: [
      {
        title: "Direkter Weg über SBBZ",
        steps: ["SBBZ", "Hauptschulabschluss"],
        duration: "Individuell",
        note: "An manchen SBBZ kann der Hauptschulabschluss direkt erworben werden (abhängig vom Förderschwerpunkt).",
        recommended: true
      }
    ],
    berufsabschluss: [
      {
        title: "Duale Ausbildung mit Unterstützung",
        steps: ["SBBZ", "Hauptschulabschluss", "Duale Ausbildung + Unterstützung", "Berufsabschluss"],
        duration: "3-4 Jahre",
        note: "Mit Unterstützung durch Berufsberatung und ggf. Reha-Maßnahmen, Hilfsmitteln am Arbeitsplatz.",
        recommended: true
      },
      {
        title: "Fachpraktiker-Ausbildung (theoriereduziert)",
        steps: ["SBBZ", "Fachpraktiker-Ausbildung", "Berufsabschluss"],
        duration: "2-3 Jahre",
        note: "SBBZ-spezifisches Angebot: Theoriereduzierte Ausbildung für Menschen mit Lernbehinderung.",
        recommended: true
      }
    ]
  },

  vabo: {
    hauptschulabschluss: [
      {
        title: "VABO mit Deutschförderung → VAB",
        steps: ["VABO (Deutschförderung B1)", "VAB + Prüfung", "Hauptschulabschluss"],
        duration: "2 Jahre",
        note: "Nach erfolgreicher Deutschförderung im VABO kann über VAB der Hauptschulabschluss erworben werden.",
        recommended: true
      },
      {
        title: "VABO → AV",
        steps: ["VABO (Deutschförderung B1)", "AV + Prüfung", "Hauptschulabschluss"],
        duration: "2 Jahre",
        note: "Nach dem VABO ermöglicht die AV den Erwerb des Hauptschulabschlusses.",
        recommended: true
      },
      {
        title: "VABO → AVdual",
        steps: ["VABO (Deutschförderung B1)", "AVdual + Prüfung", "Hauptschulabschluss"],
        duration: "2-3 Jahre",
        note: "Nach dem VABO kann über AVdual mit Betriebspraktika der Hauptschulabschluss erworben werden.",
        recommended: true
      },
      {
        title: "VABO → 1BFS",
        steps: ["VABO (Deutschförderung B1)", "1-jährige Berufsfachschule", "Hauptschulabschluss"],
        duration: "2 Jahre",
        note: "Mit ausreichenden Deutschkenntnissen direkter Einstieg in die 1BFS möglich.",
        recommended: true
      },
      {
        title: "VABO → Ausbildung Alltagsbetreuer/in",
        steps: ["VABO (Deutschförderung B1)", "Berufsfachschule Alltagsbetreuung", "Berufsabschluss + Hauptschulabschluss"],
        duration: "2 Jahre",
        note: "Die Ausbildung kann nach VABO begonnen werden und schließt einen dem Hauptschulabschluss gleichwertigen Bildungsstand ein."
      },
      {
        title: "VABO → Duale Ausbildung",
        steps: ["VABO (Deutschförderung B1)", "Duale Ausbildung", "Berufsabschluss + Hauptschulabschluss"],
        duration: "3,5-5 Jahre",
        note: "Mit erfolgreichem Abschluss einer dualen Ausbildung wird ein dem Hauptschulabschluss gleichwertiger Bildungsstand erworben."
      }
    ],
    mittlereReife: [
      {
        title: "VABO → Hauptschulabschluss → 2BFS",
        steps: ["VABO (Deutschförderung B1)", "AVdual/VAB", "Hauptschulabschluss", "2-jährige Berufsfachschule", "Mittlere Reife"],
        duration: "4-5 Jahre",
        note: "Zunächst Deutsch lernen und Hauptschulabschluss erwerben, dann über die 2BFS zur Mittleren Reife.",
        recommended: true
      }
    ],
    berufsabschluss: [
      {
        title: "VABO → direkt zur Ausbildung",
        steps: ["VABO (Deutschförderung B1)", "Duale Ausbildung", "Berufsabschluss"],
        duration: "3,5-5 Jahre",
        note: "In manchen Berufen ist eine Ausbildung nach VABO direkt möglich. Ggf. mit ausbildungsbegleitenden Hilfen (abH).",
        recommended: true
      }
    ]
  },
  avdual: {
    hauptschulabschluss: [
      {
        title: "Hauptschulabschluss über AVdual",
        steps: ["AVdual + Prüfung", "Hauptschulabschluss"],
        duration: "1-2 Jahre",
        note: "Im AVdual kann der Hauptschulabschluss erworben oder verbessert werden.",
        recommended: true
      }
    ],
    berufsabschluss: [
      {
        title: "Direkt in die Ausbildung",
        steps: ["AVdual", "Duale Ausbildung", "Berufsabschluss"],
        duration: "2-3,5 Jahre",
        note: "Nach erfolgreichem AVdual-Abschluss kann eine Berufsausbildung begonnen werden.",
        recommended: true
      }
    ]
  },

  hauptschulabschluss: {
    mittlereReife: [
      {
        title: "2-jährige Berufsfachschule (2BFS)",
        steps: ["Hauptschulabschluss", "2-jährige Berufsfachschule", "Mittlere Reife"],
        duration: "2 Jahre",
        note: "Die 2BFS führt zur Fachschulreife (Mittlere Reife) und vermittelt berufliche Grundbildung.",
        recommended: true
      },
      {
        title: "Mit dualer Ausbildung (Modell 9+3)",
        steps: ["Hauptschulabschluss", "Duale Ausbildung (3 Jahre, Ø 2,5)", "Berufsabschluss + Mittlere Reife"],
        duration: "3 Jahre",
        note: "Bei guten Leistungen (Notendurchschnitt 2,5) kann ein dem Realschulabschluss gleichwertiger Bildungsstand zuerkannt werden.",
        recommended: true
      }
    ],
    fachhochschulreife: [
      {
        title: "Über Mittlere Reife zum Berufskolleg",
        steps: ["Hauptschulabschluss", "2BFS/10. Klasse", "Mittlere Reife", "Berufskolleg", "Fachhochschulreife"],
        duration: "4-5 Jahre",
        note: "Zunächst Mittlere Reife erwerben, dann 2 Jahre Berufskolleg.",
        recommended: true
      }
    ],
    abitur: [
      {
        title: "Über Mittlere Reife zum Beruflichen Gymnasium",
        steps: ["Hauptschulabschluss", "Mittlere Reife", "Berufliches Gymnasium", "Abitur"],
        duration: "5 Jahre",
        note: "Mit Mittlerer Reife Zugang zum dreijährigen beruflichen Gymnasium.",
        recommended: true
      }
    ],
    berufsabschluss: [
      {
        title: "Duale Ausbildung",
        steps: ["Hauptschulabschluss", "Duale Ausbildung", "Berufsabschluss"],
        duration: "2-3,5 Jahre",
        note: "Mit Hauptschulabschluss können viele Ausbildungsberufe erlernt werden.",
        recommended: true
      }
    ],
    bachelor: [
      {
        title: "Über Abitur",
        steps: ["Hauptschulabschluss", "Mittlere Reife", "Abitur", "Studium"],
        duration: "8+ Jahre",
        note: "Der klassische Weg über alle Bildungsstufen."
      }
    ]
  },

  mittlereReife: {
    fachhochschulreife: [
      {
        title: "2-jähriges Berufskolleg",
        steps: ["Mittlere Reife", "Berufskolleg (2 Jahre)", "Fachhochschulreife"],
        duration: "2 Jahre",
        note: "Das 2-jährige Berufskolleg führt zur Fachhochschulreife und vermittelt berufliche Kenntnisse.",
        recommended: true
      },
      {
        title: "Mit dualer Ausbildung + Zusatzunterricht",
        steps: ["Mittlere Reife", "Duale Ausbildung + Zusatzunterricht", "Berufsabschluss + Fachhochschulreife"],
        duration: "3 Jahre",
        note: "Während der Ausbildung kann durch Zusatzunterricht die Fachhochschulreife erworben werden."
      }
    ],
    abitur: [
      {
        title: "Berufliches Gymnasium (3-jährig)",
        steps: ["Mittlere Reife", "Berufliches Gymnasium (3 Jahre)", "Abitur"],
        duration: "3 Jahre",
        note: "Das berufliche Gymnasium führt zur allgemeinen Hochschulreife mit beruflichem Schwerpunkt (6 Richtungen verfügbar).",
        recommended: true
      },
      {
        title: "Berufsoberschule (BOS) nach Ausbildung",
        steps: ["Mittlere Reife", "Duale Ausbildung", "Berufsoberschule Oberstufe (2 Jahre)", "Abitur"],
        duration: "5-7 Jahre",
        note: "Mit abgeschlossener Berufsausbildung führt die BOS zur fachgebundenen oder allgemeinen Hochschulreife."
      }
    ],
    berufsabschluss: [
      {
        title: "Duale Ausbildung",
        steps: ["Mittlere Reife", "Duale Ausbildung", "Berufsabschluss"],
        duration: "2-3,5 Jahre",
        note: "Mit Mittlerer Reife stehen nahezu alle Ausbildungsberufe offen.",
        recommended: true
      }
    ],
    bachelor: [
      {
        title: "Klassischer Weg über Abitur",
        steps: ["Mittlere Reife", "Abitur (3 Jahre)", "Studium"],
        duration: "6+ Jahre",
        note: "Abitur berechtigt zum Studium aller Studiengänge.",
        recommended: true
      },
      {
        title: "Weg über Fachhochschulreife",
        steps: ["Mittlere Reife", "Berufskolleg (2 Jahre)", "Fachhochschulreife", "Studium (FH/DHBW)"],
        duration: "5+ Jahre",
        note: "Studium an Fachhochschulen und Dualen Hochschulen."
      }
    ]
  },

  fachhochschulreife: {
    abitur: [
      {
        title: "Berufliches Gymnasium Klasse 13",
        steps: ["Fachhochschulreife", "Berufliches Gymnasium Klasse 13", "Abitur"],
        duration: "1 Jahr",
        note: "Mit Fachhochschulreife kann die Klasse 13 des beruflichen Gymnasiums besucht werden.",
        recommended: true
      }
    ],
    bachelor: [
      {
        title: "Studium an Hochschule für angewandte Wissenschaften",
        steps: ["Fachhochschulreife", "Hochschule/FH/DHBW", "Bachelor"],
        duration: "3-4 Jahre",
        note: "Die Fachhochschulreife berechtigt zum Studium an Hochschulen für angewandte Wissenschaften und Dualen Hochschulen.",
        recommended: true
      },
      {
        title: "Duales Studium",
        steps: ["Fachhochschulreife", "Duales Studium", "Bachelor + Berufsabschluss"],
        duration: "3-4 Jahre",
        note: "Kombination von Praxis im Betrieb und Theorie an der Hochschule."
      }
    ]
  },

  abitur: {
    berufsabschluss: [
      {
        title: "Duale Ausbildung",
        steps: ["Abitur", "Duale Ausbildung", "Berufsabschluss"],
        duration: "2-3 Jahre",
        note: "Viele Abiturienten entscheiden sich bewusst für eine Berufsausbildung, oft mit verkürzter Ausbildungszeit."
      }
    ],
    bachelor: [
      {
        title: "Direktes Studium",
        steps: ["Abitur", "Universität/Hochschule", "Bachelor"],
        duration: "3-4 Jahre",
        note: "Mit Abitur können alle Studiengänge an Universitäten und Hochschulen studiert werden.",
        recommended: true
      },
      {
        title: "Duales Studium",
        steps: ["Abitur", "Duales Studium", "Bachelor + Berufsabschluss"],
        duration: "3-4 Jahre",
        note: "Das duale Studium kombiniert Praxis im Betrieb mit Theorie an der Hochschule."
      }
    ]
  },

  meister: {
    bachelor: [
      {
        title: "Studium mit Meister/Techniker",
        steps: ["Meister/Techniker", "Hochschule/Universität", "Bachelor"],
        duration: "3-4 Jahre",
        note: "Meister und Techniker sind dem Bachelor gleichgestellt und berechtigen zum Hochschulstudium.",
        recommended: true
      }
    ]
  }
};

function updateVisuals() {
  const startSelect = document.getElementById('start');
  const zielSelect = document.getElementById('ziel');
  const visStart = document.getElementById('vis-start');
  const visTarget = document.getElementById('vis-target');

  if (startSelect && zielSelect && visStart && visTarget) {
    visStart.textContent = startSelect.value ? '✓' : '?';
    visTarget.textContent = zielSelect.value ? '✓' : '?';
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const startSelect = document.getElementById('start');
  const zielSelect = document.getElementById('ziel');

  if (startSelect) startSelect.addEventListener('change', updateVisuals);
  if (zielSelect) zielSelect.addEventListener('change', updateVisuals);

  const glossarContainer = document.getElementById('glossar-container');
  if (glossarContainer) renderGlossar(glossarData);
});

function showPaths() {
  const start = document.getElementById('start').value;
  const ziel = document.getElementById('ziel').value;
  const resultDiv = document.getElementById('result');

  if (!start || !ziel) {
    resultDiv.innerHTML = `
      <div style="background:#FFF3CD; border-left:4px solid #FFC107; padding:1rem; border-radius:8px; margin-top:1rem;">
        <strong>⚠️ Hinweis:</strong> Bitte wähle sowohl Start als auch Ziel aus.
      </div>
    `;
    return;
  }

  const availablePaths = paths[start]?.[ziel];

  if (!availablePaths || availablePaths.length === 0) {
    resultDiv.innerHTML = `
      <div style="background:#E3F2FD; border-left:4px solid #2196F3; padding:1.5rem; border-radius:8px; margin-top:1rem;">
        <strong>ℹ️ Zwischenschritte erforderlich</strong>
        <p style="margin-top:0.75rem;">Für dieses Ziel sind Zwischenschritte notwendig. Wähle zunächst einen Zwischenschritt als Ziel aus (z.B. erst Hauptschulabschluss, dann Mittlere Reife).</p>
        <p style="margin-top:0.5rem;"><strong>💡 Tipp:</strong> Mit Abschluss, immer Anschluss!</p>
      </div>
    `;
    return;
  }

  let html = `<div style="margin-top:2rem;">
    <h3 style="color:var(--accent); margin-bottom:1.5rem; font-size:1.5rem;">
      ✨ ${availablePaths.length} ${availablePaths.length === 1 ? 'Weg gefunden' : 'Wege gefunden'}
    </h3>`;

  availablePaths.forEach((path, index) => {
    const recClass = path.recommended ? ' recommended' : '';
    html += `
      <div class="path-card${recClass}">
        <div class="path-header">
          <div class="path-title">${index + 1}. ${path.title}</div>
          ${path.duration ? `<div class="path-duration">⏱️ ${path.duration}</div>` : ''}
        </div>
        <div class="path-steps">
    `;

    path.steps.forEach((step, stepIndex) => {
      html += `<span class="step">${step}</span>`;
      if (stepIndex < path.steps.length - 1) {
        html += `<span class="arrow">→</span>`;
      }
    });

    html += `</div>`;

    if (path.note) {
      html += `
        <div class="path-note">
          <strong>ℹ️ Hinweis:</strong> ${path.note}
        </div>
      `;
    }

    html += `</div>`;
  });

  html += `
    <div style="background:#E8F5E9; border-left:4px solid #4CAF50; padding:1.5rem; border-radius:8px; margin-top:1.5rem;">
      <p style="margin-bottom:0.75rem;"><strong>💡 Wichtig:</strong> Die angezeigten Wege sind die häufigsten Bildungspfade. Es können je nach individueller Situation auch weitere Möglichkeiten bestehen.</p>
      <p style="margin:0;"><strong>📞 Beratung nutzen:</strong> Für persönliche Bildungsberatung wende dich an die Berufsberatung der Agentur für Arbeit oder die Schulsozialarbeit.</p>
    </div>
  </div>`;

  resultDiv.innerHTML = html;
  resultDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function resetPaths() {
  document.getElementById('start').value = '';
  document.getElementById('ziel').value = '';
  document.getElementById('result').innerHTML = '';
  updateVisuals();
}

const glossarData = [
  { term: "Hauptschulabschluss", description: "Der Hauptschulabschluss ist der erste allgemeinbildende Schulabschluss in Deutschland. Er wird nach erfolgreichem Abschluss der 9. Klasse erworben und ermöglicht den Zugang zu einer Berufsausbildung oder weiteren schulischen Bildungswegen." },
  { term: "Mittlere Reife / Mittlerer Bildungsabschluss", description: "Die Mittlere Reife (auch Realschulabschluss genannt) wird nach der 10. Klasse erworben. Dieser Abschluss qualifiziert für anspruchsvollere Berufsausbildungen und ermöglicht den Zugang zu weiterführenden Schulen wie Berufskolleg oder beruflichem Gymnasium." },
  { term: "Fachhochschulreife", description: "Die Fachhochschulreife berechtigt zum Studium an Fachhochschulen und manchen Universitäten. Sie kann an Berufskollegs, Fachoberschulen oder beruflichen Gymnasien erworben werden und kombiniert oft theoretisches Wissen mit praktischen Erfahrungen." },
  { term: "Abitur / Allgemeine Hochschulreife", description: "Das Abitur ist der höchste Schulabschluss in Deutschland und berechtigt zum Studium an allen Universitäten und Hochschulen. Es kann an allgemeinbildenden oder beruflichen Gymnasien erworben werden." },
  { term: "AVdual (Ausbildungsvorbereitung dual)", description: "AVdual ist ein Bildungsgang für Jugendliche ohne Ausbildungsplatz. Er kombiniert schulisches Lernen mit praktischen Erfahrungen in Betrieben und bereitet gezielt auf eine Berufsausbildung vor. Gleichzeitig kann der Hauptschulabschluss erworben oder verbessert werden." },
  { term: "VABO (Vorqualifizierungsjahr Arbeit/Beruf)", description: "Das VABO richtet sich an Jugendliche ohne ausreichende Deutschkenntnisse. Es vermittelt Sprachkenntnisse und berufliche Orientierung, um den Zugang zum deutschen Bildungssystem und Arbeitsmarkt zu erleichtern." },
  { term: "Berufskolleg", description: "Das Berufskolleg ist eine berufliche Vollzeitschule, die zur Fachhochschulreife führt und gleichzeitig berufliche Kenntnisse vermittelt. Es gibt verschiedene Fachrichtungen wie Wirtschaft, Technik oder Gesundheit." },
  { term: "Berufliches Gymnasium", description: "Das berufliche Gymnasium führt zur allgemeinen Hochschulreife (Abitur) und verbindet allgemeinbildende Fächer mit berufsbezogenen Schwerpunkten wie Wirtschaft, Technik oder Gesundheit." },
  { term: "Duale Ausbildung", description: "Die duale Ausbildung kombiniert praktische Arbeit im Betrieb mit theoretischem Unterricht in der Berufsschule. Sie dauert in der Regel 2-3,5 Jahre und führt zu einem anerkannten Berufsabschluss." },
  { term: "Meister/Techniker/Fachwirt", description: "Diese Fortbildungsabschlüsse bauen auf einer abgeschlossenen Berufsausbildung auf und qualifizieren für Führungspositionen oder Selbstständigkeit. Sie sind dem Bachelor-Niveau gleichgestellt und ermöglichen auch ein Hochschulstudium." },
  { term: "1-jährige Berufsfachschule (1BFS)", description: "Die einjährige Berufsfachschule vermittelt berufliche Grundbildung in bestimmten Berufsfeldern wie Metalltechnik, Bautechnik oder Hauswirtschaft. Sie kann bei einer Ausbildungsplatzzusage als erstes Ausbildungsjahr angerechnet werden." },
  { term: "2-jährige Berufsfachschule (2BFS)", description: "Die 2BFS baut auf dem Hauptschulabschluss auf und führt zur Fachschulreife (mittlerer Bildungsabschluss). Sie vermittelt berufliche Grundbildung in drei Bereichen: kaufmännisch, gewerblich-technisch oder Ernährung und Gesundheit." },
  { term: "Berufsoberschule (BOS)", description: "Die Berufsoberschule richtet sich an Personen mit abgeschlossener Berufsausbildung. Die zweijährige Oberstufe führt zur fachgebundenen Hochschulreife oder – bei Erwerb einer zweiten Fremdsprache – zur allgemeinen Hochschulreife." },
  { term: "Modell 9+3", description: "Ein besonderer Weg zum mittleren Bildungsabschluss: 9 Jahre Haupt-/Werkrealschule + 3 Jahre Berufsausbildung. Bei einem Notendurchschnitt von mindestens 2,5 wird ein dem Realschulabschluss gleichwertiger Bildungsstand zuerkannt." }
];

function renderGlossar(data) {
  const container = document.getElementById('glossar-container');
  if (!container) return;

  let html = '';
  data.forEach((item, index) => {
    html += `
      <div class="glossary-item" data-term="${item.term.toLowerCase()}" onclick="toggleGlossary(${index})">
        <div class="glossary-term">${item.term}</div>
        <div class="glossary-description">${item.description}</div>
      </div>
    `;
  });
  container.innerHTML = html;
}

function toggleGlossary(index) {
  const items = document.querySelectorAll('.glossary-item');
  if (items[index]) {
    items[index].classList.toggle('active');
  }
}

function filterGlossar() {
  const input = document.getElementById('glossar-search');
  const filter = input.value.toLowerCase();
  const items = document.querySelectorAll('.glossary-item');

  items.forEach(item => {
    const term = item.getAttribute('data-term');
    const description = item.querySelector('.glossary-description').textContent.toLowerCase();
    item.style.display = (term.includes(filter) || description.includes(filter)) ? '' : 'none';
  });
}

const QuizApp = {
  currentQuestion: 0,
  answers: { interests: [], workType: '', field: '', activities: [] },

  questions: [
    {
      question: "Was machst du gerne in deiner Freizeit?",
      type: "multiple",
      options: [
        { text: "Mit dem Computer arbeiten", value: "computer" },
        { text: "Sport treiben oder draußen sein", value: "sport" },
        { text: "Basteln oder etwas bauen", value: "handwerk" },
        { text: "Anderen helfen", value: "sozial" }
      ],
      key: "interests"
    },
    {
      question: "Wie arbeitest du am liebsten?",
      type: "single",
      options: [
        { text: "Mit meinen Händen – praktisch", value: "handwerk" },
        { text: "Mit Menschen zusammen", value: "sozial" },
        { text: "Am Computer", value: "it" },
        { text: "Im Büro am Schreibtisch", value: "buero" }
      ],
      key: "workType"
    },
    {
      question: "Welcher Bereich interessiert dich am meisten?",
      type: "single",
      options: [
        { text: "Technik & Maschinen", value: "technik" },
        { text: "Gesundheit & Pflege", value: "gesundheit" },
        { text: "Wirtschaft & Handel", value: "wirtschaft" },
        { text: "IT & Digitales", value: "it" }
      ],
      key: "field"
    },
    {
      question: "Was würdest du gerne machen?",
      type: "multiple",
      options: [
        { text: "Dinge reparieren", value: "reparieren" },
        { text: "Verkaufen & beraten", value: "verkauf" },
        { text: "Pflegen & betreuen", value: "pflege" },
        { text: "Programmieren", value: "programmieren" }
      ],
      key: "activities"
    }
  ],

  berufe: {
    technik: [
      { name: "Elektroniker/in", beschreibung: "Installiere elektrische Anlagen und halte sie instand.", abschluss: "Mittlere Reife", dauer: "3,5 Jahre", chancen: true },
      { name: "Industriemechaniker/in", beschreibung: "Stelle Maschinen und Anlagen her und warte sie.", abschluss: "Hauptschulabschluss", dauer: "3,5 Jahre", chancen: true }
    ],
    gesundheit: [
      { name: "Medizinische/r Fachangestellte/r", beschreibung: "Unterstütze Ärzte bei der Behandlung und Betreuung von Patienten.", abschluss: "Mittlere Reife", dauer: "3 Jahre", chancen: true },
      { name: "Pflegefachmann/frau", beschreibung: "Pflege und betreue kranke und ältere Menschen.", abschluss: "Mittlere Reife", dauer: "3 Jahre", chancen: true }
    ],
    wirtschaft: [
      { name: "Kaufmann/frau für Büromanagement", beschreibung: "Organisiere und bearbeite bürowirtschaftliche Aufgaben.", abschluss: "Mittlere Reife", dauer: "3 Jahre", chancen: true },
      { name: "Kaufmann/frau im Einzelhandel", beschreibung: "Verkaufe Waren und berate Kunden.", abschluss: "Hauptschulabschluss", dauer: "3 Jahre", chancen: true }
    ],
    it: [
      { name: "Fachinformatiker/in", beschreibung: "Entwickle Software oder betreue IT-Systeme.", abschluss: "Hochschulreife", dauer: "3 Jahre", chancen: true }
    ]
  },

  start() {
    this.currentQuestion = 0;
    this.answers = { interests: [], workType: '', field: '', activities: [] };
    document.getElementById('quiz-start').style.display = 'none';
    document.getElementById('quiz-question-container').style.display = 'block';
    this.showQuestion();
  },

  showQuestion() {
    const q = this.questions[this.currentQuestion];
    const progress = ((this.currentQuestion + 1) / this.questions.length) * 100;
    document.getElementById('quiz-progress-fill').style.width = progress + '%';
    document.getElementById('quiz-question-text').textContent = `Frage ${this.currentQuestion + 1} von ${this.questions.length}: ${q.question}`;

    let html = '';
    q.options.forEach((opt, idx) => {
      html += `<div class="quiz-option" onclick="QuizApp.selectOption(${idx})">${opt.text}</div>`;
    });

    html += `
      <div style="margin-top:1.5rem; display:flex; gap:0.75rem;">
        ${this.currentQuestion > 0 ? '<button class="btn-secondary" onclick="QuizApp.previous()">⬅️ Zurück</button>' : ''}
        <button class="btn-primary" onclick="QuizApp.next()" style="flex:1;">
          ${this.currentQuestion === this.questions.length - 1 ? '🎯 Ergebnis anzeigen' : '➡️ Weiter'}
        </button>
      </div>
    `;

    document.getElementById('quiz-options-container').innerHTML = html;
  },

  selectOption(idx) {
    const q = this.questions[this.currentQuestion];
    const options = document.querySelectorAll('.quiz-option');
    const value = q.options[idx].value;

    if (q.type === 'single') {
      options.forEach(opt => opt.classList.remove('selected'));
      options[idx].classList.add('selected');
      this.answers[q.key] = value;
    } else {
      options[idx].classList.toggle('selected');
      if (options[idx].classList.contains('selected')) {
        if (!this.answers[q.key].includes(value)) this.answers[q.key].push(value);
      } else {
        this.answers[q.key] = this.answers[q.key].filter(v => v !== value);
      }
    }
  },

  next() {
    if (this.currentQuestion < this.questions.length - 1) {
      this.currentQuestion++;
      this.showQuestion();
    } else {
      this.showResults();
    }
  },

  previous() {
    if (this.currentQuestion > 0) {
      this.currentQuestion--;
      this.showQuestion();
    }
  },

  showResults() {
    document.getElementById('quiz-question-container').style.display = 'none';
    document.getElementById('quiz-results').style.display = 'block';

    const field = this.answers.field || 'wirtschaft';
    const berufe = this.berufe[field] || this.berufe.wirtschaft;

    let html = '<h3 style="color:var(--accent); margin-bottom:1.5rem;">🎯 Diese Berufe könnten zu dir passen:</h3>';
    berufe.forEach(beruf => {
      html += `
        <div class="beruf-card">
          <h4>${beruf.name}</h4>
          <p>${beruf.beschreibung}</p>
          <div class="beruf-info">
            <span class="beruf-tag">📚 ${beruf.abschluss}</span>
            <span class="beruf-tag">⏱️ ${beruf.dauer}</span>
            ${beruf.chancen ? '<span class="beruf-tag">✨ Gute Chancen</span>' : ''}
          </div>
        </div>
      `;
    });

    html += `
      <div style="background:#E8F5E9; border-left:4px solid #4CAF50; padding:1.5rem; border-radius:8px; margin-top:1.5rem;">
        <p><strong>💡 Nächster Schritt:</strong> Nutze das Bildungswege-Tool oben, um herauszufinden, wie du zu deinem Wunschberuf kommst!</p>
      </div>
    `;

    document.getElementById('quiz-result-list').innerHTML = html;
  },

  reset() {
    document.getElementById('quiz-start').style.display = 'block';
    document.getElementById('quiz-question-container').style.display = 'none';
    document.getElementById('quiz-results').style.display = 'none';
    document.getElementById('quiz-progress-fill').style.width = '0%';
  }
};
