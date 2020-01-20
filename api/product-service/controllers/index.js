'use strict';

const {ProductModel}           = require('@database/models');
const validator             = require('validator');

let getProduct = async (req,res,next)=> {

    let query = req.query;
    let q = {};
    if(query.search){
        q = {$text: { $search: query.search }};
      ProductModel.aggregate([{"$match":q},{"$unwind":"$products"}],(err,doc)=> {
        if(err){
          return next(err);
        }
        if(doc){
          return res.status(200).send(doc);
        }
      });
      return
    }else if(query.inStock){
      q = {'products.inStock':Boolean(query.inStock)}
    }else if(query.minReviewRating){
      q = {'products.reviewRating':{"$gte":Number(query.minReviewRating)}}
    }else if(query.maxReviewRating){
      q = {'products.reviewRating':{"$lte":Number(query.maxReviewRating)}}
    }else if(query.maxReviewCount){
      q = {'products.reviewCount':{'$lte':Number(query.maxReviewCount)}}
    }else if(query.minReviewCount){
      q = {'products.reviewCount':{'$gte':Number(query.minReviewCount)}}
    }

    console.log(q);

    console.log(query);

    try {
        ProductModel.aggregate([{"$unwind":"$products"},{"$match":q}],(err,doc)=> {
            if(err){
                return next(err);
            }
            if(doc){
                return res.status(200).send(doc);
            }
        });
    }catch(err){
        next(err);
    }
};
let getProducts = async (req,res,next)=> {

    try {
        ProductModel.find({},(err,doc)=> {
            if(err){
                return next(err);
            }
            if(doc){
                return res.status(200).send(doc);
            }
        });
    }catch(err){
        next(err);
    }
};


module.exports = {
  getProduct:getProduct,
  getProducts:getProducts
};
