const data = [{
  id: '39',
  title: 'nVidia Geforce RTX3090',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci repellendus et esse culpa minus vel laboriosam optio quam temporibus quis ipsa tempore voluptas, dolore, laudantium, iusto sapiente distinctio suscipit facere?',
  price: 1499,
  picture: {
    pictureUrl: 'https://acortar.link/La92a',
    alt: 'Geforce RTX3090'
  },
  stock: 100
},
{
  id: '38ti',
  title: 'nVidia Geforce RTX3080Ti',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci repellendus et esse culpa minus vel laboriosam optio quam temporibus quis ipsa tempore voluptas, dolore, laudantium, iusto sapiente distinctio suscipit facere?',
  price: 1299,
  picture: {
    pictureUrl: 'https://acortar.link/hWpLn',
    alt: 'Geforce RTX3080Ti'
  },
  stock: 100
},
{
  id: '38',
  title: 'nVidia Geforce RTX3080',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci repellendus et esse culpa minus vel laboriosam optio quam temporibus quis ipsa tempore voluptas, dolore, laudantium, iusto sapiente distinctio suscipit facere?',
  price: 1199,
  picture: {
    pictureUrl: 'https://acortar.link/DIDk2',
    alt: 'Geforce RTX3090'
  },
  stock: 100
},
{
  id: '37ti',
  title: 'nVidia Geforce RTX3070Ti',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci repellendus et esse culpa minus vel laboriosam optio quam temporibus quis ipsa tempore voluptas, dolore, laudantium, iusto sapiente distinctio suscipit facere?',
  price: 999,
  picture: {
    pictureUrl: 'https://acortar.link/pOtW4',
    alt: 'Geforce RTX3070Ti'
  },
  stock: 100
},
{
  id: '37',
  title: 'nVidia Geforce RTX3070',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci repellendus et esse culpa minus vel laboriosam optio quam temporibus quis ipsa tempore voluptas, dolore, laudantium, iusto sapiente distinctio suscipit facere?',
  price: 799,
  picture: {
    pictureUrl: 'https://acortar.link/rdbp5',
    alt: 'Geforce RTX3070'
  },
  stock: 100
},
{
  id: '36ti',
  title: 'nVidia Geforce RTX3060Ti',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci repellendus et esse culpa minus vel laboriosam optio quam temporibus quis ipsa tempore voluptas, dolore, laudantium, iusto sapiente distinctio suscipit facere?',
  price: 599,
  picture: {
    pictureUrl: 'https://acortar.link/azYFo',
    alt: 'Geforce RTX3060Ti'
  },
  stock: 100
}
]

export const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => resolve(data), 2000)
})
