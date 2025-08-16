import { useEffect, useRef } from 'react';

/
 * Custom hook for handling animations in the luxury LRP cosmetics website.
 *
 * This hook is designed to create elegant animations that enhance the user experience
 * on a high-end cosmetics e-commerce platform. The animations are tailored to align 
 * with the luxury branding of luxury LRP cosmetics, utilizing effects that evoke sophistication
 * and allure.
 *
 * @param {boolean} isVisible - A boolean indicating if the element is visible to the user.
 * @returns {Object} An object containing animation properties and methods.
 */
export interface AnimationProps {
  ref: React.RefObject<HTMLDivElement>;
  animate: boolean;
}

export const useAnimation = (isVisible: boolean): AnimationProps => {
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (ref.current) {
      if (isVisible) {
        // Trigger luxury animations when the element becomes visible
        ref.current.style.transform = 'translateY(0)';
        ref.current.style.opacity = '1';
        ref.current.style.transition = 'transform 0.5s ease-out, opacity 0.5s ease-out';
      } else {
        // Prepare the element for a fade-out effect
        ref.current.style.transform = 'translateY(20px)';
        ref.current.style.opacity = '0';
      }
    }
  }, [isVisible]);

  return { ref, animate: isVisible };
};

/
 * Example of how to use the useAnimation hook in a component
 * 
 * const ProductCard: React.FC<{ isVisible: boolean }> = ({ isVisible }) => {
 *   const { ref } = useAnimation(isVisible);
 *   
 *   return (
 *     <div ref={ref} style={{ backgroundColor: 'white', color: 'orange', padding: '20px', borderRadius: '10px' }}>
 *       <h2>Luxury LRP Cosmetics Product</h2>
 *       <p>Experience high-end beauty with our exclusive range of cosmetics.</p>
 *     </div>
 *   );
 * };
 */