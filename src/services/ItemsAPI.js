const data = [{
  id: '39',
  brand: 'nvidia',
  title: 'Geforce RTX 3090',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci repellendus et esse culpa minus vel laboriosam optio quam temporibus quis ipsa tempore voluptas, dolore, laudantium, iusto sapiente distinctio suscipit facere?',
  price: 1499,
  picture: {
    pictureUrl: 'https://acortar.link/La92a',
    alt: 'RTX3090'
  },
  ethash: 114,
  stock: 100
},
{
  id: '38',
  brand: 'nvidia',
  title: 'Geforce RTX 3080',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci repellendus et esse culpa minus vel laboriosam optio quam temporibus quis ipsa tempore voluptas, dolore, laudantium, iusto sapiente distinctio suscipit facere?',
  price: 1199,
  picture: {
    pictureUrl: 'https://acortar.link/DIDk2',
    alt: 'RTX3090'
  },
  ethash: 91.5,
  stock: 100
},
{
  id: '37',
  brand: 'nvidia',
  title: 'Geforce RTX 3070',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci repellendus et esse culpa minus vel laboriosam optio quam temporibus quis ipsa tempore voluptas, dolore, laudantium, iusto sapiente distinctio suscipit facere?',
  price: 799,
  picture: {
    pictureUrl: 'https://acortar.link/rdbp5',
    alt: 'RTX3070'
  },
  ethash: 58.1,
  stock: 100
},
{
  id: '36ti',
  brand: 'nvidia',
  title: 'Geforce RTX 3060Ti',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci repellendus et esse culpa minus vel laboriosam optio quam temporibus quis ipsa tempore voluptas, dolore, laudantium, iusto sapiente distinctio suscipit facere?',
  price: 599,
  picture: {
    pictureUrl: 'https://acortar.link/azYFo',
    alt: 'RTX3060Ti'
  },
  ethash: 58.1,
  stock: 100
},
{
  id: '68xt',
  brand: 'amd',
  title: 'Radeon RX 6800 XT',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci repellendus et esse culpa minus vel laboriosam optio quam temporibus quis ipsa tempore voluptas, dolore, laudantium, iusto sapiente distinctio suscipit facere?',
  price: 799,
  picture: {
    pictureUrl: 'https://acortar.link/rdbp5',
    alt: '6800XT'
  },
  ethash: 64,
  stock: 100
},
{
  id: '67xt',
  brand: 'amd',
  title: 'Radeon RX 6700 XT',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci repellendus et esse culpa minus vel laboriosam optio quam temporibus quis ipsa tempore voluptas, dolore, laudantium, iusto sapiente distinctio suscipit facere?',
  price: 799,
  picture: {
    pictureUrl: 'https://acortar.link/rdbp5',
    alt: '6700XT'
  },
  ethash: 48,
  stock: 100
},
{
  id: '57xt',
  brand: 'amd',
  title: 'Radeon RX 5700 XT',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci repellendus et esse culpa minus vel laboriosam optio quam temporibus quis ipsa tempore voluptas, dolore, laudantium, iusto sapiente distinctio suscipit facere?',
  price: 799,
  picture: {
    pictureUrl: 'https://acortar.link/rdbp5',
    alt: '5700XT'
  },
  ethash: 55,
  stock: 100
},
{
  id: '56xt',
  brand: 'amd',
  title: 'Radeon RX 5600 XT',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci repellendus et esse culpa minus vel laboriosam optio quam temporibus quis ipsa tempore voluptas, dolore, laudantium, iusto sapiente distinctio suscipit facere?',
  price: 799,
  picture: {
    pictureUrl: 'https://acortar.link/rdbp5',
    alt: '5600XT'
  },
  ethash: 40.5,
  stock: 100
}
]

export const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => resolve(data), 2000)
})
