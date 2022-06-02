module.exports = {
  reactStrictMode: true,
  images:{
    domains: ['links.papareact.com','image.tmdb.org', 'res.cloudinary.com', 'cloudinary.com',"https://github.com/LuchoQQ","https://arrecode.com"],
    disableStaticImages: false    
  },
  experimental: {
    async redirects() {
      return [
        { source: '/', 
          destination: '/?genre=fetchTrending&page=1/', 
          permanent: true }, // a permanent redirect
      ];
    },
  },
}

