import fetch from 'node-fetch';

interface Character {
  name: string;
  house: string;
  playsQuidditch: boolean;
  position: string;
  quidditchYears: number[];
}

interface Filter {
  house: string;
  position: string;
}

fetch("https://coderbyte.com/api/challenges/json/quidditch-list")
  .then((result: Character[]) => result.filter(item => item.playsQuidditch).map(item => ({house: item.house, position: item.position}))
  .then(jsonformat: Filter[] => console.log(JSON.stringify(jsonformat)));