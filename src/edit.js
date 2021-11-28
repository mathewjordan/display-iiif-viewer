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
import { styled } from "@stitches/react";

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

  const Wrapper = styled(Toolbar.Root, {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff6",
    padding: "0.25rem 0",
    borderRadius: "0.5rem",
    marginBottom: "1rem",
  });

  const Controls = styled("div", {
    display: "flex",
    flexDirection: "row",
  });

  const ControlGroup = styled(Toolbar.ToggleGroup, {
    margin: "0 0.5rem",
  });

  const ControlItem = styled(Toolbar.ToggleItem, {
    border: "none",
    backgroundColor: "transparent",
    fontFamily: "inherit",
    fontSize: "1rem",
    padding: "0.5rem",
    margin: "0",

    "&[data-state='on']": {
      fontWeight: "700",
    },
  });

  const Separator = styled(Toolbar.ToolbarSeparator, {
    display: "flex",
    width: "1px",
    height: "70%",
    backgroundColor: "#0003",
    alignSelf: "center",
  });

  const Link = styled(Toolbar.Link, {
    display: "flex",
    border: "none",
    backgroundColor: "transparent",
    fontFamily: "inherit",
    fontSize: "1rem",
  });

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
        {/* <Link>Docs</Link> */}
      </Wrapper>

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
