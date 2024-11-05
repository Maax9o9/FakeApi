import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonTypeEmoji',
  standalone: true,
})
export class PokemonTypeEmojiPipe implements PipeTransform {
  transform(type: string): string {
    if (!type) {
      return '❓ Unknown';
    }
    
    const normalizedType = type.toLowerCase(); 
    let emoji = '';

    switch (normalizedType) {
      case 'fire':
        emoji = '🥵'; 
        break;
      case 'water':
        emoji = '💦';
        break;
      case 'grass':
        emoji = '🌿'; 
        break;
      case 'electric':
        emoji = '⚡'; 
        break;
      case 'psychic':
        emoji = '🔮'; 
        break;
      case 'rock':
        emoji = '🪨'; 
        break;
      case 'ground':
        emoji = '🌍'; 
        break;
      case 'ice':
        emoji = '🥶'; 
        break;
      case 'dragon':
        emoji = '🐉';
        break;
      case 'fairy':
        emoji = '🧚'; 
        break;
      case 'dark':
        emoji = '🌚'; 
        break;
      case 'steel':
        emoji = '🤘'; 
        break;
      case 'fighting':
        emoji = '🥊'; 
        break;
      case 'flying':
        emoji = '🕊'; 
        break;
      case 'normal':
        emoji = '😐'; 
        break;
      case 'poison':
        emoji = '☠'; 
        break;
      case 'ghost':
        emoji = '👻'; 
        break;
      case 'bug':
        emoji = '🪳'; 
        break;
      default:
        emoji = '❓'; 
    }

    return `${normalizedType.charAt(0).toUpperCase() + normalizedType.slice(1)} ${emoji}`; 
  }
}
