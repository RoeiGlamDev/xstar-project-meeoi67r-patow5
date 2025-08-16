const BRAND_NAME = "luxury LRP cosmetics";
const PRIMARY_COLOR = "#FFA500"; // orange
const SECONDARY_COLOR = "#FFFFFF"; // white

/
 * Constants and configuration for the luxury LRP cosmetics application.
 * This file contains brand-specific constants, color schemes, and other 
 * configurations relevant to the luxury cosmetics industry.
 * 
 * @module constants
 */

/ 
 * @constant {string} brandName - The brand name of the cosmetics line.
 */
export const brandName: string = BRAND_NAME;

/ 
 * @constant {string} primaryColor - The primary brand color used throughout the site.
 */
export const primaryColor: string = PRIMARY_COLOR;

/ 
 * @constant {string} secondaryColor - The secondary brand color used for accents.
 */
export const secondaryColor: string = SECONDARY_COLOR;

/
 * Interface representing a cosmetic product in the luxury LRP cosmetics line.
 */
export interface CosmeticProduct {
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    category: string; // e.g., "lipstick", "foundation", "skincare"
}

/
 * Function to create a new cosmetic product.
 * 
 * @param {string} id - The unique identifier for the product.
 * @param {string} name - The name of the product.
 * @param {string} description - A brief description of the product.
 * @param {number} price - The price of the product in USD.
 * @param {string} imageUrl - The URL of the product image.
 * @param {string} category - The category of the cosmetic product.
 * 
 * @returns {CosmeticProduct} A new cosmetic product object.
 */
export function createCosmeticProduct(
    id: string,
    name: string,
    description: string,
    price: number,
    imageUrl: string,
    category: string
): CosmeticProduct {
    return {
        id,
        name,
        description,
        price,
        imageUrl,
        category,
    };
}