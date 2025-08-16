import { format } from 'date-fns';

/
 * Utility functions for luxury LRP cosmetics application
 * @module utils
 */

/
 * Represents the luxury LRP cosmetics brand
 */
export interface Brand {
    name: string;
    primaryColor: string;
    secondaryColor: string;
}

/
 * Represents a product in the luxury LRP cosmetics line
 */
export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    category: string;
    launchDate: Date;
}

/
 * Luxury LRP cosmetics brand details
 */
export const luxuryLRPBrand: Brand = {
    name: "luxury LRP cosmetics",
    primaryColor: "#FFA500", // orange
    secondaryColor: "#FFFFFF" // white
};

/
 * Formats a currency value for display
 * @param value - The amount to format
 * @returns The formatted currency string
 */
export const formatCurrency = (value: number): string => {
    return $${value.toFixed(2)};
};

/
 * Formats a product launch date
 * @param date - The launch date to format
 * @returns The formatted date string
 */
export const formatLaunchDate = (date: Date): string => {
    return format(date, 'MMMM dd, yyyy');
};

/
 * Generates a unique identifier for a product
 * @returns A unique string identifier
 */
export const generateProductId = (): string => {
    return product_${Date.now()};
};

/
 * Custom function to create a new product
 * @param name - The name of the product
 * @param description - A detailed description of the product
 * @param price - The price of the product
 * @param category - The category the product belongs to
 * @param launchDate - The product launch date
 * @returns A new product object
 */
export const createProduct = (
    name: string,
    description: string,
    price: number,
    category: string,
    launchDate: Date
): Product => {
    return {
        id: generateProductId(),
        name,
        description,
        price,
        category,
        launchDate
    };
};