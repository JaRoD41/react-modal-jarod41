import e from "react";
const m = ({ isOpen: a, onClose: t, children: l }) => a ? /* @__PURE__ */ e.createElement("div", { id: "modal", className: "modal" }, /* @__PURE__ */ e.createElement("div", { className: "modal-overlay" }), /* @__PURE__ */ e.createElement("div", { className: "modal-container" }, /* @__PURE__ */ e.createElement("div", { className: "modal-content" }, /* @__PURE__ */ e.createElement("div", { className: "content" }, l), /* @__PURE__ */ e.createElement("div", { className: "footer" }, /* @__PURE__ */ e.createElement("button", { onClick: t, className: "close-button" }, "Close"))))) : null;
export {
  m as default
};
