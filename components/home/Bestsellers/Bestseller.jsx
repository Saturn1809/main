"use client";
import React from "react";
import ProductCard from "@/components/productCard/ProductCard";

// --- Curated Bestseller Data ---
const bestsellerCategories = [
  {
    title: "For Green Leafy 🌿",
    description: "Promoting vigorous growth and lush foliage.",
    products: [
      { name: "Di-Ammonium Phosphate", formula: "DAP", tagline: "Powerful Start, Profitable Harvest...", composition: "N: Min. 18%, P₂O₅: Min. 46%", slug: "di-ammonium-phosphate", category: "Macronutrients", product_img: "/assets/productimg-1.png" },
      { name: "Ammonium Sulphate", formula: "(NH₄)₂SO₄", tagline: "Dual nutrition for maximum crop yield", composition: "N: Min. 21%, S: Min. 24%", slug: "ammonium-sulphate", category: "Macronutrients", product_img: "/assets/productimg-2.png" },
      { name: "Calcium Ammonium Nitrate", formula: "CAN", tagline: "Balanced Nitrogen. Better Roots. Higher Yield.", composition: "N: Min. 26%, Ca: 8-10%", slug: "calcium-ammonium-nitrate", category: "Macronutrients", product_img: "/assets/productimg-3.png" },
      { name: "Seaweed Extract", formula: "Organic", tagline: "Natural Power. Visible Growth...", composition: "Natural plant hormones, Amino acids", slug: "seaweed-extract", category: "Bio-Stimulants", product_img: "/assets/productimg-4.png" },
    ]
  },
  {
    title: "For Golden Soil 🌾",
    description: "Enhancing soil structure and long-term fertility.",
    products: [
      { name: "Single Super Phosphate", formula: "SSP", tagline: "Strong Roots Start Here...", composition: "P₂O₅: Min. 16%, S: Min. 11%", slug: "single-super-phosphate", category: "Macronutrients", product_img: "/assets/productimg-1.png" },
      { name: "Calcium Sulphate (Gypsum)", formula: "CaSO₄·2H₂O", tagline: "Stronger soil, healthier crops...", composition: "Ca: Min. 23%, S: Min. 18%", slug: "calcium-sulphate-gypsum", category: "Soil Conditioners", product_img: "/assets/productimg-2.png" },
      { name: "Humic Acid", formula: "Organic", tagline: "Enrich the soil, empower the plant...", composition: "Humic & Fulvic Acids", slug: "humic-acid", category: "Soil Conditioners", product_img: "/assets/productimg-3.png" },
      { name: "Vermicompost", formula: "Organic", tagline: "Pure from nature - power for your soil", composition: "Rich in beneficial microbes", slug: "vermicompost", category: "Organic Fertilizers", product_img: "/assets/productimg-4.png" },
    ]
  },
  {
    title: "For Winning Results 👨‍🌾",
    description: "Boosting yield, quality, and overall crop performance.",
    products: [
      { name: "Muriate of Potash", formula: "MOP - KCl", tagline: "Power Your Crops with Potassium...", composition: "K₂O: Min. 60%", slug: "muriate-of-potash", category: "Macronutrients", product_img: "/assets/productimg-1.png" },
      { name: "Zinc Sulphate", formula: "ZnSO₄·7H₂O", tagline: "Activate growth with essential zinc nutrition", composition: "Zn: Min. 21%, S: Min. 10%", slug: "zinc-sulphate", category: "Micronutrients", product_img: "/assets/productimg-2.png" },
      { name: "Sulphate of Potash", formula: "SOP - K₂SO₄", tagline: "Premium Potassium with Sulfur...", composition: "K₂O: Min. 50%, S: Min. 17%", slug: "sulphate-of-potash", category: "Macronutrients", product_img: "/assets/productimg-3.png" },
      { name: "NPK Fertilizers", formula: "Customized", tagline: "Complete nutrition for balanced crop growth", composition: "e.g., 20:20:20, 19:19:19", slug: "npk-fertilizers", category: "Macronutrients", product_img: "/assets/productimg-4.png" },
    ]
  }
];

const BestsellerSection = () => (
  <section className="py-16 md:py-24  dark:bg-[#0b1727] text-zinc-900 dark:text-white px-4 sm:px-6 lg:px-20">
    <div className="container mx-auto">
      <div className="mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900 dark:text-white">
          Our Bestselling Solutions
        </h2>
        <p className="mt-4 text-lg text-[#4BAF47] dark:text-gray-400 max-w-2xl mx-auto">
          Trusted by farmers across the nation, these products are proven to deliver exceptional results for a variety of agricultural needs.
        </p>
      </div>

      <div className="space-y-20 lg:px-10 px-5">
        {bestsellerCategories.map((category) => (
          <div key={category.title}>
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-200">{category.title}</h3>
              <p className="mt-1 text-md text-gray-500 dark:text-gray-400">{category.description}</p>
            </div>

            {/* Small screens: horizontal scroll, one card visible */}
            <div className="flex py-1 sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 overflow-x-auto sm:overflow-visible snap-x snap-mandatory scroll-pl-4  bg-transparent">
              {category.products.map((product) => (
                <div
                  key={product.slug}
                  className="snap-start flex-shrink-0 w-[90%] sm:w-auto "
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const Bestseller = BestsellerSection;
