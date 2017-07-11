
const HEADER_HEIGHT = "6.8rem";
const HEADER_LATERAL_PADDING = "2rem";

const styles = ({
  modal: {
    width: "72rem",
    maxWidth: "90%",
    position: "relative",

    // centering
    top: "50%",
    left: 0,
    right: 0,
    bottom: "auto",
    transform: "translate(0, -50%)",
    WebkitTransform: "translate(0, -50%)",
    msTransform: "translate(0, -50%)",
    margin: "0 auto",
    padding: 0,

    border: "1px solid #ccc",
    background: "#fff",
    WebkitOverflowScrolling: "touch",
    borderRadius: "4px",
    outline: "none",
  },

  modalHeader: {
    position: "relative",
    height: HEADER_HEIGHT,
    borderBottom: "1px solid #e5e5e5",
    padding: `0 ${ HEADER_LATERAL_PADDING}`,
  },

  modalHeaderTitle: {
    margin: 0,
    padding: 0,
    fontSize: "1.8rem",
    fontWeight: 600,
    lineHeight: HEADER_HEIGHT,
    width: "100%",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },

  headerRightSideElement: {
    margin: 0,
    padding: 0,
    lineHeight: HEADER_HEIGHT,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },

  modalHeaderClose: {
    position: "absolute",
    right: "0",
    top: "0",
    padding: `0 ${ HEADER_LATERAL_PADDING}`,
    color: "#999",
    fontSize: "2rem",
    fontWeight: "normal",
    border: "0",
    background: "transparent",
    lineHeight: HEADER_HEIGHT,
    cursor: "pointer",
    outline: "none",
  },

  modalHeaderCloseHover: {
    opacity: 0.7,
  },

  content: {
    padding: HEADER_LATERAL_PADDING,
  },

  loadingContainer: {
    position: "relative",
    height: "20rem",
  },

  tooltipSpacer: {
    height: "3rem",
  },

  modalBackdrop: {
    backgroundColor: "rgba(0, 0, 0, 0.75)",
  },
});

export default styles;