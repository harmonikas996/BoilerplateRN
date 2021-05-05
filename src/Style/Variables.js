/**
 * This file contains the application's variables.
 *
 * Define color, sizes, etc. here instead of duplicating them throughout the components.
 * That allows to change them more easily later on.
 */

/**
 * Colors
 */
export const Colors = {
  transparent: 'rgba(0,0,0,0)',
  white: '#ffffff',
  text: '#212529',
  success: '#28a745',
  error: '#dc3545',
  input: {
    normal: {
      text: '#212529',
      background: '#ffffff',
      border: '#cccccc',
    },
    focused: {
      text: '#212529',
      background: '#eeeeee',
      border: '#cccccc',
    },
    placeholder: '#666666',
    valid: '#28a745',
    invalid: '#dc3545',
  },
};

/**
 * FontSize
 */
export const FontSize = {
  small: 16,
  regular: 20,
  large: 40,
};

/**
 * Metrics Sizes
 */
const tiny = 5; // 5
const small = tiny * 2; // 10
const regular = tiny * 3; // 15
const large = regular * 2; // 30

export const MetricsSizes = {
  tiny,
  small,
  regular,
  large,
};
