/**
 * WordPress dependencies
 */
import {
  BlockControls,
  BlockAlignmentToolbar,
  useBlockProps,
  URLInput,
} from "@wordpress/block-editor";
import Yith from "@yith/yith";
import * as Toolbar from "@radix-ui/react-toolbar";

const Edit = (props) => {
  const blockProps = useBlockProps();
  const {
    attributes: { id, alignment },
  } = props;

  const onChangeContent = (newId) => {
    props.setAttributes({ id: newId });
  };

  const onChangeAlignment = (newAlignment) => {
    props.setAttributes({
      alignment: newAlignment === undefined ? "none" : newAlignment,
    });
  };

  return (
    <div {...blockProps}>
      {
        <BlockControls>
          <BlockAlignmentToolbar
            value={alignment}
            onChange={onChangeAlignment}
          />
        </BlockControls>
      }
      <Toolbar.Root>
        <Toolbar.ToggleGroup type="single">
          <Toolbar.ToggleItem>Figure</Toolbar.ToggleItem>
          <Toolbar.ToggleItem>Interstitial</Toolbar.ToggleItem>
        </Toolbar.ToggleGroup>
        <Toolbar.ToggleGroup type="single">
          <Toolbar.ToggleItem>Presentation</Toolbar.ToggleItem>
          <Toolbar.ToggleItem>Projection</Toolbar.ToggleItem>
        </Toolbar.ToggleGroup>
      </Toolbar.Root>

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

      <button>Add Manifest</button>
    </div>
  );
};

export default Edit;
