// ── How to add a new event ────────────────────────────────────────────────────
//
// 1. Drop all photos for the event into:  public/images/events/
//    (flat folder — any filenames you like, e.g. holi-2026-1.jpg)
//
// 2. Append one object to the `events` array below, following the same shape:
//    • id          — unique kebab-case slug, becomes the URL  /events/<id>
//    • title       — display name shown in cards and the detail page
//    • date        — ISO "YYYY-MM-DD" (used for display only)
//    • category    — must match one of the strings in `categories` below;
//                    add a new string there if you need a new category
//    • description — one or two sentences shown on the event detail page
//    • cover       — filename of the card thumbnail (in public/images/events/)
//    • images      — all photo filenames for the detail gallery (can include cover)
//
// That's it — no UI code needs to change.
//
// ─────────────────────────────────────────────────────────────────────────────

export type EventCategory = 'Cultural' | 'Sports' | 'Kids' | 'Social';

export interface ErosEvent {
  id: string;
  title: string;
  date: string; // "YYYY-MM-DD"
  category: EventCategory;
  description: string;
  cover: string; // filename in public/images/events/
  images: string[]; // filenames in public/images/events/
}

export const events: ErosEvent[] = [
  {
    id: 'diwali-2025',
    title: 'Diwali Celebration 2025',
    date: '2025-10-19',
    category: 'Cultural',
    description:
      'Eros Sampoornam came alive with the warm glow of diyas, vibrant traditional attire, and the joyful spirit of Diwali on 19th October 2025. Residents of all ages — from little ones making greeting cards to families posing at the stunning "Shubh Deepawali" backdrop — made this evening of lights truly unforgettable.',
    cover: 'diwali-2025-cover.jpg',
    images: [
      'diwali-2025-cover.jpg',
      'diwali-2025-1.jpg',
      'diwali-2025-2.jpg',
      'diwali-2025-3.jpg',
      'diwali-2025-4.jpg',
      'diwali-2025-5.jpg',
      'diwali-2025-6.jpg',
      'diwali-2025-7.jpg',
      'diwali-2025-8.jpg',
      'diwali-2025-9.jpg',
      'diwali-2025-10.jpg',
    ],
  },
  // {
  //   id: 'diwali-2024',
  //   title: 'Diwali Celebration 2024',
  //   date: '2024-11-01',
  //   category: 'Cultural',
  //   description:
  //     'A spectacular evening of lights, rangoli, and togetherness as the Sampoornam community celebrated the festival of Diwali with traditional fervor and modern flair. Families decorated diyas, shared sweets, and lit up the night sky together.',
  //   cover: 'diwali-2024-cover.jpg',
  //   images: [
  //     'diwali-2024-1.jpg',
  //     'diwali-2024-2.jpg',
  //     'diwali-2024-3.jpg',
  //     'diwali-2024-4.jpg',
  //   ],
  // },
  // {
  //   id: 'sports-day-2024',
  //   title: 'Annual Sports Day 2024',
  //   date: '2024-08-15',
  //   category: 'Sports',
  //   description:
  //     'Teams from across the community competed in cricket, badminton, and fun relay races on Independence Day, fostering sportsmanship and community spirit. The day wrapped up with a trophy ceremony and a community dinner.',
  //   cover: 'sports-2024-cover.jpg',
  //   images: ['sports-2024-1.jpg', 'sports-2024-2.jpg', 'sports-2024-3.jpg'],
  // },
  // {
  //   id: 'kids-summer-camp-2024',
  //   title: 'Kids Summer Camp 2024',
  //   date: '2024-05-20',
  //   category: 'Kids',
  //   description:
  //     'Three days of art, music, coding workshops, and outdoor adventures designed to spark creativity and build lasting friendships among the youngest members of our community.',
  //   cover: 'kids-camp-2024-cover.jpg',
  //   images: [
  //     'kids-camp-2024-1.jpg',
  //     'kids-camp-2024-2.jpg',
  //     'kids-camp-2024-3.jpg',
  //   ],
  // },
  // {
  //   id: 'new-year-gala-2025',
  //   title: 'New Year Gala 2025',
  //   date: '2025-01-01',
  //   category: 'Social',
  //   description:
  //     'Ring in 2025 with an unforgettable night of music, dance, and celebration as the entire Sampoornam community came together to welcome the new year with joy and hope.',
  //   cover: 'newyear-2025-cover.jpg',
  //   images: ['newyear-2025-1.jpg', 'newyear-2025-2.jpg', 'newyear-2025-3.jpg'],
  // },
  // {
  //   id: 'holi-2025',
  //   title: 'Holi — Festival of Colours 2025',
  //   date: '2025-03-14',
  //   category: 'Cultural',
  //   description:
  //     'The Sampoornam community erupted in colour, music, and laughter for Holi 2025. From water balloons to organic gulal, the day was a riot of joy from sunrise to sunset.',
  //   cover: 'holi-2025-cover.jpg',
  //   images: [
  //     'holi-2025-1.jpg',
  //     'holi-2025-2.jpg',
  //     'holi-2025-3.jpg',
  //     'holi-2025-4.jpg',
  //   ],
  // },
];

// All categories shown in the Gallery filter bar.
// If you add a new EventCategory type above, add it here too.
export const categories: string[] = [
  'All',
  'Cultural',
  'Sports',
  'Kids',
  'Social',
];
