'use strict';

const mongoose          = require('mongoose');
const uniqueValidator   = require('mongoose-unique-validator');

const ProductItemSchema = new mongoose.Schema({
  productId: {type: String},
  productName: {type: String},
  shortDescription: {type:String},
  longDescription:{type:String},
  price:{type:String},
  productImage:{type:String},
  reviewRating:{type:Number},
  inStock:{type:Boolean},
  reviewCount: {  type:Number},
},{timestamps: false,versionKey: false });


const ProductSchema = new mongoose.Schema({
  products:[ProductItemSchema],
  totalProducts: {type: String},
  pageNumber: {type:Number},
  pageSize:{type:Number},
  statusCode: {
        type:Number,
    },
},{timestamps: false,versionKey: false });
ProductSchema.index( { "$**": "text" } )

ProductSchema.plugin(uniqueValidator, {message: "Duplicate Entry {PATH}"});
const Products = mongoose.model('product', ProductSchema);
module.exports = Products;
