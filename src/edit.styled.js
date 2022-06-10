import * as Toolbar from "@radix-ui/react-toolbar";
import { styled } from "@stitches/react";

export const Wrapper = styled(Toolbar.Root, {
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

export const Controls = styled("div", {
  display: "flex",
  flexDirection: "row",
});

export const ControlGroup = styled(Toolbar.ToggleGroup, {
  margin: "0 0.5rem",
});

export const ControlItem = styled(Toolbar.ToggleItem, {
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

export const Separator = styled(Toolbar.ToolbarSeparator, {
  display: "flex",
  width: "1px",
  height: "70%",
  backgroundColor: "#0001",
  alignSelf: "center",
});

export const Link = styled(Toolbar.Link, {
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
