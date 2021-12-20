import { css } from "@emotion/css";
import { injectGlobal } from "@emotion/css";

export const utilities = injectGlobal`
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap');
body {
  font-family: 'Roboto Mono', monospace;
  height: 100vh !important;
}
.ant-table-row .draggable {
  cursor: move;
  cursor: grab;
  cursor: -moz-grab;
  cursor: -webkit-grab;
  font-size: 1.2rem;
  transform: rotate(90deg);
}

.gu-mirror {
  background-color: rgba(16, 142, 233, 0.15);
  cursor: grabbing;
  cursor: -moz-grabbing;
  cursor: -webkit-grabbing;
}

.ant-table-thead > tr >th{
  color: white;
  background: #118ab2 !important;
}

.button-space{
  display: flex;
  justify-content: end;
  padding: 0.5rem;
}

`;
export const LayoutStyle = css`
  .logo {
    float: left;
    color: #fff;
  }

  .done-text {
    text-decoration-line: line-through;
  }

  .logo-container {
    text-align: center;
  }

  .float-right {
    float: right;
  }

  .header-fixed {
    position: "fixed";
    zindex: 1;
    width: "100%";
    background-color: #073b4c;
  }

  .site-layout .site-layout-background {
    background: #fff;
    padding: 2rem;
    height: 80vh !important;
    margin: 0 20vw 0 20vw;
  }

  .footer-sticky {
    text-align: center;
    background-color: #fff;
    position: sticky;
    bottom: 0;
    border-style: solid none none none;
    border-color: #118ab2;
  }
`;
