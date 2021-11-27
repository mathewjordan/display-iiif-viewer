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
    attributes: { alignment, id, preview, type },
  } = props;

  const onChangeId = (newId) => {
    props.setAttributes({ id: newId });
  };

  const onChangeAlignment = (newAlignment) => {
    props.setAttributes({
      alignment: newAlignment === undefined ? "none" : newAlignment,
    });
  };

  const onChangePreview = (newPreview) => {
    props.setAttributes({
      preview: newPreview === undefined ? "none" : newPreview,
    });
  };

  const onChangeType = (newType) => {
    props.setAttributes({
      type: newType === undefined ? "none" : newType,
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
        <Toolbar.ToggleGroup
          defaultValue="figure"
          onValueChange={onChangePreview}
          type="single"
          value={preview}
        >
          <Toolbar.ToggleItem value="figure">Figure</Toolbar.ToggleItem>
          <Toolbar.ToggleItem value="interstitial">
            Interstitial
          </Toolbar.ToggleItem>
        </Toolbar.ToggleGroup>
        <Toolbar.ToggleGroup
          defaultValue="presentation"
          onValueChange={onChangeType}
          type="single"
          value={type}
        >
          <Toolbar.ToggleItem value="presentation">
            Presentation
          </Toolbar.ToggleItem>
          <Toolbar.ToggleItem value="projection">Projection</Toolbar.ToggleItem>
        </Toolbar.ToggleGroup>
        <Toolbar.Separator />
        <Toolbar.Link>Docs</Toolbar.Link>
      </Toolbar.Root>

      <URLInput
        disableSuggestions
        isFullWidth
        onChange={onChangeId}
        placeholder="IIIF Manifest ID"
        value={id}
      />
      {id && (
        <Yith preview={preview} type={type}>
          <Yith.Manifest id={id} />
        </Yith>
      )}

      <button>Add Manifest</button>
    </div>
  );
};

export default Edit;
