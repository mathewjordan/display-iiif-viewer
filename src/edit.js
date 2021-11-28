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
    backgroundColor: "#fffa",
    boxShadow: "2px 2px 5px #0001",
    padding: "0.25rem 0",
    borderRadius: "0.5rem",
    marginBottom: "1rem",
    border: "2px solid #fff2",
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
    color: "#000a",

    "&[data-state='on']": {
      fontWeight: "700",
      color: "#000",
    },
  });

  const Separator = styled(Toolbar.ToolbarSeparator, {
    display: "flex",
    width: "1px",
    height: "70%",
    backgroundColor: "#0001",
    alignSelf: "center",
  });

  const Link = styled(Toolbar.Link, {
    display: "flex",
    border: "none",
    backgroundColor: "#653787",
    color: "#fff !important",
    fontFamily: "inherit",
    fontSize: "1rem",
    alignSelf: "center",
    padding: "0.25rem 0.75rem",
    margin: "0 0.5rem",
    borderRadius: "0.25rem",
    fontSize: "0.75rem",
    fontWeight: "700",
    textTransform: "uppercase",
    textDecoration: "none",
    boxShadow: "1px 1px 3px #0003",
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
        <Link href="https://yith.dev" target="_blank">
          Docs
        </Link>
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
