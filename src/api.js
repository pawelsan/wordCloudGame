export const getWords = () =>
  new Promise((resolve, reject) => {
    if (!words) {
      return setTimeout(() => reject(new Error("Users not found")), 250);
    }

    setTimeout(() => resolve(Object.values(words)), 250);
  });

let words = [
  {
    question: "select animals",
    all_words: [
      "hole",
      "sofa",
      "pear",
      "tiger",
      "oatmeal",
      "square",
      "nut",
      "cub",
      "shirt",
      "tub",
      "passenger",
      "cow",
    ],
    good_words: ["tiger", "cow"],
  },
  {
    question: "select colors",
    all_words: [
      "jeans",
      "existence",
      "ink",
      "red",
      "blue",
      "yellow",
      "laugh",
      "behavior",
      "expansion",
      "white",
      "black",
      "cakes",
    ],
    good_words: ["red", "blue", "yellow", "white", "black"],
  },
  {
    question: "select vehicles",
    all_words: [
      "belief",
      "wire",
      "car",
      "bus",
      "star",
      "river",
      "hat",
      "skirt",
      "train",
    ],
    good_words: ["car", "bus", "train"],
  },
];
