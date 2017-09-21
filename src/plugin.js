import Handlebars from 'handlebars';
import Config from './config';
import content from './template';
import context from './context';

const plugin = (editor) => {
  let item;
  let menu = [];
  let view = { plate: Handlebars.compile(content) };

  for (let j = 0, len = Config.length; j < len; j++) {
    item = Config[j];
    editor.addMenuItem(item.name, {
      text: item.title,
      context: 'plates',
      size: { x: item.x, y: item.y },

      onclick() {
        let x = this.settings.size.x;
        let y = this.settings.size.y;
        let template = view.plate;
        let html = template(context(x, y));
        editor.insertContent(html);
      }
    });
    menu.push(editor.menuItems[item.name]);
  }

  editor.addButton('plates', {
    tooltip: 'Plate',
    icon: 'plates',
    menu,
    type: 'menubutton'
  });
};

export default plugin;
