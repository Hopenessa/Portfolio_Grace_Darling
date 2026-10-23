export const artist = {
  studio: "Golden Mustang Studio",
  location: { city: "Clarklake", state: "Michigan", country: "USA" },
  name: "Grace Darling",
  phone: "(517) 539-4234" as string | null,
  phoneHref: "+15175394234",
  email: "goldenmustangstudio@gmail.com" as string | null,
  instagram: "https://www.instagram.com/gracedarlin.g/" as string | null,
  instagramHandle: "@gracedarlin.g",
  bookingUrl: null as string | null,
  introduction:
    "Original artwork with a wild heart. Botanical forms, expressive linework and ornamental details, drawn into something personal.",
};
export type Work = {
  id: string;
  title: string;
  category: "Black & grey" | "Color" | "Portfolio preview";
  image?: string;
  alt?: string;
  note: string;
};
export const works: Work[] = [
  {
    id: "horned-creature",
    title: "Horned Creature",
    category: "Black & grey",
    image: "images/work-1.png",
    alt: "Detailed black and grey tattoo of a horned creature on a calf",
    note: "Horned Creature — black and grey tattoo",
  },
  {
    id: "dark-portrait",
    title: "Dark Portrait",
    category: "Black & grey",
    image: "images/work-2.png",
    alt: "Blackwork female profile tattoo with expressive organic details",
    note: "Dark Portrait — black and grey tattoo",
  },
  {
    id: "dragon-eye",
    title: "Dragon Eye",
    category: "Color",
    image: "images/work-3.png",
    alt: "Orange dragon eye tattoo surrounded by black scales on a hand",
    note: "Dragon Eye — color tattoo",
  },
  {
    id: "house-in-flames",
    title: "House in Flames",
    category: "Color",
    image: "images/work-4.png",
    alt: "Colorful tattoo of a burning house framed by flowers and handwritten lettering",
    note: "House in Flames — color tattoo",
  },
];
// Temporary gallery slots: replace these with Grace's photographs when supplied.
works.push(
  {
    id: "spider-web",
    title: "Spider & Web",
    category: "Black & grey",
    image: "images/work-5.png",
    alt: "Black and grey spider tattoo with angular legs and a delicate web",
    note: "Spider & Web — black and grey tattoo",
  },
  {
    id: "hot-rod-santa",
    title: "Hot Rod Santa",
    category: "Color",
    image: "images/work-6.png",
    alt: "Color tattoo of Santa driving a hot rod with flames",
    note: "Hot Rod Santa — color tattoo",
  },
  {
    id: "pirate-ship",
    title: "Pirate Ship",
    category: "Black & grey",
    image: "images/work-7.png",
    alt: "Tall black and grey pirate ship tattoo with tattered sails, skull flag and waves",
    note: "Pirate Ship — black and grey tattoo",
  },
  {
    id: "gothic-portrait",
    title: "Gothic Portrait",
    category: "Black & grey",
    image: "images/work-8.png",
    alt: "Black and grey braided female portrait with a hand above the face and a woodland cabin below",
    note: "Gothic Portrait — black and grey tattoo",
  },
  {
    id: "crimson-portrait",
    title: "Crimson Portrait",
    category: "Color",
    image: "images/work-9.png",
    alt: "Red-haired horror portrait tattoo with crimson shading and dripping details",
    note: "Crimson Portrait — color tattoo",
  },
  {
    id: "distorted-tiger",
    title: "Distorted Tiger",
    category: "Black & grey",
    image: "images/work-10.png",
    alt: "Black and grey roaring tiger tattoo with a distorted upper face",
    note: "Distorted Tiger — black and grey tattoo",
  },
  {
    id: "girl-and-alligator",
    title: "Girl & Alligator",
    category: "Color",
    image: "images/work-11.png",
    alt: "Color tattoo of a girl in red holding an axe alongside a green alligator",
    note: "Girl & Alligator — color tattoo",
  },
  {
    id: "haunted-house",
    title: "Haunted House",
    category: "Black & grey",
    image: "images/work-12.png",
    alt: "Black and grey surreal house tattoo with a female face and root-like legs",
    note: "Haunted House — black and grey tattoo",
  },
);
export const services = [
  {
    icon: "star",
    title: "Custom Designs",
    text: "Unique tattoos\nbased on your ideas",
  },
  {
    icon: "moon",
    title: "Cover Ups",
    text: "Transform old tattoos\ninto something new",
  },
  {
    icon: "sun",
    title: "Consultation",
    text: "Let’s discuss your idea\nand find the best solution",
  },
  {
    icon: "branch",
    title: "Aftercare",
    text: "Guidance for healing\nand long-lasting results",
  },
] as const;
