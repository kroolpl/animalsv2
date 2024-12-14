import type { ImageMetadata } from 'astro';
import carnilove from '../images/produkty/carnilove.jpg';
import britcare from '../images/produkty/britcare.png';
import powernature from '../images/produkty/powernature.jpg';
import panmiesko from '../images/produkty/panmiesko.jpg';

export interface Product {
  name: string;
  category: string;
  image: ImageMetadata;
  description: string;
}

export const featuredProducts: Product[] = [
  {
    name: 'Carnilove',
    category: 'Karma sucha dla psów',
    image: carnilove,
    description: 'BEZ ZBÓŻ, BEZ ZIEMNIAKÓW. FORMUŁA DLA PSÓW DOROSŁYCH WSZYSTKICH RAS ZE ŚWIEŻYM MIĘSEM'
  },
  {
    name: 'Brit Care',
    category: 'Karma sucha dla psów',
    image: britcare,
    description: 'Hipoalergiczna karma z jagnięciną i ryżem dla dorosłych psów wszystkich ras'
  },
  {
    name: 'Power of Nature',
    category: 'Karma sucha dla kotów',
    image: powernature,
    description: 'Naturalna karma dla kotów z wysoką zawartością świeżego mięsa'
  },
  {
    name: 'Pan Mięsko',
    category: 'Przysmaki dla psów',
    image: panmiesko,
    description: 'Naturalne, suszone przysmaki mięsne dla psów wszystkich ras'
  }
];