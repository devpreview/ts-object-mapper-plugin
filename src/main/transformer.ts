import {
    TransformerFactory,
    TransformationContext,
    Transformer,
    SourceFile,
    visitEachChild,
    Visitor,
    Node,
    visitNode,
    isPropertyDeclaration,
    updateProperty,
    isClassDeclaration,
    VisitResult,
    createNull,
    SyntaxKind
} from 'typescript';

interface TransformerOptions {
}

export default function transformer(context: TransformationContext, options?: TransformerOptions): Transformer<SourceFile> {
    const visitor: Visitor = (node: Node): VisitResult<Node> => {
        if (isPropertyDeclaration(node) && isClassDeclaration(node.parent as Node)) {
            if (!node.initializer) {
                console.log('\n===THIS===\n');
                return updateProperty(
                    node,
                    node.decorators,
                    node.modifiers,
                    node.name,
                    node.questionToken,
                    node.type,
                    createNull()
                );
                //SyntaxKind.UndefinedKeyword
            }
        }
        return visitEachChild(node, visitor, context);
    };
    return (node) => visitNode(node, visitor);
}

export function configure(options: TransformerOptions): TransformerFactory<SourceFile> {
    return (context: TransformationContext) => {
        return transformer(context, options);
    };
}
