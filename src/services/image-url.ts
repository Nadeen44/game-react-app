/**
 * Function to get a cropped image URL.
 * @param {string} url - The original image URL.
 * @returns {string} - The cropped image URL.
 */
const getCroppedImageUrl = (url: string): string => {
if (!url) return  '';

    const target = "/media/";  // Adjust the target if necessary
    const targetIndex = url.indexOf(target);
  
    if (targetIndex === -1) {
      // If the target string is not found in the URL, return the original URL
      return url;
    }
  
    // Insert the crop dimensions right after the target substring
    const insertionIndex = targetIndex + target.length;
    const croppedUrl = `${url.slice(0, insertionIndex)}crop/600/400/${url.slice(insertionIndex)}`;
  
    return croppedUrl;
  };
  
  export default getCroppedImageUrl;
  