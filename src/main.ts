import { getGame } from './getGame';
import { Game } from './interfaces/game';

const $selector = document.querySelector('#platforms') as HTMLSelectElement;
const $selectedGame = document.querySelector(
  '#selected_game',
) as HTMLDivElement;

$selector.addEventListener(
  'change',
  async () => {
    const path = `./assets/files/${$selector.value}.csv`;
    const game = await getGame(path);

    if (!game) return;

    return showGame(game);
  },
  false,
);

function showGame(game: Game) {
  const $gameName = $selectedGame.querySelector(
    '#game_name',
  ) as HTMLParagraphElement;
  const $gameDeveloper = $selectedGame.querySelector(
    '#game_developer',
  ) as HTMLParagraphElement;

  $gameName.innerHTML = `<span>Title</span>: ${game.Title}`;
  $gameDeveloper.innerHTML = `<span>Developer(s)</span>: ${game['Developer(s)']}`;
}
