var path = require( 'path' )
var fs = require( 'fs' )
var os = require( 'osenv' )
var pkg = require( '../package.json' )
var test = require( 'tape' )
var Transform = require( '../dist/transform' )

var fixtureCompiled = 'body {\n  -webkit-transform: scale( 2 );\n          transform: scale( 2 );\n}\n'

test( 'Transform stream produces prefixed css', function( t ) {
    t.plan( 1 )

    var transform = new Transform()
    var outPath = path.join( os.tmpdir(), pkg.name + '-' + Math.random() )

    fs.createReadStream( __dirname + '/fixture.css' )
        .pipe( transform )
        .pipe( fs.createWriteStream( outPath )
            .on( 'close', function() {
                t.equal( fs.readFileSync( outPath, { encoding: 'utf8' } ), fixtureCompiled, 'Transform prefixes css' )
            }))


})
