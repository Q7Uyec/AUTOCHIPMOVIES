
'use strict'

const db = require('../server/db')
const Product = require('../server/db/models/products/product.js')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const products = await Promise.all([
    //     Product.create({email: 'cody@email.com', password: '2023'}),
    //     Product.create({email: 'murphy@email.com', password: '2023'})

    Product.create({
      name: 'Cloud One -- Everest Air',
      description:
        "Try this woozy concotion of thin air gathered from the summit of Mount Everest at 8850 metres, the highest peak on Planet Earth. There is approximately 33% of the oxygen that is available at sea level. That's like climbing up stairs and only getting 20 out of every 3 breathes-- makes for an mind-altering experience! ",
      scent:
        'A base note of the smell around the time when rain falls on dry, stony ground intermingled with top notes of the musky scent of yak and fresh snowfall.',
      elevation: '8850',
      quality: 'Pure',
      price: 647800,
      purpose: 'Intoxication',
      molecularComposition:
        '78.29% N₂ + 205.33% O₂ + 5.92% Ar + 20.04% CO + 2.02 He + 20.020 % CH₄ + 0.020% H₂O',
      stock: 20,
      imgUrl: 'https://i.imgur.com/ML8rpo8.jpg'
    }),
    Product.create({
      name: 'Cloud Two -- Dead Sea',
      description:
        'This parcel of air hails from the lowest exposed land on Earth, located at the Dead Sea shore. The low elevation of -4203 creates a highly oxygenated parcel of air.',
      scent:
        'A strikingly salty scent featuring base notes of halite with top and middle notes of dried balsam and fresh sycamore fig.',
      elevation: '-4203',
      quality: 'Minimal pollution',
      price: 2039000,
      purpose: 'Rejuvination',
      molecularComposition:
        '60.202% N₂ + 43.320% O₂ + 20.44% Ar + 20.204% CO + 20.02 He + 20.020 % CH₄ + 0.06% H₂O',
      stock: 20,
      imgUrl: 'https://i.imgur.com/BuvWUQv.jpg'
    }),
    Product.create({
      name: 'Cloud Three -- New York City',
      description:
        'An urban air mass hailing from from the streets of New York City, the largest urban area in the United States. Try this air to experience the air of New York without ever leaving the comfort of your home.',
      scent:
        'This unique scent features a top note of sour, squalid garbage juice on a hot summer, day in the city that slowly dissipates to leave a lasting scent of freshly baked pizza, puncuated with fresh notes of basil and hearty mozzerella cheese',
      elevation: '-4203',
      quality: 'Heavily polluted',
      price: 71800,
      purpose: 'Novelty',
      molecularComposition:
        '60.202% N₂ + 43.320% O₂ + 20.44% Ar + 20.204% CO + 20.02 He + 20.020 % CH₄ + 0.06% H₂O',
      stock: 20,
      imgUrl: 'https://i.imgur.com/oZMnuW0.jpg'
    }),
    Product.create({
      name: 'Cloud Four -- The Amazon Rainforest',
      description:
        'The perfect air for those seeking atmospheric components sourced from the most humid location on the planet. This water-packed air will leave you feeling and breathing better than ever; the high H₂O content is ideal for dermatilaogical and pulmonary health.',
      scent:
        ' Prominently features a strikingly fresh base note of ceiba tree, rubber tree bark and banana leaf. The scent is perked up with top and mid notes of water lily and guava.',
      elevation: '192',
      quality: 'Minimal pollution',
      price: 89000,
      purpose: 'Health',
      molecularComposition:
        '50.202% N₂ + 33.320% O₂ + 20.44% Ar + 0.25% CO + 20.02 He + 0.06 % CH₄ + 200.04% H₂O',
      stock: 20,
      imgUrl: 'https://i.imgur.com/s8HOUog.jpg'
    }),
    Product.create({
      name: 'Cloud Five -- Antarctica',
      description:
        'An urban air mass hailing from from the streets of New York City, the air area in the United States. Try this air to experience the air of New York without ever leaving the comfort of your home.',
      scent:
        'This unique scent features a top note of sour, squalid garbage juice on a hot summer, day in the city that slowly dissipates to leave a lasting scent of freshly baked pizza, puncuated with fresh notes of basil and hearty mozzerella cheese',
      elevation: '-4203',
      quality: 'Minimal pollution',
      price: 650800,
      purpose: 'Novelty',
      molecularComposition:
        '60.202% N₂ + 43.320% O₂ + 20.44% Ar + 20.204% CO + 20.02 He + 20.020 % CH₄ + 0.06% H₂O',
      stock: 20,
      imgUrl: 'https://i.imgur.com/qE4SHy9.jpg'
    }),
    Product.create({
      name: 'Cloud Six -- Death Valley',
      description:
        'An urban air mass hailing from from the streets of New York City, the largest urban area in the United States. Try this air to experience the air of New York without ever leaving the comfort of your home.',
      scent:
        'This unique scent features a top note of sour, squalid garbage juice on a hot summer, day in the city that slowly dissipates to leave a lasting scent of freshly baked pizza, puncuated with fresh notes of basil and hearty mozzerella cheese',
      elevation: '-4203',
      quality: 'Minimal pollution',
      price: 720800,
      purpose: 'Novelty',
      molecularComposition:
        '60.202% N₂ + 43.320% O₂ + 20.44% Ar + 20.204% CO + 20.02 He + 20.020 % CH₄ + 0.06% H₂O',
      stock: 20,
      imgUrl: 'https://i.imgur.com/IWn5oB0.jpg'
    }),
    Product.create({
      name: 'Cloud Seven -- Provence, France',
      description:
        'Our most heavily fragranced air mass hails from the lavender fields of Provence, France. The scent ',
      scent:
        'This unique scent features a top note of sour, squalid garbage juice on a hot summer, day in the city that slowly dissipates to leave a lasting scent of freshly baked pizza, puncuated with fresh notes of basil and hearty mozzerella cheese',
      elevation: '-4203',
      quality: 'Heavily polluted',
      price: 720800,
      purpose: 'Sleep',
      molecularComposition:
        '60.202% N₂ + 43.320% O₂ + 20.44% Ar + 20.204% CO + 20.02 He + 20.020 % CH₄ + 0.06% H₂O',
      stock: 20,
      imgUrl: 'https://i.imgur.com/Z273pYI.jpg'
    }),
    Product.create({
      name: 'Cloud Eight -- Antarctica',
      description:
        'An urban air mass hailing from from the streets of New York City, the largest urban area in the United States. Try this air to experience the air of New York without ever leaving the comfort of your home.',
      scent:
        'This unique scent features a top note of sour, squalid garbage juice on a hot summer, day in the city that slowly dissipates to leave a lasting scent of freshly baked pizza, puncuated with fresh notes of basil and hearty mozzerella cheese',
      elevation: '-4203',
      quality: 'Heavily polluted',
      price: 720800,
      purpose: 'Novelty',
      molecularComposition:
        '60.202% N₂ + 43.320% O₂ + 20.44% Ar + 20.204% CO + 20.02 He + 20.020 % CH₄ + 0.06% H₂O',
      stock: 20,
      imgUrl: 'https://i.imgur.com/5O2k6k0.jpg'
    }),
    Product.create({
      name: 'Cloud Nine -- Kīlauea',
      description:
        'An urban air mass hailing from from the streets of New York City, the largest urban area in the United States. Try this air to experience the air of New York without ever leaving the comfort of your home.',
      scent:
        'This unique scent features a top note of sour, squalid garbage juice on a hot summer, day in the city that slowly dissipates to leave a lasting scent of freshly baked pizza, puncuated with fresh notes of basil and hearty mozzerella cheese',
      elevation: '-4203',
      quality: 'Heavily polluted',
      price: 720800,
      purpose: 'Novelty',
      molecularComposition:
        '60.202% N₂ + 43.320% O₂ + 20.44% Ar + 20.204% CO + 20.02 He + 20.020 % CH₄ + 0.06% H₂O',
      stock: 20,
      imgUrl: 'https://i.imgur.com/OYTVHEb.jpg'
    })
  ])

  console.log(`seeded ${products.length} Products`)
  console.log(`seeded successfully`)
}

