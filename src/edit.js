/**
 * WordPress dependencies
 */
import {
  BlockControls,
  BlockAlignmentToolbar,
  URLInput,
  useBlockProps,
} from "@wordpress/block-editor";
import {
  ControlItem,
  ControlGroup,
  Controls,
  Link,
  Separator,
  Wrapper,
} from "./edit.styled";
import Yith from "@yith/yith";

const Edit = (props) => {
  const blockProps = useBlockProps();
  const {
    attributes: { alignment, id, preview, type },
    isSelected,
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
      {isSelected && (
        <>
          <Wrapper>
            <Controls>
              <ControlGroup
                defaultValue="figure"
                onValueChange={onChangePreview}
                type="single"
                value={preview}
              >
                <ControlItem value="figure">Figure</ControlItem>
                <ControlItem value="interstitial">Interstitial</ControlItem>
              </ControlGroup>
              <Separator />
              <ControlGroup
                defaultValue="presentation"
                onValueChange={onChangeType}
                type="single"
                value={type}
              >
                <ControlItem value="presentation">Presentation</ControlItem>
                <ControlItem value="projection">Projection</ControlItem>
              </ControlGroup>
            </Controls>
            <Link href="https://yith.dev" target="_blank">
              Docs
            </Link>
          </Wrapper>
        </>
      )}
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
      {/* {isSelected && <button>Add Manifest</button>} */}
    </div>
  );
};

export default Edit;
