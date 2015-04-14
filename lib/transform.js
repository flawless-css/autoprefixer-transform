
import stream from 'stream';


export default class Transformer extends stream.Transform {
    constructor() {
        super()

        this.input = ''
    }

    _transform( chunk, enc, next ) {
        if ( chunk !== null ) {
            this.input += chunk
        }
        next()
    }

    _flush( done ) {
        this.prefix( this.input )
            .then( res => {
                this.push( res )
                done()
            })
            .catch( err => {
                throw new Error( err )
            })
    }

    prefix( input ) {
        return new Promise( ( resolve, reject ) => {
            resolve( input )
        });
    }
}
