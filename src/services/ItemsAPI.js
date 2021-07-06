const items = [{
  id: '39',
  brand: 'NVIDIA',
  title: 'Geforce RTX 3090',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci repellendus et esse culpa minus vel laboriosam optio quam temporibus quis ipsa tempore voluptas, dolore, laudantium, iusto sapiente distinctio suscipit facere?',
  price: 1499,
  picture: {
    pictureUrl: 'https://acortar.link/C4iz8',
    alt: 'RTX3090'
  },
  ethash: 114,
  stock: 1
},
{
  id: '38',
  brand: 'NVIDIA',
  title: 'Geforce RTX 3080',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci repellendus et esse culpa minus vel laboriosam optio quam temporibus quis ipsa tempore voluptas, dolore, laudantium, iusto sapiente distinctio suscipit facere?',
  price: 1199,
  picture: {
    pictureUrl: 'https://acortar.link/XKcrr',
    alt: 'RTX3080'
  },
  ethash: 91.5,
  stock: 2
},
{
  id: '37',
  brand: 'NVIDIA',
  title: 'Geforce RTX 3070',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci repellendus et esse culpa minus vel laboriosam optio quam temporibus quis ipsa tempore voluptas, dolore, laudantium, iusto sapiente distinctio suscipit facere?',
  price: 799,
  picture: {
    pictureUrl: 'https://acortar.link/r80AF',
    alt: 'RTX3070'
  },
  ethash: 58.1,
  stock: 3
},
{
  id: '36ti',
  brand: 'NVIDIA',
  title: 'Geforce RTX 3060Ti',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci repellendus et esse culpa minus vel laboriosam optio quam temporibus quis ipsa tempore voluptas, dolore, laudantium, iusto sapiente distinctio suscipit facere?',
  price: 599,
  picture: {
    pictureUrl: 'https://acortar.link/JLMN4',
    alt: 'RTX3060Ti'
  },
  ethash: 58.1,
  stock: 4
},
{
  id: '68xt',
  brand: 'AMD',
  title: 'Radeon RX 6800 XT',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci repellendus et esse culpa minus vel laboriosam optio quam temporibus quis ipsa tempore voluptas, dolore, laudantium, iusto sapiente distinctio suscipit facere?',
  price: 799,
  picture: {
    pictureUrl: 'https://acortar.link/QuYal',
    alt: '6800XT'
  },
  ethash: 64,
  stock: 5
},
{
  id: '67xt',
  brand: 'AMD',
  title: 'Radeon RX 6700 XT',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci repellendus et esse culpa minus vel laboriosam optio quam temporibus quis ipsa tempore voluptas, dolore, laudantium, iusto sapiente distinctio suscipit facere?',
  price: 799,
  picture: {
    pictureUrl: 'https://acortar.link/gdgRy',
    alt: '6700XT'
  },
  ethash: 48,
  stock: 6
},
{
  id: '57xt',
  brand: 'AMD',
  title: 'Radeon RX 5700 XT',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci repellendus et esse culpa minus vel laboriosam optio quam temporibus quis ipsa tempore voluptas, dolore, laudantium, iusto sapiente distinctio suscipit facere?',
  price: 799,
  picture: {
    pictureUrl: 'https://acortar.link/xSOxc',
    alt: '5700XT'
  },
  ethash: 55,
  stock: 7
},
{
  id: '56xt',
  brand: 'AMD',
  title: 'Radeon RX 5600 XT',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci repellendus et esse culpa minus vel laboriosam optio quam temporibus quis ipsa tempore voluptas, dolore, laudantium, iusto sapiente distinctio suscipit facere?',
  price: 799,
  picture: {
    pictureUrl: 'https://acortar.link/bqUOi',
    alt: '5600XT'
  },
  ethash: 40.5,
  stock: 8
}]

export const ItemsAPI = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(items))
  })
}
