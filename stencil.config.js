exports.config = {
  namespace: 'star-rating',
  generateDistribution: true,
  generateWWW: false,
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
