/**
 * WordPress
 */
import { useBlockProps } from "@wordpress/block-editor";

const Save = (props) => {
  const blockProps = useBlockProps.save();
  return <div {...blockProps}>{props.attributes.id}</div>;
};

export default Save;
