import _ from 'lodash';

const plugin = (editor) => {
  editor.addButton('plates', {
    text: 'plates',
    icon: false,
    onclick: () => {
      // Open window
      editor.windowManager.open({
        title: 'plates plugin',
        body: [
          { type: 'textbox', name: 'title' }
        ],
        onsubmit(e) {
          // Insert content when the window form is submitted
          const kebabbyString = _.kebabCase(e.data.title);
          editor.insertContent(kebabbyString);
        }
      });
    }
  });
};

export default plugin;
