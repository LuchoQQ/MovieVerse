module.exports = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    domains: ['links.papareact.com', 'image.tmdb.org', 'res.cloudinary.com', 'cloudinary.com', "https://github.com/LuchoQQ", "https://arrecode.com"],
    disableStaticImages: false
  },
  async redirect() {
    return [
      {
        source: '/',
        destination: '?genre=fetchTrending&page=1',
      },
    ];
  },
}

