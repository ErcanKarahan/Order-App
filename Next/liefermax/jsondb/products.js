const jsondb = {
  produkte: [
    {
      name: "Crispy Burger",
      beschreibung: "Amerikan Style Burger",
      kategorie: "Hauptgericht", // Düzeltme: "kategorie" olarak düzeltilmiş
      preis: 6.99,
      url: "burger",
      bild: "/img/produkte/burger.jpg",
      extras: [
        {
          text: "Doppelt",
          preis: 4, // Düzeltme: "preis" olarak düzeltilmiş
        },
        {
          text: 'Extra Scharf',
          preis: 0.5,
        }
      ],
    },
    {
      name: "Coca Cola",
      beschreibung: "Eisgekühltes Cola",
      kategorie: "Trinken",
      preis: 1.99,
      url: "cola",
      bild: "/img/produkte/cola.jpg",
      extras: [
        {
          text: "Gekühlt",
          preis: 0.2,
        },
        
      ],
    },
    {
      name: "Erdbeer Eis",
      beschreibung: "Eis mit Erdbeeren und Sahne",
      kategorie: "Nachspeise",
      preis: 2.99,
      url: "Eis",
      bild: "/img/produkte/eis.jpg",
      extras: [
        {
          text: "Extra Sahne",
          preis: 1,
        },
        
      ],
    },
    {
      name: "Falaffel",
      beschreibung: "Orientalische Falaffel",
      kategorie: "Hauptgericht",
      preis: 6.99,
      url: "falaffel",
      bild: "/img/produkte/falaffel.jpg",
      extras: [
        {
          text: "Sesam Souce",
          preis: 1,
        },
        {
          text: 'Cocktail Souce',
          preis: 1,
        }
      ],
    },
    {
      name: "Pizza",
      beschreibung: "Italian Pizza",
      kategorie: "Hauptgericht",
      preis: 9.0,
      url: "pizza",
      bild: "/img/produkte/pizza.jpg",
      extras: [
        {
          text: "Extra Käse",
          preis: 2.5,
        },
        {
          text: 'Groß',
          preis: 3,
        }
      ],
    },
    {
      name: "Lahmacun",
      beschreibung: "Türkisch Style Lahmacun",
      kategorie: "Hauptgericht",
      preis: 4.5,
      url: "lahmacun",
      bild: "/img/produkte/lahmacun.jpg",
      extras: [
        {
          text: "Scharf",
          preis: 0.5,
        },
        {
          text: 'Extra Scharf',
          preis: 0.5,
        }
      ],
    },
    {
      name: "Lasagne",
      beschreibung: "Lasagne aus Italien",
      kategorie: "Hauptgericht",
      preis: 8.5,
      url: "lasagne",
      bild: "/img/produkte/lasagne.jpg",
      extras: [
        {
          text: "Doppelt",
          preis: 4,
        },
        {
          text: 'Extra Käse',
          preis: 2,
        }
      ],
    },
    {
      name: "Schokoladen Muffin",
      beschreibung: "Sehr süße Schoko Muffin",
      kategorie: "Nachspeise",
      preis: 3.2,
      url: "muffin",
      bild: "/img/produkte/muffin.jpg",
    },
    {
      name: "Süßkartoffel Pommes",
      beschreibung: "Süßkartoffel Pommes mit Dip",
      kategorie: "Hauptgericht",
      preis: 4.8,
      url: "pommes",
      bild: "/img/produkte/pommes.jpg",
      extras: [
        {
          text: "Doppelt",
          preis: 2,
        },
        {
          text: 'Extra Scharf',
          preis: 0.5,
        }
      ],
    },
  ],
};

export default jsondb;

