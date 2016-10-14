import cartModule, {cartClear, cartTotal} from './cart';
import addModule from './add';
import removeModule from './remove';

// Get all information about items in the cart
export const cart = cartModule;

export default cartModule;

// Clear all items from cart
export const clear = cartClear;

// Get total cost of all items in cart
export const total = cartTotal;

// Add item to cart
export const add = addModule;

// Remove item from cart
export const remove = removeModule;
