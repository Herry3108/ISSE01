// HouseHeadDto Interface
export interface HouseHeadDto {
    id: string; // UUID string
    firstName?: string;
    lastName?: string;
  }
  
  // TraitDto Interface
  export interface TraitDto {
    id: string; // UUID string
    name: TraitName;
  }
  
  // Enum for Trait Names
  export enum TraitName {
    None = 'None',
    Courage = 'Courage',
    Bravery = 'Bravery',
    Determination = 'Determination',
    Daring = 'Daring',
    Nerve = 'Nerve',
    Chivalary = 'Chivalary',
    Hardworking = 'Hardworking',
    Patience = 'Patience',
    Fairness = 'Fairness',
    Just = 'Just',
    Loyalty = 'Loyalty',
    Modesty = 'Modesty',
    Wit = 'Wit',
    Learning = 'Learning',
    Wisdom = 'Wisdom',
    Acceptance = 'Acceptance',
    Inteligence = 'Inteligence',
    Creativity = 'Creativity',
    Resourcefulness = 'Resourcefulness',
    Pride = 'Pride',
    Cunning = 'Cunning',
    Ambition = 'Ambition',
    Selfpreservation = 'Selfpreservation',
  }
  
  // HouseDto Interface
  export interface HouseInterface {
    id: string; // UUID string
    name?: string;
    houseColours?: string;
    founder?: string;
    animal?: string;
    element?: string;
    ghost?: string;
    commonRoom?: string;
    heads?: HouseHeadDto[];
    traits?: TraitDto[];
  }
  