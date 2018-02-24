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
    PropertyDeclaration,
    createIdentifier
} from 'typescript';

interface TransformerOptions {
}

function undefinedPropertyTransformer(context: TransformationContext, property: PropertyDeclaration): VisitResult<PropertyDeclaration> {
    return updateProperty(
        property,
        property.decorators,
        property.modifiers,
        property.name,
        property.questionToken,
        property.type,
        createIdentifier('undefined')
    );
}

export default function transformer(context: TransformationContext, options?: TransformerOptions): Transformer<SourceFile> {
    const visitor: Visitor = (node: Node): VisitResult<Node> => {
        if (isPropertyDeclaration(node) && isClassDeclaration(node.parent as Node)) {
            if (!node.initializer) {
                return undefinedPropertyTransformer(context, node);
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
