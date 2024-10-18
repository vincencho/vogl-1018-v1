const imageContext = import.meta.glob('../assets/images/*.{png,jpg,jpeg,gif,webp,avif}');

export const getImageUrl = (imageName: string) => {
  const path = `../assets/images/${imageName}`;
  const imageModule = imageContext[path];
  return imageModule ? imageModule() : '';
};