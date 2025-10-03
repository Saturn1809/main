"use client";
import React, { useState, useMemo } from "react";
import PageWrapper from "@/components/layout/Pagewrapper";
import ProductCard from "@/components/productCard/ProductCard";

// --- Product Data ---
const products = [
  { name: "Ferrous Sulphate", formula: "FeSO₄·7H₂O", tagline: "Iron-rich power for healthier crops", category: "Micronutrients", composition: "Iron (Fe): Min. 19%", slug: "ferrous-sulphate", product_img: "/assets/productimg-1.png" },
  { name: "Magnesium Sulphate", formula: "MgSO₄·7H₂O", tagline: "Essential magnesium for stronger crops", category: "Micronutrients", composition: "Mg: Min. 9.5%, S: Min. 12%", slug: "magnesium-sulphate", product_img: "/assets/productimg-2.png" },
  { name: "Zinc Sulphate", formula: "ZnSO₄·7H₂O", tagline: "Activate growth with essential zinc nutrition", category: "Micronutrients", composition: "Zn: Min. 21%, S: Min. 10%", slug: "zinc-sulphate", product_img: "/assets/productimg-3.png" },
  { name: "Manganese Sulphate", formula: "MnSO₄·H₂O", tagline: "Boost Chlorophyll, Power Growth", category: "Micronutrients", composition: "Mn: Min. 30.5%, S: Min. 17%", slug: "manganese-sulphate", product_img: "/assets/productimg-4.png" },
  { name: "Copper Sulphate", formula: "CuSO₄·5H₂O", tagline: "Stronger roots. Healthier plants.", category: "Micronutrients", composition: "Cu: Min. 24%, S: Min. 12%", slug: "copper-sulphate", product_img: "/assets/productimg-1.png" },
  { name: "Calcium Sulphate (Gypsum)", formula: "CaSO₄·2H₂O", tagline: "Stronger soil, healthier crops", category: "Soil Conditioners", composition: "Ca: Min. 23%, S: Min. 18%", slug: "calcium-sulphate-gypsum", product_img: "/assets/productimg-2.png" },
  { name: "Ammonium Sulphate", formula: "(NH₄)₂SO₄", tagline: "Dual nutrition for maximum crop yield", category: "Macronutrients", composition: "N: Min. 21%, S: Min. 24%", slug: "ammonium-sulphate", product_img: "/assets/productimg-3.png" },
  { name: "Calcium Ammonium Nitrate", formula: "CAN", tagline: "Balanced Nitrogen. Better Roots. Higher Yield.", category: "Macronutrients", composition: "N: Min. 26%, Ca: 8-10%", slug: "calcium-ammonium-nitrate", product_img: "/assets/productimg-4.png" },
  { name: "Single Super Phosphate", formula: "SSP", tagline: "Strong Roots Start Here", category: "Macronutrients", composition: "P₂O₅: Min. 16%, S: Min. 11%", slug: "single-super-phosphate", product_img: "/assets/productimg-1.png" },
  { name: "Di-Ammonium Phosphate", formula: "DAP", tagline: "Powerful Start, Profitable Harvest", category: "Macronutrients", composition: "N: Min. 18%, P₂O₅: Min. 46%", slug: "di-ammonium-phosphate", product_img: "/assets/productimg-2.png" },
  { name: "Muriate of Potash", formula: "MOP - KCl", tagline: "Power Your Crops with Potassium", category: "Macronutrients", composition: "K₂O: Min. 60%", slug: "muriate-of-potash", product_img: "/assets/productimg-3.png" },
  { name: "Sulphate of Potash", formula: "SOP - K₂SO₄", tagline: "Premium Potassium with Sulfur", category: "Macronutrients", composition: "K₂O: Min. 50%, S: Min. 17%", slug: "sulphate-of-potash", product_img: "/assets/productimg-4.png" },
  { name: "NPK Fertilizers", formula: "Customized", tagline: "Complete nutrition for balanced crop growth", category: "Macronutrients", composition: "e.g., 20:20:20, 19:19:19", slug: "npk-fertilizers", product_img: "/assets/productimg-1.png" },
  { name: "Seaweed Extract", formula: "Organic", tagline: "Natural Power. Visible Growth.", category: "Bio-Stimulants", composition: "Natural plant hormones, Amino acids", slug: "seaweed-extract", product_img: "/assets/productimg-2.png" },
  { name: "Humic Acid", formula: "Organic", tagline: "Enrich the soil, empower the plant", category: "Soil Conditioners", composition: "Humic & Fulvic Acids", slug: "humic-acid", product_img: "/assets/productimg-3.png" },
  { name: "Amino Acid Fertilizer", formula: "Organic", tagline: "Revive, Regrow, Rejuvenate", category: "Bio-Stimulants", composition: "Protein Hydrolysates", slug: "amino-acid-fertilizer", product_img: "/assets/productimg-4.png" },
  { name: "Silicon-Based Fertilizer", formula: "SiO₂", tagline: "Stronger Plants. Smarter Protection.", category: "Specialty Nutrients", composition: "Soluble Silica (Si)", slug: "silicon-based-fertilizer", product_img: "/assets/productimg-1.png" },
  { name: "Vermicompost", formula: "Organic", tagline: "Pure from nature - power for your soil", category: "Organic Fertilizers", composition: "N: 1.5-2.5%, P: 0.8-1.5%, K: 1.0-1.8%", slug: "vermicompost", product_img: "/assets/productimg-2.png" },
  { name: "Farm Yard Manure", formula: "FYM", tagline: "Traditional nutrition for modern farming", category: "Organic Fertilizers", composition: "Decomposed Cow Dung & Crop Residues", slug: "farm-yard-manure", product_img: "/assets/productimg-3.png" },
  { name: "Azotobacter Biofertilizer", formula: "N-Fixing", tagline: "Boosting growth the biological way", category: "Bio-Fertilizers", composition: "Viable Cell Count: ≥10⁸ cfu/ml", slug: "azotobacter-biofertilizer", product_img: "/assets/productimg-4.png" },
  { name: "Rhizobium Biofertilizer", formula: "N-Fixing", tagline: "Natural nitrogen for legume crops", category: "Bio-Fertilizers", composition: "For Leguminous Crops", slug: "rhizobium-biofertilizer", product_img: "/assets/productimg-1.png" },
  { name: "Mycorrhizal Biofertilizer", formula: "VAM", tagline: "Root Booster From Nature", category: "Bio-Fertilizers", composition: "Infective Propagules: ≥100 Spores/g", slug: "mycorrhizal-biofertilizer-vam", product_img: "/assets/productimg-2.png" },
];

const ProductPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(products.map((p) => p.category)))],
    []
  );

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((product) => product.category === activeCategory);

  return (
    <PageWrapper>
      <div className="dark:bg-[#0b1727]">
        {/* Hero Section */}
        <section
          className="relative flex items-center justify-center text-center bg-cover bg-center min-h-[300px] md:min-h-[400px]"
          style={{
            backgroundImage:
              "url('/path-to-your-image/image-from-pdf-page-1.jpg')",
          }}
        >
          <div className="absolute inset-0 z-0 "></div>
          <div className="relative z-10 lg:mb-30 px-4 sm:px-6 lg:px-0">
            <h1 className="text-5xl md:text-5xl lg:text-6xl font-extrabold text-black dark:text-white leading-tight">
              Our Premium Fertilizers
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-[#4BAF47] font-semibold mt-4">
              "Har Fasal Ke Saath Muskurahat Ugayein"
            </p>
          </div>
        </section>

        {/* Products Section */}
        <section className="relative z-20 py-12 lg:py-0 lg:bottom-30 md:py-16 px-4 sm:px-6 lg:px-20">
          <div className="container mx-auto">
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-10">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 sm:px-6 py-2 text-sm sm:text-base font-semibold rounded-full transition-colors duration-300 ${
                    activeCategory === category
                      ? "bg-[#4BAF47] text-white shadow-md"
                      : "bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
              {filteredProducts.map((product, i) => (
                <ProductCard key={i} product={product} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </PageWrapper>
  );
};

export default ProductPage;
