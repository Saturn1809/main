"use client";
import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import { ShinyButton } from "@/components/ui/shiny-button";

const ProductCard = ({ product }: { product: any }) => (
  <a
    href={`/products/${product.slug}`}
    className="group h-full flex flex-col rounded-xl overflow-hidden lg:shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out bg-white dark:bg-slate-800 border-2 border-transparent hover:border-[#4BAF47] hover:-translate-y-1 shadow-xs"
  >
    <div className="relative">
      {/* Visual Header */}
      <div className="flex justify-center items-center h-48 bg-gray-50 dark:bg-slate-700">
        <div className="text-center">
          <p className=" text-gray-700 dark:text-gray-300">
            {product.product_img ? (
              <img
                src={product.product_img}
                alt={product.name}
                className="object-contain w-full h-full"
              />
            ) : (
              <span>{product.formula}</span>
            )}
          </p>
        </div>
      </div>
      {/* Category Tag */}
      <div className="absolute top-4 left-0 bg-[#4BAF47] text-white text-xs font-semibold rounded-r-full px-4 py-1.5">
        {product.category}
      </div>
    </div>

    {/* Content Section */}
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 truncate group-hover:text-[#4BAF47]">
        {product.name}
      </h3>
      <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 line-clamp-2 mt-8 lg:mt-0">
        {product.tagline}
      </p>
      
      {/* ✅ Composition Info (wrap text, no cut-off) */}
      <div className="border-t border-gray-200 dark:border-slate-600 pt-4 mb-4">
        <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase mb-2">Key Composition</p>
        <div className="flex items-start gap-2">
          <FontAwesomeIcon icon={faLeaf} className="text-[#4BAF47] mt-1" />
          <p className="text-sm font-medium text-gray-700 dark:text-gray-300 break-words">
            {product.composition}
          </p>
        </div>
      </div>

      {/* If you want navigation, wrap with Link */}
      {/* import Link from 'next/link' at the top if not already */}
      <a href={`/products/id/ProductDetailPage`} className="w-full mt-auto">
        <ShinyButton className="bg-[#4BAF47] border-none text-white pointer-events-none w-full">
          Enquire Now
        </ShinyButton>
      </a>
    </div>
  </a>
);

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductCard;
