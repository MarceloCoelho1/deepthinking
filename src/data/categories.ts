// Define a interface para o formato de cada categoria
export interface Category {
  slug: string;
  name: string;
  image: ImageMetadata;
}

import softwareEngineeringBanner from '../assets/banners/software-engineering.png';
import machineLearningBanner from '../assets/banners/machine-learning.png';
import osBanner from '../assets/banners/os.png';
import mathStatsBanner from '../assets/banners/math-stats.png';
import csTheoryBanner from '../assets/banners/cs-theory.png';
import bookNotesBanner from '../assets/banners/book-notes.png';
import defaultBanner from '../assets/banners/default.png';
import metaBanner from '../assets/banners/meta.png';

export const CATEGORIES: Category[] = [
  {
    slug: 'software-engineering',
    name: 'Software Engineering',
    image: softwareEngineeringBanner,
  },
  {
    slug: 'machine-learning',
    name: 'Machine Learning',
    image: machineLearningBanner,
  },
  {
    slug: 'os',
    name: 'Operating Systems',
    image: osBanner,
  },
  {
    slug: 'math-stats',
    name: 'Math & Stats',
    image: mathStatsBanner,
  },
  {
    slug: 'cs-theory',
    name: 'CS Theory',
    image: csTheoryBanner,
  },
  {
    slug: 'book-notes',
    name: 'Book Notes',
    image: bookNotesBanner,
  },
  {
    slug: 'meta',
    name: 'Meta',
    image: metaBanner,
  },
];

export const DEFAULT_BANNER_IMAGE = defaultBanner;