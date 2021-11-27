/**
 * WordPress
 */
import { useBlockProps } from "@wordpress/block-editor";

const Save = (props) => {
  const blockProps = useBlockProps.save();
  console.log(props.attributes.preview);
  return (
    <>
      <div {...blockProps}>
        <div
          class="yith-iiif"
          data-preview="interstitial"
          data-text="interstitial"
          data-type={props.attributes.type}
        >
          <div class="yith-iiif-manifest" data-id={props.attributes.id}></div>
        </div>
      </div>
    </>
  );
};

export default Save;
