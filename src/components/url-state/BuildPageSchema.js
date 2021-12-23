export const gearDict = [
  'Berserker',
  'Assassin',
  'Harrier',
  'Commander',
  'Minstrel',
  'Magi',
  'Marauder',
  'Cleric',
  'Nomad',
  'Zealot',
  'Viper',
  'Sinister',
  'Grieving',
  'Seraph',
  'Marshal',
  'Giver',
  'Knight',
  'Trailblazer',
  'Plaguedoctor',
  'Carrion',
  'Rabid',
  'Dire',
  'Vigilant',
  'Valkyrie',
  'Cavalier',
  'Celestial',
  'Diviner',
  'Soldier',
  'Sentinel',
  'Wanderer',
  'Apothecary',
  'Shaman',
  'Crusader',
  'Rampager',
  'Settler',
  'Bringer',
];

export const professionDict = [
  'Warrior',
  'Revenant',
  'Guardian',
  'Ranger',
  'Engineer',
  'Elementalist',
  'Mesmer',
  'Necromancer',
  'Thief',
];

export const specializationDict = [
  'Spellbreaker',
  'Berserker',
  'Bladesworn',
  'Herald',
  'Renegade',
  'Vindicator',
  'Dragonhunter',
  'Firebrand',
  'Willbender',
  'Druid',
  'Soulbeast',
  'Untamed',
  'Scrapper',
  'Holosmith',
  'Mechanist',
  'Tempest',
  'Weaver',
  'Catalyst',
  'Chronomancer',
  'Mirage',
  'Virtuoso',
  'Scourge',
  'Reaper',
  'Harbinger',
  'Daredevil',
  'Deadeye',
  'Specter',
];

export const weaponTypeDict = ['Dual wield', 'two-handed'];

export const runesDict = [
  'scholar',
  'scholar-without',
  'eagle',
  'eagle-perma',
  'thief',
  'spellbreaker',
  'flame-legion',
  'strength',
  'ogre',
  'ranger',
  'chronomancer',
  'fire',
  'pack',
  'leadership',
  'firebrand',
  'surging-and-ruby-orb',
  'surging',
  'radiance',
  'durability',
  'scrapper',
  'sanctuary',
  'herald',
  'rebirth',
  'monk',
  'water',
  'altruism',
  'rebirth-2',
  'flock',
  'berserker',
  'renegade',
  'elementalist',
  'lich',
  'trapper',
  'trapper-and-black-diamond',
  'nightmare',
  'tempest',
  'undead',
  'necromancer',
  'soulbeast',
  'aristocracy',
  'balthazar',
  'flame-legion-2',
  'baelfire',
  'krait',
  'mad-king',
  'afflicted',
  'thorns',
  'scavenging',
  'tormenting',
  'perplexity',
  'traveler',
  'divinity',
  'revenant',
  'exuberance',
];

export const sigilDict = [
  'force',
  'accuracy',
  'impact/night/slaying-both',
  'impact/night/slaying-only-3',
  'severance-perma',
  'concentration',
  'transference',
  'malice',
  'bursting',
  'agony',
  'smoldering',
  'venom',
  'demons',
  'bloodlust',
  'cruelty',
  'perception',
  'corruption',
  'life',
  'bounty',
  'benevolence',
  'momentum',
  'stars',
  'platinum-doubloon',
];

export const enhancementDict = [
  'slaying-potion',
  'furious-sharpening-stone',
  'superior-sharpening-stone',
  'toxic-sharpening-stone',
  'magnanimous-sharpening-stone',
  'bountiful-sharpening-stone',
  'potent-lucent-oil',
  'toxic-maintenance-oil',
  'enhanced-lucent-oil',
  'furious-maintenance-oil',
  'magnanimous-maintenance-oil',
  'master-maintenance-oil',
  'corsair-maintenance-oil',
  'bountiful-maintenance-oil',
  'toxic-focusing-crystal',
  'furious-tuning-crystal',
  'master-tuning-crystal',
  'magnanimous-tuning-crystal',
  'bountiful-tuning-crystal',
  'holographic-super-apple',
  'holographic-super-drumstick',
  'holographic-super-cheese',
  'writ-of-masterful-accuracy',
  'writ-of-masterful-malice',
  'writ-of-masterful-strength',
  'potion-of-karka-toughness',
];

export const nourishmentDict = [
  'sweet-and-spicy-butternut-squash-soup',
  'truffle-steak',
  'curry-butternut-squash-soup',
  "dragon's-breath-bun",
  'seaweed-salad',
  'jerk-poultry',
  'sawgill-mushroom-risotto',
  'roasted-cactus',
  'fried-golden-dumpling',
  'soul-pastry',
  'eggs-benedict',
  'nopalitos-saute',
  'mussels-gnashblade',
  'fruit-salad-mint-garnish',
  'mint-creme-brulee',
  'delicious-rice-ball',
  'poultry-satay',
  'rare-veggie-pizza',
  'beef-rendang',
  'saffron-stuffed-mushroom',
  'steamed-red-dumpling',
  'fire-meat-chili',
  'fancy-truffle-burger',
  'truffle-risotto',
  'sweet-and-spicy-beans',
  'fire-flank-steak',
  'fancy-potato-and-leek-soup',
  'prickly-pear-pie',
  "dragon's-revelry-starcake",
  'birthday-blaster',
  'passion-fruit-tapioca-pudding',
  'prickly-pear-tapioca-pudding',
  'tropical-fruit-salad',
  'spicy-chocolate-cookie',
  'spicy-marinated-mushroom',
  'spicy-herbed-chicken',
  'truffle-ravioli',
  'omnomberry-bread',
  'kralkachocolate-bar',
  'chocolate-tapioca-pudding',
  'tropical-mousse',
  'elon-red',
];

export const BuildPageSchema = {
  character: {
    attributes: {
      Power: null,
      Precision: null,
      Toughness: null,
      Vitality: null,
      Ferocity: null,
      'Condition Damage': null,
      Expertise: null,
      Concentration: null,
      'Healing Power': null,
      'Agony Resistance': null,
      'Condition Duration': null,
      'Boon Duration': null,
      'Critical Chance': null,
      'Critical Damage': null,
      'Health': null,
      'Armor': null,
    },
    gear: { type: 'array', dict: gearDict },
    settings: {
      cachedFormState: {
        extras: {
          Enhancement: { type: 'value', dict: enhancementDict },
          Nourishment: { type: 'value', dict: nourishmentDict },
          Runes: { type: 'value', dict: runesDict },
          Sigil1: { type: 'value', dict: sigilDict },
          Sigil2: { type: 'value', dict: sigilDict },
        },
      },
      profession: { type: 'value', dict: professionDict },
      specialization: { type: 'value', dict: specializationDict },
      weaponType: { type: 'value', dict: weaponTypeDict },
    },
  },
  skills: {
    healId: null,
    utility1Id: null,
    utility2Id: null,
    utility3Id: null,
    eliteId: null,
  },
  traits: {
    lines: null,
    selected: null,
  },
  weapons: {
    mainhand1: null,
    mainhand2: null,
    offhand1: null,
    offhand2: null,
  },
};