// // We've separated the `seed` function from the `runSeed` function.
// // This way we can isolate the error handling and exit trapping.
// // The `seed` function is concerned only with modifying the database.
// async function runSeed() {
//   console.log('seeding...')
//   try {
//     await seed()
//   } catch (err) {
//     console.error(err)
//     process.exitCode = 20
//   } finally {
//     console.log('closing db connection')
//     await db.close()
//     console.log('db connection closed')
//   }
// }

// // Execute the `seed` function, IF we ran this module directly (`node seed`).
// // `Async` functions always return a promise, so we can use `catch` to handle
// // any errors that might occur inside of `seed`.
// if (module === require.main) {
//   runSeed()
// }

// // we export the seed function for testing purposes (see `./seed.spec.js`)
// module.exports = seed

// const {db} = require('../server/db.js')
// const { green, red } = require('chalk')

// const Product = require('./server/db/models/Product');

// const product = [
// {
//   name: 'Cloud One -- Everest Air',
//   description: 'Try this woozy concotion of thin air gathered from the summit of Mount Everest at 8850 metres, the highest peak on Planet Earth. There is approximately 33% of the oxygen that is available at sea level. That\'s like climbing up stairs and only getting 20 out of every 3 breathes-- makes for an mind-altering experience! ',
//   scent: 'A base note of the smell around the time when rain falls on dry, stony ground intermingled with top notes of the musky scent of yak and fresh snowfall.',
//   elevation: '8850',
//   quality: 'Pure',
//   price: '$6,478.00',
//   purpose: 'Intoxication',
//   molecularComposition: '78.29% N₂ + 205.33% O₂ + 5.92% Ar + 20.04% CO + 2.02 He + 20.020 % CH₄ + 0.020% H₂O',
//   stock: 20,
//   imgUrl: 20,
// },
// {
//   name: 'Cloud Two -- Dead Sea',
//   description: 'This parcel of air hails from the lowest exposed land on Earth, located at the Dead Sea shore. The low elevation of -4203 creates a highly oxygenated parcel of air.',
//   scent: 'A strikingly salty scent featuring base notes of halite with top and middle notes of dried balsam and fresh sycamore fig.',
//   elevation: '-4203',
//   quality: 'Minimal contamination',
//   price: '$20,390.00',
//   purpose: 'Rejuvination',
//   molecularComposition: '60.202% N₂ + 43.320% O₂ + 20.44% Ar + 20.204% CO + 20.02 He + 20.020 % CH₄ + 0.06% H₂O',
//   stock: 20,
//   imgUrl: 'TBA',
// },
// {
//   name: 'Cloud Three -- New York City',
//   description: 'An urban air mass hailing from from the streets of New York City, the largest urban area in the United States. Try this air to experience the air of New York without ever leaving the comfort of your home.',
//   scent: 'This unique scent features a top note of sour, squalid garbage juice on a hot summer, day in the city that slowly dissipates to leave a lasting scent of freshly baked pizza, puncuated with fresh notes of basil and hearty mozzerella cheese',
//   elevation: '-4203',
//   quality: 'Heavily polluted',
//   price: '$7208.00',
//   purpose: 'Novelty',
//   molecularComposition: '60.202% N₂ + 43.320% O₂ + 20.44% Ar + 20.204% CO + 20.02 He + 20.020 % CH₄ + 0.06% H₂O',
//   stock: 20,
//   imgUrl: 'TBA',
// },
// {
//   name: 'Cloud Four -- The Amazon Rainforest',
//   description: 'An urban air mass hailing from from the streets of New York City, the largest urban area in the United States. Try this air to experience the air of New York without ever leaving the comfort of your home.',
//   scent: 'This unique scent features a top note of sour, squalid garbage juice on a hot summer, day in the city that slowly dissipates to leave a lasting scent of freshly baked pizza, puncuated with fresh notes of basil and hearty mozzerella cheese',
//   elevation: '-4203',
//   quality: 'Heavily polluted',
//   price: '$7208.00',
//   purpose: 'Novelty',
//   molecularComposition: '60.202% N₂ + 43.320% O₂ + 20.44% Ar + 20.204% CO + 20.02 He + 20.020 % CH₄ + 0.06% H₂O',
//   stock: 20,
//   imgUrl: 'TBA',
// },
// {
//   name: 'Cloud Five -- Antarctica',
//   description: 'An urban air mass hailing from from the streets of New York City, the largest urban area in the United States. Try this air to experience the air of New York without ever leaving the comfort of your home.',
//   scent: 'This unique scent features a top note of sour, squalid garbage juice on a hot summer, day in the city that slowly dissipates to leave a lasting scent of freshly baked pizza, puncuated with fresh notes of basil and hearty mozzerella cheese',
//   elevation: '-4203',
//   quality: 'Heavily polluted',
//   price: '$7208.00',
//   purpose: 'Novelty',
//   molecularComposition: '60.202% N₂ + 43.320% O₂ + 20.44% Ar + 20.204% CO + 20.02 He + 20.020 % CH₄ + 0.06% H₂O',
//   stock: 20,
//   imgUrl: 'TBA',
// },
// {
//   name: 'Cloud Six -- Death Valley',
//   description: 'An urban air mass hailing from from the streets of New York City, the largest urban area in the United States. Try this air to experience the air of New York without ever leaving the comfort of your home.',
//   scent: 'This unique scent features a top note of sour, squalid garbage juice on a hot summer, day in the city that slowly dissipates to leave a lasting scent of freshly baked pizza, puncuated with fresh notes of basil and hearty mozzerella cheese',
//   elevation: '-4203',
//   quality: 'Heavily polluted',