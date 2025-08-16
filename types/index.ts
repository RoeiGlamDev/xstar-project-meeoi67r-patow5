import { Product, User, Order } from './models';

/
 * Represents a product in the luxury LRP cosmetics line.
 * @interface Product
 * @property {string} id - Unique identifier for the product.
 * @property {string} name - The name of the product.
 * @property {string} description - A detailed description of the product.
 * @property {number} price - The price of the product in USD.
 * @property {string} category - The category of the product (e.g., skincare, makeup).
 * @property {string} imageUrl - URL to the product image.
 * @property {boolean} isFeatured - Indicates if the product is a featured item.
 */
export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    category: 'skincare' | 'makeup' | 'fragrance' | 'accessories';
    imageUrl: string;
    isFeatured: boolean;
}

/
 * Represents a user of the luxury LRP cosmetics website.
 * @interface User
 * @property {string} id - Unique identifier for the user.
 * @property {string} fullName - The full name of the user.
 * @property {string} email - The email address of the user.
 * @property {string} password - The hashed password for user authentication.
 * @property {string} shippingAddress - The shipping address for the user.
 * @property {string} billingAddress - The billing address for the user.
 */
export interface User {
    id: string;
    fullName: string;
    email: string;
    password: string;
    shippingAddress: string;
    billingAddress: string;
}

/
 * Represents an order placed by a user on the luxury LRP cosmetics website.
 * @interface Order
 * @property {string} id - Unique identifier for the order.
 * @property {User} user - The user who placed the order.
 * @property {Product[]} products - The list of products in the order.
 * @property {number} totalAmount - The total amount for the order in USD.
 * @property {Date} orderDate - The date when the order was placed.
 * @property {string} status - The current status of the order (e.g., pending, shipped, delivered).
 */
export interface Order {
    id: string;
    user: User;
    products: Product[];
    totalAmount: number;
    orderDate: Date;
    status: 'pending' | 'shipped' | 'delivered' | 'cancelled';
}

/
 * Represents the overall state of the luxury LRP cosmetics application.
 * @interface AppState
 * @property {Product[]} products - The available products in the luxury LRP cosmetics line.
 * @property {User | null} currentUser - The currently logged-in user or null if no user is logged in.
 * @property {Order[]} orders - The list of orders placed by the current user.
 */
export interface AppState {
    products: Product[];
    currentUser: User | null;
    orders: Order[];
}

// Exporting the interfaces for use in the application
export { Product, User, Order, AppState };