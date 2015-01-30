module.exports = {
  dist: {
    files: {
      '<%= yeoman.dist %>/metricsgraphics.min.js': [
        '<%= yeoman.app %>/scripts/directives/metricsgraphics.js'
      ]
    }
  },
  options: {
    banner: '/* Compiled <%= grunt.template.today("yyyy-mm-dd hh:mm:ss") %> */\n',
    sourceMap: true
  }
};
