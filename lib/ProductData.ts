// This file is your single source of truth for all product information.
// It contains a comprehensive list of all products with their detailed descriptions.

// Define a type for a single product to ensure data consistency
type Product = {
  slug: string;
  name: string;
  formula: string;
  tagline: string;
  category: string;
  composition_summary: string;
  product_img: string;
  packaging: string;
  overview: string;
  composition_details: { [key: string]: string };
  benefits: string[];
  recommendedCrops: string[];
  applicationGuidelines: {
    method: string;
    dose: string;
    instructions: string;
  }[];
  notes?: string;
};

export const products: Product[] = [
  {
    slug: "ferrous-sulphate",
    name: "Ferrous Sulphate", //
    formula: "FeSO₄·7H₂O", //
    tagline: "IRON-RICH POWER FOR HEALTHIER CROPS", //
    category: "Micronutrients",
    composition_summary: "Iron (Fe): Min. 19%", //
    product_img: "/assets/productimg-1.png",
    packaging: "1 Kg | 5 Kg | 25 Kg | 50 Kg Moisture-Proof Laminated Bags", //
    overview: "Indoshyama Ferrous Sulphate Heptahydrate is a premium-grade iron fertilizer that helps in correcting iron deficiency (Chlorosis) in plants, which commonly appears as yellowing of young leaves. Iron plays a crucial role in chlorophyll synthesis, enzyme activity, and photosynthesis, making it essential for plant vitality and yield.",
    composition_details: { 
      "Iron (Fe)": "Min. 19%", //
      "Form": "Blue-Green Crystals", //
      "Solubility": "100% Water-Soluble", //
      "pH (5% Solution)": "3.5-5.0" //
    },
    benefits: [
      "Corrects Iron Deficiency in all crops", //
      "Improves Chlorophyll Production & Leaf Color", //
      "Boosts Overall Crop Vigor and Growth", //
      "Enhances Nutrient Absorption Efficiency", //
      "Supports Strong Root Development" //
    ],
    recommendedCrops: ["Paddy", "Wheat", "Cotton", "Sugarcane", "Maize", "Fruits", "Flowers", "Pulses", "Vegetables"], //
    applicationGuidelines: [ //
      { method: "Soil Application", dose: "5-10 Kg Per Acre", instructions: "Mix With Fym Or Urea And Broadcast In The Field" },
      { method: "Foliar Spray", dose: "0.5% Solution (5 G/Litre)", instructions: "Spray At Early Vegetative Stage. Repeat If Needed" }
    ],
    notes: "Avoid Spraying During High Sunlight. Prefer Early Morning Or Evening." //
  },
  {
    slug: "magnesium-sulphate",
    name: "Magnesium Sulphate", //
    formula: "MgSO₄·7H₂O", //
    tagline: "ESSENTIAL MAGNESIUM FOR STRONGER CROPS", //
    category: "Micronutrients",
    composition_summary: "Mg: Min. 9.5%, S: Min. 12%", //
    product_img: "/assets/productimg-2.png",
    packaging: "1 Kg | 5 Kg | 25 Kg | 50 Kg Moisture-Resistant Laminated Bags", //
    overview: "Indoshyama Magnesium Sulphate is a premium agricultural-grade fertilizer used to treat Magnesium and Sulfur deficiencies in plants. Magnesium is vital for chlorophyll production and photosynthesis, while Sulfur supports protein synthesis and enzyme activity. This water-soluble fertilizer enhances crop growth, greenness, and nutrient uptake.",
    composition_details: {
      "Magnesium (Mg)": "Min. 9.5%", //
      "Sulphur (S)": "Min. 12%", //
      "Form": "White Crystalline Powder", //
      "Solubility": "100% Water-Soluble", //
      "pH (5% Solution)": "5.0-7.0" //
    },
    benefits: [
      "Prevents yellowing and leaf curling due to magnesium deficiency", //
      "Enhances chlorophyll production and leaf health", //
      "Promotes photosynthesis and plant vigor", //
      "Improves uptake of Phosphorus and Nitrogen", //
      "Enhances crop yield and quality" //
    ],
    recommendedCrops: ["Paddy", "Wheat", "Sugarcane", "Cotton", "Potato", "Banana", "Vegetables", "Citrus", "Tea"], //
    applicationGuidelines: [ //
      { method: "Soil Application", dose: "5-10 Kg Per Acre", instructions: "Mix With Fym Or Urea And Broadcast In The Field" },
      { method: "Foliar Spray", dose: "2% Solution (20 G/Litre)", instructions: "Apply During Vegetative And Fruiting Stages" }
    ],
    notes: "Avoid Spraying During High Sunlight. Prefer Early Morning Or Evening." //
  },
  {
    slug: "zinc-sulphate",
    name: "Zinc Sulphate", //
    formula: "ZnSO₄·7H₂O", //
    tagline: "ACTIVATE GROWTH WITH ESSENTIAL ZINC NUTRITION", //
    category: "Micronutrients",
    composition_summary: "Zn: Min. 21%, S: Min. 10%", //
    product_img: "/assets/productimg-3.png",
    packaging: "1 Kg | 5 Kg | 25 Kg | 50 Kg Hdpe Laminated Moisture-Proof Bags", //
    overview: "Indoshyama Zinc Sulphate Heptahydrate is a highly effective micronutrient fertilizer used to correct zinc deficiency in crops. Zinc is vital for hormonal balance, enzyme activation, and protein synthesis in plants. Its deficiency often results in stunted growth, reduced flowering, and chlorosis (yellowing) of leaves.",
    composition_details: {
      "Zinc (Zn)": "Min. 21%", //
      "Sulphur (S)": "Min. 10%", //
      "Form": "White Crystals", //
      "Solubility": "100% Water-Soluble", //
      "pH (5% Solution)": "4.0-5.5" //
    },
    benefits: [
      "Corrects stunted growth and delayed flowering", //
      "Boosts root development and shoot elongation", //
      "Enhances enzyme activity and crop resistance", //
      "Improves yield, grain filling, and fruit quality", //
      "Supports Nitrogen metabolism and growth hormones" //
    ],
    recommendedCrops: ["Wheat", "Paddy", "Maize", "Cotton", "Sugarcane", "Oilseeds", "Pulses", "Citrus", "Grapes"], //
    applicationGuidelines: [ //
      { method: "Soil Application", dose: "10-15 Kg Per Acre", instructions: "Mix With Compost Or Basal Dose Of Fertilizer" },
      { method: "Foliar Spray", dose: "0.5% Solution (5 G/Litre)", instructions: "Use During Early Growth And Reproductive Stages" }
    ],
    notes: "Use Clean Water For Spray. Avoid Mixing With Strong Alkalis Or Phosphates." //
  },
  {
    slug: "manganese-sulphate",
    name: "Manganese Sulphate", //
    formula: "MnSO₄·H₂O", //
    tagline: "Boost Chlorophyll, Power Growth With Indoshyama Mn", //
    category: "Micronutrients",
    composition_summary: "Mn: Min. 30.5%, S: Min. 17%", //
    product_img: "/assets/productimg-4.png",
    packaging: "1 Kg | 5 Kg | 25 Kg | 50 Kg Moisture-Proof Laminated Bags", //
    overview: "Indoshyama Manganese Sulphate is a high-quality micronutrient fertilizer used to treat Manganese deficiency in crops, which is often seen as interveinal chlorosis (yellowing between veins) in young leaves. Manganese plays a vital role in photosynthesis, enzyme activation, and nitrogen metabolism, making it essential for strong, healthy, and productive plants.",
    composition_details: {
      "Manganese (Mn)": "Min. 30.5%", //
      "Sulphur (S)": "Min. 17%", //
      "Form": "Pink Crystalline Powder", //
      "Solubility": "100% Water-Soluble", //
      "pH (5% Solution)": "4.0-6.0" //
    },
    benefits: [
      "Prevents yellowing and pale leaf color", //
      "Enhances photosynthesis and chlorophyll formation", //
      "Improves nitrogen assimilation and sugar synthesis", //
      "Boosts disease resistance and plant vigor", //
      "Supports balanced growth in fruits, cereals, and vegetables" //
    ],
    recommendedCrops: ["Wheat", "Rice", "Sugarcane", "Cotton", "Potato", "Grapes", "Citrus", "Pulses", "Tomato"], //
    applicationGuidelines: [ //
      { method: "Soil Application", dose: "10-15 Kg Per Acre", instructions: "Mix With Compost Or Basal Fertilizers" },
      { method: "Foliar Spray", dose: "0.5% Solution (5 G/Litre Water)", instructions: "Apply During Early Vegetative Stages" }
    ],
    notes: "Avoid Mixing With High-Ph Solutions Or Phosphates. Use Soft Water For Best Results." //
  },
  {
    slug: "copper-sulphate",
    name: "Copper Sulphate", //
    formula: "CuSO₄·5H₂O", //
    tagline: "STRONGER ROOTS. HEALTHIER PLANTS. WITH INDOSHYAMA COPPER", //
    category: "Micronutrients",
    composition_summary: "Cu: Min. 24%, S: Min. 12%", //
    product_img: "/assets/productimg-1.png",
    packaging: "1 Kg | 5 Kg | 25 Kg | 50 Kg Sealed Moisture-Resistant Laminated Bags", //
    overview: "Indoshyama Copper Sulphate Pentahydrate is a high-purity micronutrient fertilizer used to correct copper deficiencies in crops. Copper plays a key role in enzyme activation, root metabolism, disease resistance, and lignin synthesis. This fertilizer is also used as a fungicide and bactericide in certain crop protection formulations.",
    composition_details: {
      "Copper (Cu)": "Min. 24%", //
      "Sulphur (S)": "Min. 12%", //
      "Form": "Blue Crystalline Powder", //
      "Solubility": "100% Water-Soluble", //
      "pH (5% Solution)": "3.5-5.0" //
    },
    benefits: [
      "Corrects copper deficiency-related wilting and dieback", //
      "Promotes strong root and stem development", //
      "Enhances disease resistance and plant immunity", //
      "Supports reproductive growth and flowering", //
      "Can also aid in fungal disease management (with caution)" //
    ],
    recommendedCrops: ["Citrus", "Wheat Paddy", "Pulses", "Grapes", "Cotton", "Fruits", "Vegetables", "Banana"], //
    applicationGuidelines: [ //
      { method: "Soil Application", dose: "10-15 Kg Per Acre", instructions: "Mix Well With Compost Or Basal Fertilizers" },
      { method: "Foliar Spray", dose: "0.5% Solution (5 G/Litre Water)", instructions: "Spray During Early Vegetative & Flowering Stages" }
    ],
    notes: "Avoid Over-Application. Excess Copper May Be Toxic To Plants. Do Not Mix With Lime Or Alkaline Sprays." //
  },
  {
    slug: "calcium-sulphate-gypsum",
    name: "Calcium Sulphate (Gypsum)", //
    formula: "CaSO₄·2H₂O", //
    tagline: "STRONGER SOIL, HEALTHIER CROPS - WITH INDOSHYAMA GYPSUM", //
    category: "Soil Conditioners",
    composition_summary: "Ca: Min. 23%, S: Min. 18%", //
    product_img: "/assets/productimg-2.png",
    packaging: "10 Kg | 25 Kg | 50 Kg Sealed Laminated Moisture-Resistant Bags", //
    overview: "Indoshyama Calcium Sulphate, commonly known as Gypsum, is a naturally occurring mineral used as a soil conditioner and secondary nutrient fertilizer. It supplies Calcium (Ca) and Sulfur (S)—both essential for improving soil structure, root strength, and nutrient uptake in crops. It is especially effective in alkaline and saline soils.",
    composition_details: {
      "Calcium (Ca)": "Min. 23%", //
      "Sulphur (S)": "Min. 18%", //
      "Form": "Fine White Powder Or Granules", //
      "Solubility": "Moderately Soluble In Water", //
      "pH (5% Solution)": "6.0-7.5" //
    },
    benefits: [
      "Improves soil structure and reduces compaction", //
      "Supplies essential calcium and sulfur to crops", //
      "Reclaims alkaline and sodic soils", //
      "Promotes strong root growth and cell wall development", //
      "Enhances nutrient uptake and plant vigor" //
    ],
    recommendedCrops: ["Wheat", "Sugarcane", "Rice", "Groundnut", "Cotton", "Pulses", "Fruits", "Oilseeds"], //
    applicationGuidelines: [ //
      { method: "Soil Application", dose: "10-15 Kg Per Acre", instructions: "Mix Well With Compost Or Basal Fertilizers" },
      { method: "Foliar Spray", dose: "0.5% Solution (5 G/Litre Water)", instructions: "Spray During Early Vegetative & Flowering Stages" }
    ],
    notes: "For Sodic/Alkaline Soils, Use Based On Soil Testing Report Or Expert Advice." //
  },
  {
    slug: "ammonium-sulphate",
    name: "Ammonium Sulphate", //
    formula: "(NH₄)₂SO₄", //
    tagline: "DUAL NUTRITION FOR MAXIMUM CROP YIELD", //
    category: "Macronutrients",
    composition_summary: "N: Min. 21%, S: Min. 24%", //
    product_img: "/assets/productimg-3.png",
    packaging: "10 Kg | 25 Kg | 50 Kg Moisture-Proof Laminated Hdpe Bags", //
    overview: "Indoshyama Ammonium Sulphate is a fast-acting, inorganic fertilizer that provides crops with two vital nutrients: Nitrogen (N) and Sulfur (S). Its acidic reaction in soil makes it highly suitable for alkaline soils, improving nutrient availability and plant uptake efficiency.",
    composition_details: {
      "Nitrogen (N)": "Min. 21%", //
      "Sulfur (S)": "Min. 24%", //
      "Form": "White Or Off-White Crystals Or Granules", //
      "Solubility": "Completely Water-Soluble", //
      "pH in Solution": "Slightly Acidic (pH~5.5-6.5)" //
    },
    benefits: [
      "Provides quick and effective nitrogen for plant growth", //
      "Supplies sulfur essential for protein synthesis and oil content", //
      "Improves nutrient uptake in alkaline soils", //
      "Enhances crop color, vigor, and disease resistance", //
      "Supports strong root and leaf development" //
    ],
    recommendedCrops: ["Paddy", "Sugarcane", "Wheat", "Potato", "Cotton", "Tea", "Groundnut", "Mustard", "Pulses"], //
    applicationGuidelines: [ //
      { method: "Soil Application", dose: "50-100 Kg Per Acre", instructions: "Apply As Basal Or Top Dressing, Split In 2-3 Doses" },
      { method: "Fertigation", dose: "Use Water-Soluble Grade", instructions: "Use As Per Fertigation Schedule And Crop Stage" }
    ],
    notes: "Avoid Overuse In Acidic Soils. Always Water The Field After Application." //
  },
  {
    slug: "calcium-ammonium-nitrate",
    name: "Calcium Ammonium Nitrate (CAN)", //
    formula: "CAN",
    tagline: "Balanced Nitrogen. Better Roots. Higher Yield.", //
    category: "Macronutrients",
    composition_summary: "N: Min. 26%, Ca: 8-10%", //
    product_img: "/assets/productimg-4.png",
    packaging: "10 kg | 25 kg | 50 kg laminated moisture-resistant HDPE bags", //
    overview: "Indoshyama Calcium Ammonium Nitrate (CAN) is a premium nitrogen fertilizer that combines ammonium nitrogen and nitrate nitrogen with calcium, providing fast and sustained nitrogen nutrition to crops. The added calcium improves soil health, root strength, and nutrient absorption.",
    composition_details: {
      "Total Nitrogen (N)": "Min. 26%", //
      "Nitrate Nitrogen": "~13%", //
      "Ammoniacal Nitrogen": "~13%", //
      "Calcium (Ca)": "8-10%", //
      "Form": "White or greyish granules", //
      "Solubility": "Fully water-soluble", //
      "pH reaction": "Neutral to mildly acidic" //
    },
    benefits: [
      "Quick and long-lasting nitrogen supply", //
      "Enhances root growth and plant structure", //
      "Improves uptake of other nutrients (especially K and Mg)", //
      "Supports flowering, fruiting, and grain filling", //
      "Reduces soil acidity compared to other nitrogen fertilizers" //
    ],
    recommendedCrops: ["Wheat", "Rice", "Sugarcane", "Maize", "Cotton", "Fruits", "Vegetables", "Oilseeds", "Tea", "Potato"], //
    applicationGuidelines: [ //
      { method: "Soil Application", dose: "50-100 Kg Per Acre", instructions: "Apply As Basal Or Top Dressing, Split In 2-3 Doses" },
      { method: "Fertigation", dose: "Use Water-Soluble Grade", instructions: "Use As Per Fertigation Schedule And Crop Stage" }
    ],
    notes: "Ideal for use in sandy, calcareous, or high-pH soils where urea may be less effective." //
  },
  {
    slug: "single-super-phosphate",
    name: "Single Super Phosphate (SSP)", //
    formula: "SSP",
    tagline: "Strong Roots Start Here - Trusted Phosphorus for Indian Soils", //
    category: "Macronutrients",
    composition_summary: "P₂O₅: Min. 16%, S: Min. 11%", //
    product_img: "/assets/productimg-1.png",
    packaging: "25 kg | 50 kg moisture-proof HDPE laminated bags", //
    overview: "Indoshyama Single Super Phosphate (SSP) is a widely used phosphorus-based fertilizer containing available phosphorus, calcium, and sulfur, making it a perfect multi-nutrient source. SSP enhances root development, flowering, and early crop vigor while improving soil texture and long-term fertility.",
    composition_details: {
      "Available Phosphorus (P₂O₅)": "Min. 16%", //
      "Calcium (Ca)": "18-20%", //
      "Sulphur (S)": "Min. 11%", //
      "Form": "Powder or granules (greyish)", //
      "Solubility": "Moderately soluble (slow release)" //
    },
    benefits: [
      "Stimulates early root and shoot development", //
      "Enhances fruit and grain formation", //
      "Supplies secondary nutrients (Ca & S)", //
      "Improves soil structure and long-term fertility", //
      "Safe and affordable phosphorus source for small & large farms" //
    ],
    recommendedCrops: ["Paddy", "Wheat", "Pulses", "Oilseeds", "Cotton", "Sugarcane", "Vegetables", "Fruits"], //
    applicationGuidelines: [ //
      { method: "Soil Application", dose: "50-100 Kg Per Acre", instructions: "Apply during land preparation or sowing" },
      { method: "Blended Use", dose: "Can be mixed with compost or FYM", instructions: "Avoid direct contact with urea or alkaline fertilizers in the same row" }
    ],
    notes: "Phosphorus is immobile in soil—apply it close to the root zone for best results." //
  },
  {
    slug: "di-ammonium-phosphate",
    name: "Di-Ammonium Phosphate (DAP)", //
    formula: "DAP",
    tagline: "Powerful Start, Profitable Harvest - India's No.1 Phosphatic Fertilizer", //
    category: "Macronutrients",
    composition_summary: "N: Min. 18%, P₂O₅: Min. 46%", //
    product_img: "/assets/productimg-2.png",
    packaging: "25 kg | 50 kg moisture-proof HDPE laminated bags", //
    overview: "Indoshyama Di-Ammonium Phosphate (DAP) is a high-efficiency starter fertilizer that supplies both nitrogen and phosphorus. With 18% Nitrogen (N) and 46% Phosphorus (P₂O₅), DAP promotes vigorous root growth, early crop establishment, and strong vegetative development. It is the most widely used phosphatic fertilizer in India.",
    composition_details: {
      "Nitrogen (N)": "Min. 18%", //
      "Phosphorus (P₂O₅)": "Min. 46%", //
      "Form": "Hard, uniform granules (gray or off-white)", //
      "Solubility": "Fully water-soluble", //
      "pH": "Alkaline (8.0-8.5 in solution)" //
    },
    benefits: [
      "Ensures rapid root and shoot development", //
      "Improves flowering and grain formation", //
      "Provides a strong starter dose of nutrients", //
      "Ideal for basal application at sowing/transplanting", //
      "Easy to handle, store, and apply uniformly" //
    ],
    recommendedCrops: ["Wheat", "Rice", "Cotton", "Maize", "Sugarcane", "Pulses", "Oilseeds", "Vegetables", "Fruits"], //
    applicationGuidelines: [ //
      { method: "Soil Application", dose: "40-60 kg per acre (basal dose)", instructions: "Apply in rows or furrows during sowing/transplanting" },
      { method: "Blended Use", dose: "Can be mixed with potash or FYM", instructions: "Avoid mixing directly with urea before application" }
    ],
    notes: "Apply DAP near root zone to minimize phosphorus fixation and maximize uptake." //
  },
  {
    slug: "muriate-of-potash",
    name: "Muriate of Potash (MOP - KCI)", //
    formula: "MOP - KCl",
    tagline: "Power Your Crops with Potassium - For Bigger, Healthier Harvests", //
    category: "Macronutrients",
    composition_summary: "K₂O: Min. 60%", //
    product_img: "/assets/productimg-3.png",
    packaging: "25 kg | 50 kg moisture-resistant HDPE laminated bags", //
    overview: "Indoshyama Muriate of Potash (MOP) is the most widely used potassium fertilizer, supplying 60% K₂O (Potassium Oxide). Potassium is crucial for cell development, water balance, sugar transport, and disease resistance in crops. MOP is ideal for soil application in crops tolerant to chloride.",
    composition_details: {
      "Potassium (as K₂O)": "Min. 60%", //
      "Form": "Pink or white crystalline granules", //
      "Solubility": "100% Water-Soluble", //
      "pH in solution": "Neutral to slightly acidic", //
      "Chloride (CI)": "Present - use cautiously in sensitive crops" //
    },
    benefits: [
      "Improves fruit size, sugar content, and quality", //
      "Enhances drought resistance and root health", //
      "Boosts crop yield and storage life", //
      "Activates enzymes and photosynthesis", //
      "Increases resistance to pests and fungal diseases" //
    ],
    recommendedCrops: ["Wheat", "Rice", "Sugarcane", "Cotton", "Groundnut", "Potato", "Mustard", "Banana", "Pulses"], //
    applicationGuidelines: [ //
      { method: "Soil Application", dose: "25-50 kg per acre (split dose)", instructions: "Apply before flowering and during fruit filling" },
      { method: "Blended Use", dose: "Can be mixed with nitrogen & phosphate fertilizers", instructions: "Apply during final land prep or top dressing" }
    ],
    notes: "Not recommended for chloride-sensitive crops like tobacco, grapes, citrus. Avoid excess use in chloride-sensitive crops and saline soils."
  },
  {
    slug: "sulphate-of-potash",
    name: "Sulphate of Potash (SOP)", //
    formula: "K₂SO₄", //
    tagline: "Premium Potassium with Sulfur - Quality Nutrition for Quality Crops", //
    category: "Macronutrients",
    composition_summary: "K₂O: Min. 50%, S: Min. 17%", //
    product_img: "/assets/productimg-4.png",
    packaging: "1 kg | 5 kg | 25 kg | 50 kg laminated moisture-resistant HDPE bags", //
    overview: "Indoshyama Sulphate of Potash (SOP) is a premium potassium fertilizer supplying 50% K₂O and 17% Sulfur. Unlike MOP, SOP contains no chloride, making it safe for chloride-sensitive crops like fruits, vegetables, and spices. The added sulfur also boosts protein and oil formation.",
    composition_details: {
      "Potassium (as K₂O)": "Min. 50%", //
      "Sulfur (S)": "Min. 17%", //
      "Form": "White crystalline powder or granules", //
      "Solubility": "Fully water-soluble", //
      "Chloride (CI)": "0% - Chloride-free" //
    },
    benefits: [
      "Ideal for chloride-sensitive crops", //
      "Boosts fruit quality, sugar content, and color", //
      "Improves disease resistance and drought tolerance", //
      "Enhances protein and oil synthesis in oilseed crops", //
      "Dual nutrition: Potassium + Sulfur in one application" //
    ],
    recommendedCrops: ["Grapes", "Citrus", "Potato", "Tomato", "Banana", "Tea", "Tobacco", "Pulses", "Mustard", "Spices", "Floriculture", "Coffee"], //
    applicationGuidelines: [ //
      { method: "Soil Application", dose: "20-40 kg per acre (basal/top dressing)", instructions: "Apply before flowering or during fruit setting" },
      { method: "Foliar Spray", dose: "1-1.5% solution (10-15 g per litre)", instructions: "Spray in early morning or evening during fruiting stages" }
    ],
    notes: "Best results when applied during flowering and fruit development stages." //
  },
  {
    slug: "npk-fertilizers",
    name: "NPK Fertilizers (Customized Blends)", //
    formula: "Customized",
    tagline: "COMPLETE NUTRITION FOR BALANCED CROP GROWTH", //
    category: "Macronutrients",
    composition_summary: "e.g., 20:20:20, 19:19:19", //
    product_img: "/assets/productimg-1.png",
    packaging: "5 Kg | 25 Kg | 50 Kg Laminated Hdpe Moisture-Resistant Bags", //
    overview: "Indoshyama NPK Fertilizers are balanced, multi-nutrient formulations that supply crops with Nitrogen (N), Phosphorus (P₂O₅), and Potassium (K₂O) in specific ratios. These fertilizers ensure balanced nutrition, promoting healthy growth, strong roots, and better fruiting, resulting in higher yields.",
    composition_details: {
      "20:20:20 Grade": "Balanced N & P → Early Growth In Cereals And Vegetables", //
      "19:19:19 (Water Soluble)": "Foliar Spray / Drip Fertigation → For Vegetables, Flowers" //
    },
    benefits: [
      "Provides complete, balanced nutrition to plants", //
      "Enhances crop vigor, flowering, and fruiting", //
      "Increases yield, grain filling, and fruit size", //
      "Suitable for soil application, broadcasting, and fertigation", //
      "Reduces the need for separate nutrient applications" //
    ],
    recommendedCrops: ["Wheat", "Rice", "Cotton", "Sugarcane", "Maize", "Vegetables", "Pulses", "Fruits", "Flowers", "Oilseeds"], //
    applicationGuidelines: [ //
      { method: "Soil Application", dose: "40-80 Kg Per Acre (Basal/Top Dose)", instructions: "Apply During Sowing Or Transplanting, Split Doses For Longer Crops" },
      { method: "Foliar Spray", dose: "1-2% Solution (10-20 G/Litre)", instructions: "Use During Flowering Or Fruiting Stages With Clean Water" }
    ],
    notes: "Use crop-specific grades as per growth stage and local soil recommendations." //
  },
  {
    slug: "seaweed-extract",
    name: "Seaweed Extract (Organic Biostimulant)", //
    formula: "Organic",
    tagline: "Natural Power. Visible Growth. The Organic Edge for Every Crop.", //
    category: "Bio-Stimulants",
    composition_summary: "Natural plant hormones, Amino acids", //
    product_img: "/assets/productimg-2.png",
    packaging: "5 L | 25 L (liquid)", //
    overview: "Indoshyama Seaweed Extract is a 100% natural, organic biostimulant derived from marine algae (Ascophyllum nodosum). Rich in plant hormones, amino acids, micronutrients, vitamins, and enzymes, it enhances plant metabolism, root development, flowering, fruiting, and resistance to stress.",
    composition_details: {
      "Key Components": "Natural plant growth hormones (auxins, gibberellins, cytokinins), Micronutrients (Fe, Zn, Mn, Cu, B), Amino acids & enzymes, Organic carbon, Alginic acid, mannitol, and betaines" //
    },
    benefits: [
      "Enhances seed germination, root growth & shoot elongation", //
      "Stimulates flowering, fruit setting, and fruit enlargement", //
      "Increases resistance to drought, salinity, and temperature stress", //
      "Boosts photosynthesis and nutrient uptake", //
      "Improves yield, quality, and shelf life of produce", //
      "Safe for soil microbes and organic farming" //
    ],
    recommendedCrops: ["Vegetables", "Fruits", "Grapes", "Flowers", "Cotton", "Sugarcane", "Tea", "Paddy", "Spices", "Oilseeds"], //
    applicationGuidelines: [ //
      { method: "Foliar Spray", dose: "3-5 ml per litre (liquid)", instructions: "Apply during early growth, pre-flowering, and fruit set stages" },
      { method: "Soil Drip/Drench", dose: "1-2 L per acre (liquid) or 1-2 kg (powder)", instructions: "USE WITH IRRIGATION OR MIX WITH COMPOST/FYM" },
      { method: "Seed Treatment", dose: "Soak for 30 minutes before sowing", instructions: "Soak for 30 minutes before sowing" }
    ],
    notes: "Do not mix with strong alkaline substances. Shake well before use (liquid)." //
  },
  {
    slug: "humic-acid",
    name: "Humic Acid", //
    formula: "Organic",
    tagline: "ENRICH THE SOIL, EMPOWER THE PLANT-NATURALLY WITH INDOSHYAMA", //
    category: "Soil Conditioners",
    composition_summary: "Humic & Fulvic Acids", //
    product_img: "/assets/productimg-3.png",
    packaging: "1L | 5L | 25 L (Liquid)", //
    overview: "Indoshyama Humic Acid is a natural, organic soil conditioner and bio-activator derived from Leonardite or Lignite. It improves soil fertility, nutrient availability, water retention, and root development. Rich in humic and fulvic acids, it stimulates plant metabolism and promotes microbial activity.",
    composition_details: {
      "Humic Acid": "12-18% (Liquid) / 60-80% (Powder/Granules)", //
      "Fulvic Acid": "Present", //
      "Organic Carbon": "Present", //
      "Other Components": "Natural Minerals & Bioactive Compounds" //
    },
    benefits: [
      "Enhances Nutrient Uptake By Chelating Minerals (N, P, K, Micronutrients)", //
      "Improves soil structure, porosity, and aeration", //
      "Increases root mass and growth", //
      "Boosts microbial activity and beneficial soil bacteria", //
      "Improves drought resistance and nutrient efficiency", //
      "Reduces nutrient leaching and fertilizer waste" //
    ],
    recommendedCrops: ["Paddy", "Wheat", "Vegetables", "Cotton", "Sugarcane", "Potato", "Fruits", "Flowers", "Grapes", "Banana"], //
    applicationGuidelines: [ //
      { method: "Soil Application", dose: "2-5 Kg/Acre (Powder) Or 2-4 L/Acre (Liquid)", instructions: "Apply With Irrigation Or Mix With Fym/Compost" },
      { method: "Foliar Spray", dose: "3-5 Ml/Litre (Liquid)", instructions: "Apply During Vegetative Stage Or Stress Periods" },
      { method: "Drip Irrigation", dose: "1-2 L Per Acre", instructions: "Use In Regular Fertigation Cycles" }
    ],
    notes: "Can Be Combined With Fertilizers, Seaweed, And Amino Acids For Best Results." //
  },
  {
    slug: "amino-acid-fertilizer",
    name: "Amino Acid Fertilizer (Bio-Organic Plant Tonic)", //
    formula: "Organic",
    tagline: "Revive, Regrow, Rejuvenate - Naturally with Indoshyama Amino Power", //
    category: "Bio-Stimulants",
    composition_summary: "Protein Hydrolysates", //
    product_img: "/assets/productimg-4.png",
    packaging: "100 ml | 250 ml | 500 ml | 1 L | 5 L (liquid)", //
    overview: "Indoshyama Amino Acid Fertilizer is a biologically active formulation derived from natural protein hydrolysates, containing essential amino acids, peptides, and enzymes. It acts as a plant growth promoter, stress reliever, and nutrient efficiency booster.",
    composition_details: {
      "Total Amino Acids": "20-40% (based on grade)", //
      "Other Components": "Peptides & Proteins, Enzymes & Organic Nitrogen" //
    },
    benefits: [
      "Stimulates cell division, root & shoot growth", //
      "Enhances chlorophyll synthesis and photosynthesis", //
      "Improves flowering, fruit setting, and fruit size", //
      "Boosts resistance to heat, cold, and drought stress", //
      "Increases nutrient absorption when used with NPK/micronutrients", //
      "Improves crop recovery after pesticide/fungal sprays" //
    ],
    recommendedCrops: ["Tomato", "Potato", "Onion", "Cotton", "Banana", "Citrus", "Grapes", "Tea", "Paddy", "Wheat", "Flowers"], //
    applicationGuidelines: [ //
      { method: "Seed/Root Treatment", dose: "5 ml (per litre water)", instructions: "Dip seedlings/roots for 30 mins before planting" },
      { method: "Foliar Spray", dose: "2-4 ml per litre (liquid) or 3-5 g/litre (powder)", instructions: "Spray During Vegetative, Flowering & Fruiting Stages" },
      { method: "Drip Irrigation", dose: "1-2 L per acre", instructions: "Use with regular fertigation cycle" }
    ],
    notes: "For best results, apply 2-3 times during crop life cycle in combination with micronutrients or humic acid." //
  },
  {
    slug: "silicon-based-fertilizer",
    name: "Silicon-Based Fertilizer (Plant Strengthening Nutrient)", //
    formula: "SiO₂",
    tagline: "Stronger Plants. Smarter Protection - The Hidden Hero Of Crop Health", //
    category: "Specialty Nutrients",
    composition_summary: "Soluble Silica (Si)", //
    product_img: "/assets/productimg-1.png",
    packaging: "250 Ml | 500 Ml | 1L | 5 L (Liquid Formulation)", //
    overview: "Indoshyama Silicon-Based Fertilizer is a next-generation plant tonic formulated with soluble silica (SiO₂) that strengthens plant cell walls, enhances nutrient uptake, and increases resistance to biotic and abiotic stress. Silicon is proven to improve plant resilience, structure, and productivity, especially in cereals, sugarcane, rice, banana, and horticulture crops.",
    composition_details: {
      "Soluble Silicon (Si)": "1.5-6% (Liquid) / 15-25% (Powder)", //
      "pH": "Neutral To Slightly Alkaline", //
      "Form": "100% Soluble, Bioavailable Form" //
    },
    benefits: [
      "Strengthens cell walls, reducing lodging and disease entry", //
      "Enhances tolerance to drought, salinity, and temperature extremes", //
      "Improves pest and fungal resistance (e.g., blast, powdery mildew)", //
      "Boosts nutrient uptake efficiency (especially N, P, K, Ca)", //
      "Promotes strong stem growth, shiny leaves, and improved fruit firmness" //
    ],
    recommendedCrops: ["Rice", "Sugarcane", "Banana", "Tomato", "Potato", "Grapes", "Wheat", "Marigold", "Onions", "Citrus"], //
    applicationGuidelines: [ //
      { method: "Soil Application", dose: "3-5 Kg Per Acre (Granular Form)", instructions: "Use At Land Prep Or Top Dressing" },
      { method: "Foliar Spray", dose: "2-3 Ml Per Litre (Liquid) Or 2-4 G/Litre (Powder)", instructions: "Apply 2-3 Times During Vegetative & Pre-Flowering Stages" },
      { method: "Drip Irrigation", dose: "1-2 L Per Acre", instructions: "Apply Once Every 15-20 Days In Fertigation Cycle" }
    ],
    notes: "Use in combination with NPK and micronutrients for a complete crop strengthening program." //
  },
  {
    slug: "vermicompost",
    name: "Vermicompost (Organic Soil Enricher)", //
    formula: "Organic",
    tagline: "PURE FROM NATURE - POWER FOR YOUR SOIL", //
    category: "Organic Fertilizers",
    composition_summary: "N: 1.5-2.5%, P: 0.8-1.5%, K: 1.0-1.8%", //
    product_img: "/assets/productimg-2.png",
    packaging: "5 Kg | 10 Kg | 25 Kg | 50 Kg Woven Moisture-Resistant Bags With Indoshyama Branding", //
    overview: "Indoshyama Vermicompost is a premium-quality organic fertilizer made from the natural decomposition of organic waste using earthworms (Eisenia Fetida). This process enriches the compost with beneficial microbes, plant growth hormones, enzymes, and nutrients that improve soil health, fertility, and structure.",
    composition_details: {
      "Organic Carbon": "12-18%", //
      "Nitrogen (N)": "1.5-2.5%", //
      "Phosphorus (P₂O₅)": "0.8-1.5%", //
      "Potassium (K₂O)": "1.0-1.8%", //
      "C:N Ratio": "< 20", //
      "pH": "Neutral To Slightly Alkaline (6.5-7.5)" //
    },
    benefits: [
      "Improves soil aeration, texture, and moisture retention", //
      "Enhances root development and plant growth", //
      "Rich in beneficial microbes and enzymes", //
      "Increases crop yield and quality organically", //
      "Reduces dependence on chemical fertilizers over time", //
      "Non-toxic, odor-free, and safe for all stages of crop growth" //
    ],
    recommendedCrops: ["Vegetables", "Fruits", "Flowers", "Rice", "Wheat", "Pulses", "Oilseeds", "Spices", "Lawns", "Nurseries", "Pots"], //
    applicationGuidelines: [ //
      { method: "Soil Application", dose: "2-5 Tons/Acre Before Sowing", instructions: "Mix Into Soil During Land Preparation" },
      { method: "Soil Amendment", dose: "500 G-2 Kg Per Plant (Trees/Flowers)", instructions: "Apply Around Base Of Plant & Water Lightly" },
      { method: "Pot Use", dose: "Mix 20-30% with soil", instructions: "Ideal For Kitchen Gardens And Indoor Plants" }
    ],
    notes: "Repeat every 30-45 days for continuous improvement in plant health and soil vitality." //
  },
  {
    slug: "farm-yard-manure",
    name: "Farm Yard Manure (FYM - Organic Nutrient Source)", //
    formula: "FYM",
    tagline: "Back To Roots - Traditional Nutrition For Modern Farming", //
    category: "Organic Fertilizers",
    composition_summary: "Decomposed Cow Dung & Crop Residues", //
    product_img: "/assets/productimg-3.png",
    packaging: "25 Kg | 50 Kg | Bulk Supply In Jute Or Hdpe Bags (Crumbled Or Powdered Form)", //
    overview: "Indoshyama Farm Yard Manure (FYM) is a traditional, organic fertilizer made by decomposing a blend of cow dung, animal waste, crop residues, and straw. Rich in organic matter and beneficial microbes, FYM improves soil fertility, structure, and moisture retention. FYM is the most widely accepted base input in organic and integrated farming systems.",
    composition_details: {
      "Organic Carbon": "10-15%", //
      "Nitrogen (N)": "0.5-1.0%", //
      "Phosphorus (P₂O₅)": "0.2-0.5%", //
      "Potassium (K₂O)": "0.5-1.0%", //
      "C:N Ratio": "20-25", //
      "Moisture": "20-30%" //
    },
    benefits: [
      "Enhances soil structure, porosity, and water-holding capacity", //
      "Feeds and boosts beneficial soil microbes", //
      "Improves the availability of nutrients from other inputs", //
      "Increases earthworm activity and organic matter in soil", //
      "Helps in long-term soil rejuvenation and productivity", //
      "Acts as a carrier for bio-fertilizers and micronutrients" //
    ],
    recommendedCrops: ["Pulses", "Vegetables", "Fruits", "Flowers", "Oilseeds", "Spices", "Lawns & Gardens"], //
    applicationGuidelines: [ //
      { method: "Soil Amendment (Basal)", dose: "5-10 Tons Per Acre", instructions: "Mix Into Soil 15-20 Days Before Sowing Or Planting" },
      { method: "Compost Pit Mixing", dose: "Combine With Biofertilizers Or Micronutrients", instructions: "Enhances Effectiveness Of All Nutrients" },
      { method: "Pot/Container Plants", dose: "500 G-1 KG PER POT (EVERY 45-60 DAYS)", instructions: "Use As Top Dressing Or Soil Mix" }
    ],
    notes: "Apply FYM before sowing to allow full decomposition and microbial activity in soil." //
  },
  {
    slug: "azotobacter-biofertilizer",
    name: "Azotobacter Biofertilizer (Nitrogen-Fixing Bacteria)", //
    formula: "N-Fixing",
    tagline: "Natural Nitrogen Provider - Boosting Growth The Biological Way", //
    category: "Bio-Fertilizers",
    composition_summary: "Viable Cell Count: ≥10⁸ cfu/ml", //
    product_img: "/assets/productimg-4.png",
    packaging: "250 Ml | 500 Ml | 1 L (Liquid Formulation)", //
    overview: "Indoshyama Azotobacter Biofertilizer is a nitrogen-fixing microbial solution containing live Azotobacter spp., a free-living bacteria that converts atmospheric nitrogen into plant-usable forms. This reduces the crop's dependence on chemical nitrogen fertilizers while promoting root development and soil fertility. It is especially effective in non-leguminous crops.",
    composition_details: {
      "Viable Cell Count": "≥10⁸ Cfu/Ml (Liquid) / Cfu/G (Carrier)", //
      "Strain": "High-Performing Azotobacter Chroococcum", //
      "Form": "Liquid / Powder", //
      "Shelf Life": "6-12 Months (Store In Cool, Dry Place)" //
    },
    benefits: [
      "Fixes atmospheric nitrogen and reduces chemical N use", //
      "Stimulates plant growth hormones (IAA, Gibberellins)", //
      "Promotes stronger root growth and higher biomass", //
      "Improves soil microbial activity and fertility", //
      "Cost-effective and eco-friendly input for all crops", //
      "Enhances nutrient uptake and drought tolerance" //
    ],
    recommendedCrops: ["Wheat", "Paddy", "Maize", "Cotton", "Sugarcane", "Potato", "Vegetables", "Banana", "Fruits", "Spices"], //
    applicationGuidelines: [ //
      { method: "Seed Treatment", dose: "20 Ml (Liquid) Or 20 G (Powder) Per Kg Seed", instructions: "Soak Seeds And Shade-Dry Before Sowing" },
      { method: "Soil Application", dose: "1-2 L/Acre (Liquid) Or 2-4 Kg/Acre (Powder)", instructions: "Mix With Fym/Compost And Broadcast" },
      { method: "Drip Irrigation", dose: "1-2 L Per Acre In Water", instructions: "Apply During Early Vegetative Stage" },
      { method: "Root Dipping (Nursery)", dose: "200 Ml In 10 L Water For 1 Hour", instructions: "Dip Roots Before Transplanting" }
    ],
    notes: "Avoid mixing with chemical fungicides or bactericides during application." //
  },
  {
    slug: "rhizobium-biofertilizer",
    name: "Rhizobium Biofertilizer Culture", //
    formula: "N-Fixing",
    tagline: "SMART SYMBIOSIS - NATURAL NITROGEN FOR LEGUME CROPS", //
    category: "Bio-Fertilizers",
    composition_summary: "For Leguminous Crops", //
    product_img: "/assets/productimg-1.png",
    packaging: "250 Ml | 500 Ml | 1 L (Liquid) & 250 G | 500 G | 1 Kg (Powder)", //
    overview: "Indoshyama Rhizobium Culture is a symbiotic nitrogen-fixing biofertilizer with Rhizobium spp., which form root nodules in legume crops and convert atmospheric nitrogen into a form plants can use. This eco-friendly input significantly reduces the need for synthetic nitrogen fertilizers.",
    composition_details: {
      "Viable Cell Count": "≥10⁸ Cfu/Ml (Liquid) / Cfu/G (Powder)", //
      "Strains": "Specific Rhizobium strains for different legumes", //
      "Form": "Liquid Or Carrier-Based Powder", //
      "Shelf Life": "6-12 Months (Store In Cool, Dry Place)" //
    },
    benefits: [
      "Fixes atmospheric nitrogen in root nodules", //
      "Reduces Urea/N-Fertilizer requirement by up to 25-50%", //
      "Enhances root development and plant growth", //
      "Improves soil structure, organic content, and microbial balance", //
      "Boosts yield and protein content in legumes", //
      "Cost-effective and certified for organic farming" //
    ],
    recommendedCrops: ["Gram", "Pea", "Lentil", "Soybean", "Groundnut", "Moong", "Urd", "Rajma", "Lobia"], //
    applicationGuidelines: [ //
      { method: "Seed Treatment", dose: "20 ml/Kg Seed (Liquid) Or 20 G/Kg Seed (Powder)", instructions: "Mix thoroughly with jaggery solution and shade-dry before sowing" },
      { method: "Soil Application", dose: "1-2 l/Acre (Liquid) Or 2-4 Kg/Acre (Powder)", instructions: "Mix with 20-25 Kg Fym and broadcast in field" },
      { method: "Root Dip (Transplants)", dose: "200 ml In 10 L Water", instructions: "Dip roots for 30 minutes before transplanting" }
    ],
    notes: "Always use crop-specific Rhizobium strain for best results. Do not mix with chemical pesticides or fungicides during seed treatment." //
  },
  {
    slug: "mycorrhizal-biofertilizer-vam",
    name: "Mycorrhizal Biofertilizer (VAM)", //
    formula: "VAM",
    tagline: "Root Booster From Nature - Grow More With The Power Of Fungi", //
    category: "Bio-Fertilizers",
    composition_summary: "Infective Propagules: ≥100-150 Spores/g", //
    product_img: "/assets/productimg-2.png",
    packaging: "500 G | 1 Kg | 5 Kg (Powder/Granules In Hdpe Or Compostable Pouches)", //
    overview: "Indoshyama Mycorrhizal Biofertilizer contains live spores of Vesicular Arbuscular Mycorrhizal Fungi (VAM) that form a symbiotic association with plant roots. These fungi develop hyphal networks that extend the root system, improving nutrient and water absorption, particularly phosphorus and zinc.",
    composition_details: {
      "Infective Propagules": "≥100-150 Spores/G", //
      "Formulation": "Powder Or Granular (Carrier-Based)", //
      "Strains": "Glomus Intraradices, Glomus Mosseae, Etc.", //
      "Shelf Life": "6 Months (Store In Cool, Dry Place)" //
    },
    benefits: [
      "Enhances root surface area up to 10x via fungal hyphae", //
      "Increases uptake of phosphorus, zinc, copper, and water", //
      "Promotes drought and salinity resistance", //
      "Improves germination, transplant survival, and flowering", //
      "Strengthens plants against soil-borne pathogens", //
      "Reduces fertilizer usage—especially phosphate fertilizers" //
    ],
    recommendedCrops: ["Vegetables", "Fruits", "Flowers", "Pulses", "Oilseeds", "Spices", "Cotton", "Sugarcane", "Tea"], //
    applicationGuidelines: [ //
      { method: "Pot/Container Plants", dose: "10-20 g Per Pot (Mix In Soil)", instructions: "Apply During Potting Or Around Root Zone" },
      { method: "Soil Application", dose: "2-5 Kg/Acre", instructions: "Mix With Compost/Fym And Apply At Sowing Or Planting" },
      { method: "Seedling Root Dip", dose: "10-20 g/Litre Water", instructions: "Dip Seedlings' Roots Before Transplanting" }
    ],
    notes: "Do not mix with fungicides or chemical fertilizers during application. Apply in moist soil for best colonization." //
  }
];