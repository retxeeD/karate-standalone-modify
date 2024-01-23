function fn() {   
  const env = karate.env;
  karate.log('karate.env system property was:', env);

  if (!env) {
    env = 'dev';
  }

  const baseUrl = 'https://dummyjson.com',
    authEndpoint = '/auth/login',
    getAllEndpoint = '/products';

  var config = { 
    baseUrl: baseUrl,
    authEndpoint: authEndpoint,
    getAllEndpoint: getAllEndpoint
  };
  
  karate.configure('connectTimeout', 5000);
  karate.configure('readTimeout', 5000);
  return config;
}