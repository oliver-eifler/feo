/* F.E.O */
module.exports = function(grunt) {
  // Project configuration.
  //file = file.substr(0, file.lastIndexOf(".")) + ".htm";
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    dir: {
      dev: 'web-html',
      release: 'web-html',
      assets: 'web-html/_assets',
      build: 'build',
      },
    /*libs: grunt.file.readJSON('web-html/_assets/js/libs.json'),*/
/* PHP PREPROCESS STUFF*/
    preprocess: {
      dev: {
        options: {
          context: {
            PATHCSS: '/css', PATHJS: '_assets/js', DEBUG: true, DEBUGCSS: true, DEBUGJS: true
            }
          },
        expand: true, cwd: '<%= dir.assets %>/php/', src:['*.php'], dest: '<%= dir.dev %>/php/'
        },
      release: {
        options: {
          context: {
            PATHCSS: '/css', PATHJS: '/js', DEBUG: false, DEBUGCSS: false, DEBUGJS: false
            }
          },
        expand: true, cwd: '<%= dir.assets %>/php/', src:['*.php'], dest: '<%= dir.release %>/php/'
        }
      },
/* CSS/SASS/COMPASS STUFF*/
    compass: {
        // Task
      release: {
          // Target
        options: {
            // Target options
          sassDir: '<%= dir.assets %>/sass',
          cssDir: '<%= dir.build %>/temp/css',
          fontsDir: '<%= dir.assets %>/fonts',
          imagesDir: '<%= dir.assets %>',
          generatedImagesDir: '<%= dir.assets %>/img',
          httpGeneratedImagesPath: "/img",
          ImagesPath: "/img",
          environment: 'production'
          }
        },
      dev: {
        options: {
          sourcemap: false,
          sassDir: '<%= dir.assets %>/sass',
          cssDir: '<%= dir.build %>/temp/css',
          fontsDir: '<%= dir.assets %>/fonts',
          imagesDir: '<%= dir.assets %>',
          generatedImagesDir: '<%= dir.assets %>/img',
          httpGeneratedImagesPath: "/img",
          environment: 'development'
          }
        },
      clean_release: {
        options: {
          clean: true,
          sassDir: '<%= dir.assets %>/sass',
          cssDir: '<%= dir.build %>/temp/css',
          fontsDir: '<%= dir.assets %>/fonts',
          imagesDir: '<%= dir.assets %>',
          generatedImagesDir: '<%= dir.assets %>/img',
          httpGeneratedImagesPath: "/img",
          ImagesPath: "/img",
          environment: 'production'
          }
        },
      clean_dev: {
        options: {
          clean: true,
          sassDir: '<%= dir.assets %>/sass',
          cssDir: '<%= dir.build %>/temp/css',
          fontsDir: '<%= dir.assets %>/fonts',
          imagesDir: '<%= dir.assets %>',
          generatedImagesDir: '<%= dir.assets %>/img',
          httpGeneratedImagesPath: "/img",
          ImagesPath: "/img",
          environment: 'development'
          }
        }
      },
    postcss: {
      dev: {
        options: {
          map: false, // inline sourcemaps
          processors:[
              require('autoprefixer-core')({browsers:['> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1']}) // add vendor prefixes
            ]
          },
        expand: true,
        flatten: true,
        cwd: '<%= dir.build %>/temp/css/',
        src: ['*.css', '!*.min.css'],
        dest: '<%= dir.dev %>/css/'
        },
      release: {
        options: {
          map: false, // inline sourcemaps
          processors:[
              require('autoprefixer-core')({browsers:['> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1']}), // add vendor prefixes
              require('cssnano')({options: {autoprefixer: false}}) // minify the result
            ]
          },
        expand: true,
        flatten: true,
        cwd: '<%= dir.build %>/temp/css/',
        src: ['*.css', '!*.min.css'],
        dest: '<%= dir.release %>/css/'
        }
      },
/* IMAGE and svg stuff*/
    imagemin: {
      dev: {
        options: {
          pngquant: true
          },
        expand: true, // Enable dynamic expansion
        cwd: '<%= dir.assets %>/img/', // Src matches are relative to this path
        src: ['**/*.{png,jpg,gif}'], // Actual patterns to match
        dest: '<%= dir.dev %>/img/' // Destination path prefix
        },
      release: {
        options: {
          pngquant: true
          },
        expand: true, // Enable dynamic expansion
        cwd: '<%= dir.assets %>/img/', // Src matches are relative to this path
        src: ['**/*.{png,jpg,gif}'], // Actual patterns to match
        dest: '<%= dir.release %>/img/' // Destination path prefix
        }
      },
/*SVG STUFF */
    svgstore: {
      options: {
        prefix: 'icon-', // This will prefix each <g> ID
        includedemo: false,
        cleanup:[]
        },
      icons: {
        files: {
            '<%= dir.release %>/img/icons.svg':['<%= dir.assets %>/svg/*.svg'],
          }
        }
      },
    olli_svg2png: {
      icons: {
          // specify files in array format with multiple src-dest mapping
        options: {
          prefix: 'icons.svg.icon-'
          },
        files:[
            // rasterize all SVG files in "img" and its subdirectories to "img/png"
            {
            cwd: '<%= dir.assets %>/svg/', src:['*.svg'], dest: '<%= dir.release %>/img/svg/'
            }
          ]
        }
      },
/*JAVASCRIPT*/
    liball: {
      options: {
        srcPath: '<%= dir.assets %>/js/',
        ext: '.js'
        },
      dev: {
        options: {
          destPath: '<%= dir.release %>/js/'
          },
        libs: grunt.file.readJSON('web-html/_assets/js/libs.json')
        },
      release: {
        options: {
          destPath: '<%= dir.build %>/js/'
          },
        libs: grunt.file.readJSON('web-html/_assets/js/libs.json')
        }
      },
      /* MINIFY JS FOR RELEASE*/
    uglify: {
      release: {
        options: {
          mangle: true,
          beautify: false,
          compress: {
            global_defs: {
              "DEBUG": false,
              },
            drop_console: true,
            dead_code: true
            }
          } ,
        files: [
            {
            expand: true, cwd: '<%= dir.build %>/js/', src:['*.js', '!*.min.js'], dest: '<%= dir.release %>/js/'
            }
          ]
        }
      },

    watch: {
      sass: {
        files:['<%= dir.assets %>/sass/**/*.{scss,sass}'],
        tasks:['css-d']
        },
      css: {
        files:['<%= dir.dev %>/css/*.css'],
        options: {
          livereload: true
          }
        }
      }
    });
  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-preprocess');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-svgstore');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadTasks('grunt-tasks/olli-svg2png');
  grunt.loadTasks('grunt-tasks/olli-libbuilder');
  /* build modernizr */
  grunt.registerTask('modernizr', function() {
    var modernizr = require("modernizr");
    var cb = this.async();
    var config = grunt.file.readJSON('modernizr-custom.json');
    modernizr.build(config, function (result) {
      //console.log(result); // full source
      //console.log(result.min); // minfied output
      grunt.file.write('web-html/_assets/js/components/modernizr-custom.js', result);
      //grunt.file.write('web-html/_assets/js/components/modernizr-custom.min.js',result.min);
      });
    });

  // Default task(s).
  //grunt.registerTask('default', ['clean',"compass:clean_dev",'preprocess:dev','compass:dev','imagemin:dev','watch']);
  //grunt.registerTask('dev', ['default']);
  //grunt.registerTask('release', ['clean',"compass:clean_release",'preprocess:release','compass:release','cssmin:release','lib','uglify:release','imagemin:release']);
  grunt.registerTask('css-d',['compass:dev', 'postcss:dev']);
  grunt.registerTask('css-r',['compass:release', 'postcss:release']);
  grunt.registerTask('svg',['svgstore', 'olli_svg2png']);
  grunt.registerTask('default',['css-d']);
};