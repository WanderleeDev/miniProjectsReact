export interface IDigiData {
  img:   string;
  level: Level;
  name:  string;
}

export enum Level {
  Armor = "Armor",
  Champion = "Champion",
  Fresh = "Fresh",
  InTraining = "In Training",
  Mega = "Mega",
  Rookie = "Rookie",
  Training = "Training",
  Ultimate = "Ultimate",
}
