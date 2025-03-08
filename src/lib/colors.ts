// Foodeez Brand Color Configuration

// Primary Colors
export const PRIMARY_COLORS = {
  orange: '#FF6F00', // Excitement, appetite stimulation, and energy
  red: '#E63946',    // Passion for food, urgency, and warmth
  yellow: '#FFC107', // Happiness, positivity, and deliciousness
};

// Secondary Colors
export const SECONDARY_COLORS = {
  green: '#4CAF50',  // Freshness, sustainability, and organic food representation
  darkGray: '#333333', // Tech-friendly contrast for UI clarity
  beige: '#F5E6CC',  // Soft, cozy, and inviting for backgrounds
};

// UI Colors
export const UI_COLORS = {
  white: '#FFFFFF',
  lightGray: '#F5F5F5',
  mediumGray: '#9E9E9E',
  black: '#000000',
};

// Semantic Colors
export const SEMANTIC_COLORS = {
  success: SECONDARY_COLORS.green,
  error: PRIMARY_COLORS.red,
  warning: PRIMARY_COLORS.yellow,
  info: '#2196F3',
};

// Gradient Combinations
export const GRADIENTS = {
  primaryGradient: `linear-gradient(to right, ${PRIMARY_COLORS.orange}, ${PRIMARY_COLORS.red})`,
  secondaryGradient: `linear-gradient(to right, ${PRIMARY_COLORS.yellow}, ${SECONDARY_COLORS.green})`,
  backgroundGradient: `linear-gradient(to bottom, ${UI_COLORS.white}, ${SECONDARY_COLORS.beige})`,
};

// Export a default theme object for easy imports
const COLORS = {
  primary: PRIMARY_COLORS,
  secondary: SECONDARY_COLORS,
  ui: UI_COLORS,
  semantic: SEMANTIC_COLORS,
  gradients: GRADIENTS,
};

export default COLORS; 