// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Associations
// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'product_id'
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id'
});

// Do I need ( as: 'product_tag' ) for these associations??
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id'
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: '_id'
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
