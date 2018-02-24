import * as ts from 'typescript';

function transformer(program: ts.Program): null | ts.TransformerFactory<ts.SourceFile> {
    //return (context: ts.TransformationContext) => (file: ts.SourceFile) => visitNodeAndChildren(file, program, context);
    throw new Error('It\'s ok');
}


function configure(options: any) {
    console.log('\n\n', options, '\n\n');
    return transformer;
}

module.exports = transformer;
module.exports.configure = configure;
