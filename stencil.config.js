exports.config = {
  namespace: 'star-rating',
  generateDistribution: true,
  bundles: [
    { components: ['star-rating'] }
  ],
  collections: [
    { name: 'ionicons' }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
