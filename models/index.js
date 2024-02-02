// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');


// Categories have many Products
// One has many relationship, on delete deletes all products in that category
// Think e-commerce site no longer carries that kind of product
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
  hooks: true
});

// Products belongsTo Category
// Products can have only one category
Product.belongsTo(Category, {
  foreignKey:'category_id',
});



// Products belongToMany Tags (through ProductTag)
// Products can have many tags, use ProductTag to link together
Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    unique: false
  }, 
    as: 'product_tags'
  });

// Tags belongToMany Products (through ProductTag)
// Tags can have many products, use ProductTag to link together
Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
    unique: false
  },
    as:'group_tags'
  });

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
