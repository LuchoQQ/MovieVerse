module.exports = {
  reactStrictMode: true,
  images:{
    domains: ['links.papareact.com','image.tmdb.org'],
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


