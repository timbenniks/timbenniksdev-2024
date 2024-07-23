export function getSlotTextContent(children: VNode[]): string {
  return children.map(node => {
    if (typeof node.children === 'string') {
      return node.children;
    } else if (Array.isArray(node.children)) {
      return getSlotTextContent(node.children as VNode[]);
    } else if (node.children && typeof node.children === 'object' && 'default' in node.children) {
      return getSlotTextContent((node.children as { default: () => VNode[] }).default());
    }
    return '';
  }).join('');
}