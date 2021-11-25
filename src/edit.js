/**
 * WordPress dependencies
 */
import {
  BlockControls,
  useBlockProps,
  URLInput,
} from "@wordpress/block-editor";
import Yith from "@yith/yith";

const Edit = (props) => {
  const blockProps = useBlockProps();
  const {
    attributes: { id },
  } = props;

  const onChangeContent = (newId) => {
    props.setAttributes({ id: newId });
  };

  return (
    <div {...blockProps}>
      {<BlockControls></BlockControls>}
      <URLInput
        disableSuggestions
        isFullWidth
        onChange={onChangeContent}
        placeholder="IIIF Manifest ID"
        value={id}
      />
      {id && (
        <Yith type="projection">
          <Yith.Manifest id={id} />
        </Yith>
      )}
    </div>
  );
};

export default Edit;
