export default (children): boolean =>
  children && children[0] && children.length === 1 && children[0].props && children[0].props.src
