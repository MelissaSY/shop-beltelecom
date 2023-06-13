const categories = [
    {
        id: 0,
        name: 'наушники',
        category: 'multimedia',
        img: '/categories-images/multimedia.jpg'
    }
]

const products = [
    {
        id: 0,
        name: 'наушники',
        imgs: [
            '/categories-images/multimedia.jpg',
            '/categories-images/multimedia.jpg',
            '/categories-images/multimedia.jpg',
            '/categories-images/multimedia.jpg',
        ],
        price: 1201,
        category: 0
    },

    {
        id: 1,
        name: 'не-наушники',
        imgs: [
            '/categories-images/multimedia.jpg',
            '/categories-images/multimedia.jpg',
            '/categories-images/multimedia.jpg',
            '/categories-images/multimedia.jpg',
        ],
        price: 12,
        category: 0
    }
]

const getProduct = (id) => {
    return products.find(product => product.id === id)
}

const getProductsCategory = (categoryId) => {
    return products.filter(product => product.category === categoryId)
}


const getAllProducts = () => {
    return products;
}

const getAllCategories = () => {
    return categories;
}

const getCategory = (id) => {
    return categories.find(category => category.id === id)
}


module.exports = {
    getAllProducts,
    getProduct,
    getProductsCategory,
    getAllCategories,
    getCategory
}