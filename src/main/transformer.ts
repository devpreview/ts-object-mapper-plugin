import * as ts from 'typescript';

export default function transformer(program: ts.Program): null | ts.TransformerFactory<ts.SourceFile> {
    //return (context: ts.TransformationContext) => (file: ts.SourceFile) => visitNodeAndChildren(file, program, context);
    return null;
}
