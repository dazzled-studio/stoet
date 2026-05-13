export type Addon = { name: string; price: number };

export type MenuItem = {
  name: string;
  description?: string;
  price?: number;
  priceLabel?: string;
  note?: string;
  addons?: Addon[];
  tags?: string[];
  allergens?: string[];
};

export type MenuCategory = {
  id: string;
  nameKey: string;
  subtitleKey?: string;
  items: MenuItem[];
};

export const menu: MenuCategory[] = [
  {
    id: 'ontbijt',
    nameKey: 'menu_cat_ontbijt_name',
    subtitleKey: 'menu_cat_ontbijt_subtitle',
    items: [
      {
        name: 'Guilty Breakfast',
        description:
          'Bananenbrood, yoghurt, croissants, gekookt eitje, gegrilde pide, avocado, jam, stroop, roomboter en kruidensaus.',
        price: 11.95,
        priceLabel: '11,95 p.p.',
        note: 'Te bestellen vanaf 2 personen, prijs per persoon.',
        allergens: ['Noten', 'Eieren', 'Koemelk', 'Tarwe', 'Sesam'],
      },
      {
        name: 'Banana Breakfast',
        description:
          'Gegrild bananenbrood, mascarponeroom, stroop en vers fruit.',
        price: 7.75,
        allergens: ['Tarwe', 'Noten', 'Pinda', 'Eieren', 'Koemelk'],
      },
      {
        name: 'Roombotercroissant',
        description: 'Met kaas, ham of jam en boter.',
        price: 3.95,
        allergens: ['Koemelk', 'Tarwe', 'Lactose'],
      },
      {
        name: 'Breakfast Brioche',
        description:
          'Gegrild briochebrood met avocado, feta, vadouvan-mayo, gekookt eitje, gemarineerde cherrytomaatjes en ahornsiroop.',
        price: 8.25,
        addons: [{ name: 'Met bacon', price: 1.0 }],
        allergens: ['Lactose', 'Koemelk', 'Eieren', 'Tarwe'],
      },
    ],
  },
  {
    id: 'zoet',
    nameKey: 'menu_cat_zoet_name',
    subtitleKey: 'menu_cat_zoet_subtitle',
    items: [
      {
        name: 'French Toast',
        description:
          'Gegrild suikerbrood, mascarponeroom, huisgemaakte zomervruchtencompote, ahornsiroop en vers fruit.',
        price: 8.5,
        allergens: ['Koemelk', 'Tarwe', 'Eieren', 'Lactose'],
      },
      {
        name: 'Berry Pancakes',
        description:
          'Dikke pancakes, mascarponeroom, witte chocolade, zomervruchtencompote, vers fruit en pistache.',
        note: 'Met ahornsiroop? Vraag het aan de bediening.',
        price: 8.5,
        allergens: ['Lactose', 'Koemelk', 'Tarwe', 'Eieren', 'Noten'],
      },
      {
        name: "Oma's pannenkoekjes",
        description: 'Kleine pannenkoekjes met vers fruit en karamelstroop.',
        price: 4.95,
        allergens: ['Lactose', 'Koemelk', 'Tarwe', 'Eieren'],
      },
    ],
  },
  {
    id: 'bowls',
    nameKey: 'menu_cat_bowls_name',
    subtitleKey: 'menu_cat_bowls_subtitle',
    items: [
      {
        name: 'Yoghurt Bowl',
        description:
          'Dikke yoghurt met huisgemaakte granola, zomervruchtencompote en vers fruit.',
        price: 7.75,
        addons: [{ name: 'Vegan', price: 1.0 }],
        allergens: ['Lactose', 'Koemelk', 'Noten', 'Pinda', 'Tarwe'],
      },
      {
        name: 'Overnight Oats',
        description:
          'Vanille-citroen overnight oats, perzikcompote, huisgemaakte granola en vers fruit.',
        note: 'Ook vegan te bestellen.',
        price: 7.75,
        allergens: ['Noten', 'Tarwe', 'Honing'],
      },
      {
        name: 'Salade Bowl',
        description:
          'Gemengde sla, gemarineerde cherrytomaatjes, burrata, balsamico, vers fruit, verse pesto en pijnboompitten. Geserveerd met brood en boter.',
        price: 10.95,
        allergens: ['Tarwe', 'Lactose', 'Noten'],
      },
      {
        name: 'Acai Bowl',
        description:
          'Acai, huisgemaakte granola, banaan, vers fruit en hazelnootdrizzle.',
        note: 'Ook vegan te bestellen.',
        price: 8.25,
        allergens: ['Honing', 'Noten', 'Pinda'],
      },
    ],
  },
  {
    id: 'wraps',
    nameKey: 'menu_cat_wraps_name',
    subtitleKey: 'menu_cat_wraps_subtitle',
    items: [
      {
        name: 'Pulled Chicken Wrap',
        description:
          'Pulled chicken, avocado, wortel, little gem, komkommer, gemarineerde cherrytomaatjes, ingelegde rode ui, kruidensaus en parmezaanse kaas.',
        price: 8.5,
        allergens: ['Koemelk', 'Tarwe', 'Soja', 'Eieren'],
      },
      {
        name: 'Sticky Tempeh Wrap',
        description:
          'Gemarineerde tempeh, wortel, little gem, komkommer, gemarineerde cherrytomaatjes, ingelegde rode ui en vegan mayo.',
        note: 'Ook vegan te bestellen, zonder tortillachips.',
        price: 8.5,
        allergens: ['Soja', 'Tarwe'],
      },
    ],
  },
  {
    id: 'stoet',
    nameKey: 'menu_cat_stoet_name',
    subtitleKey: 'menu_cat_stoet_subtitle',
    items: [
      {
        name: 'Kleine Stoet',
        description:
          'Kaas, frambozenjam, pindakaas of witte chocopasta op wit of meergranen.',
        price: 3.5,
        allergens: ['Tarwe'],
      },
      {
        name: 'Carpaccio',
        description:
          'Carpaccio, parmezaanse kaas, verse pesto, pijnboompitten, truffelmayo en rucola.',
        price: 8.95,
        allergens: ['Lactose', 'Koemelk', 'Noten', 'Eieren'],
      },
      {
        name: 'Gochujang No-Chicken',
        description:
          'Vegan gochujang kip, vegan mayo, little gem, komkommer, wortel, zoete chilisaus, ingelegde rode ui, bosui en gebakken uitjes.',
        price: 8.75,
        tags: ['Veganistisch'],
        allergens: ['Soja', 'Tarwe'],
      },
      {
        name: 'Gegrilde Kip',
        description:
          'Gegrilde of pulled chicken, vadouvan-mayo, gemengde sla, kruidensaus, komkommer, ingelegde rode ui en parmezaanse kaas.',
        price: 8.95,
        addons: [{ name: 'Met bacon', price: 1.0 }],
        allergens: ['Koemelk', 'Eieren', 'Lactose', 'Tarwe'],
      },
      {
        name: 'Burrata',
        description:
          'Burrata, verse pesto, rucola, gemarineerde cherrytomaatjes, balsamico en pijnboompitten.',
        price: 8.75,
        allergens: ['Lactose', 'Noten'],
      },
      {
        name: 'Smashed Avocado',
        description:
          'Smashed avocado, rucola, gemarineerde cherrytomaatjes, feta, verse pesto en honing.',
        price: 8.75,
        addons: [
          { name: 'Met bacon', price: 1.0 },
          { name: 'Met ei', price: 1.0 },
        ],
        allergens: ['Koemelk', 'Lactose', 'Noten'],
      },
      {
        name: 'Brie',
        description:
          'Brie, honing, perzikcompote, geroosterde walnoot, balsamico en rucola.',
        price: 8.5,
        allergens: ['Tarwe', 'Lactose', 'Noten'],
      },
      {
        name: 'Serranoham',
        description:
          'Serranoham, buffelmozzarella, verse pesto, gemengde sla, balsamico en pijnboompitten.',
        price: 8.95,
        allergens: ['Lactose', 'Koemelk', 'Tarwe', 'Noten'],
      },
    ],
  },
  {
    id: 'warme-stoet',
    nameKey: 'menu_cat_warme_stoet_name',
    subtitleKey: 'menu_cat_warme_stoet_subtitle',
    items: [
      {
        name: 'Truffel Chicken',
        description:
          'Pulled chicken, cheddar, gekarameliseerde ui, sla, truffelmayo en parmezaanse kaas.',
        price: 8.95,
        addons: [{ name: 'Met bacon', price: 1.0 }],
        allergens: ['Koemelk', 'Eieren', 'Tarwe'],
      },
      {
        name: 'Warme Geitenkaas',
        description:
          'Geitenkaas, appelstroop, gemarineerde cherrytomaatjes, rucola, balsamico, druiven, pijnboompitten en honing.',
        price: 8.75,
        addons: [
          { name: 'Met bacon', price: 1.0 },
          { name: 'Met serranoham', price: 1.5 },
        ],
        allergens: ['Lactose', 'Koemelk'],
      },
    ],
  },
  {
    id: 'tostis',
    nameKey: 'menu_cat_tostis_name',
    subtitleKey: 'menu_cat_tostis_subtitle',
    items: [
      {
        name: 'Tosti Kaas',
        description: 'De vertrouwde kaastosti, lekker simpel.',
        price: 5.0,
        allergens: ['Koemelk', 'Sesam', 'Tarwe'],
      },
      {
        name: 'Tosti Ham Kaas',
        price: 5.5,
        allergens: ['Sesam', 'Koemelk', 'Tarwe'],
      },
      {
        name: 'Tosti Kip',
        description: 'Pulled chicken, cheddar, bosui en bieslooksaus.',
        price: 7.5,
        allergens: ['Tarwe', 'Sesam', 'Koemelk', 'Eieren', 'Soja'],
      },
      {
        name: 'Kimchi Toastie',
        description: 'Vegan kip, vegan gouda, kimchi en crispy chili-olie.',
        price: 6.95,
        tags: ['Veganistisch'],
        allergens: ['Tarwe', 'Sesam', 'Soja'],
      },
      {
        name: 'Tuna Melt',
        description: 'Tonijnsalade, cheddar, kleine augurkenblokjes en chilisaus on the side.',
        price: 7.5,
        allergens: ['Eieren', 'Koemelk', 'Sesam', 'Vis', 'Tarwe'],
      },
    ],
  },
  {
    id: 'kids',
    nameKey: 'menu_cat_kids_name',
    subtitleKey: 'menu_cat_kids_subtitle',
    items: [
      {
        name: "Oma's pannenkoekjes",
        description: 'Kleine pannenkoekjes met vers fruit en stroop.',
        price: 4.95,
      },
      {
        name: 'Stoet (wit of meergranen)',
        description: 'Kaas, frambozenjam, appelstroop, pindakaas of witte chocopasta.',
        price: 3.5,
      },
      {
        name: 'Kids yoghurt',
        description: 'Yoghurt, vers fruit en bosvruchtencoulis.',
        price: 4.0,
      },
      {
        name: 'Kindermuffin',
        description: 'Met slagroom en mini-marshmallows.',
        price: 1.95,
        allergens: ['Koemelk', 'Eieren', 'Tarwe'],
      },
    ],
  },
  {
    id: 'taart',
    nameKey: 'menu_cat_taart_name',
    subtitleKey: 'menu_cat_taart_subtitle',
    items: [
      {
        name: 'Appel crumble',
        price: 4.25,
        tags: ['Veganistisch'],
        allergens: ['Soja', 'Tarwe'],
      },
      {
        name: 'Carrotcake',
        price: 4.25,
        allergens: ['Tarwe', 'Eieren', 'Koemelk'],
      },
      {
        name: 'Brownie',
        price: 4.25,
        tags: ['Glutenvrij'],
        allergens: ['Koemelk', 'Eieren'],
      },
      {
        name: 'Lotus Cheesecake',
        note: 'Ook vegan te bestellen.',
        price: 4.25,
        tags: ['Veganistisch'],
        allergens: ['Soja', 'Tarwe'],
      },
      {
        name: 'Scones',
        description: 'Met clotted cream en lemon curd.',
        price: 4.75,
        allergens: ['Eieren', 'Koemelk', 'Tarwe'],
      },
      {
        name: 'Pastel de Nata',
        description: 'Klein maar fijn, warm custardgebakje met kaneel en poedersuiker.',
        price: 1.95,
        allergens: ['Eieren', 'Koemelk', 'Tarwe'],
      },
      {
        name: 'Zoetplankje',
        description: 'Zes mini gebakjes om te delen.',
        price: 8.5,
        allergens: ['Koemelk', 'Tarwe', 'Eieren', 'Soja'],
      },
      {
        name: 'Basque Cheesecake',
        description: 'Met een vleugje vanille.',
        price: 4.25,
        allergens: ['Lactose', 'Koemelk', 'Eieren', 'Tarwe'],
      },
    ],
  },
];

export function formatPrice(value: number): string {
  return `€ ${value.toFixed(2).replace('.', ',')}`;
}
