
var stream = require( 'stream' )
var test = require( 'tape' )
var Transform = require( '../dist/transform' )

test( 'Transform stream produces prefixed css', function( t ) {
    t.plan( 1 )

    var transform = new Transform()

    var tr = new stream.Duplex({
        read: function( chunk ) {},
        write: function( chunk, enc, next ) {
            this._buffer += chunk
            next()
        }
    })
    tr._buffer = ''

    tr.on( 'finish', function() {
        t.equal( tr._buffer, 'grab the expected transform', 'transform stream autoprefixes css' )
    })
    tr.end( 'body { transform: scale( 2 ); }' )
    tr.pipe( transform ).pipe( tr )


})
