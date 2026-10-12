import { styles } from 'vjsc/styles';

export default styles({
  file: 'menus.css',
  prefix: 'media-cast-menu',
  rules: {
    content: {
      utilities: 'gap-0!',
    },
    item: {
      utilities: [
        'w-full justify-start! py-1!',
        'has-[[aria-disabled=true]]:opacity-50',
        'has-[[hidden]]:hidden has-[[data-hidden]]:hidden',
      ],
    },
    button: {
      utilities: 'size-5!',
    },
  },
});
