const { categories } = require("../resources/categories")
const { products } = require("../resources/products")
const { reviews } = require("../resources/reviews")

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

const getReviewsProduct = (productId) => {
    console.log(productId)
    return reviews.filter(item => item.productId === productId)
}


module.exports = {
    getAllProducts,
    getProduct,
    getProductsCategory,
    getAllCategories,
    getCategory,
    getReviewsProduct
}