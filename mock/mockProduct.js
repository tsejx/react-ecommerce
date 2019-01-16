import Mock from 'mockjs';

Mock.mock('/men',
{
  "data|10":  [{
    "id": "@id",
    "category": "men",
    "type": "shirts",
    "name": "@name(middle)",
    "price": {
      "marketPrice|250-500": 1,
      "salePrice|50-200": 1
    },
    "detail": {
      "color": "@pick([['red','orange','yellow','olive','teal','pink','brown','black'],['red','orange','teal','pink','black'],['red','orange','olive','teal','pink','black'],['red','orange','olive','teal','pink','brown','black'],['red','olive','teal','pink','brown','black'],['red','orange','olive','teal','brown','black'],['orange','olive','teal','brown','black'],['teal','black'],['red','olive','black']])",
      "size": "@pick([['XS','S','M','L','XL','XXL','XXXL'],['S','M','L','XL','XXL','XXXL'],['M','L','XL','XXL','XXXL'],['XS','S','M','L','XL','XXL'],['XS','S','M','L','XL'],['XS','S','M','L']])",
      "des": "@paragraph"
    },
    "quantity": '@natural(10,120)',
    "images": {
      "imgProduct": "http://localhost:8080/src/data/productImages/men/shirts.jpg",
      "imgModel": "",
      "imgDetail": ""
    }
  }]
})

const category = ['men','ladies','kids'];

const typeMen = ['t-shirt','shirts','shorts','jeans','sportwear','shoes']

const typeLadies = ['shirts','dresses','short','skirts','knitwear','shoes']

const typeKids = ['sets','tops','outdoor']

const color = ['red','orange','yellow','olive','teal','pink','brown','black']

const sizeTops = ['XS','S','M','L','XL','XXL','XXXL']

const sizeTopsKids = ['56CM','62CM','68CM','74CM','80CM','86CM','92CM','98CM']