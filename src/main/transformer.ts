import * as ts from 'typescript';

interface TransformerOptions {
}

function transformer(context: ts.TransformationContext, options?: TransformerOptions): ts.Transformer<ts.SourceFile> {
    return (file: ts.SourceFile) => {
        console.log(file.fileName);
        return file;
    };
}

function configure(options: TransformerOptions): ts.TransformerFactory<ts.SourceFile> {
    return (context: ts.TransformationContext) => {
        return transformer(context, options);
    };
}

module.exports = transformer;
module.exports.configure = configure;
