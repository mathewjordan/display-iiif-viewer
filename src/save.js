/**
 * WordPress
 */
import { useBlockProps } from "@wordpress/block-editor";

const Save = (props) => {
  const blockProps = useBlockProps.save();
  return (
    <>
      <div {...blockProps}>
        <div
          class="yith-iiif"
          data-preview={props.attributes.preview}
          data-text={props.attributes.text}
          data-type={props.attributes.type}
        >
          <div class="yith-iiif-manifest" data-id={props.attributes.id}></div>
        </div>
      </div>
    </>
  );
};

export default Save;
