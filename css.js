export default `
  .mongo-document {
    margin-top: 5px;
    display: flex;
    align-items: baseline;
  }

  .mongo-document pre {
    max-height: 300px;
    overflow-y: auto;
    flex-grow: 1;
    white-space: pre-wrap;
  }
  .collapse-document {
    padding: 0 10px;
  }

  #mongoEditor {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  #mongoEditor .mongo-editor-content {
    display: flex;
    flex-direction: row;
    width: 100%;
  }

  #mongoEditor textarea {
    min-width: 50%;
    max-width: 50%;
    height: 500px;
    background-color: rgba(256,256,256,.2);
    padding: 20px;
    font-family: monospace;
    border: 0px;
    font-size: 14px;
    box-sizing: border-box;
  }

  #mongoEditor .view {
    flex-grow: 1;
    height: 500px;
    padding: 20px;
    box-sizing: border-box;
    font-size: 14px;
    overflow: auto;
    background-color: #f1f1f1;
  }

  /* From https://raw.githubusercontent.com/benjamine/jsondiffpatch/master/docs/formatters-styles/html.css */
  .jsondiffpatch-delta {
    font-family: 'Bitstream Vera Sans Mono', 'DejaVu Sans Mono', Monaco, Courier, monospace;
    font-size: 12px;
    margin: 0;
    padding: 0 0 0 12px;
    display: inline-block;
  }
  .jsondiffpatch-delta pre {
    font-family: 'Bitstream Vera Sans Mono', 'DejaVu Sans Mono', Monaco, Courier, monospace;
    font-size: 12px;
    margin: 0;
    padding: 0;
    display: inline-block;
  }
  ul.jsondiffpatch-delta {
    list-style-type: none;
    padding: 0 0 0 20px;
    margin: 0;
  }
  .jsondiffpatch-delta ul {
    list-style-type: none;
    padding: 0 0 0 20px;
    margin: 0;
  }
  .jsondiffpatch-added .jsondiffpatch-property-name,
  .jsondiffpatch-added .jsondiffpatch-value pre,
  .jsondiffpatch-modified .jsondiffpatch-right-value pre,
  .jsondiffpatch-textdiff-added {
    background: #bbffbb;
  }
  .jsondiffpatch-deleted .jsondiffpatch-property-name,
  .jsondiffpatch-deleted pre,
  .jsondiffpatch-modified .jsondiffpatch-left-value pre,
  .jsondiffpatch-textdiff-deleted {
    background: #ffbbbb;
    text-decoration: line-through;
  }
  .jsondiffpatch-unchanged,
  .jsondiffpatch-movedestination {
    color: gray;
  }
  .jsondiffpatch-unchanged,
  .jsondiffpatch-movedestination > .jsondiffpatch-value {
    transition: all 0.5s;
    -webkit-transition: all 0.5s;
    overflow-y: hidden;
  }
  .jsondiffpatch-unchanged-showing .jsondiffpatch-unchanged,
  .jsondiffpatch-unchanged-showing .jsondiffpatch-movedestination > .jsondiffpatch-value {
    max-height: 100px;
  }
  .jsondiffpatch-unchanged-hidden .jsondiffpatch-unchanged,
  .jsondiffpatch-unchanged-hidden .jsondiffpatch-movedestination > .jsondiffpatch-value {
    max-height: 0;
  }
  .jsondiffpatch-unchanged-hiding .jsondiffpatch-movedestination > .jsondiffpatch-value,
  .jsondiffpatch-unchanged-hidden .jsondiffpatch-movedestination > .jsondiffpatch-value {
    display: block;
  }
  .jsondiffpatch-unchanged-visible .jsondiffpatch-unchanged,
  .jsondiffpatch-unchanged-visible .jsondiffpatch-movedestination > .jsondiffpatch-value {
    max-height: 100px;
  }
  .jsondiffpatch-unchanged-hiding .jsondiffpatch-unchanged,
  .jsondiffpatch-unchanged-hiding .jsondiffpatch-movedestination > .jsondiffpatch-value {
    max-height: 0;
  }
  .jsondiffpatch-unchanged-showing .jsondiffpatch-arrow,
  .jsondiffpatch-unchanged-hiding .jsondiffpatch-arrow {
    display: none;
  }
  .jsondiffpatch-value {
    display: inline-block;
  }
  .jsondiffpatch-property-name {
    display: inline-block;
    padding-right: 5px;
    vertical-align: top;
  }
  .jsondiffpatch-property-name:after {
    content: ': ';
  }
  .jsondiffpatch-child-node-type-array > .jsondiffpatch-property-name:after {
    content: ': [';
  }
  .jsondiffpatch-child-node-type-array:after {
    content: '],';
  }
  div.jsondiffpatch-child-node-type-array:before {
    content: '[';
  }
  div.jsondiffpatch-child-node-type-array:after {
    content: ']';
  }
  .jsondiffpatch-child-node-type-object > .jsondiffpatch-property-name:after {
    content: ': {';
  }
  .jsondiffpatch-child-node-type-object:after {
    content: '},';
  }
  div.jsondiffpatch-child-node-type-object:before {
    content: '{';
  }
  div.jsondiffpatch-child-node-type-object:after {
    content: '}';
  }
  .jsondiffpatch-value pre:after {
    content: ',';
  }
  li:last-child > .jsondiffpatch-value pre:after,
  .jsondiffpatch-modified > .jsondiffpatch-left-value pre:after {
    content: '';
  }
  .jsondiffpatch-modified .jsondiffpatch-value {
    display: inline-block;
  }
  .jsondiffpatch-modified .jsondiffpatch-right-value {
    margin-left: 5px;
  }
  .jsondiffpatch-moved .jsondiffpatch-value {
    display: none;
  }
  .jsondiffpatch-moved .jsondiffpatch-moved-destination {
    display: inline-block;
    background: #ffffbb;
    color: #888;
  }
  .jsondiffpatch-moved .jsondiffpatch-moved-destination:before {
    content: ' => ';
  }
  ul.jsondiffpatch-textdiff {
    padding: 0;
  }
  .jsondiffpatch-textdiff-location {
    color: #bbb;
    display: inline-block;
    min-width: 60px;
  }
  .jsondiffpatch-textdiff-line {
    display: inline-block;
  }
  .jsondiffpatch-textdiff-line-number:after {
    content: ',';
  }
  .jsondiffpatch-error {
    background: red;
    color: white;
    font-weight: bold;
  }
`;
