import Papa from 'papaparse';
import { getRandomNumber } from './getRandomNumber';
import { Game } from './interfaces/game';

async function getData(filePath: string) {
  return new Promise<Game[]>((resolve) => {
    Papa.parse<Game>(filePath, {
      header: true,
      download: true,
      dynamicTyping: true,
      complete: function (results) {
        resolve(results.data);
      },
    });
  });
}

export const getGame = async (csvFilePath: string) => {
  const gamesParsed = await getData(csvFilePath);
  const randNum = getRandomNumber(0, gamesParsed.length);

  const game = {
    Title: gamesParsed[randNum]['Title'],
    'Developer(s)': gamesParsed[randNum]['Developer(s)'] || '???',
  };

  return game;
};
