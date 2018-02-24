import {
    TransformerFactory,
    TransformationContext,
    Transformer,
    SourceFile,
    visitEachChild,
    Visitor,
    Node,
    visitNode
} from 'typescript';

interface TransformerOptions {
}

export default function transformer(context: TransformationContext, options?: TransformerOptions): Transformer<SourceFile> {
    const visitor: Visitor = (node: Node) => {
        console.log('\n\n', node.getText(), '\n\n');
        return visitEachChild(node, visitor, context);
    };
    return (node) => visitNode(node, visitor);
}

export function configure(options: TransformerOptions): TransformerFactory<SourceFile> {
    return (context: TransformationContext) => {
        return transformer(context, options);
    };
}
