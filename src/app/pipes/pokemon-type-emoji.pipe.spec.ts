import { PokemonTypeEmojiPipe } from './pokemon-type-emoji.pipe';

describe('PokemonTypeEmojiPipe', () => {
  it('create an instance', () => {
    const pipe = new PokemonTypeEmojiPipe();
    expect(pipe).toBeTruthy();
  });
});
