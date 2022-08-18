// * Function to import all assets
function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    return (images[item.replace("./", "")] = r(item));
  });
  return images;
}

const imgs = importAll(
  require.context("./img", false, /\.(png|jpe?g|jpg|svg|webp|jfif)$/)
);

const images = importAll(
  require.context("./product", false, /\.(png|jpe?g|jpg|svg|webp|jfif)$/)
);

export { imgs };
export { images };
