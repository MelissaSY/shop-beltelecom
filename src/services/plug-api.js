const getProduct = async (id) => {
    const response  = await fetch('/shop-beltelecom/resources/products.json')
    const products = await response.json()
    return products.find(product => product.id === id)
}

const getProductsCategory = async (categoryId) => {
    const response  = await fetch('/shop-beltelecom/resources/products.json')
    const products = await response.json()
    return products.filter(product => product.category === categoryId);
}

const getAllProducts = async () => {
    const response  = await fetch('/shop-beltelecom/resources/products.json')
    const products = await response.json()
    return products;
}

const getAllCategories = async () => {
    const response  = await fetch('/shop-beltelecom/resources/categories.json')
    const categories = await response.json()
    return categories;
}

const getCategory = async (id) => {
    const response  = await fetch('/shop-beltelecom/resources/categories.json')
    
    const categories = await response.json()
    return categories.find(category => category.id === id)
}

const getReviewsProduct = async (productId) => {
    const response  = await fetch('/shop-beltelecom/resources/reviews.json')
    const reviews = await response.json()
    return reviews.filter(item => item.productId === productId)
}


const getAllContacts = async () => {
    const response  = await fetch('/shop-beltelecom/resources/contacts.json')
    const contacts = await response.json()
    return contacts
}

const getShopInfo = async () => {
    const response  = await fetch('/shop-beltelecom/resources/info.json')
    const info = await response.json()
    return info
}

module.exports = {
    getAllProducts,
    getProduct,
    getProductsCategory,
    getAllCategories,
    getCategory,
    getReviewsProduct,
    getAllContacts,
    getShopInfo
}